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
    <button
      onClick={toggleLocale}
      className={styles.switcher}
      title={locale === 'en' ? 'Switch to Indonesian' : 'Switch to English'}
    >
      <span className={locale === 'en' ? styles.active : ''}>EN</span>
      <span className={styles.divider} aria-hidden="true">/</span>
      <span className={locale === 'id' ? styles.active : ''}>ID</span>
      <span className="sr-only">
        {locale === 'en' ? ', switch to Indonesian' : ', switch to English'}
      </span>
    </button>
  );
}