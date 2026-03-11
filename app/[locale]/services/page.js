import { Link } from '../../../i18n/routing';
import { services } from '../../../data/services';
import { useLocale, useTranslations } from 'next-intl';
import styles from './Services.module.css';

export const metadata = {
  title: 'Our Services | PT. Limars Teknik Indonesia',
  description: 'Comprehensive services: restaurant kitchen sets, ducting systems, gas installation, well drilling, and electrical services.',
};

export default function ServicesPage() {
  const locale = useLocale();
  const t = useTranslations('Services');

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroBadge}>{t('heroBadge')}</span>
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSubtitle')}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, idx) => (
              <Link href={`/services/${service.slug}`} key={service.id} className={`${styles.serviceCard} ${idx === 0 ? styles.serviceCardLarge : ''}`}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <div className={styles.serviceContent}>
                  <h3>{service.title[locale]}</h3>
                  <span className={styles.serviceSubtitle}>{service.subtitle[locale]}</span>
                  <p>{service.shortDescription[locale]}</p>
                  <ul className={styles.featureList}>
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i}>✓ {f[locale]}</li>
                    ))}
                  </ul>
                  <span className={styles.serviceLink}>{t('learnMore')}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <div className={`container ${styles.ctaContent}`}>
          <h2>{t('ctaTitle')}</h2>
          <p>{t('ctaSubtitle')}</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-primary">{t('contactBtn')}</Link>
            <a href="https://wa.me/6281212671289" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              {t('whatsappBtn')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
