import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.Navigation;

  return {
    title: t.faq || 'FAQ',
    description: messages.FAQ.heroSubtitle,
  };
}

export default function FAQLayout({ children }) {
  return <>{children}</>;
}
