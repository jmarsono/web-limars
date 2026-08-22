// lib/legacyRedirects.js
// Handles legacy URLs from the previous WordPress installation of limarsteknik.com.
// Google Search Console still shows these URLs being crawled (some as recently as
// July 2026) and reports them as "Crawled — currently not indexed", which wastes
// crawl budget. Redirect them 301 to their Next.js equivalents where a mapping
// exists, or 410 Gone for pure WordPress artifacts that no longer have any home
// (feeds, tag archives, author pages).

/**
 * Static mapping from WordPress URLs (without trailing slash, lowercased) to
 * their new Next.js counterparts (with trailing slash). Locale in the target
 * URL should default to Indonesian since the WordPress site was ID-first.
 */
const EXACT_REDIRECTS = {
  // NOTE: Do NOT map '/id' → '/id/' or '/en' → '/en/' here. Next.js already
  // handles trailing-slash canonicalization via `trailingSlash: true`, and
  // our own normalization strips the trailing slash before lookup — mapping
  // '/id' to '/id/' would then match on '/id/' too and cause an infinite
  // redirect loop.

  // Old top-level ID pages → their new /id/... equivalents
  '/kontak': '/id/contact/',
  '/tentang': '/id/about/',
  '/kebijakan-privasi': '/id/privacy-policy/',
  '/blog': '/id/blog/',
  '/faq': '/id/faq/',
  '/layanan': '/id/services/',
  '/produk': '/id/products/',
  '/proyek': '/id/projects/',

  // Old EN pages that WordPress served under Indonesian slugs
  '/en/kontak': '/en/contact/',
  '/en/tentang': '/en/about/',
  '/en/kebijakan-privasi': '/en/privacy-policy/',
  '/en/layanan': '/en/services/',
  '/en/produk': '/en/products/',
  '/en/proyek': '/en/projects/',

  // Legacy project slugs (WordPress used short cryptic slugs like /aljz-2/ for
  // Al-Jazeerah projects, /nanamia-2/ for Nanamia Pizzeria branch 2, etc.)
  // Point them at the /projects/ listing since without an authoritative mapping
  // we cannot know which specific project each old slug referred to; the listing
  // is the closest fit and preserves link equity.
  '/aljz': '/id/projects/',
  '/aljz-2': '/id/projects/',
  '/aljz-3': '/id/projects/',
  '/nanamia': '/id/projects/',
  '/nanamia-2': '/id/projects/',
  '/en/aljz': '/en/projects/',
  '/en/aljz-2': '/en/projects/',
  '/en/aljz-3': '/en/projects/',
  '/en/nanamia': '/en/projects/',
  '/en/nanamia-2': '/en/projects/',
  '/project-title-3': '/id/projects/',
};

/**
 * Regex patterns for WordPress artifacts that have no equivalent on the new
 * site. Return 410 Gone so Google removes them from the index permanently
 * instead of retrying forever with 404.
 */
const GONE_PATTERNS = [
  /^\/feed\/?$/,
  /^\/comments\/feed\/?$/,
  /^\/[a-z-]+\/feed\/?$/i,                     // /kategori/feed/
  /^\/tag\/[^/]+(\/feed)?\/?$/i,               // /tag/foo/, /tag/foo/feed/
  /^\/en\/tag\/[^/]+(\/feed)?\/?$/i,           // /en/tag/foo/
  /^\/category\/[^/]+(\/feed)?\/?$/i,          // /category/foo/
  /^\/en\/category\/[^/]+(\/feed)?\/?$/i,      // /en/category/foo/
  /^\/author\/[^/]+\/?$/i,                     // /author/admin_xxx/
  /^\/en\/author\/[^/]+\/?$/i,                 // /en/author/admin_xxx/
  /^\/wp-(admin|content|includes|json)\/.*/i,  // WordPress internals
  /^\/xmlrpc\.php$/i,                          // XML-RPC endpoint
  /^\/wp-login\.php$/i,                        // WP login attempts
];

/**
 * Resolve a legacy pathname to its redirect target (301) or Gone marker (410).
 * Returns null if the pathname is not a legacy URL — caller should let the
 * request fall through to normal routing.
 *
 * @param {string} pathname - Request pathname, e.g. "/kontak/" or "/id/contact/"
 * @returns {{ type: 'redirect', target: string } | { type: 'gone' } | null}
 */
export function resolveLegacyUrl(pathname) {
  // Normalize: lowercase, strip trailing slash (except root)
  let normalized = pathname.toLowerCase();
  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }

  const exactTarget = EXACT_REDIRECTS[normalized];
  if (exactTarget) {
    // Safety guard: never redirect a URL to itself. Because we strip trailing
    // slash before lookup, a naive entry like '/id' → '/id/' would match on
    // '/id/' too and create an infinite redirect loop. Skip if the request
    // pathname already equals the target.
    if (pathname === exactTarget) {
      return null;
    }
    return { type: 'redirect', target: exactTarget };
  }

  for (const pattern of GONE_PATTERNS) {
    if (pattern.test(pathname)) {
      return { type: 'gone' };
    }
  }

  return null;
}
