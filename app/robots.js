export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/*/admin/'], // Block API and admin paths (including localized ones)
    },
    sitemap: 'https://limarsteknik.com/sitemap.xml',
  };
}
