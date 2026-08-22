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

### ⚠️ REQUIRED Worker Secrets (Admin Panel)

The admin panel refuses to log anyone in unless ALL three secrets below are set.
There are NO fallback default credentials — this is by design.

- `ADMIN_USERNAME` — admin login username
- `ADMIN_PASSWORD` — admin login password (choose a strong one)
- `ADMIN_SESSION_SECRET` — HMAC secret for signing session cookies (32+ random bytes)

Set them via:
```bash
npx wrangler secret put ADMIN_USERNAME
npx wrangler secret put ADMIN_PASSWORD
npx wrangler secret put ADMIN_SESSION_SECRET
```

### Optional Build-Time Variables (set BEFORE `npm run build:cf`)

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — Cloudflare Turnstile site key (required for contact form CAPTCHA)
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager / GA4 ID
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — Google Search Console verification token (omit if unused)

## Tech Stack

- **Framework**: Next.js 16 (App Router) with `next-intl` (EN/ID locales)
- **Adapter**: OpenNext for Cloudflare (`@opennextjs/cloudflare`)
- **Worker name**: `web` (defined in `wrangler.toml`)
- **Bindings**: D1 Database (`limars-db`), R2 Bucket (`limars-media`)
- **CAPTCHA**: Cloudflare Turnstile (site key from `NEXT_PUBLIC_TURNSTILE_SITE_KEY` env var, baked at build time)
