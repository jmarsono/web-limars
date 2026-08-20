// lib/seo.js
import { buildTitle } from './seoTitle';

export const baseUrl = 'https://limarsteknik.com';

export function getAlternateLinks(path, locale) {
  let cleanPath = path ? path : '/';
  if (!cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`;
  }
  
  // Strip existing locale prefix if any
  cleanPath = cleanPath.replace(/^\/(id|en)(\/|$)/, '/');

  if (!cleanPath.endsWith('/')) {
    cleanPath = `${cleanPath}/`;
  }

  const pathString = cleanPath === '/' ? '/' : cleanPath;
  const canonicalUrl = `${baseUrl}/${locale}${pathString}`;

  return {
    canonical: canonicalUrl,
    languages: {
      'id': `${baseUrl}/id${pathString}`,
      'en': `${baseUrl}/en${pathString}`,
      'x-default': `${baseUrl}/en${pathString}`,
    },
  };
}

export function constructMetadata({
  title,
  description,
  path = '/',
  locale = 'id',
  image = '/images/og-default.webp',
  type = 'website',
  publishedTime,
  authors,
}) {
  const formattedTitle = buildTitle(title);
  const formattedDescription = description ? description.trim() : '';
  const alternates = getAlternateLinks(path, locale);
  const absoluteImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    metadataBase: new URL(baseUrl),
    title: formattedTitle,
    description: formattedDescription,
    alternates,
    openGraph: {
      title: formattedTitle,
      description: formattedDescription,
      url: alternates.canonical,
      siteName: 'PT. Limars Teknik Indonesia',
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: formattedTitle,
        },
      ],
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      type,
      ...(publishedTime && { publishedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: 'summary_large_image',
      title: formattedTitle,
      description: formattedDescription,
      images: [absoluteImageUrl],
      creator: '@limarstek',
    },
  };
}
