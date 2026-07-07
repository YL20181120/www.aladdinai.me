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

## D1

Yes, D1 tables must be created manually. Run the schema once after creating or resetting the D1 database:

```bash
npx wrangler d1 execute aladdinai --remote --file=cloudflare/d1/schema.sql
```

## Optional Notification

To forward each lead to a webhook, add a Worker environment variable:

```text
NOTIFY_WEBHOOK_URL=https://example.com/webhook
```

The form still succeeds if the webhook is temporarily unavailable, because the lead is stored in D1 first.
