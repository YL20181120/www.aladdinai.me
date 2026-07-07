interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement
  run(): Promise<unknown>
}

interface D1Database {
  prepare(query: string): D1PreparedStatement
}

interface Env {
  DB?: D1Database
  FEISHU_SECRET?: string
  FEISHU_TOKEN?: string
  TURNSTILE_SECRET_KEY?: string
}

interface DemoRequestPayload {
  name?: unknown
  contact?: unknown
  industry?: unknown
  scale?: unknown
  locale?: unknown
  source?: unknown
  website?: unknown
  turnstileToken?: unknown
}

interface TurnstileVerifyResponse {
  success?: boolean
  'error-codes'?: string[]
}

const allowedIndustries = new Set(['banking', 'consumer_finance', 'micro_loan', 'supply_chain', 'other'])
const allowedScales = new Set(['startup', 'growth', 'mature', 'enterprise'])
const allowedLocales = new Set(['zh', 'en'])
const feishuBaseUrl = 'https://open.feishu.cn/open-apis/bot/v2/hook/'

function jsonResponse(payload: Record<string, unknown>, status = 200) {
  return Response.json(payload, {
    status,
    headers: {
      'Cache-Control': 'no-store',
    },
  })
}

function readString(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

async function readPayload(request: Request) {
  try {
    return (await request.json()) as DemoRequestPayload
  } catch {
    return null
  }
}

function bytesToBase64(bytes: ArrayBuffer) {
  let binary = ''
  const array = new Uint8Array(bytes)

  for (const byte of array) {
    binary += String.fromCharCode(byte)
  }

  return btoa(binary)
}

async function createFeishuSign(timestamp: string, secret: string) {
  const encoder = new TextEncoder()
  const keyData = encoder.encode(`${timestamp}\n${secret}`)
  const cryptoKey = await crypto.subtle.importKey('raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const signature = await crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(''))

  return bytesToBase64(signature)
}

function buildFeishuMessage(data: Record<string, string>) {
  return [
    'Aladdin AI 新预约',
    `ID: ${data.id}`,
    `名称: ${data.name}`,
    `联系方式: ${data.contact}`,
    `行业: ${data.industry}`,
    `规模: ${data.scale}`,
    `语言: ${data.locale}`,
    `来源: ${data.source}`,
    `国家/地区: ${data.country || '-'}`,
    `提交时间: ${data.createdAt}`,
  ].join('\n')
}

async function sendFeishuNotification(env: Env, data: Record<string, string>) {
  if (!env.FEISHU_TOKEN || !env.FEISHU_SECRET) {
    return
  }

  try {
    const timestamp = String(Math.round(Date.now() / 1000))
    const sign = await createFeishuSign(timestamp, env.FEISHU_SECRET)

    await fetch(`${feishuBaseUrl}${env.FEISHU_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        msg_type: 'text',
        timestamp,
        sign,
        content: {
          text: buildFeishuMessage(data),
        },
      }),
    })
  } catch {
    // The lead is already stored in D1. Notification failures should not block the user.
  }
}

async function verifyTurnstile(request: Request, env: Env, token: string) {
  if (!env.TURNSTILE_SECRET_KEY) {
    return { ok: false, message: 'Turnstile secret key is not configured.' }
  }

  if (!token) {
    return { ok: false, message: 'Please complete the security verification.' }
  }

  const formData = new FormData()
  formData.append('secret', env.TURNSTILE_SECRET_KEY)
  formData.append('response', token)

  const remoteIp = readString(request.headers.get('cf-connecting-ip'), 80)
  if (remoteIp) {
    formData.append('remoteip', remoteIp)
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  })

  const result = (await response.json().catch(() => null)) as TurnstileVerifyResponse | null

  if (!response.ok || !result?.success) {
    return { ok: false, message: 'Security verification failed. Please try again.' }
  }

  return { ok: true, message: '' }
}

async function handleDemoRequest(request: Request, env: Env) {
  if (request.method !== 'POST') {
    return jsonResponse({ ok: false, message: 'Method not allowed.' }, 405)
  }

  if (!env.DB) {
    return jsonResponse({ ok: false, message: 'D1 database binding DB is not configured.' }, 500)
  }

  const payload = await readPayload(request)

  if (!payload) {
    return jsonResponse({ ok: false, message: 'Invalid JSON payload.' }, 400)
  }

  if (readString(payload.website, 200)) {
    return jsonResponse({ ok: true })
  }

  const name = readString(payload.name, 120)
  const contact = readString(payload.contact, 160)
  const industry = readString(payload.industry, 80)
  const scale = readString(payload.scale, 80)
  const locale = readString(payload.locale, 10)
  const source = readString(payload.source, 180)
  const turnstileToken = readString(payload.turnstileToken, 2048)

  if (!name || !contact || !allowedIndustries.has(industry) || !allowedScales.has(scale)) {
    return jsonResponse({ ok: false, message: 'Please complete all required fields.' }, 422)
  }

  const turnstileResult = await verifyTurnstile(request, env, turnstileToken)

  if (!turnstileResult.ok) {
    return jsonResponse({ ok: false, message: turnstileResult.message }, 403)
  }

  const id = crypto.randomUUID()
  const userAgent = readString(request.headers.get('user-agent'), 300)
  const ip = readString(request.headers.get('cf-connecting-ip'), 80)
  const country = readString(request.headers.get('cf-ipcountry'), 20)
  const normalizedLocale = allowedLocales.has(locale) ? locale : 'zh'
  const normalizedSource = source || '/'
  const createdAt = new Date().toISOString()

  await env.DB.prepare(
    `INSERT INTO demo_requests (
      id,
      name,
      contact,
      industry,
      scale,
      locale,
      source,
      user_agent,
      ip,
      country,
      created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))`,
  )
    .bind(id, name, contact, industry, scale, normalizedLocale, normalizedSource, userAgent, ip, country)
    .run()

  await sendFeishuNotification(env, {
    id,
    name,
    contact,
    industry,
    scale,
    locale: normalizedLocale,
    source: normalizedSource,
    country,
    createdAt,
  })

  return jsonResponse({ ok: true, id })
}

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url)

    try {
      if (url.pathname === '/api/demo-request') {
        return await handleDemoRequest(request, env)
      }

      return jsonResponse({ ok: false, message: 'Not found.' }, 404)
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Internal server error.'
      return jsonResponse({ ok: false, message }, 500)
    }
  },
}
