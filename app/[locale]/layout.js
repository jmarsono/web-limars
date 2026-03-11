import { Inter, Poppins } from 'next/font/google';
import '../globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '../../i18n/routing';
import { notFound } from 'next/navigation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.SEO;

  const baseUrl = 'https://limarsteknik.com';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t.title,
      template: `%s | PT. Limars Teknik Indonesia`
    },
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: '/',
      languages: {
        'id-ID': '/id',
        'en-US': '/en',
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: './',
      siteName: 'PT. Limars Teknik Indonesia',
      images: [
        {
          url: '/logo.png',
          width: 800,
          height: 600,
          alt: 'Limars Teknik Logo',
        },
      ],
      locale: locale === 'id' ? 'id_ID' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
      images: ['/logo.png'],
      creator: '@limarstek',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'verify-google-id', // User should replace this with actual ID if they have one
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) notFound();

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
