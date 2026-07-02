import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import styles from './page.module.css';
import { routing } from '@/i18n/routing';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      locale,
      slug: post.slug,
    }))
  );
}

import { constructMetadata } from '@/lib/seo';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return {};

  const postData = post[locale];

  return constructMetadata({
    title: `${postData.title} | Limars Teknik Blog`,
    description: postData.excerpt,
    path: `/blog/${slug}/`,
    locale,
    image: post.image,
    type: 'article',
    publishedTime: post.date,
    authors: [post.author],
  });
}

export default async function BlogPostPage({ params }) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const messages = await getMessages({ locale });
  const blogT = messages.Blog;
  const homeT = messages.Home;
  const postData = post[locale];

  // Structured Data (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: postData.title,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    description: postData.excerpt,
    publisher: {
      '@type': 'Organization',
      name: 'PT. Limars Teknik Indonesia',
      logo: {
        '@type': 'ImageObject',
        url: 'https://limarsteknik.com/logo.png', // Corrected domain
      },
    },
  };

  const crumbs = [
    { name: blogT.breadcrumbBlog || 'Blog', path: '/blog/' },
    { name: postData.title, path: `/blog/${slug}/` }
  ];

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd crumbs={crumbs} />

      <article className="container">
        <header className={styles.header}>
          <Link href="/blog" className={styles.backLink}>
            {blogT.backToList}
          </Link>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.date}>{blogT.publishedOn} {post.date}</span>
          </div>
          <h1 className={styles.title}>{postData.title}</h1>
          <p className={styles.author}>{blogT.by} <strong>{post.author}</strong></p>
        </header>

        <div className={styles.imageWrapper}>
          <div className={styles.placeholder}>
            <span>🖼️</span>
          </div>
        </div>

        <div className={styles.content}>
          <div 
            dangerouslySetInnerHTML={{ __html: postData.content }} 
            className={styles.articleBody}
          />
        </div>

        <footer className={styles.footer}>
          <div className={styles.share}>
            <span>{blogT.share}</span>
            {/* Share buttons would go here */}
          </div>
        </footer>
      </article>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContent}`}>
          <h2>{homeT.cta.title}</h2>
          <p>{homeT.cta.subtitle}</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-primary">{homeT.cta.contactBtn}</Link>
            <a href="https://wa.me/6281212671289" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              {homeT.cta.whatsappBtn}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
