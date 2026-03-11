import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '../../../data/services';
import styles from './ServiceDetail.module.css';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} | PT. Limars Teknik Indonesia`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: 'PT. Limars Teknik Indonesia'
    },
    description: service.shortDescription,
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title + ' Services',
      itemListElement: service.features.map((feature, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature
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
          <Link href="/services" className={styles.backLink}>← All Services</Link>
          <span className={styles.heroIcon}>{service.icon}</span>
          <h1>{service.title}</h1>
          <p className={styles.heroSubtitle}>{service.subtitle}</p>
        </div>
      </section>

      {/* Description */}
      <section className={`section ${styles.descSection}`}>
        <div className="container">
          <div className={styles.descGrid}>
            <div className={styles.descContent}>
              <h2>About This Service</h2>
              <p>{service.description}</p>
              <div className={styles.features}>
                <h3>What We Offer</h3>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className={styles.checkIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.descImage}>
              <div className={styles.imagePlaceholder}>
                <span>{service.icon}</span>
                <p>{service.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={`section ${styles.processSection}`}>
        <div className="container">
          <div className="section-header">
            <h2>Our Process</h2>
            <p>We follow a structured approach to ensure quality and satisfaction.</p>
          </div>
          <div className={styles.processGrid}>
            {service.process.map((step) => (
              <div key={step.step} className={styles.processCard}>
                <div className={styles.processNumber}>{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContent}`}>
          <h2>Interested in {service.title}?</h2>
          <p>Contact us for a free consultation and quotation.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
            <a href="https://wa.me/6281234567890" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
