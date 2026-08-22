import { products } from '../data/products';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { blogPosts } from '../data/blogPosts';

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://limarsteknik.com';

  const locales = ['id', 'en'];
  const paths = ['', '/about', '/products', '/services', '/projects', '/blog', '/contact', '/faq', '/privacy-policy'];

  // Get current date for static routes
  const now = new Date().toISOString();

  // Static routes with alternates
  const routes = paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${path}/`,
      lastModified: now,
      changeFrequency: path === '' ? 'weekly' : 'monthly',
      priority: path === '' ? 1 : 0.8,
    }))
  );

  // Dynamic Product routes
  const productRoutes = products.flatMap((product) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/products/${product.slug}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    }))
  );

  // Dynamic Service routes
  const serviceRoutes = services.flatMap((service) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/services/${service.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    }))
  );

  // Dynamic Project routes (portfolio detail pages)
  const projectRoutes = projects.flatMap((project) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/projects/${project.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  );

  // Dynamic Blog routes - use actual post date
  const blogRoutes = blogPosts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}/`,
      lastModified: post.date,
      changeFrequency: 'monthly',
      priority: 0.8,
    }))
  );

  return [...routes, ...productRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes];
}
