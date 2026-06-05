import { Link, routing } from '../../../../i18n/routing';
import { notFound } from 'next/navigation';
import { services } from '../../../../data/services';
import Image from 'next/image';
import styles from './ServiceDetail.module.css';
import { setRequestLocale } from 'next-intl/server';

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services.map((s) => ({
      locale,
      slug: s.slug,
    }))
  );
}

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title[locale]} | PT. Limars Teknik Indonesia`,
    description: service.shortDescription[locale],
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const service = services.find(s => s.slug === slug);
  if (!service) notFound();

  // Load translations for static UI elements
  const getTranslations = (await import('next-intl/server')).getTranslations;
  const t = await getTranslations({ locale, namespace: 'Services' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title.en, // Schema.org prefers default/en usually
    provider: {
      '@type': 'LocalBusiness',
      name: 'PT. Limars Teknik Indonesia'
    },
    description: service.shortDescription.en,
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title.en + ' Services',
      itemListElement: service.features.map((featureObj, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: featureObj.en
        },
        position: index + 1
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <Link href="/services" className={styles.backLink}>{t('backLink')}</Link>
          <span className={styles.heroIcon}>{service.icon}</span>
          <h1>{service.title[locale]}</h1>
          <p className={styles.heroSubtitle}>{service.subtitle[locale]}</p>
        </div>
      </section>

      {/* Description */}
      <section className={`section ${styles.descSection}`}>
        <div className="container">
          <div className={styles.descGrid}>
            <div className={styles.descContent}>
              <h2>{t('aboutService')}</h2>
              <p>{service.description[locale]}</p>
              <div className={styles.features}>
                <h3>{t('whatWeOffer')}</h3>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className={styles.checkIcon}>✓</span>
                      {feature[locale]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.descImage}>
              <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '350px', backgroundColor: '#f0f0f0', borderRadius: '15px', overflow: 'hidden' }}>
                <Image 
                  src={service.image} 
                  alt={service.title[locale]} 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <div className="section-header">
            <h2>{t('ourProcess')}</h2>
            <p>{t('processSubtitle')}</p>
          </div>
          <div className={styles.processGrid}>
            {service.process.map((step) => (
              <div key={step.step} className={styles.processCard}>
                <div className={styles.processNumber}>{step.step}</div>
                <h4>{step.title[locale]}</h4>
                <p>{step.description[locale]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContent}`}>
          <h2>{t('interestedIn', { title: service.title[locale] })}</h2>
          <p>{t('interestedSubtitle')}</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-primary">{t('requestQuote')}</Link>
            <a href="https://wa.me/6281212671289" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              {t('chatWhatsapp')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
