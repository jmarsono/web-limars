import { Link } from '../../i18n/routing';
import styles from './page.module.css';
import { products } from '../../data/products';
import { services } from '../../data/services';
import { projects } from '../../data/projects';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '500+', label: 'Projects Completed' },
  { number: '300+', label: 'Clients Served' },
  { number: '50+', label: 'Team Members' },
];

const whyChooseUs = [
  { icon: '🏭', key: 'mfg' },
  { icon: '👷', key: 'team' },
  { icon: '🔧', key: 'custom' },
  { icon: '✅', key: 'mat' },
  { icon: '🛡️', key: 'safe' },
  { icon: '🤝', key: 'support' },
];

const testimonials = [
  { name: 'Manager', company: 'Al-Jazeerah Cikini', key: '1', avatar: 'AJ' },
  { name: 'Head Chef', company: 'Nanamia Pizzeria Yogyakarta', key: '2', avatar: 'NP' },
  { name: 'Director', company: 'Born-Ga', key: '3', avatar: 'BG' },
];

const clientLogos = ['Al-Jazeerah Cikini', 'Royal Al-Jazeerah', 'Central Al-Jazeerah', 'Al-Jazeerah Polonia', 'Zahra Al-Jazeerah', 'Nanamia Pizzeria Yogyakarta', 'Born-Ga', 'Dashi Chazuke Zenraku'];

export default function Home() {
  const locale = useLocale();
  const t = useTranslations('Home');
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  const stats = [
    { number: '10+', label: t('stats.years') },
    { number: '500+', label: t('stats.projects') },
    { number: '300+', label: t('stats.clients') },
    { number: '50+', label: t('stats.team') },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'PT. Limars Teknik Indonesia',
    url: 'https://www.limarsteknik.com',
    logo: 'https://www.limarsteknik.com/logo.png',
    description: "Indonesia's Leading Kitchen Equipment Manufacturer and Engineering Solutions Provider.",
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Raden Saleh II/6 No. 70C',
      addressLocality: 'Jakarta',
      addressRegion: 'DKI Jakarta',
      postalCode: '',
      addressCountry: 'ID'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+6281212671289',
      contactType: 'customer service',
      email: 'info@limarsteknik.com'
    },
    sameAs: [
      'https://www.facebook.com/cv.limarsteknik/',
      'https://x.com/limarstek',
      'https://www.youtube.com/@limarsteknik'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ===== HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroPattern}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroBadge}>{t('heroBadge')}</span>
          <h1 className={styles.heroTitle}>
            PT. LIMARS TEKNIK<br />
            <span className={styles.heroHighlight}>INDONESIA</span>
          </h1>
          <p className={styles.heroSubtitle}>
            {t('heroSubtitle')}
          </p>
          <div className={styles.heroButtons}>
            <Link href="/products" className="btn btn-primary">{t('exploreProducts')}</Link>
            <Link href="/contact" className="btn btn-secondary">{t('getQuote')}</Link>
          </div>
          <div className={styles.heroStats}>
            {stats.map((stat, idx) => (
              <div key={idx} className={styles.heroStat}>
                <span className={styles.heroStatNumber}>{stat.number}</span>
                <span className={styles.heroStatLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPANY BRIEF ===== */}
      <section className={`section ${styles.companyBrief}`}>
        <div className="container">
          <div className={styles.briefGrid}>
            <div className={styles.briefContent}>
              <span className={styles.sectionTag}>{t('companyBrief.tag')}</span>
              <h2>{t('companyBrief.title')}</h2>
              <p>
                {t('companyBrief.desc1')}
              </p>
              <p>
                {t('companyBrief.desc2')}
              </p>
              <Link href="/about" className="btn btn-outline">{t('companyBrief.cta')}</Link>
            </div>
            <div className={styles.briefImage}>
              <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '300px', borderRadius: '15px', overflow: 'hidden' }}>
                <Image 
                  src="/images/facility.png" 
                  alt={t('companyBrief.imgCaption')}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          <div className="section-header">
            <h2>{t('products.title')}</h2>
            <p>{t('products.subtitle')}</p>
          </div>
          <div className={styles.productGrid}>
            {featuredProducts.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id} className={styles.productCard}>
                <div className={styles.productImage}>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                    <Image 
                      src={product.image} 
                      alt={product.name[locale]} 
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.productBadge}>{product.category[locale]}</div>
                </div>
                <div className={styles.productInfo}>
                  <h3>{product.name[locale]}</h3>
                  <p>{product.shortDescription[locale]}</p>
                  <span className={styles.productLink}>{t('products.viewDetails')}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <Link href="/products" className="btn btn-dark">{t('products.viewAll')}</Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className="section-header">
            <h2>{t('services.title')}</h2>
            <p>{t('services.subtitle')}</p>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <Link href={`/services/${service.slug}`} key={service.id} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>{service.icon}</span>
                <h3>{service.title[locale]}</h3>
                <p>{service.shortDescription[locale]}</p>
                <span className={styles.serviceLink}>{t('services.learnMore')}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className="section-header">
            <h2>{t('why.title')}</h2>
            <p>{t('why.subtitle')}</p>
          </div>
          <div className={styles.whyGrid}>
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className={styles.whyCard}>
                <span className={styles.whyIcon}>{item.icon}</span>
                <h4>{t(`why.items.${item.key}_title`)}</h4>
                <p>{t(`why.items.${item.key}_desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className={`section ${styles.projectsSection}`}>
        <div className="container">
          <div className="section-header">
            <h2>{t('projects.title')}</h2>
            <p>{t('projects.subtitle')}</p>
          </div>
          <div className={styles.projectGrid}>
            {featuredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '250px', overflow: 'hidden' }}>
                    <Image 
                      src={project.image} 
                      alt={project.name[locale]} 
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.projectOverlay}>
                    <span className={styles.projectCategory}>{project.category[locale]}</span>
                    <h3>{project.name[locale]}</h3>
                    <p>{project.location[locale]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <Link href="/projects" className="btn btn-dark">{t('projects.viewAll')}</Link>
          </div>
        </div>
      </section>

      {/* ===== CLIENT LOGOS ===== */}
      <section className={styles.clientSection}>
        <div className="container">
          <p className={styles.clientTitle}>{t('clients.title')}</p>
          <div className={styles.marqueeWrapper}>
            <div className={styles.marquee}>
              {[...clientLogos, ...clientLogos].map((logo, idx) => (
                <div key={idx} className={styles.clientLogo}>
                  <span>{logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className={`section ${styles.testimonialSection}`}>
        <div className="container">
          <div className="section-header">
            <h2>{t('testimonials.title')}</h2>
            <p>{t('testimonials.subtitle')}</p>
          </div>
          <div className={styles.testimonialGrid}>
            {testimonials.map((tItem, idx) => (
              <div key={idx} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialQuote}>&ldquo;{t(`testimonials.quotes.${tItem.key}`)}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>{tItem.avatar}</div>
                  <div>
                    <strong>{tItem.name}</strong>
                    <span>{tItem.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaOverlay}></div>
        <div className={`container ${styles.ctaContent}`}>
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.subtitle')}</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-primary">{t('cta.contactBtn')}</Link>
            <a href="https://wa.me/6281212671289" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              {t('cta.whatsappBtn')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
