// lib/localize.js
// Utility to extract the locale-appropriate string from bilingual data objects.
// Data in /data/ and D1 uses { en: '...', id: '...' } objects for all user-facing strings.

/**
 * Resolves a bilingual value to its locale-appropriate string.
 * If `value` is an object, returns value[locale] with fallback to 'id' then 'en'.
 * If `value` is a plain string, returns it as-is.
 *
 * @param {string|object} value - A string or { en: '...', id: '...' } object
 * @param {string} locale - Current locale ('en' or 'id')
 * @returns {string}
 */
export function localize(value, locale) {
  if (value == null) return '';
  if (typeof value === 'object') {
    return value[locale] || value.id || value.en || '';
  }
  return value;
}
