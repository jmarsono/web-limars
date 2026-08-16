# Deployment Documentation — Limars Teknik Website Cloudflare Worker

## Overview
Production website `limarsteknik.com` is served by a **Cloudflare Worker** built with **OpenNext for Cloudflare** (`@opennextjs/cloudflare`) from a **Next.js 16 App Router** codebase.

| Environment | Type | Domain | Trigger |
|-------------|------|--------|---------|
| Staging / Preview | Cloudflare Pages | `webpages-2ld.pages.dev` | Auto on `git push` |
| **Production** | **Cloudflare Worker** | **`limarsteknik.com`** | **Manual `npm run build:cf && npx wrangler deploy`** |

> **Production is NOT auto-deployed.** Pushing to GitHub alone does NOT update `limarsteknik.com`.

## Prerequisites
- Node.js: **22.x**
- Package manager: **npm**
- Wrangler CLI: installed and authenticated
- Cloudflare account for **Limars Teknik Indonesia**
- Local source at: `/opt/hermes/projects/limars-teknik-website`

## Authentication
Use **`CLOUDFLARE_API_TOKEN`** as an environment variable.

Example:
```bash
export CLOUDFLARE_API_TOKEN="<token>"
```

Verify:
```bash
cd /opt/hermes/projects/limars-teknik-website
npx wrangler whoami
```

## Deployment Procedure

### 1) Install dependencies
```bash
npm install
```

### 2) Build for Cloudflare Worker (OpenNext)
```bash
npm run build:cf
```

This generates the Worker bundle in `.open-next/` (including `.open-next/worker.js`).

### 3) Deploy Worker to Cloudflare
```bash
npx wrangler deploy
```

## DNS / Routing
Cloudflare DNS already points `limarsteknik.com` to the Worker `web`.

| Record | Type | Value / Target | Proxy |
|--------|------|----------------|-------|
| `limarsteknik.com` | Worker | `web` | Proxied |
| `www.limarsteknik.com` | CNAME | `limarsteknik.com` | Proxied |

Result:
- `https://limarsteknik.com/` → `200`
- `https://www.limarsteknik.com/` → `301` → `https://limarsteknik.com/en/`

## Verification
```bash
curl -I https://limarsteknik.com/
curl -I https://www.limarsteknik.com/
curl -sL https://www.limarsteknik.com/ | head -n 20
```

## Secrets
Worker secrets are managed with:
```bash
npx wrangler secret put SECRET_NAME
```

Known secrets used by this Worker:
- `TURNSTILE_SECRET_KEY`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_EMAIL`

> Do not store secrets in `.env` or Git. Use `wrangler secret put` or a secure secret manager.

## Rollback
If the new deploy causes issues, use the previous Worker version ID to roll back.

Check recent deployments:
```bash
npx wrangler deployments list
```

Rollback flow:
1. Identify the previous stable version ID.
2. Re-deploy from that version if needed, or promote the previous release.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **i18n**: `next-intl` (`/en`, `/id`)
- **Adapter**: `@opennextjs/cloudflare`
- **Worker name**: `web`
- **Bindings**: D1 (`limars-db`), R2 (`limars-media`)

## Project References
- Repo: `https://github.com/jmarsono/project-limars-teknik-website`
- Local path: `/opt/hermes/projects/limars-teknik-website`
- Deployment rules: `CLAUDE.md`
