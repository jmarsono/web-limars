# SEO Strategy — Limars Teknik

Living document. Updated whenever positioning, priority keywords, or competitor
landscape shifts. Priority keywords tracked automatically every Monday via
[gsc-monitor workflow](../.github/workflows/gsc-monitor.yml) — edit
[`scripts/seo-config.json`](../scripts/seo-config.json) to change what's tracked.

## Positioning (as of Aug 2026)

**Primary identity:** Specialist builder of traditional ovens (Wood-Fired Pizza,
Mandi, Tannur, Kamado) for restaurants across Indonesia.

**Secondary services:** Commercial kitchen fabrication (SS304), certified gas
piping, exhaust ducting.

**Geographic focus:** Nationwide, workshop in Jakarta.

**Founded:** 2014. Signature clients: Al-Jazeerah group, Nanamia Pizzeria,
Dashi Chazuke.

## Keyword Strategy — 4 Tiers

Tier structure is deliberate: focus win-effort ratio from cheapest wins to
longest games. Track weekly, but only invest content/backlink effort in tiers
where you can realistically move the needle.

### Tier 1 — Brand (must-win, weeks)

If Limars Teknik doesn't rank top 3 for its own name, something is broken
(missing verification, wrong canonical, competitor stealing the brand). These
should be won within days of a fresh GBP + GSC verification. Zero effort
required beyond correct technical setup.

- `limars teknik`
- `pt limars teknik`
- `limars teknik jakarta`
- `cv limars teknik`

### Tier 2 — Signature Niche (target: top 10, 3-6 months)

Low search volume BUT extremely high buyer intent — anyone typing "oven mandi
domba" is already deep in the funnel. This is where Limars actually has a
competitive advantage: few Indonesian firms specialize in this. Investment
here yields highest ROI.

**How to win:**
- Long-form service pages with specific keywords in H1, H2, first paragraph
- Blog posts documenting each build (with rich photos + client quotes)
- Local Google Business Profile with these services listed explicitly
- Backlinks from restaurant industry publications (KulinerJakarta,
  DetikFood, etc.)

Keywords:
- `oven pizza tradisional jakarta`
- `oven mandi domba`
- `oven tannur`, `oven tandoor jakarta`
- `tungku pizza kayu bakar`
- `jasa pembuat oven kayu bakar`
- `pembuat oven pizza tradisional`
- `pembuat tungku roti arab`
- `oven kamado jepang`

### Tier 3 — Service Category (target: top 20, 6-12 months)

Kitchen contractor services — mid-competition. Anyone searching this is a
prospective B2B client for a bigger contract, but competing against
established suppliers (Fomac, Getra, Solar Industri) who have 10+ years of
authority.

**How to win:**
- Rich service detail pages with process, materials, safety standards
- Case studies from completed kitchens (with client permission)
- Certifications & compliance badges displayed prominently
- Partnerships mentioned on their sites (backlink potential)

Keywords:
- `kontraktor dapur restoran jakarta`
- `instalasi gas restoran jakarta`
- `jasa ducting exhaust dapur`
- `fabrikasi kitchen set stainless steel`
- `kitchen set ss304 restoran`
- `dapur restoran komersial`
- `fabrikasi dapur sppg`
- `kitchen set mbg` (Makan Bergizi Gratis — govt program)

### Tier 4 — Generic High-Volume (12+ months)

Very high competition. Realistically won't rank top 10 without significant
sustained content + backlink investment. Track for trend awareness, but
don't over-invest here — Tier 2 is a better use of energy.

Keywords:
- `commercial oven indonesia`
- `commercial kitchen equipment indonesia`
- `wood fired pizza oven indonesia`
- `oven pizza`
- `kitchen set restoran`
- `kompor restoran`

## Competitor Watch List

**How to research:** Open Chrome incognito, search each Tier 2/3 keyword.
Note top 3 organic results (skip ads). Repeat monthly. Add domains to
`scripts/seo-config.json > competitors_to_watch.domains`.

### Adjacent competitors (commercial kitchen equipment — high overlap)

- **Solar Industri** (`solarindustri.com`) — established stove & kitchen
  equipment manufacturer, strong brand
- **Fomac Indonesia** (`fomac.co.id`) — imported commercial kitchen equipment
- **Getra** (`getra.co.id`) — bakery + kitchen equipment
- **Berjaya Foodservice** — regional B2B foodservice
- **Kanzler / Bumi Foodservices** — larger integrated players

### Direct competitors (traditional oven builders — smaller field)

This is a genuine niche. Most competition is:
- Local artisans / individual pengrajin without websites (offline word-of-mouth)
- Import brands (Alfa Forni, Marra Forni) — expensive, less common in ID
- Occasional mid-scale players — validate by searching directly

**Do this research yourself:** search `pembuat oven pizza tradisional`,
`jasa oven kayu bakar jakarta`, `oven mandi kambing` — see who shows up.
Those are your actual competition.

## Backlink Priorities

Ranked by likely impact & feasibility:

1. **Google Business Profile** — done (this session)
2. **Local Yellow Pages ID** — free listing, easy
3. **Industry directories** — Jakarta Foodservice, HORECA Indonesia
4. **Case study PR** — restaurant partners (Al-Jazeerah, Nanamia) may link back
   from their sites, this is high-authority backlink
5. **Restaurant/culinary media** — pitch "how Al-Jazeerah's traditional pizza
   oven was built" story to KulinerJakarta, Kompas Food, Femina Food
6. **Trade associations** — APJI (Asosiasi Pengusaha Jasaboga Indonesia),
   PHRI — membership often includes backlink from member listing

## Content Roadmap (Next 3 Months)

Recommended posting cadence: **1 blog post / month minimum** to sustain
freshness signal.

- Month 1: "Cara Merawat Oven Pizza Tradisional Agar Awet 10+ Tahun"
  (targets Tier 2 keywords, appeals to existing pizza restaurant owners)
- Month 2: "SS304 vs SS201 untuk Kitchen Set Restoran: Mana yang Worth It?"
  (targets Tier 3, educational, ranks for material-comparison queries)
- Month 3: "Studi Kasus: Membangun Dapur SPPG Berkapasitas 500 Porsi/Hari"
  (rides trending govt program, timely, natural PR angle)

## Measurement

Weekly automated report shows:
- Priority keyword position tracking (tier-organized)
- Top queries you actually rank for (may differ from priority list — surprises
  reveal accidental wins to double down on)
- URL indexing status (are new pages getting indexed?)

Success looks like:
- **Month 1:** All Tier 1 brand keywords 🥇 top 3
- **Month 3:** 3+ Tier 2 keywords ✅ top 10, several starting to show impressions
- **Month 6:** 5+ Tier 2 keywords top 10, first Tier 3 keywords appearing top 20
- **Month 12:** Consistent Tier 2 dominance in niche, Tier 3 competitive
