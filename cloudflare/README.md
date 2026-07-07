# Cloudflare Form Setup

The demo form submits to `functions/api/demo-request.ts` and stores leads in Cloudflare D1.

## D1

Create a D1 database in Cloudflare, then run the schema:

```bash
npx wrangler d1 execute <database-name> --remote --file=cloudflare/d1/schema.sql
```

In Cloudflare Pages, bind the D1 database to the variable name:

```text
DB
```

## Optional Notification

To forward each lead to a webhook, add a Pages environment variable:

```text
NOTIFY_WEBHOOK_URL=https://example.com/webhook
```

The form still succeeds if the webhook is temporarily unavailable, because the lead is stored in D1 first.
