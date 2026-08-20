# IDEA.md — Limars Teknik Website Master Blueprint

## Visi
Website resmi PT Limars Teknik Indonesia yang tidak hanya menampilkan portofolio, tetapi berfungsi sebagai **digital engineering hub** yang terintegrasi dengan sistem internal (IoT, proposal generator, client portal) di bawah ekosistem Hermes AI.

## Arsitektur Teknis

### Dual Deployment (Critical)
| Environment | Teknologi | Domain | Trigger |
|---|---|---|---|
| Staging/Preview | Cloudflare Pages | `webpages-2ld.pages.dev` | Auto on `git push` |
| Production | Cloudflare Worker (OpenNext) | `limarsteknik.com` | **Manual** `npm run build:cf && npx wrangler deploy` |

> **Production site TIDAK auto-deploy.** Push ke main hanya update staging. Production wajib manual deploy Worker.

### Stack Utama
- **Next.js 16** App Router + `next-intl` (EN/ID)
- **OpenNext for Cloudflare** (`@opennextjs/cloudflare`) adapter
- **Cloudflare D1** database (`limars-db`) — kontak, blog, inquiry
- **Cloudflare R2** bucket (`limars-media`) — gambar produk, galeri
- **Cloudflare Turnstile** CAPTCHA pada form kontak

### Konfigurasi Kunci
- `wrangler.toml` — Worker name: `web`, bindings D1/R2
- `open-next.config.ts` — OpenNext config
- `.env` (local) / Worker secrets — sensitif (SMTP, Turnstile secret, dll)

## Fitur Inti (MVP + Roadmap)

### Fase 1 — Core Website (Sekarang)
- [x] Landing page: Hero, About, Services, Portfolio, Contact
- [x] i18n EN/ID (next-intl routing `/en`, `/id`)
- [x] Blog/News section (static MDX + dynamic dari D1)
- [x] Contact form dengan Turnstile + SMTP ke email
- [x] SEO: sitemap.xml, robots.txt, Open Graph, JSON-LD schema
- [x] Responsive, dark/light mode, accessibility

### Fase 2 — Engineering Tools Integration (Q4 2026)
- [ ] **BoQ/RAB Calculator** — kalkulator otomatis estimasi biaya proyek dapur komersial
- [ ] **Gas Piping Sizer** — flow rate & pressure drop calculator
- [ ] **Exhaust CFM Calculator** — sizing ducting & exhaust fan
- [ ] Embed sebagai widget/halaman terpisah di website (auth optional)

### Fase 3 — IoT Dashboard (2027)
- [ ] Real-time monitoring gas leak sensor (MQTT → Worker → D1 → Dashboard)
- [ ] Temperature monitoring chiller/freezer
- [ ] Exhaust fan status monitoring
- [ ] Alert system (Telegram/Email/WA)

### Fase 4 — Client Portal (2028)
- [ ] Project tracking (fabrikasi, instalasi, commissioning)
- [ ] Service ticketing & SLA maintenance
- [ ] Document vault (sertifikat, gambar teknis, handover docs)
- [ ] Invoice & payment tracking

## Desain & Brand
- Warna utama: Limars Blue (`#1E3A8A`), Accent Gold (`#D4A843`)
- Typography: Inter (UI) + Space Grotesk (heading)
- Logo: Limars Teknik (sudah ada di `public/logo/`)
- Consistent dengan brand guidelines `limarsteknik` parent project

## Integrasi Hermes AI (Muza AI Assistant)
- Script otomatis generate proposal teknis dari website inquiry
- AI-assisted content generation untuk blog post (SEO optimized)
- Automated BoQ/RAB generation dari inquiry form data
- Sync data inquiry → Hermes workspace (`projects/limarsteknik/`) untuk follow-up engineering

## Risiko & Mitigasi
| Risiko | Mitigasi |
|---|---|
| Deploy Worker gagal | CI check `npm run build:cf` sebelum merge; rollback manual `wrangler rollback` |
| D1/R2 binding error di staging | Test binding di staging Pages dulu; Pages tidak pakai binding — gunakan preview env |
| Secret rotation | Dokumentasikan di `hermes-config`; rotasi berkala via `wrangler secret put` |
| i18n content drift | Workflow review konten EN/ID berpasangan; lint `next-intl` keys |

## Catatan Penting
- Repo utama: `jmarsono/project-limars-teknik-website` (private)
- Repo public Cloudflare Pages: `jmarsono/web-limars` (public)
- `CLAUDE.md` di root project berisi deployment rules — **wajib dibaca** sebelum deploy
