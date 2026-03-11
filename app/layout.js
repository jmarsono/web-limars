import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

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
    locale: 'id_ID',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
