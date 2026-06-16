// app/[locale]/admin/page.js
import { redirect } from 'next/navigation';
import { getAuthenticatedUser } from './actions';
import { getProducts, getProjects, getFaqs } from '../../../lib/db';
import AdminDashboardClient from './AdminDashboardClient';

export const revalidate = 0; // Disable caching for the admin panel

export default async function AdminPage({ params }) {
  const { locale } = await params;
  const user = await getAuthenticatedUser();
  
  if (!user) {
    redirect(`/${locale}/admin/login`);
  }

  // Load current listings from the D1 database
  const products = await getProducts();
  const projects = await getProjects();
  const faqs = await getFaqs();

  return (
    <AdminDashboardClient
      initialProducts={products}
      initialProjects={projects}
      initialFaqs={faqs}
      username={user}
    />
  );
}
