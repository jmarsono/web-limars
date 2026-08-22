# Scripts

## `gsc-monitor.py` — Google Search Console monitor

Runs against the Search Console API and produces a Markdown report covering:

- **Sitemap** — re-submits `sitemap.xml` and reports its current status
  (last downloaded, URLs submitted vs indexed, errors, warnings)
- **URL Indexing Status** — inspects key pages (homepage, about, services, etc.)
  and shows verdict (PASS/PARTIAL/FAIL), coverage state, and last crawl time
- **Search Analytics** — top 15 queries and top 10 pages over the last 7 and 28
  days (impressions, clicks, CTR, average position)

Executed by the [`gsc-monitor` workflow](../.github/workflows/gsc-monitor.yml)
on a weekly cron (Monday 08:00 UTC) and on manual dispatch. Report lands in
the run's GitHub Actions Summary.

### Auth

Expects a Google Cloud service account JSON key, provided one of two ways:

1. `$GCP_SERVICE_ACCOUNT_KEY_B64` — base64-encoded JSON (used by the workflow,
   from the `GCP_SERVICE_ACCOUNT_KEY_B64` GitHub Secret)
2. `$GOOGLE_APPLICATION_CREDENTIALS` — path to a JSON file (for local runs)

The service account must be granted access to the Search Console property.

### Setup once (one-time per property)

1. In Google Cloud Console, enable **Google Search Console API** for the project
   that owns the service account
2. In [Search Console → Users and permissions](https://search.google.com/search-console/users),
   add the service account email (e.g. `hermes@limarsteknik-web.iam.gserviceaccount.com`)
   with at least **Restricted** permission
3. Base64-encode the service account JSON key:
   ```
   base64 -w 0 gcloud-limarsteknik.json  # Linux
   base64 -i gcloud-limarsteknik.json    # macOS
   ```
4. Store the base64 blob as GitHub Environment Secret `GCP_SERVICE_ACCOUNT_KEY_B64`
   under the `Auto Deploy To Cloudflare` environment

### Local run

```bash
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json
pip install -r scripts/requirements.txt
python scripts/gsc-monitor.py
```

### Configuration

Environment variables (all optional):

- `GSC_PROPERTY` — Search Console property (default: `sc-domain:limarsteknik.com`).
  Use `https://limarsteknik.com/` for URL-prefix properties instead.
- `GSC_SITEMAP_URL` — Sitemap URL to (re-)submit (default: `https://limarsteknik.com/sitemap.xml`)
