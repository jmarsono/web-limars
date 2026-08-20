import { getProjectBySlug, getProjects } from '../../../../lib/db';
import { notFound } from 'next/navigation';
import ProjectLightbox from './ProjectLightbox';
import styles from './ProjectDetail.module.css';
import { setRequestLocale } from 'next-intl/server';
import WhatsAppIcon from '../../../../components/WhatsAppIcon';
import UiIcon from '../../../../components/UiIcon';
import BreadcrumbJsonLd from '../../../../components/BreadcrumbJsonLd';
import { Link } from '../../../../i18n/routing';

export const revalidate = 0;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.flatMap((project) =>
    ['id', 'en'].map((locale) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: 'Proyek Tidak Ditemukan' };

  const name = typeof project.name === 'object' ? (project.name[locale] || project.name.id || project.name.en) : project.name;
  const desc = typeof project.description === 'object' ? (project.description[locale] || project.description.id || project.description.en) : project.description;

  return {
    title: `${name} | PT. Limars Teknik Indonesia`,
    description: desc,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const getTranslations = (await import('next-intl/server')).getTranslations;
  const t = await getTranslations({ locale, namespace: 'Projects' });

  // Related projects
  const allProjects = await getProjects();
  const relatedProjects = allProjects
    .filter(p => {
      const currentCat = typeof project.category === 'object' ? project.category.en : project.category;
      const pCat = typeof p.category === 'object' ? p.category.en : p.category;
      return pCat === currentCat && p.id !== project.id;
    })
    .slice(0, 3);

  const name = typeof project.name === 'object' ? (project.name[locale] || project.name.id || project.name.en || '') : project.name;
  const desc = typeof project.description === 'object' ? (project.description[locale] || project.description.id || project.description.en || '') : project.description;
  const category = typeof project.category === 'object' ? (project.category[locale] || project.category.id || project.category.en || '') : project.category;
  const location = typeof project.location === 'object' ? (project.location[locale] || project.location.id || project.location.en || '') : project.location;
  
  const year = project.year;
  const mainImage = project.image;
  const galleryImages = project.images && project.images.length > 0 ? project.images : (mainImage ? [mainImage] : []);
  const scope = project.scope;
  const videoUrl = project.video_url;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    additionalType: 'CaseStudy',
    name: name,
    description: desc,
    image: mainImage && !mainImage.startsWith('http') ? `https://limarsteknik.com${mainImage}` : mainImage,
    locationCreated: location,
    dateCreated: year ? String(year) : undefined,
    author: {
      '@type': 'Organization',
      name: 'PT. Limars Teknik Indonesia'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        crumbs={[
          { name: t('breadcrumbProjects'), path: '/projects/' },
          { name: name, path: `/projects/${slug}/` },
        ]}
      />

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <nav className={styles.breadcrumbNav}>
            <Link href="/projects">{t('breadcrumbProjects')}</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span>{name}</span>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <span className={styles.heroBadge}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: 4 }}><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/></svg>
                {category}
              </span>
              <h1 className={styles.heroTitle}>{name}</h1>
              <div className={styles.heroMeta}>
                <div className={styles.metaItem}>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                  <span>{location}</span>
                </div>
                {year && (
                  <div className={styles.metaItem}>
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
                    <span>{year}</span>
                  </div>
                )}
                <div className={styles.metaItem}>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
                  <span>PT Limars Teknik Indonesia</span>
                </div>
              </div>
              <p className={styles.heroDesc}>{desc}</p>
            </div>

            <div className={styles.mainImageWrapper}>
              {mainImage ? (
                <img
                  src={mainImage}
                  alt={`${name} - Dokumentasi Utama`}
                  className={styles.mainImg}
                />
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '240px', color: '#94a3b8' }}>
                  Dokumentasi Foto Proyek
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY LIGHTBOX */}
      {galleryImages.length > 0 && (
        <ProjectLightbox images={galleryImages} name={name} />
      )}

      {/* SCOPE OF WORK */}
      {scope && scope.length > 0 && (
        <section className={styles.scope}>
          <div className={styles.container}>
            <div className={styles.scopeCard}>
              <h2>
                <UiIcon name="check" size={24} className={styles.scopeIcon} />
                {t('scopeOfWork')}
              </h2>
              <div className={styles.scopeGrid}>
                {scope.map((item, idx) => {
                  const text = typeof item === 'object' ? (item[locale] || item.id || item.en || '') : item;
                  return (
                    <div key={idx} className={styles.scopeItem}>
                      <UiIcon name="check" size={16} className={styles.scopeIcon} />
                      <span>{text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* VIDEO DOCUMENTATION */}
      {videoUrl && (
        <section className={styles.videoSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader} style={{ color: '#ffffff' }}>
              <span className={styles.sectionBadge} style={{ color: '#38bdf8' }}>Video Lapangan</span>
              <h2 style={{ color: '#ffffff' }}>{t('videoDocumentation')}</h2>
            </div>
            <div className={styles.videoWrapper}>
              <iframe
                src={`https://www.youtube.com/embed/${
                  videoUrl.match(/(?:youtu\.be\/|v=|\/embed\/|\/watch\?v=)([\w-]{11})/)?.[1]
                }`}
                title={`Video Dokumentasi ${name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className={styles.videoIframe}
              />
            </div>
          </div>
        </section>
      )}

      {/* RELATED PROJECTS */}
      {relatedProjects.length > 0 && (
        <section className={styles.related}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>Portofolio Lainnya</span>
              <h2>{t('relatedProjectsTitle')}</h2>
            </div>
            <div className={styles.relatedGrid}>
              {relatedProjects.map((proj, idx) => {
                const projName = typeof proj.name === 'object' ? (proj.name[locale] || proj.name.id || proj.name.en) : proj.name;
                const projLoc = typeof proj.location === 'object' ? (proj.location[locale] || proj.location.id || proj.location.en) : proj.location;
                return (
                  <Link
                    key={idx}
                    href={`/projects/${proj.slug}`}
                    className={styles.relatedCard}
                  >
                    {proj.image && (
                      <img
                        src={proj.image}
                        alt={projName}
                        className={styles.relatedImg}
                      />
                    )}
                    <div className={styles.relatedInfo}>
                      <h3>{projName}</h3>
                      <p className={styles.relatedMeta}>
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style={{ verticalAlign: '-2px', marginRight: 4 }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                        {projLoc} {proj.year && ` • ${proj.year}`}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA SECTION */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>{t('ctaTitle')}</h2>
          <p>{t('ctaSubtitle')}</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.btnPrimary}>
              {t('ctaContactBtn')}
            </Link>
            <a
              href="https://wa.me/6281212671289"
              className={styles.btnWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon /> {t('ctaWhatsappBtn')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}