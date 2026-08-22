'use client';

import { useTranslations } from 'next-intl';
import styles from './SkipToContent.module.css';

/**
 * Accessible "skip to main content" link. Visually hidden until keyboard focus,
 * then jumps focus and scroll to the #main-content landmark.
 */
export default function SkipToContent() {
  const t = useTranslations('A11y');
  return (
    <a href="#main-content" className={styles.skipLink}>
      {t('skipToContent')}
    </a>
  );
}
