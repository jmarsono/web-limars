// lib/seoTitle.js
// Build a clean <title> tag that avoids duplication and truncates safely.
// Usage: const title = buildTitle("Tentang Kami"); // => "Tentang Kami – Limars Teknik"

export function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Generates a safe title string.
 * - Removes any existing " – Limars Teknik" suffix to avoid duplication.
 * - Truncates safely (splits on last space before limit, adds "…" if needed).
 * - Appends the brand suffix only once.
 *
 * @param {string} baseTitle   Raw title from CMS / page metadata.
 * @param {string} [brand]     Brand suffix to append (default: "Limars Teknik").
 * @param {number} [maxLen]    Maximum length of the final title (default 60).
 * @returns {string}           Sanitized title ready for <title>.
 */
export function buildTitle(baseTitle, brand = "Limars Teknik", maxLen = 60) {
  // 1️⃣ Remove any existing brand suffix (case‑insensitive, with optional dash/variants)
  const brandRegex = new RegExp(`\\s*[-–—]?\\s*${escapeRegExp(brand)}$`, "i");
  let clean = baseTitle.replace(brandRegex, "").trim();

  // 2️⃣ If length would exceed maxLen, truncate safely
  const suffixLen = brand.length + 3; // " – " before brand
  if (clean.length > maxLen - suffixLen) {
    // Cut at the last space before the limit to avoid cutting words mid‑fragment
    const cut = clean.slice(0, maxLen - suffixLen).trimEnd();
    const lastSpace = cut.lastIndexOf(" ");
    clean = lastSpace > 0 ? cut.slice(0, lastSpace) + "…" : cut + "…";
  }

  // 3️⃣ Append the brand only once, with a single space dash separator
  return `${clean} – ${brand}`;
}