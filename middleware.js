import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request) {
  const { pathname } = request.nextUrl;

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
}

export const config = {
  matcher: ['/((?!api|_next|icon\\.png|apple-icon\\.png|.*\\..*|cdn-cgi).*)']
};
