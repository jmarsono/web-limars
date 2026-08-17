// app/[locale]/projects/page.js
import { getProjects } from '../../../lib/db';
import { projectCategories } from '../../../data/projects';
import ProjectsClient from './ProjectsClient';
import { setRequestLocale } from 'next-intl/server';
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd';

export const revalidate = 0; // Fresh data for D1 dynamic updates

export default async function ProjectsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const dbProjects = await getProjects();
  const getTranslations = (await import('next-intl/server')).getTranslations;
  const navT = await getTranslations({ locale, namespace: 'Navigation' });

  const crumbs = [
    { name: navT('projects'), path: '/projects/' }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: navT('projects'),
    url: `https://limarsteknik.com/${locale}/projects/`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'PT. Limars Teknik Indonesia',
      url: 'https://limarsteknik.com',
    },
    about: {
      '@type': 'Organization',
      name: 'PT. Limars Teknik Indonesia',
    },
    hasPart: dbProjects.slice(0, 20).map((project) => ({
      '@type': 'CreativeWork',
      name: project.name?.[locale] || project.name?.en || '',
      description: project.description?.[locale] || project.description?.en || '',
      image: project.image && !project.image.startsWith('http') ? `https://limarsteknik.com${project.image}` : project.image,
      dateCreated: project.year ? String(project.year) : undefined,
      locationCreated: project.location?.[locale] || project.location?.en || undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd crumbs={crumbs} />
      <ProjectsClient projects={dbProjects} projectCategories={projectCategories} />
    </>
  );
}
