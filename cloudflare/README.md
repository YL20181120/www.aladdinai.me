# Cloudflare Workers Setup

The site deploys as a Cloudflare Worker with Static Assets. The Vue build is uploaded from `dist`, and the demo form submits to `/api/demo-request` in `server/index.ts`.

## Deploy

Cloudflare build settings:

```text
Build command: pnpm run build
Deploy command: npx wrangler deploy
```

The Worker deployment is configured in `wrangler.toml`:

```text
Worker name: www-aladdinai-me
Worker entry: server/index.ts
Static assets: dist
D1 binding: DB
D1 database: aladdinai
```

`keep_vars = true` is enabled in `wrangler.toml`, so variables and secrets configured in the Cloudflare dashboard are preserved across `wrangler deploy`.

## Turnstile

The demo form uses Cloudflare Turnstile to reduce spam submissions.

The public site key is embedded in `src/components/DemoModal.vue`. Add the secret key as a Worker environment variable:

```text
TURNSTILE_SECRET_KEY=<your-turnstile-secret-key>
```

Do not commit the Turnstile secret key to the repository.

## D1

Yes, D1 tables must be created manually. Run the schema once after creating or resetting the D1 database:

```bash
npx wrangler d1 execute aladdinai --remote --file=cloudflare/d1/schema.sql
```

## Feishu Notification

To forward each lead to a signed Feishu bot, add Worker environment variables in the Cloudflare dashboard:

```text
FEISHU_TOKEN=<bot-webhook-token>
FEISHU_SECRET=<bot-signing-secret>
```

The token is the path after `https://open.feishu.cn/open-apis/bot/v2/hook/`.

The form still succeeds if Feishu is temporarily unavailable, because the lead is stored in D1 first.
