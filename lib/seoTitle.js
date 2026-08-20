// lib/seoTitle.js
// Build a clean <title> tag that avoids duplication and formats cleanly.

export function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Generates a clean title string.
 * - Removes any existing brand suffix to avoid duplication.
 * - Appends " – Limars Teknik" only once.
 * - NO artificial truncation with "..." to avoid ugly broken title tags.
 *
 * @param {string} baseTitle   Raw title from CMS / page metadata.
 * @param {string} [brand]     Brand suffix to append (default: "Limars Teknik").
 * @returns {string}           Sanitized title ready for <title>.
 */
export function buildTitle(baseTitle, brand = "Limars Teknik") {
  if (!baseTitle) return brand;

  // 1️⃣ Remove any existing brand suffix (case‑insensitive, with optional dash/pipe/variants)
  const brandRegex = new RegExp(`\\s*[-–—|]?\\s*(PT\\.?\\s*)?${escapeRegExp(brand)}(\\s*Indonesia)?$`, "i");
  let clean = baseTitle.replace(brandRegex, "").trim();

  // Remove any trailing dashes or pipes left over
  clean = clean.replace(/[-–—|]\s*$/, "").trim();

  if (!clean) return brand;

  // If the title already matches brand, don't duplicate
  if (clean.toLowerCase() === brand.toLowerCase()) return brand;

  // 2️⃣ Append the brand only once
  return `${clean} – ${brand}`;
}
