import { getMessages, setRequestLocale } from 'next-intl/server';
import { blogPosts } from '@/data/blogPosts';
import BlogCard from '@/components/BlogCard';
import styles from './page.module.css';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.Blog;

  return {
    title: `${t.heroTitle} | PT. Limars Teknik Indonesia`,
    description: t.heroSubtitle,
    openGraph: {
      title: t.heroTitle,
      description: t.heroSubtitle,
      type: 'website',
    },
  };
}

export default async function BlogPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages({ locale });
  const blogT = messages.Blog;

  // In a real app, you might filter or sort posts here
  const posts = blogPosts;

  return (
    <main className={styles.main}>
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
    </main>
  );
}
