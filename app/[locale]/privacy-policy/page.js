'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import styles from './page.module.css';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { trackWhatsAppClick } from '@/lib/analytics';

export default function PrivacyPolicyPage() {
  const t = useTranslations('PrivacyPolicy');
  const navT = useTranslations('Navigation');
  const homeT = useTranslations('Home');
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

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContent}`}>
          <h2>{homeT('cta.title')}</h2>
          <p>{homeT('cta.subtitle')}</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-primary">{homeT('cta.contactBtn')}</Link>
            <a href="https://wa.me/6281212671289" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick({ label: 'privacy_cta' })}>
              <WhatsAppIcon />
              {homeT('cta.whatsappBtn')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
