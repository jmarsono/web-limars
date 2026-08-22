import { getMessages, setRequestLocale } from 'next-intl/server';
import { blogPosts } from '@/data/blogPosts';
import BlogCard from '@/components/BlogCard';
import CtaBanner from '@/components/CtaBanner';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import { constructMetadata } from '@/lib/seo';
import styles from './page.module.css';

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
  const navT = messages.Navigation;

  const posts = blogPosts;

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

      <CtaBanner analyticsLabel="blog_list_cta" />
    </main>
  );
}
