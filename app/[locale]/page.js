import { Link } from '../../i18n/routing';
import styles from './page.module.css';
import { products as staticProducts } from '../../data/products';
import { services as staticServices } from '../../data/services';
import { projects as staticProjects } from '../../data/projects';
import Image from 'next/image';
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server';
import { getProducts, getProjects, getServices } from '../../lib/db';

import { constructMetadata } from '../../lib/seo';
import { localize } from '../../lib/localize';
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import TrackedWhatsAppLink from '../../components/TrackedWhatsAppLink';
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
  { name: 'Al-Jazeerah Cikini', variant: 'clientLogoSignature', image: '/images/clients/al-jazeerah-signature.jpg' },
  { name: 'Royal Al-Jazeerah', variant: 'clientLogoSignature', image: '/images/clients/al-jazeerah-signature.png' },
  { name: 'Central Al-Jazeerah', variant: 'clientLogoCentral', image: '/images/clients/central-al-jazeerah.jpg' },
  { name: 'Al-Jazeerah Polonia', variant: 'clientLogoPolonia', image: '/images/clients/al-jazeerah-polonia.webp' },
  { name: 'Zahra Al-Jazeerah', variant: 'clientLogoZahra', image: '/images/clients/zahra-al-jazeerah.jpg' },
  { name: 'Nanamia Pizzeria Yogyakarta', variant: 'clientLogoNanamia', image: '/images/clients/nanamia-pizzeria-yogyakarta.png' },
  { name: 'Born-Ga', variant: 'clientLogoBornGa', image: '/images/clients/born-ga.jpg' },
  { name: 'Dashi Chazuke Zenraku', variant: 'clientLogoDashi', image: '/images/clients/dashi-chazuke-zenraku.jpg' },
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
  const featuredProjectsRaw = activeProjects.filter((project) => project.featured);
  // Sort featured projects: Dashi Chazuke Kamado (id 7) first for large hero card, then Nanamia B2 (id 13), then Polonia (id 3)
  const featuredOrder = [7, 13, 3];
  const featuredProjects = featuredProjectsRaw.sort((a, b) => {
    const idxA = featuredOrder.indexOf(a.id);
    const idxB = featuredOrder.indexOf(b.id);
    return (idxA === -1 ? 99 : idxA) - (idxB === -1 ? 99 : idxB);
  }).slice(0, 3);

  const stats = [
    { number: '11+', label: t('stats.years') },
    { number: '20+', label: t('stats.projects') },
    { number: '50+', label: t('stats.clients') },
    { number: '20+', label: t('stats.team') },
  ];

  const leadProject = featuredProjects[0] || activeProjects[0];

  // Build hasOfferCatalog from active services so JSON-LD stays in sync with real content
  const offerCatalog = {
    '@type': 'OfferCatalog',
    name: locale === 'id' ? 'Layanan Limars Teknik' : 'Limars Teknik Services',
    itemListElement: activeServices.map((svc, idx) => ({
      '@type': 'Offer',
      position: idx + 1,
      itemOffered: {
        '@type': 'Service',
        name: localize(svc.title, locale),
        description: localize(svc.shortDescription, locale),
        url: `https://limarsteknik.com/${locale}/services/${svc.slug}/`,
        provider: { '@type': 'Organization', name: 'PT. Limars Teknik Indonesia' },
      },
    })),
  };

  // Signature project images for the image[] property — helps Knowledge Graph associate
  // the brand with the actual work rather than just the logo.
  const signatureImages = [
    'https://limarsteknik.com/logo.png',
    ...activeProjects
      .filter((p) => p.featured && p.image)
      .slice(0, 5)
      .map((p) => (p.image.startsWith('http') ? p.image : `https://limarsteknik.com${p.image}`)),
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': 'https://limarsteknik.com/#organization',
    name: 'PT. Limars Teknik Indonesia',
    alternateName: ['Limars Teknik', 'CV Limars Teknik'],
    url: 'https://limarsteknik.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://limarsteknik.com/logo.png',
      width: 512,
      height: 512,
    },
    image: signatureImages,
    description: t('heroSubtitle'),
    slogan: t('heroBadge'),
    foundingDate: '2014',
    priceRange: '$$',
    openingHours: 'Mo-Fr 08:00-17:00, Sa 08:00-14:00',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Raden Saleh II/6 No. 70C',
      addressLocality: 'Jakarta',
      addressRegion: 'DKI Jakarta',
      postalCode: '10430',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.19158,
      longitude: 106.843908,
    },
    hasMap: 'https://www.google.com/maps/place/LIMARS+TEKNIK+-+JASA+PEMBUATAN+TUNGKU+ROTI+ARAB+DAN+PIZZA+TRADISIONAL/@-6.19158,106.843908,17z',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+6281212671289',
        contactType: 'customer service',
        email: 'info@limarsteknik.com',
        availableLanguage: ['Indonesian', 'English'],
        areaServed: 'ID',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+6281212671289',
        contactType: 'sales',
        email: 'sales@limarsteknik.com',
        availableLanguage: ['Indonesian', 'English'],
        areaServed: 'ID',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    knowsAbout: [
      'Traditional Oven Construction',
      'Wood-Fired Pizza Oven',
      'Mandi Oven',
      'Tannur Oven',
      'Tandoor Oven',
      'Kamado Stove',
      'Commercial Kitchen Fabrication',
      'SS304 Stainless Steel Kitchen Set',
      'Gas Piping Installation',
      'Kitchen Exhaust Ducting',
      'Restaurant Kitchen Engineering',
    ],
    hasOfferCatalog: offerCatalog,
    sameAs: [
      'https://www.facebook.com/cv.limarsteknik/',
      'https://x.com/limarstek',
      'https://www.youtube.com/@limarsteknik',
      'https://www.google.com/maps/place/LIMARS+TEKNIK+-+JASA+PEMBUATAN+TUNGKU+ROTI+ARAB+DAN+PIZZA+TRADISIONAL/@-6.19158,106.843908,17z',
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
                  alt="Limars Teknik stainless steel production facility"
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
                    alt={localize(leadProject.name, locale)}
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
                alt="Limars Teknik manufacturing facility"
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
              <Link href="/products" className={styles.textLink}>{t('products.viewAll')} <UiIcon name="arrowUpRight" size={14} className={styles.textLinkIcon} /></Link>
            </div>
          </div>

          <div className={styles.productGrid}>
            {featuredProducts.map((product, index) => {
              const name = localize(product.name, locale);
              const shortDesc = localize(product.shortDescription, locale);
              const category = localize(product.category, locale);
              const imageUrl = product.image && typeof product.image === 'object' ? product.image.url : product.image;

              return (
                <Link href={`/products/${product.slug}`} key={product.id} className={styles.productCard}>
                  <div className={styles.productImage}>
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt={`${name} - Limars Teknik commercial kitchen equipment`}
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
                    <span className={styles.productLink}>{t('products.viewDetails')} <UiIcon name="arrowUpRight" size={12} /></span>
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
              const title = localize(service.title, locale);
              const shortDesc = localize(service.shortDescription, locale);

              return (
                <Link href={`/services/${service.slug}`} key={service.id} className={styles.serviceCard}>
                  <span className={styles.serviceIndex}>0{index + 1}</span>
                  <ServiceIcon slug={service.slug} className={styles.serviceIcon} />
                  <h3>{title}</h3>
                  <p>{shortDesc}</p>
                  <span className={styles.serviceLink}>{t('services.learnMore')} <UiIcon name="arrowUpRight" size={12} /></span>
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
              <Link href="/projects" className={styles.textLink}>{t('projects.viewAll')} <UiIcon name="arrowUpRight" size={14} className={styles.textLinkIcon} /></Link>
            </div>
          </div>

          <div className={styles.projectGrid}>
            {featuredProjects.map((project, index) => {
              const name = localize(project.name, locale);
              const category = localize(project.category, locale);
              const location = localize(project.location, locale);
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
                    <span className={styles.projectArrow}><UiIcon name="arrowUpRight" size={14} /></span>
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
              <span key={logo.name} className={`${styles.clientLogo} ${logo.variant ? styles[logo.variant] : ''}`}>
                {logo.image ? (
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image src={logo.image} alt={logo.name} fill sizes="200px" style={{ objectFit: 'contain' }} />
                  </div>
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
              <TrackedWhatsAppLink href="https://wa.me/6281212671289" className="btn btn-secondary" label="home_cta">
                <WhatsAppIcon /> {t('cta.whatsappBtn')}
              </TrackedWhatsAppLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
