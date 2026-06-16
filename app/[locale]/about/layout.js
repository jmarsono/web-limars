import { getMessages } from 'next-intl/server';
import { constructMetadata } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.SEO;

  return constructMetadata({
    title: t.aboutTitle,
    description: t.aboutDesc,
    path: '/about/',
    locale,
  });
}

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
