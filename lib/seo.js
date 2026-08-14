// lib/seo.js
export const baseUrl = 'https://limarsteknik.com';

export function getAlternateLinks(path, locale) {
  let cleanPath = path.startsWith('/') ? path : `/${path}`;
  cleanPath = cleanPath.replace(/^\/(id|en)(\/|$)/, '/');

  if (!cleanPath.endsWith('/')) {
    cleanPath = `${cleanPath}/`;
  }

  const pathString = cleanPath === '/' ? '/' : cleanPath;

  return {
    canonical: `${baseUrl}/${locale}${pathString}`,
    languages: {
      id: `${baseUrl}/id${pathString}`,
      en: `${baseUrl}/en${pathString}`,
      'x-default': `${baseUrl}/en${pathString}`,
    },
  };
}

export function constructMetadata({
  title,
  description,
  path,
  locale,
  image = '/images/og-default.webp',
  type = 'website',
  publishedTime,
  authors,
}) {
  const formattedTitle = title.length > 60 ? `${title.substring(0, 57)}...` : title;
  const formattedDescription =
    description.length > 160 ? `${description.substring(0, 157)}...` : description;

  const alternates = getAlternateLinks(path, locale);
  const absoluteImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
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
