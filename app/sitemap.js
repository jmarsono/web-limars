import { products } from '../data/products';
import { services } from '../data/services';
import { projects } from '../data/projects';

export default function sitemap() {
  const baseUrl = 'https://limarsteknik.com';

  const locales = ['id', 'en'];
  const paths = ['', '/about', '/products', '/services', '/projects', '/contact', '/faq'];

  // Static routes with alternates
  const routes = paths.flatMap((path) => 
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: path === '' ? 'weekly' : 'monthly',
      priority: path === '' ? 1 : 0.8,
    }))
  );

  // Dynamic Product routes
  const productRoutes = products.flatMap((product) => 
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/products/${product.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
    }))
  );

  // Dynamic Service routes
  const serviceRoutes = services.flatMap((service) => 
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/services/${service.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    }))
  );

  return [...routes, ...productRoutes, ...serviceRoutes];
}
