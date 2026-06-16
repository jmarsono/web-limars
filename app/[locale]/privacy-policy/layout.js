import { getMessages } from 'next-intl/server';
import { constructMetadata } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.SEO;

  return constructMetadata({
    title: t.privacyTitle,
    description: t.privacyDesc,
    path: '/privacy-policy/',
    locale,
  });
}

export default function PrivacyPolicyLayout({ children }) {
  return <>{children}</>;
}
