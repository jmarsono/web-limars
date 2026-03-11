import { getMessages } from 'next-intl/server';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.Navigation;

  return {
    title: t.projects,
    description: messages.Projects.heroSubtitle,
  };
}

export default function ProjectsLayout({ children }) {
  return <>{children}</>;
}
