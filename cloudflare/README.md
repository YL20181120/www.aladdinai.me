# Cloudflare Form Setup

The demo form submits to `functions/api/demo-request.ts` and stores leads in Cloudflare D1.

## D1

Create a D1 database in Cloudflare, then run the schema:

```bash
npx wrangler d1 execute aladdinai --remote --file=cloudflare/d1/schema.sql
```

The Pages project is configured in `wrangler.toml`:

```text
Project name: www-aladdinai-me
D1 binding: DB
D1 database: aladdinai
```

After changing bindings or schema, create a new Cloudflare Pages deployment for the settings to take effect.

## Optional Notification

To forward each lead to a webhook, add a Pages environment variable:

```text
NOTIFY_WEBHOOK_URL=https://example.com/webhook
```

The form still succeeds if the webhook is temporarily unavailable, because the lead is stored in D1 first.
