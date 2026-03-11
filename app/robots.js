export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Add any private paths here
    },
    sitemap: 'https://limarsteknik.com/sitemap.xml',
  };
}
