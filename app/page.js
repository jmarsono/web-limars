import Link from 'next/link';
import styles from './page.module.css';
import { products } from '../data/products';
import { services } from '../data/services';
import { projects } from '../data/projects';

const stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '500+', label: 'Projects Completed' },
  { number: '300+', label: 'Clients Served' },
  { number: '50+', label: 'Team Members' },
];

const whyChooseUs = [
  { icon: '🏭', title: 'Own Manufacturing', description: 'In-house fabrication facility with modern equipment for precise, high-quality production.' },
  { icon: '👷', title: 'Expert Team', description: 'Experienced engineers, fabricators, and installers dedicated to every project.' },
  { icon: '🔧', title: 'Custom Solutions', description: 'Tailored equipment and installations to meet your exact specifications and needs.' },
  { icon: '✅', title: 'Quality Materials', description: 'Premium stainless steel and certified components for lasting durability.' },
  { icon: '🛡️', title: 'Safety Certified', description: 'All installations comply with safety regulations and industry standards.' },
  { icon: '🤝', title: 'After-Sales Support', description: 'Ongoing maintenance, repairs, and support long after installation.' },
];

const testimonials = [
  { name: 'Ahmad Rizal', company: 'Nusantara Restaurant Group', quote: 'Limars Teknik delivered our complete kitchen setup on time and with exceptional quality. Their team was professional from design to installation.', avatar: 'AR' },
  { name: 'Sarah Chen', company: 'Grand Hyatt Jakarta', quote: 'We chose Limars for their expertise in commercial kitchen equipment. The custom wok ranges and ducting system have been performing flawlessly.', avatar: 'SC' },
  { name: 'Budi Santoso', company: 'Bakery Central Indonesia', quote: 'The combi ovens and deck ovens from Limars are built to last. Their after-sales service is responsive and reliable.', avatar: 'BS' },
];

const clientLogos = ['Hotel Santika', 'Grand Hyatt', 'Pizza Hut', 'Sushi Tei', 'Bakmi GM', 'HokBen', 'Solaria', 'J.CO Donuts'];

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'PT. Limars Teknik Indonesia',
    url: 'https://www.limarsteknik.co.id',
    logo: 'https://www.limarsteknik.co.id/logo.png',
    description: "Indonesia's Leading Kitchen Equipment Manufacturer and Engineering Solutions Provider.",
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Industri No. 123',
      addressLocality: 'Jakarta Barat',
      addressRegion: 'DKI Jakarta',
      postalCode: '11510',
      addressCountry: 'ID'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-21-1234-5678',
      contactType: 'customer service',
      email: 'info@limarsteknik.co.id'
    },
    sameAs: [
      'https://www.facebook.com/limarsteknik',
      'https://www.instagram.com/limarsteknik'
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
          <span className={styles.heroBadge}>🏆 Trusted Kitchen Equipment Manufacturer</span>
          <h1 className={styles.heroTitle}>
            PT. LIMARS TEKNIK<br />
            <span className={styles.heroHighlight}>INDONESIA</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Your Trusted Partner in Kitchen Equipment Manufacturing &amp; Engineering Solutions.
            From traditional stoves to modern commercial ovens — we build it all.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/products" className="btn btn-primary">Explore Products</Link>
            <Link href="/contact" className="btn btn-secondary">Get a Quote</Link>
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
              <span className={styles.sectionTag}>About Us</span>
              <h2>Indonesia&apos;s Leading Kitchen Equipment Manufacturer</h2>
              <p>
                PT. Limars Teknik Indonesia is a specialized manufacturer of commercial and residential kitchen heating equipment.
                With over a decade of experience, we deliver high-quality products and comprehensive engineering services across Indonesia.
              </p>
              <p>
                From traditional wok ranges and tandoor ovens to state-of-the-art combi ovens, we combine craftsmanship with modern
                engineering to create kitchen solutions that last.
              </p>
              <Link href="/about" className="btn btn-outline">Learn More About Us</Link>
            </div>
            <div className={styles.briefImage}>
              <div className={styles.briefImagePlaceholder}>
                <span>🏭</span>
                <p>Our Manufacturing Facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          <div className="section-header">
            <h2>Our Products</h2>
            <p>Discover our wide range of commercial kitchen equipment, from traditional cooking solutions to modern technology.</p>
          </div>
          <div className={styles.productGrid}>
            {featuredProducts.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id} className={styles.productCard}>
                <div className={styles.productImage}>
                  <div className={styles.productImagePlaceholder}>
                    <span>{product.category === 'Traditional Stoves' ? '🔥' : product.category === 'Regional Ovens' ? '🍕' : product.category === 'Modern Ovens' ? '⚙️' : '🍳'}</span>
                  </div>
                  <div className={styles.productBadge}>{product.category}</div>
                </div>
                <div className={styles.productInfo}>
                  <h3>{product.name}</h3>
                  <p>{product.shortDescription}</p>
                  <span className={styles.productLink}>View Details →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <Link href="/products" className="btn btn-dark">View All Products</Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive engineering and installation services for restaurants, homes, and commercial buildings.</p>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <Link href={`/services/${service.slug}`} key={service.id} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <span className={styles.serviceLink}>Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Limars Teknik?</h2>
            <p>We bring together quality manufacturing, expert engineering, and dedicated service.</p>
          </div>
          <div className={styles.whyGrid}>
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className={styles.whyCard}>
                <span className={styles.whyIcon}>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className={`section ${styles.projectsSection}`}>
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>See some of our completed projects across Indonesia.</p>
          </div>
          <div className={styles.projectGrid}>
            {featuredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <div className={styles.projectImagePlaceholder}>
                    <span>📸</span>
                    <p>{project.name}</p>
                  </div>
                  <div className={styles.projectOverlay}>
                    <span className={styles.projectCategory}>{project.category}</span>
                    <h3>{project.name}</h3>
                    <p>{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <Link href="/projects" className="btn btn-dark">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* ===== CLIENT LOGOS ===== */}
      <section className={styles.clientSection}>
        <div className="container">
          <p className={styles.clientTitle}>Trusted by Leading Brands Across Indonesia</p>
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
            <h2>What Our Clients Say</h2>
            <p>Hear from businesses who trust Limars Teknik for their kitchen solutions.</p>
          </div>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t, idx) => (
              <div key={idx} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>{t.avatar}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.company}</span>
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
          <h2>Ready to Build Your Dream Kitchen?</h2>
          <p>Get in touch with our team for a free consultation and quotation.</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-primary">Contact Us Today</Link>
            <a href="https://wa.me/6281234567890" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
