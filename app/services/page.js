import Link from 'next/link';
import { services } from '../../data/services';
import styles from './Services.module.css';

export const metadata = {
  title: 'Our Services | PT. Limars Teknik Indonesia',
  description: 'Comprehensive services: restaurant kitchen sets, ducting systems, gas installation, well drilling, and electrical services.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroBadge}>Our Services</span>
          <h1>Comprehensive Engineering Solutions</h1>
          <p>From kitchen set design to electrical installation — we handle every aspect of your project.</p>
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
                  <h3>{service.title}</h3>
                  <span className={styles.serviceSubtitle}>{service.subtitle}</span>
                  <p>{service.shortDescription}</p>
                  <ul className={styles.featureList}>
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i}>✓ {f}</li>
                    ))}
                  </ul>
                  <span className={styles.serviceLink}>Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <div className={`container ${styles.ctaContent}`}>
          <h2>Need a Custom Solution?</h2>
          <p>Contact us to discuss your specific requirements. Our engineering team is ready to help.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
            <a href="https://wa.me/6281234567890" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
