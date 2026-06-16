// app/[locale]/projects/page.js
import { getProjects } from '../../../lib/db';
import { projectCategories } from '../../../data/projects';
import ProjectsClient from './ProjectsClient';
import { setRequestLocale } from 'next-intl/server';

export const revalidate = 0; // Fresh data for D1 dynamic updates

export default async function ProjectsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const dbProjects = await getProjects();

  return (
    <ProjectsClient projects={dbProjects} projectCategories={projectCategories} />
  );
}
