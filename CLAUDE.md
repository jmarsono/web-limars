# Deployment Rules — web-limars (limarsteknik.com)

## ⚠️ MANDATORY: Dual Deployment Architecture

This project has TWO separate Cloudflare deployments:

| Deployment | Type | Domain | Trigger |
|-----------|------|--------|---------|
| **limarsteknik** | Cloudflare Pages | `webpages-2ld.pages.dev` | Auto on `git push` |
| **web** | Cloudflare Worker | `limarsteknik.com` | **Manual** (`wrangler deploy`) |

**The live production site (`limarsteknik.com`) is served by the Worker, NOT Pages.**

## Deployment Steps (ALWAYS follow all 3 steps)

After making ANY code changes:

```bash
# Step 1: Commit & push to GitHub
git add -A
git commit -m "your commit message"
git push origin main

# Step 2: Build for Cloudflare Worker (OpenNext)
npm run build:cf

# Step 3: Deploy Worker to Cloudflare
npx wrangler deploy
```

**NEVER skip Step 2 and 3.** Pushing to GitHub alone does NOT update the live site.

## Environment Variables & Credentials

- Cloudflare Zone Name: `limarsteknik.com`
- Cloudflare Zone ID: `6eb49a0a576184595754562e0a4802ec`
- Cloudflare Account Email: `limarsteknik@gmail.com`
- Cloudflare Credentials: Loaded automatically via environment variables (`$CLOUDFLARE_API_KEY` / `$CLOUDFLARE_API_TOKEN`)
- Google Search Console Integration: Service Account `hermes@limarsteknik-web.iam.gserviceaccount.com` (key at `/opt/hermes/config/gcloud-limarsteknik.json`)
- Worker secrets are managed via `npx wrangler secret put SECRET_NAME`
- `NEXT_PUBLIC_*` variables are baked at build time — must be set BEFORE `npm run build:cf` or hardcoded
- Current Worker secrets: `TURNSTILE_SECRET_KEY`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL`

## Tech Stack

- **Framework**: Next.js 16 (App Router) with `next-intl` (EN/ID locales)
- **Adapter**: OpenNext for Cloudflare (`@opennextjs/cloudflare`)
- **Worker name**: `web` (defined in `wrangler.toml`)
- **Bindings**: D1 Database (`limars-db`), R2 Bucket (`limars-media`)
- **CAPTCHA**: Cloudflare Turnstile (site key hardcoded in `contact/page.js`)
