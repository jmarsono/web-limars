// lib/db.js - D1 Database Helper with Static Fallbacks
import { products as staticProducts } from '../data/products';
import { projects as staticProjects } from '../data/projects';
import { services as staticServices } from '../data/services';
import { faqData as staticFaqs } from '../data/faq';
import { blogPosts as staticBlogPosts } from '../data/blogPosts';

// Helper to get the Cloudflare D1 database binding
export function getDB() {
  try {
    const context = globalThis[Symbol.for('cloudflare-context')];
    if (context?.env?.DB) {
      return context.env.DB;
    }
  } catch (e) {
    // Ignore context error
  }
  return null;
}

// FORMATTERS
function formatProduct(row) {
  if (!row) return null;
  let specs = {};
  try {
    specs = typeof row.specs === 'string' ? JSON.parse(row.specs) : (row.specs || {});
  } catch (e) {}
  return {
    id: row.id,
    slug: row.slug,
    name: { en: row.name_en, id: row.name_id },
    category: { en: row.category_en, id: row.category_id },
    shortDescription: { en: row.short_description_en, id: row.short_description_id },
    description: { en: row.description_en, id: row.description_id },
    specs: specs,
    image: row.image,
    featured: Boolean(row.featured)
  };
}

function formatProject(row) {
  if (!row) return null;
  let scope = [];
  let images = [];
  try {
    scope = typeof row.scope === 'string' ? JSON.parse(row.scope) : (row.scope || []);
  } catch (e) {}
  try {
    images = typeof row.images === 'string' ? JSON.parse(row.images) : (row.images || []);
  } catch (e) {}
  if (!images || images.length === 0) {
    if (row.image) images = [row.image];
  }
  return {
    id: row.id,
    slug: row.slug,
    name: { en: row.name_en, id: row.name_id },
    category: { en: row.category_en, id: row.category_id },
    location: { en: row.location_en, id: row.location_id },
    year: row.year_completed || row.year || null,
    description: { en: row.description_en, id: row.description_id },
    image: row.image,
    images: images,
    scope: scope,
    videoUrl: row.video_url || null,
    featured: Boolean(row.featured)
  };
}

function formatService(row) {
  if (!row) return null;
  let features = [];
  let processSteps = [];
  try {
    features = typeof row.features === 'string' ? JSON.parse(row.features) : (row.features || []);
    processSteps = typeof row.process === 'string' ? JSON.parse(row.process) : (row.process || []);
  } catch (e) {}
  return {
    id: row.id,
    slug: row.slug,
    image: row.image,
    title: { en: row.title_en, id: row.title_id },
    subtitle: { en: row.subtitle_en, id: row.subtitle_id },
    shortDescription: { en: row.short_description_en, id: row.short_description_id },
    description: { en: row.description_en, id: row.description_id },
    icon: row.icon,
    features: features,
    process: processSteps
  };
}

function formatFaq(row) {
  if (!row) return null;
  return {
    id: row.id,
    category: { en: row.category_en, id: row.category_id },
    question: { en: row.question_en, id: row.question_id },
    answer: { en: row.answer_en, id: row.answer_id }
  };
}

function formatBlogPost(row) {
  if (!row) return null;
  return {
    id: row.id,
    slug: row.slug,
    title: { en: row.title_en, id: row.title_id },
    excerpt: { en: row.excerpt_en, id: row.excerpt_id },
    content: { en: row.content_en, id: row.content_id },
    image: row.image,
    date: row.date,
    readTime: row.read_time
  };
}

// API QUERIES
export async function getProducts() {
  const db = getDB();
  if (!db) return staticProducts;
  try {
    const { results } = await db.prepare("SELECT * FROM products ORDER BY featured DESC, id ASC").all();
    if (results && results.length > 0) {
      return results.map(formatProduct);
    }
  } catch (e) {
    console.error("D1 getProducts error, falling back to static:", e);
  }
  return staticProducts;
}

export async function getProductBySlug(slug) {
  const db = getDB();
  if (!db) return staticProducts.find(p => p.slug === slug);
  try {
    const row = await db.prepare("SELECT * FROM products WHERE slug = ?").bind(slug).first();
    if (row) {
      return formatProduct(row);
    }
  } catch (e) {
    console.error("D1 getProductBySlug error, falling back to static:", e);
  }
  return staticProducts.find(p => p.slug === slug);
}

export async function getProjects() {
  const db = getDB();
  if (!db) return staticProjects;
  try {
    const { results } = await db.prepare("SELECT * FROM projects ORDER BY year_completed DESC, id DESC").all();
    if (results && results.length > 0) {
      return results.map(formatProject);
    }
  } catch (e) {
    console.error("D1 getProjects error, falling back to static:", e);
  }
  return staticProjects;
}

export async function getProjectBySlug(slug) {
  const db = getDB();
  if (!db) return staticProjects.find(p => p.slug === slug);
  try {
    const row = await db.prepare("SELECT * FROM projects WHERE slug = ?").bind(slug).first();
    if (row) {
      return formatProject(row);
    }
  } catch (e) {
    console.error("D1 getProjectBySlug error, falling back to static:", e);
  }
  return staticProjects.find(p => p.slug === slug);
}

export async function getServices() {
  const db = getDB();
  if (!db) return staticServices;
  try {
    const { results } = await db.prepare("SELECT * FROM services ORDER BY id ASC").all();
    if (results && results.length > 0) {
      return results.map(formatService);
    }
  } catch (e) {
    console.error("D1 getServices error, falling back to static:", e);
  }
  return staticServices;
}

export async function getServiceBySlug(slug) {
  const db = getDB();
  if (!db) return staticServices.find(s => s.slug === slug);
  try {
    const row = await db.prepare("SELECT * FROM services WHERE slug = ?").bind(slug).first();
    if (row) {
      return formatService(row);
    }
  } catch (e) {
    console.error("D1 getServiceBySlug error, falling back to static:", e);
  }
  return staticServices.find(s => s.slug === slug);
}

export async function getFaqs() {
  const db = getDB();
  if (!db) return staticFaqs;
  try {
    const { results } = await db.prepare("SELECT * FROM faqs ORDER BY id ASC").all();
    if (results && results.length > 0) {
      return results.map(formatFaq);
    }
  } catch (e) {
    console.error("D1 getFaqs error, falling back to static:", e);
  }
  return staticFaqs;
}

export async function getBlogPosts() {
  const db = getDB();
  if (!db) return staticBlogPosts;
  try {
    const { results } = await db.prepare("SELECT * FROM blog_posts ORDER BY id DESC").all();
    if (results && results.length > 0) {
      return results.map(formatBlogPost);
    }
  } catch (e) {
    console.error("D1 getBlogPosts error, falling back to static:", e);
  }
  return staticBlogPosts;
}

export async function getBlogPostBySlug(slug) {
  const db = getDB();
  if (!db) return staticBlogPosts.find(b => b.slug === slug);
  try {
    const row = await db.prepare("SELECT * FROM blog_posts WHERE slug = ?").bind(slug).first();
    if (row) {
      return formatBlogPost(row);
    }
  } catch (e) {
    console.error("D1 getBlogPostBySlug error, falling back to static:", e);
  }
  return staticBlogPosts.find(b => b.slug === slug);
}
