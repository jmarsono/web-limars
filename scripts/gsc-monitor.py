#!/usr/bin/env python3
"""
Google Search Console monitor for limarsteknik.com.

Runs against the Search Console API with a service account and produces:
  - Sitemap submission / status
  - URL inspection for key pages
  - Search analytics summary (last 7 & 28 days: top queries, top pages)

Output goes to stdout as GitHub Flavored Markdown so the workflow can pipe it
into $GITHUB_STEP_SUMMARY.

Auth: expects service account JSON credentials at $GOOGLE_APPLICATION_CREDENTIALS
      OR base64-encoded in $GCP_SERVICE_ACCOUNT_KEY_B64.

Property: defaults to "sc-domain:limarsteknik.com" (domain property).
          Override with $GSC_PROPERTY.

Sitemap URL: defaults to "https://limarsteknik.com/sitemap.xml".
             Override with $GSC_SITEMAP_URL.
"""
from __future__ import annotations

import base64
import json
import os
import sys
from datetime import date, timedelta
from pathlib import Path

from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

SITE_URL = os.environ.get("GSC_PROPERTY", "sc-domain:limarsteknik.com")
SITEMAP_URL = os.environ.get("GSC_SITEMAP_URL", "https://limarsteknik.com/sitemap.xml")

# URLs to inspect for indexing status
KEY_URLS = [
    "https://limarsteknik.com/id/",
    "https://limarsteknik.com/en/",
    "https://limarsteknik.com/id/about/",
    "https://limarsteknik.com/id/services/",
    "https://limarsteknik.com/id/products/",
    "https://limarsteknik.com/id/projects/",
    "https://limarsteknik.com/id/contact/",
]

SCOPES = [
    "https://www.googleapis.com/auth/webmasters",
]


def load_credentials() -> service_account.Credentials:
    """Load service account credentials from a file or base64-encoded env var."""
    b64 = os.environ.get("GCP_SERVICE_ACCOUNT_KEY_B64")
    if b64:
        info = json.loads(base64.b64decode(b64).decode("utf-8"))
        return service_account.Credentials.from_service_account_info(info, scopes=SCOPES)

    key_path = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
    if key_path and Path(key_path).exists():
        return service_account.Credentials.from_service_account_file(key_path, scopes=SCOPES)

    print(
        "::error::No credentials found. Set GCP_SERVICE_ACCOUNT_KEY_B64 or "
        "GOOGLE_APPLICATION_CREDENTIALS.",
        file=sys.stderr,
    )
    sys.exit(1)


def print_header(title: str, level: int = 2) -> None:
    print(f"\n{'#' * level} {title}\n")


def submit_sitemap(webmasters):
    """Re-submit the sitemap and show current status."""
    print_header("Sitemap")
    try:
        # Re-submit (idempotent — just refreshes Google's crawl schedule)
        webmasters.sitemaps().submit(siteUrl=SITE_URL, feedpath=SITEMAP_URL).execute()
        print(f"- ✅ Re-submitted `{SITEMAP_URL}`")

        # Fetch its status
        info = webmasters.sitemaps().get(siteUrl=SITE_URL, feedpath=SITEMAP_URL).execute()
        last_downloaded = info.get("lastDownloaded", "never")
        last_submitted = info.get("lastSubmitted", "unknown")
        is_pending = info.get("isPending", False)
        errors = info.get("errors", 0)
        warnings = info.get("warnings", 0)
        contents = info.get("contents", [])
        total = sum(int(c.get("submitted", 0)) for c in contents)
        indexed = sum(int(c.get("indexed", 0)) for c in contents)

        print()
        print("| Field | Value |")
        print("|---|---|")
        print(f"| Last submitted | {last_submitted} |")
        print(f"| Last downloaded by Google | {last_downloaded} |")
        print(f"| Pending | {is_pending} |")
        print(f"| Errors | {errors} |")
        print(f"| Warnings | {warnings} |")
        print(f"| URLs submitted | {total} |")
        print(f"| URLs indexed | {indexed} |")
    except HttpError as err:
        print(f"- ❌ Sitemap submit failed: {err}")


def inspect_urls(searchconsole):
    """Inspect key URLs for indexing status."""
    print_header("URL Indexing Status")
    print("| URL | Verdict | Coverage | Last Crawled |")
    print("|---|---|---|---|")

    for url in KEY_URLS:
        try:
            resp = (
                searchconsole.urlInspection()
                .index()
                .inspect(body={"inspectionUrl": url, "siteUrl": SITE_URL, "languageCode": "id-ID"})
                .execute()
            )
            index_result = resp.get("inspectionResult", {}).get("indexStatusResult", {})
            verdict = index_result.get("verdict", "?")
            coverage = index_result.get("coverageState", "?")
            crawled = index_result.get("lastCrawlTime", "-")
            emoji = {"PASS": "✅", "PARTIAL": "🟡", "FAIL": "❌", "NEUTRAL": "⚪"}.get(verdict, "❔")
            # Trim URL for readability
            short_url = url.replace("https://limarsteknik.com", "")
            print(f"| `{short_url}` | {emoji} {verdict} | {coverage} | {crawled} |")
        except HttpError as err:
            print(f"| `{url}` | ❌ ERROR | {err.resp.status} | - |")


