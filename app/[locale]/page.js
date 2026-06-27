import { Link } from '../../i18n/routing';
import styles from './page.module.css';
import { products as staticProducts } from '../../data/products';
import { services as staticServices } from '../../data/services';
import { projects as staticProjects } from '../../data/projects';
import Image from 'next/image';
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server';
import { getProducts, getProjects, getServices } from '../../lib/db';

import { constructMetadata } from '../../lib/seo';
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd';
import WhatsAppIcon from '../../components/WhatsAppIcon';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.SEO;

  const metadata = constructMetadata({
    title: t.homeTitle,
    description: t.homeDescription,
    path: '/',
    locale,
  });

  return {
    ...metadata,
    title: {
      absolute: t.homeTitle,
    },
  };
}



const whyChooseUs = [
  { icon: '🔩', key: 'fabrication' },
  { icon: '📋', key: 'compliance' },
  { icon: '👨‍🔬', key: 'engineering' },
  { icon: '🏭', key: 'mfg' },
  { icon: '🔧', key: 'custom' },
  { icon: '🤝', key: 'support' },
];

const testimonials = [
  { name: 'Manager', company: 'Al-Jazeerah Cikini', key: '1', avatar: 'AJ' },
  { name: 'Head Chef', company: 'Namamia Pizzeria Yogyakarta', key: '2', avatar: 'NP' },
  { name: 'Director', company: 'Born-Ga', key: '3', avatar: 'BG' },
];

const clientLogos = ['Al-Jazeerah Cikini', 'Royal Al-Jazeerah', 'Central Al-Jazeerah', 'Al-Jazeerah Polonia', 'Zahra Al-Jazeerah', 'Namamia Pizzeria Yogyakarta', 'Born-Ga', 'Dashi Chazuke Zenraku'];

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Home');



  let dbProducts = [];
  let dbServices = [];
  let dbProjects = [];

  try {
    dbProducts = await getProducts();
    dbServices = await getServices();
    dbProjects = await getProjects();
  } catch (err) {
    console.error('Error loading database content:', err);
  }

  const activeProducts = dbProducts.length > 0 ? dbProducts : staticProducts;
  const activeServices = dbServices.length > 0 ? dbServices : staticServices;
  const activeProjects = dbProjects.length > 0 ? dbProjects : staticProjects;

  const featuredProducts = activeProducts.filter(p => p.featured).slice(0, 4);
  const featuredProjects = activeProjects.filter(p => p.featured).slice(0, 3);

  const stats = [
    { number: '10+', label: t('stats.years') },
    { number: '200+', label: t('stats.projects') },
    { number: '100+', label: t('stats.clients') },
    { number: '30+', label: t('stats.team') },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'PT. Limars Teknik Indonesia',
    url: 'https://www.limarsteknik.com',
    logo: 'https://www.limarsteknik.com/logo.png',
    description: "Indonesia's leading commercial kitchen engineering firm specializing in precision stainless steel fabrication, certified gas piping systems, ducting, and integrated MEP solutions.",
    priceRange: '$$',
    openingHours: 'Mo-Fr 08:00-17:00, Sa 08:00-14:00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Raden Saleh II/6 No. 70C',
      addressLocality: 'Jakarta',
      addressRegion: 'DKI Jakarta',
      postalCode: '10430',
      addressCountry: 'ID'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-6.1848',
      longitude: '106.8451'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+6281212671289',
      contactType: 'customer service',
      email: 'info@limarsteknik.com',
      availableLanguage: ['Indonesian', 'English']
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
      <BreadcrumbJsonLd crumbs={[]} />
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
              <div style={{ position: 'relative', width: '100%', minHeight: '300px', borderRadius: '15px', overflow: 'hidden' }}>
                <Image 
                  src="/images/facility.webp" 
                  alt="Fasilitas Produksi PT Limars Teknik Indonesia - Fabrikasi Kitchen Set Stainless Steel Jakarta"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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
            {featuredProducts.map((product) => {
              const name = typeof product.name === 'object' ? product.name[locale] : product.name;
              const shortDesc = typeof product.shortDescription === 'object' ? product.shortDescription[locale] : product.shortDescription;
              const category = typeof product.category === 'object' ? product.category[locale] : product.category;
              const imageUrl = (product.image && typeof product.image === 'object') ? product.image.url : (product.image || '');

              return (
                <Link href={`/products/${product.slug}`} key={product.id} className={styles.productCard}>
                  <div className={styles.productImage}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                      {imageUrl && (
                        <Image
                          src={imageUrl}
                          alt={`${name} - Peralatan Dapur Komersial Limars Teknik Jakarta`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          style={{ objectFit: 'cover' }}
                        />
                      )}
                    </div>
                    <div className={styles.productBadge}>{category}</div>
                  </div>
                  <div className={styles.productInfo}>
                    <h3>{name}</h3>
                    <p>{shortDesc}</p>
                    <span className={styles.productLink}>{t('products.viewDetails')}</span>
                  </div>
                </Link>
              );
            })}
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
            {activeServices.map((service) => {
              const title = typeof service.title === 'object' ? service.title[locale] : service.title;
              const shortDesc = typeof service.shortDescription === 'object' ? service.shortDescription[locale] : service.shortDescription;

              return (
                <Link href={`/services/${service.slug}`} key={service.id} className={styles.serviceCard}>
                  <span className={styles.serviceIcon}>{service.icon}</span>
                  <h3>{title}</h3>
                  <p>{shortDesc}</p>
                  <span className={styles.serviceLink}>{t('services.learnMore')}</span>
                </Link>
              );
            })}
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
                <h3>{t(`why.items.${item.key}_title`)}</h3>
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
            {featuredProjects.map((project) => {
              const name = typeof project.name === 'object' ? project.name[locale] : project.name;
              const category = typeof project.category === 'object' ? project.category[locale] : project.category;
              const location = typeof project.location === 'object' ? project.location[locale] : project.location;
              const imageUrl = (project.image && typeof project.image === 'object') ? project.image.url : (project.image || '');

              return (
                <div key={project.id} className={styles.projectCard}>
                  <div className={styles.projectImage}>
                    <div style={{ position: 'relative', width: '100%', minHeight: '250px', overflow: 'hidden' }}>
                      {imageUrl && (
                        <Image
                          src={imageUrl}
                          alt={`${name} - Proyek Fabrikasi PT Limars Teknik Indonesia`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: 'cover' }}
                        />
                      )}
                    </div>
                    <div className={styles.projectOverlay}>
                      <span className={styles.projectCategory}>{category}</span>
                      <h3>{name}</h3>
                      <p>{location}</p>
                    </div>
                  </div>
                </div>
              );
            })}
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
              <WhatsAppIcon />
              {t('cta.whatsappBtn')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}