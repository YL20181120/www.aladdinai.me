interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement
  run(): Promise<unknown>
}

interface D1Database {
  prepare(query: string): D1PreparedStatement
}

interface AssetsBinding {
  fetch(request: Request): Promise<Response>
}

interface Env {
  ASSETS?: AssetsBinding
  DB?: D1Database
  NOTIFY_WEBHOOK_URL?: string
}

interface DemoRequestPayload {
  name?: unknown
  contact?: unknown
  industry?: unknown
  scale?: unknown
  locale?: unknown
  source?: unknown
  website?: unknown
}

const allowedIndustries = new Set(['banking', 'consumer_finance', 'micro_loan', 'supply_chain', 'other'])
const allowedScales = new Set(['startup', 'growth', 'mature', 'enterprise'])
const allowedLocales = new Set(['zh', 'en'])

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

async function sendNotification(env: Env, data: Record<string, string>) {
  if (!env.NOTIFY_WEBHOOK_URL) {
    return
  }

  try {
    await fetch(env.NOTIFY_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: `New Aladdin AI demo request: ${data.name} / ${data.contact} / ${data.industry} / ${data.scale}`,
        ...data,
      }),
    })
  } catch {
    // The lead is already stored in D1. Notification failures should not block the user.
  }
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

  if (!name || !contact || !allowedIndustries.has(industry) || !allowedScales.has(scale)) {
    return jsonResponse({ ok: false, message: 'Please complete all required fields.' }, 422)
  }

  const id = crypto.randomUUID()
  const userAgent = readString(request.headers.get('user-agent'), 300)
  const ip = readString(request.headers.get('cf-connecting-ip'), 80)
  const country = readString(request.headers.get('cf-ipcountry'), 20)
  const normalizedLocale = allowedLocales.has(locale) ? locale : 'zh'
  const normalizedSource = source || '/'

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

  await sendNotification(env, {
    id,
    name,
    contact,
    industry,
    scale,
    locale: normalizedLocale,
    source: normalizedSource,
    country,
  })

  return jsonResponse({ ok: true, id })
}

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url)

    if (url.pathname === '/api/demo-request') {
      return handleDemoRequest(request, env)
    }

    if (!env.ASSETS) {
      return new Response('Static assets binding ASSETS is not configured.', { status: 500 })
    }

    return env.ASSETS.fetch(request)
  },
}
