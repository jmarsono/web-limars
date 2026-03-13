import Link from 'next/link';
import styles from './BlogCard.module.css';
import { useTranslations } from 'next-intl';

export default function BlogCard({ post, locale }) {
  const t = useTranslations('Blog');
  const postData = post[locale];

  return (
    <Link href={`/${locale}/blog/${post.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.placeholder}>
          <span>📝</span>
        </div>
        <div className={styles.category}>{post.category}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.date}>{post.date}</span>
          <span className={styles.author}>{t('by')} {post.author}</span>
        </div>
        <h3 className={styles.title}>{postData.title}</h3>
        <p className={styles.excerpt}>{postData.excerpt}</p>
        <span className={styles.link}>{t('readMore')}</span>
      </div>
    </Link>
  );
}
