import { getMessages, setRequestLocale } from 'next-intl/server';
import { blogPosts } from '@/data/blogPosts';
import BlogCard from '@/components/BlogCard';
import styles from './page.module.css';
import { Link } from '@/i18n/routing';

import { constructMetadata } from '../../../lib/seo';
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.SEO;

  return constructMetadata({
    title: t.blogTitle,
    description: t.blogDesc,
    path: '/blog/',
    locale,
  });
}

export default async function BlogPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages({ locale });
  const blogT = messages.Blog;
  const homeT = messages.Home;

  // In a real app, you might filter or sort posts here
  const posts = blogPosts;

  const navT = messages.Navigation;
  const crumbs = [
    { name: navT.blog || 'Blog', path: '/blog/' }
  ];

  return (
    <main className={styles.main}>
      <BreadcrumbJsonLd crumbs={crumbs} />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroPattern}></div>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>{blogT.heroBadge}</span>
            <h1 className={styles.heroTitle}>{blogT.heroTitle}</h1>
            <p className={styles.heroSubtitle}>{blogT.heroSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className={styles.blogSection}>
        <div className="container">
          {posts.length > 0 ? (
            <div className={styles.blogGrid}>
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} locale={locale} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>{blogT.noPosts}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContent}`}>
          <h2>{homeT.cta.title}</h2>
          <p>{homeT.cta.subtitle}</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-primary">{homeT.cta.contactBtn}</Link>
            <a href="https://wa.me/6281212671289" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              {homeT.cta.whatsappBtn}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
