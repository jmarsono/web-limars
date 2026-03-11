import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.Navigation;

  return {
    title: t.about,
    description: messages.About.heroSubtitle,
  };
}

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
