import { getMessages } from 'next-intl/server';
import { constructMetadata } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.SEO;

  return constructMetadata({
    title: t.faqTitle,
    description: t.faqDesc,
    path: '/faq/',
    locale,
  });
}

export default function FAQLayout({ children }) {
  return <>{children}</>;
}
