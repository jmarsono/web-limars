'use client';

import { useTranslations } from 'next-intl';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import styles from './page.module.css';

export default function PrivacyPolicyPage() {
  const t = useTranslations('PrivacyPolicy');
  const navT = useTranslations('Navigation');
  const crumbs = [
    { name: navT('privacyPolicy'), path: '/privacy-policy/' }
  ];

  const sections = [
    { id: 'informationCollection', key: 'sections.informationCollection' },
    { id: 'informationUsage', key: 'sections.informationUsage' },
    { id: 'dataProtection', key: 'sections.dataProtection' },
    { id: 'thirdPartySharing', key: 'sections.thirdPartySharing' },
    { id: 'cookies', key: 'sections.cookies' },
    { id: 'yourRights', key: 'sections.yourRights' },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroBadge}>{t('heroBadge')}</span>
          <h1 className={styles.heroTitle}>{t('heroTitle')}</h1>
          <p className={styles.heroSubtitle}>{t('heroSubtitle')}</p>
          <p className={styles.lastUpdated}>{t('lastUpdated')}</p>
        </div>
      </section>

      {/* Policy Content */}
      <section className={`section ${styles.contentSection}`}>
        <div className="container">
          <div className={styles.policyContainer}>
            {sections.map((section) => (
              <div key={section.id} className={styles.policyBlock}>
                <h2 className={styles.policyTitle}>{t(`${section.key}.title`)}</h2>
                <p className={styles.policyText}>{t(`${section.key}.content`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
