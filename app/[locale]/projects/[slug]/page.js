// app/[locale]/projects/[slug]/page.js
import { getProjectBySlug } from '../../../../lib/db';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ProjectLightbox from './ProjectLightbox';
import styles from './ProjectDetail.module.css';
import { setRequestLocale } from 'next-intl/server';
import { getProjects } from '../../../../lib/db';
import WhatsAppIcon from '../../../../components/WhatsAppIcon';
import UiIcon from '../../../../components/UiIcon';
import BreadcrumbJsonLd from '../../../../components/BreadcrumbJsonLd';
import { Link } from '../../../../i18n/routing';

export const revalidate = 0; // Fresh data for D1 dynamic updates

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
  if (!project) return { title: 'Project Not Found' };

  const name = project.name[locale] || project.name || '';
  const desc = project.description[locale] || project.description || '';

  return {
    title: `${name} | PT. Limars Teknik Indonesia`,
    description: desc,
    image: project.image,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const getTranslations = (await import('next-intl/server')).getTranslations;
  const t = await getTranslations({ locale, namespace: 'Projects' });

  // For related projects (same category, limit 3)
  const allProjects = await getProjects();
  const relatedProjects = allProjects
    .filter(p => {
      const matchCat = (p.category?.en === project.category?.en || p.category === project.category);
      return matchCat && p.id !== project.id;
    })
    .slice(0, 3);

  const name = project.name[locale] || project.name || '';
  const desc = project.description[locale] || project.description || '';
  const category = project.category[locale] || project.category || '';
  const location = project.location[locale] || project.location || '';
  const year = project.year;
  const image = project.image;
  const images = project.images;
  const scope = project.scope;
  const videoUrl = project.video_url;

  return (
    <>
      {/* JSON-LD for Project (CreativeWork) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: name,
            description: desc,
            image: image?.startsWith('http')
              ? image
              : `https://limarsteknik.com${image}`,
            dateCreated: year ? String(year) : undefined,
            creator: {
              '@type': 'Organization',
              name: 'PT. Limars Teknik Indonesia',
            },
            // Optional: locationCreated
          }),
        }}
      />
      <BreadcrumbJsonLd
        crumbs={[
          { name: t('breadcrumbProjects'), path: '/projects/' },
          { name: name, path: `/projects/${slug}/` },
        ]}
      />
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroGrid}>
            <div className={styles.heroImage}>
              {image && (
                <Image
                  src={image.startsWith('http') ? image : `https://limarsteknik.com${image}`}
                  alt={`${name} - Proyek ${category.toLowerCase()}`}
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
            <div className={styles.heroInfo}>
              <h1>{name}</h1>
              <div className={styles.heroMeta}>
                <span>{category}</span>
                <span> • </span>
                <span>{location}</span>
                {year && (
                  <>
                    <span> • </span>
                    <span>{year}</span>
                  </>
                )}
              </div>
              <p className={styles.heroDesc}>{desc}</p>
            </div>
          </div>
        </div>
      </section>

      {images && images.length > 1 && (
        <ProjectLightbox images={images} name={name} />
      )}

      {scope && scope.length > 0 && (
        <section className={styles.scope}>
          <div className="container">
            <h2>{t('scopeOfWork')}</h2>
            <ul className={styles.scopeList}>
              {scope.map((item, idx) => {
                const text =
                  typeof item === 'object'
                    ? item[locale] || item.en || ''
                    : item;
                return (
                  <li key={idx} className={styles.scopeItem}>
                    <UiIcon name="check" size={14} className={styles.scopeIcon} />
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {videoUrl && (
        <section className={styles.video}>
          <div className="container">
            <h2>{t('videoDocumentation')}</h2>
            <div style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%', // 16:9
              height: 0,
              overflow: 'hidden',
              borderRadius: 8,
            }}>
              <iframe
                src={`https://www.youtube.com/embed/${videoUrl.match(
                  /(?:youtu\.be\/|v=|\/embed\/|\/watch\?v=)([\w-]{11})/
                )?.[1]}`}
                title={`Video Dokumentasi ${name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
              />
            </div>
          </div>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section className={styles.relatedProjects}>
          <div className="container">
            <h2>{t('relatedProjectsTitle')}</h2>
            <div className={styles.relatedProjectsGrid}>
              {relatedProjects.map((proj, idx) => (
                <Link
                  key={idx}
                  href={`/projects/${proj.slug}`}
                  className={styles.relatedProjectCard}
                >
                  <div className={styles.relatedProjectImage}>
                    {proj.image && (
                      <Image
                        src={
                          proj.image.startsWith('http')
                            ? proj.image
                            : `https://limarsteknik.com${proj.image}`
                        }
                        alt={
                          proj.name[locale] ||
                          proj.name?.en ||
                          'Proyek Limars Teknik'
                        }
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                  </div>
                  <div className={styles.relatedProjectInfo}>
                    <h3>{proj.name[locale] || proj.name?.en || ''}</h3>
                    <p className={styles.relatedProjectLocation}>
                      {proj.location[locale] ||
                        proj.location?.en ||
                        ''}
                      {proj.year && ` • ${proj.year}`}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.cta}>
        <div className="container">
          <h2>{t('ctaTitle')}</h2>
          <p>{t('ctaSubtitle')}</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={`btn btn-primary`}>
              {t('ctaContactBtn')}
            </Link>
            <a
              href="https://wa.me/6281212671289"
              className={`btn btn-secondary`}
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