'use client';

import { useLocale } from 'next-intl';

export default function BreadcrumbJsonLd({ crumbs = [] }) {
  const locale = useLocale();
  const baseUrl = 'https://limarsteknik.com';

  const itemListElement = [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': locale === 'id' ? 'Beranda' : 'Home',
      'item': `${baseUrl}/${locale}/`
    },
    ...crumbs.map((crumb, index) => {
      let path = crumb.path.startsWith('/') ? crumb.path : `/${crumb.path}`;
      if (!path.endsWith('/')) {
        path = `${path}/`;
      }
      return {
        '@type': 'ListItem',
        'position': index + 2,
        'name': crumb.name,
        'item': `${baseUrl}/${locale}${path}`
      };
    })
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': itemListElement
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
