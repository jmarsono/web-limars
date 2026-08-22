// lib/rateLimit.js
// Lightweight in-memory rate limiter suitable for Cloudflare Workers.
// Per-isolate memory (not shared across workers), which is acceptable
// for brute-force resistance combined with Cloudflare edge protections.
// For truly global rate limiting, back this with KV or D1.

const buckets = new Map();

/**
 * Sliding window rate limit check.
 *
 * @param {string} key - Unique identifier (usually IP + endpoint)
 * @param {object} opts
 * @param {number} opts.limit - Max requests within window
 * @param {number} opts.windowMs - Window size in milliseconds
 * @returns {{allowed: boolean, remaining: number, resetAt: number}}
 */
export function rateLimit(key, { limit = 5, windowMs = 60_000 } = {}) {
  const now = Date.now();
  const windowStart = now - windowMs;

  // Get or create bucket
  let timestamps = buckets.get(key) || [];

  // Prune expired entries
  timestamps = timestamps.filter((t) => t > windowStart);

  const allowed = timestamps.length < limit;
  if (allowed) {
    timestamps.push(now);
  }
  buckets.set(key, timestamps);

  // Periodic cleanup: cap bucket count to avoid unbounded memory
  if (buckets.size > 10_000) {
    const cutoff = now - windowMs;
    for (const [k, v] of buckets.entries()) {
      const active = v.filter((t) => t > cutoff);
      if (active.length === 0) buckets.delete(k);
      else buckets.set(k, active);
    }
  }

  return {
    allowed,
    remaining: Math.max(0, limit - timestamps.length),
    resetAt: (timestamps[0] || now) + windowMs,
  };
}

/**
 * Extracts the client IP from a Next.js Request in a Cloudflare Workers context.
 * Falls back to a shared bucket if no IP header is available.
 */
export function getClientIp(request) {
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-real-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  );
}
