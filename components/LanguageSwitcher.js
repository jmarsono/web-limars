'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../i18n/routing';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'id' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button onClick={toggleLocale} className={styles.switcher}>
      <span className={locale === 'en' ? styles.active : ''}>EN</span>
      <span className={styles.divider}>/</span>
      <span className={locale === 'id' ? styles.active : ''}>ID</span>
    </button>
  );
}
