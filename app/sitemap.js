import { products } from '../data/products';
import { services } from '../data/services';
import { projects } from '../data/projects';

export default function sitemap() {
  const baseUrl = 'https://www.limarsteknik.com'; // Replace with actual domain

  // Static routes
  const routes = ['', '/about', '/products', '/services', '/projects', '/contact', '/faq'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Product routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Dynamic Service routes
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...routes, ...productRoutes, ...serviceRoutes];
}
