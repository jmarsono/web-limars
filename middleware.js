import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import { resolveLegacyUrl } from './lib/legacyRedirects';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request) {
  const { pathname } = request.nextUrl;

  // Legacy WordPress URL handling: 301 redirect known slugs to their Next.js
  // counterparts, 410 Gone for pure WordPress artifacts (feeds, tag archives,
  // wp-admin probes). Runs before intl middleware so old URLs are handled by
  // their permanent target rather than treated as unknown locales.
  const legacy = resolveLegacyUrl(pathname);
  if (legacy?.type === 'redirect') {
    const redirectUrl = new URL(legacy.target, request.url);
    // Preserve query string when redirecting
    redirectUrl.search = request.nextUrl.search;
    const response = NextResponse.redirect(redirectUrl, 301);
    addSecurityHeaders(response);
    return response;
  }
  if (legacy?.type === 'gone') {
    const response = new NextResponse(null, { status: 410 });
    addSecurityHeaders(response);
    return response;
  }

  // Custom 301 Permanent Redirect for root `/`
  if (pathname === '/' || pathname === '') {
    const country = request.headers.get('cf-ipcountry') || '';
    const acceptLang = request.headers.get('accept-language') || '';

    // Prefer ID if country is Indonesia or Accept-Language contains ID
    const isIndonesian =
      country.toUpperCase() === 'ID' ||
      acceptLang.toLowerCase().includes('id');

    const targetLocale = isIndonesian ? 'id' : 'en';
    const redirectUrl = new URL(`/${targetLocale}/`, request.url);

    const response = NextResponse.redirect(redirectUrl, 301);
    addSecurityHeaders(response);
    return response;
  }

  const response = intlMiddleware(request);
  addSecurityHeaders(response);
  return response;
}

function addSecurityHeaders(response) {
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://challenges.cloudflare.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self'",
      "connect-src 'self' https://www.google-analytics.com https://challenges.cloudflare.com",
      "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://maps.google.com https://challenges.cloudflare.com",
      "object-src 'none'",
      "base-uri 'self'",
    ].join('; ')
  );
}

export const config = {
  matcher: ['/((?!api|_next|icon\\.png|apple-icon\\.png|.*\\..*|cdn-cgi).*)']
};
