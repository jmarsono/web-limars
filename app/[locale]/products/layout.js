import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.Navigation;

  return {
    title: t.products,
    description: messages.Products.heroSubtitle,
  };
}

export default function ProductsLayout({ children }) {
  return <>{children}</>;
}