def search_analytics(webmasters, days: int):
    """Fetch top queries and top pages for the last N days."""
    end = date.today() - timedelta(days=2)  # GSC data usually 2-day lag
    start = end - timedelta(days=days - 1)

    print_header(f"Search Analytics — Last {days} Days ({start} → {end})")

    # Top queries
    print(f"\n### Top 15 Queries")
    try:
        resp = (
            webmasters.searchanalytics()
            .query(
                siteUrl=SITE_URL,
                body={
                    "startDate": start.isoformat(),
                    "endDate": end.isoformat(),
                    "dimensions": ["query"],
                    "rowLimit": 15,
                },
            )
            .execute()
        )
        rows = resp.get("rows", [])
        if not rows:
            print("_No data yet — property is new or has zero impressions._")
            return
        print("\n| Query | Impressions | Clicks | CTR | Position |")
        print("|---|---:|---:|---:|---:|")
        for r in rows:
            q = r["keys"][0]
            imp = r.get("impressions", 0)
            clk = r.get("clicks", 0)
            ctr = r.get("ctr", 0) * 100
            pos = r.get("position", 0)
            print(f"| {q} | {imp:,} | {clk:,} | {ctr:.1f}% | {pos:.1f} |")
    except HttpError as err:
        print(f"❌ Query fetch failed: {err}")
        return

    # Top pages
    print(f"\n### Top 10 Pages")
    try:
        resp = (
            webmasters.searchanalytics()
            .query(
                siteUrl=SITE_URL,
                body={
                    "startDate": start.isoformat(),
                    "endDate": end.isoformat(),
                    "dimensions": ["page"],
                    "rowLimit": 10,
                },
            )
            .execute()
        )
        rows = resp.get("rows", [])
        if rows:
            print("\n| Page | Impressions | Clicks | CTR | Position |")
            print("|---|---:|---:|---:|---:|")
            for r in rows:
                p = r["keys"][0].replace("https://limarsteknik.com", "")
                imp = r.get("impressions", 0)
                clk = r.get("clicks", 0)
                ctr = r.get("ctr", 0) * 100
                pos = r.get("position", 0)
                print(f"| `{p}` | {imp:,} | {clk:,} | {ctr:.1f}% | {pos:.1f} |")
    except HttpError as err:
        print(f"❌ Pages fetch failed: {err}")


def load_seo_config():
    """Load priority keywords + competitor list from scripts/seo-config.json."""
    config_path = Path(__file__).parent / "seo-config.json"
    if not config_path.exists():
        return None
    try:
        return json.loads(config_path.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError):
        return None


def priority_keywords_report(webmasters, config, days=28):
    """Query GSC Search Analytics for each priority keyword tier and report
    position + impressions + clicks. Highlights keywords with zero impressions
    (not showing at all) so those can be addressed with content/backlinks."""
    if not config or "priority_keywords" not in config:
        return

    end = date.today() - timedelta(days=2)
    start = end - timedelta(days=days - 1)

    print_header(f"Priority Keywords — Last {days} Days ({start} → {end})")

    tiers = config["priority_keywords"]
    for tier_key, keywords in tiers.items():
        if tier_key.startswith("_") or not isinstance(keywords, list):
            continue

        # Tier label: "tier_1_brand" → "Tier 1 — Brand"
        parts = tier_key.split("_", 2)
        label = f"Tier {parts[1]} — {parts[2].title()}" if len(parts) >= 3 else tier_key

        print(f"\n### {label}\n")
        print("| Keyword | Impressions | Clicks | Position |")
        print("|---|---:|---:|---:|")

        for keyword in keywords:
            try:
                resp = (
                    webmasters.searchanalytics()
                    .query(
                        siteUrl=SITE_URL,
                        body={
                            "startDate": start.isoformat(),
                            "endDate": end.isoformat(),
                            "dimensions": ["query"],
                            "dimensionFilterGroups": [
                                {
                                    "filters": [
                                        {
                                            "dimension": "query",
                                            "operator": "equals",
                                            "expression": keyword,
                                        }
                                    ]
                                }
                            ],
                            "rowLimit": 1,
                        },
                    )
                    .execute()
                )
                rows = resp.get("rows", [])
                if rows:
                    r = rows[0]
                    imp = r.get("impressions", 0)
                    clk = r.get("clicks", 0)
                    pos = r.get("position", 0)
                    # Highlight strong positions with a badge
                    pos_str = f"{pos:.1f}"
                    if pos <= 3:
                        pos_str = f"🥇 {pos:.1f}"
                    elif pos <= 10:
                        pos_str = f"✅ {pos:.1f}"
                    elif pos <= 30:
                        pos_str = f"🟡 {pos:.1f}"
                    else:
                        pos_str = f"⚪ {pos:.1f}"
                    print(f"| {keyword} | {imp:,} | {clk:,} | {pos_str} |")
                else:
                    print(f"| {keyword} | 0 | 0 | — not ranking |")
            except HttpError:
                print(f"| {keyword} | ? | ? | ⚠️ query error |")


def main():
    creds = load_credentials()
    webmasters = build("searchconsole", "v1", credentials=creds, cache_discovery=False)
    seo_config = load_seo_config()

    print(f"# GSC Monitor — {date.today().isoformat()}\n")
    print(f"Property: `{SITE_URL}`")

    submit_sitemap(webmasters)
    inspect_urls(webmasters)
    priority_keywords_report(webmasters, seo_config, days=28)
    search_analytics(webmasters, days=7)
    search_analytics(webmasters, days=28)


if __name__ == "__main__":
    main()
