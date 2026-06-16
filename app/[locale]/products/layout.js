import { getMessages } from 'next-intl/server';
import { constructMetadata } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.SEO;

  return constructMetadata({
    title: t.productsTitle,
    description: t.productsDesc,
    path: '/products/',
    locale,
  });
}

export default function ProductsLayout({ children }) {
  return <>{children}</>;
}
