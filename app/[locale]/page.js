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
import ServiceIcon from '../../components/ServiceIcon';
import UiIcon from '../../components/UiIcon';

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
  { icon: '01', key: 'fabrication' },
  { icon: '02', key: 'compliance' },
  { icon: '03', key: 'engineering' },
  { icon: '04', key: 'mfg' },
  { icon: '05', key: 'custom' },
  { icon: '06', key: 'support' },
];

const testimonials = [
  { name: 'Manager', company: 'Al-Jazeerah Cikini', key: '1', avatar: 'AJ' },
  { name: 'Head Chef', company: 'Nanamia Pizzeria Yogyakarta', key: '2', avatar: 'NP' },
  { name: 'Director', company: 'Born-Ga', key: '3', avatar: 'BG' },
];

const clientLogos = [
  { name: 'Al-Jazeerah Cikini', image: '/images/clients/al-jazeerah-signature.png' },
  { name: 'Royal Al-Jazeerah', image: '/images/clients/al-jazeerah-signature.png' },
  { name: 'Central Al-Jazeerah', image: '/images/clients/central-al-jazeerah.jpg' },
  { name: 'Al-Jazeerah Polonia', image: '/images/clients/al-jazeerah-polonia.webp' },
  { name: 'Zahra Al-Jazeerah', image: '/images/clients/zahra-al-jazeerah.png' },
  { name: 'Nanamia Pizzeria Yogyakarta', image: 'https://ugc.production.linktr.ee/4frNGiSuCEanOyoOYFwg_H68km6Qkr2v9U45N?io=true&size=avatar-v3_0' },
  { name: 'Born-Ga', image: '/images/clients/born-ga.png' },
  { name: 'Dashi Chazuke Zenraku', image: '/images/clients/dashi-chazuke-zenraku.jpg' },
];

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
  const featuredProducts = activeProducts.filter((product) => product.featured).slice(0, 4);
  const featuredProjects = activeProjects.filter((project) => project.featured).slice(0, 3);

  const stats = [
    { number: '10+', label: t('stats.years') },
    { number: '200+', label: t('stats.projects') },
    { number: '100+', label: t('stats.clients') },
    { number: '30+', label: t('stats.team') },
  ];

  const leadProject = featuredProjects[0] || activeProjects[0];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'PT. Limars Teknik Indonesia',
    url: 'https://limarsteknik.com',
    logo: 'https://limarsteknik.com/logo.png',
    description: t('heroSubtitle'),
    priceRange: '$$',
    openingHours: 'Mo-Fr 08:00-17:00, Sa 08:00-14:00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Raden Saleh II/6 No. 70C',
      addressLocality: 'Jakarta',
      addressRegion: 'DKI Jakarta',
      postalCode: '10430',
      addressCountry: 'ID',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+6281212671289',
      contactType: 'customer service',
      email: 'info@limarsteknik.com',
      availableLanguage: ['Indonesian', 'English'],
    },
    sameAs: [
      'https://www.facebook.com/cv.limarsteknik/',
      'https://x.com/limarstek',
      'https://www.youtube.com/@limarsteknik',
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbJsonLd crumbs={[]} />

      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowDot} />
                {t('heroBadge')}
              </span>
              <h1 className={styles.heroTitle}>
                LIMARS
                <span>TEKNIK</span>
              </h1>
              <p className={styles.heroSubtitle}>{t('heroSubtitle')}</p>
              <div className={styles.heroButtons}>
                <Link href="/products" className="btn btn-primary">{t('exploreProducts')}</Link>
                <Link href="/contact" className="btn btn-secondary">{t('getQuote')}</Link>
              </div>
              <div className={styles.heroNote}>
                <span>Jakarta · Indonesia</span>
                <span>Since 2014</span>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.heroImageMain}>
                <Image
                  src="/images/facility.webp"
                  alt="Fasilitas produksi dan fabrikasi stainless steel Limars Teknik"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 55vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.heroImageInset}>
                {leadProject?.image && (
                  <Image
                    src={typeof leadProject.image === 'object' ? leadProject.image.url : leadProject.image}
                    alt={typeof leadProject.name === 'object' ? leadProject.name[locale] : leadProject.name}
                    fill
                    sizes="180px"
                    style={{ objectFit: 'cover' }}
                  />
                )}
              </div>
              <div className={styles.heroStamp}>
                <span>ENGINEERED</span>
                <strong>FOR SERVICE</strong>
              </div>
            </div>
          </div>

          <div className={styles.heroStats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.heroStat}>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.companyBrief}`}>
        <div className="container">
          <div className={styles.briefGrid}>
            <div className={styles.briefLabel}>
              <span>01</span>
              <p>{t('companyBrief.tag')}</p>
            </div>
            <div className={styles.briefContent}>
              <h2>{t('companyBrief.title')}</h2>
              <p>{t('companyBrief.desc1')}</p>
              <p>{t('companyBrief.desc2')}</p>
              <Link href="/about" className="btn btn-outline">{t('companyBrief.cta')}</Link>
            </div>
            <div className={styles.briefImage}>
              <Image
                src="/images/facility.webp"
                alt="Fasilitas produksi PT Limars Teknik Indonesia"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <span>FABRICATION / 01</span>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          <div className={styles.sectionIntro}>
            <div>
              <span className={styles.sectionKicker}>02 / PRODUCTS</span>
              <h2>{t('products.title')}</h2>
            </div>
            <div>
              <p>{t('products.subtitle')}</p>
              <Link href="/products" className={styles.textLink}>{t('products.viewAll')} <span>↗</span></Link>
            </div>
          </div>

          <div className={styles.productGrid}>
            {featuredProducts.map((product, index) => {
              const name = typeof product.name === 'object' ? product.name[locale] : product.name;
              const shortDesc = typeof product.shortDescription === 'object' ? product.shortDescription[locale] : product.shortDescription;
              const category = typeof product.category === 'object' ? product.category[locale] : product.category;
              const imageUrl = product.image && typeof product.image === 'object' ? product.image.url : product.image;

              return (
                <Link href={`/products/${product.slug}`} key={product.id} className={styles.productCard}>
                  <div className={styles.productImage}>
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt={`${name} - Peralatan dapur komersial Limars Teknik`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                    <span className={styles.productIndex}>0{index + 1}</span>
                    <span className={styles.productBadge}>{category}</span>
                  </div>
                  <div className={styles.productInfo}>
                    <h3>{name}</h3>
                    <p>{shortDesc}</p>
                    <span className={styles.productLink}>{t('products.viewDetails')} <span>↗</span></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className={styles.sectionIntro}>
            <div>
              <span className={styles.sectionKicker}>03 / CAPABILITIES</span>
              <h2>{t('services.title')}</h2>
            </div>
            <p>{t('services.subtitle')}</p>
          </div>

          <div className={styles.serviceGrid}>
            {activeServices.slice(0, 5).map((service, index) => {
              const title = typeof service.title === 'object' ? service.title[locale] : service.title;
              const shortDesc = typeof service.shortDescription === 'object' ? service.shortDescription[locale] : service.shortDescription;

              return (
                <Link href={`/services/${service.slug}`} key={service.id} className={styles.serviceCard}>
                  <span className={styles.serviceIndex}>0{index + 1}</span>
                  <ServiceIcon slug={service.slug} className={styles.serviceIcon} />
                  <h3>{title}</h3>
                  <p>{shortDesc}</p>
                  <span className={styles.serviceLink}>Learn more <span>↗</span></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className={styles.whyHeader}>
            <div>
              <span className={styles.sectionKicker}>04 / METHOD</span>
              <h2>{t('why.title')}</h2>
            </div>
            <p>{t('why.subtitle')}</p>
          </div>
          <div className={styles.whyGrid}>
            {whyChooseUs.map((item) => (
              <div key={item.key} className={styles.whyCard}>
                <span className={styles.whyNumber}>{item.icon}</span>
                <h3>{t(`why.items.${item.key}_title`)}</h3>
                <p>{t(`why.items.${item.key}_desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.projectsSection}`}>
        <div className="container">
          <div className={styles.sectionIntro}>
            <div>
              <span className={styles.sectionKicker}>05 / SELECTED WORK</span>
              <h2>{t('projects.title')}</h2>
            </div>
            <div>
              <p>{t('projects.subtitle')}</p>
              <Link href="/projects" className={styles.textLink}>{t('projects.viewAll')} <span>↗</span></Link>
            </div>
          </div>

          <div className={styles.projectGrid}>
            {featuredProjects.map((project, index) => {
              const name = typeof project.name === 'object' ? project.name[locale] : project.name;
              const category = typeof project.category === 'object' ? project.category[locale] : project.category;
              const location = typeof project.location === 'object' ? project.location[locale] : project.location;
              const imageUrl = project.image && typeof project.image === 'object' ? project.image.url : project.image;

              return (
                <Link href="/projects" key={project.id} className={`${styles.projectCard} ${index === 0 ? styles.projectCardLarge : ''}`}>
                  <div className={styles.projectImage}>
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt={`${name} - Proyek fabrikasi Limars Teknik`}
                        fill
                        sizes={index === 0 ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                    <div className={styles.projectMeta}>
                      <span>{category}</span>
                      <strong>{name}</strong>
                      <small>{location}</small>
                    </div>
                    <span className={styles.projectArrow}>↗</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.clientSection}>
        <div className="container">
          <p className={styles.clientTitle}>{t('clients.title')}</p>
          <div className={styles.clientList}>
            {clientLogos.map((logo) => (
              <span key={logo.name} className={styles.clientLogo}>
                {logo.image ? (
                  <img src={logo.image} alt={logo.name} />
                ) : (
                  logo.name
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.testimonialSection}`}>
        <div className="container">
          <div className={styles.testimonialHeader}>
            <div>
              <span className={styles.sectionKicker}>06 / FIELD NOTES</span>
              <h2>{t('testimonials.title')}</h2>
            </div>
            <p>{t('testimonials.subtitle')}</p>
          </div>
          <div className={styles.testimonialGrid}>
            {testimonials.map((item) => (
              <figure key={item.key} className={styles.testimonialCard}>
                <div className={styles.testimonialTop}>
                  <span className={styles.testimonialStars}>{Array.from({ length: 5 }, (_, starIndex) => <UiIcon key={starIndex} name="star" size={14} />)}</span>
                  <span>0{item.key}</span>
                </div>
                <blockquote>“{t(`testimonials.quotes.${item.key}`)}”</blockquote>
                <figcaption>
                  <span className={styles.testimonialAvatar}>{item.avatar}</span>
                  <span><strong>{item.name}</strong><small>{item.company}</small></span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaContent}>
            <span className={styles.sectionKicker}>07 / START A PROJECT</span>
            <h2>{t('cta.title')}</h2>
            <p>{t('cta.subtitle')}</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-primary">{t('cta.contactBtn')}</Link>
              <a href="https://wa.me/6281212671289" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> {t('cta.whatsappBtn')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
