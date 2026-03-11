export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Add any private paths here
    },
    sitemap: 'https://www.limarsteknik.com/sitemap.xml', // Replace with actual domain
  };
}
