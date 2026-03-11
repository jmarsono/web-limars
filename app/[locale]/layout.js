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

export const metadata = {
  title: 'PT. Limars Teknik Indonesia | Kitchen Equipment Manufacturer',
  description: 'PT. Limars Teknik Indonesia — Your trusted partner in kitchen equipment manufacturing, restaurant kitchen sets, ducting systems, gas installation, well drilling, and electrical services.',
  keywords: 'kitchen equipment, commercial oven, restaurant kitchen set, ducting system, gas installation, well drilling, electrical services, Indonesia, manufacturer',
  openGraph: {
    title: 'PT. Limars Teknik Indonesia | Kitchen Equipment Manufacturer',
    description: 'Your trusted partner in kitchen equipment manufacturing and engineering solutions.',
    type: 'website',
  },
};

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
