import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - /api routes
  // - /_next (Next.js internals)
  // - /icon.png, /apple-icon.png, etc. (static files)
  // - /cdn-cgi (Cloudflare internals)
  matcher: ['/((?!api|_next|icon\\.png|apple-icon\\.png|.*\\..*|cdn-cgi).*)']
};
