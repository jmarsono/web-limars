import { Link } from '../../../i18n/routing';
import { services } from '../../../data/services';
import styles from './Services.module.css';

import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server';

import { constructMetadata } from '../../../lib/seo';
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd';
import WhatsAppIcon from '../../../components/WhatsAppIcon';
import TrackedWhatsAppLink from '../../../components/TrackedWhatsAppLink';
import ServiceIcon from '../../../components/ServiceIcon';
import UiIcon from '../../../components/UiIcon';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.SEO;

  return constructMetadata({
    title: t.servicesTitle,
    description: t.servicesDesc,
    path: '/services/',
    locale,
  });
}

export default async function ServicesPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Services');

  const crumbs = [
    { name: t('heroBadge'), path: '/services/' }
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
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
                <ServiceIcon slug={service.slug} className={styles.serviceIcon} />
                <div className={styles.serviceContent}>
                  <h3>{service.title[locale]}</h3>
                  <span className={styles.serviceSubtitle}>{service.subtitle[locale]}</span>
                  <p>{service.shortDescription[locale]}</p>
                  <ul className={styles.featureList}>
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i}><UiIcon name="check" size={15} /> {f[locale]}</li>
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
            <TrackedWhatsAppLink href="https://wa.me/6281212671289" className="btn btn-secondary" label="services_list_cta">
              <WhatsAppIcon />
              {t('whatsappBtn')}
            </TrackedWhatsAppLink>
          </div>
        </div>
      </section>
    </>
  );
}
