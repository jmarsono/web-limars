// app/[locale]/projects/ProjectsClient.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Projects.module.css';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import dynamic from 'next/dynamic';
const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false });
import 'yet-another-react-lightbox/styles.css';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import UiIcon from '@/components/UiIcon';

export default function ProjectsClient({ projects, projectCategories }) {
  const locale = useLocale();
  const t = useTranslations('Projects');
  const homeT = useTranslations('Home');
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setCurrentImgIndex(0);
  };

  const projectImages = selectedProject
    ? (selectedProject.images && selectedProject.images.length > 0
        ? selectedProject.images
        : [selectedProject.image])
    : [];

  const handlePrevImg = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
  };

  const handleNextImg = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
  };

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => {
        const catEn = p.category?.en || p.category_en || p.category || '';
        const catId = p.category?.id || p.category_id || p.category || '';
        return catEn === activeCategory || catId === activeCategory;
      });

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroBadge}>{t('heroBadge')}</span>
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSubtitle')}</p>
        </div>
      </section>

      {/* Projects */}
      <section className={`section ${styles.projectsSection}`}>
        <div className="container">
          <h2 className="sr-only">{t('heroTitle')}</h2>
          <div className={styles.filterBar}>
            {projectCategories.map((catKey) => {
              const catDisplay = catKey === 'All' ? t('all') : t(`categories.${catKey.replace(/\s+/g, '')}`);
              return (
                <button
                  key={catKey}
                  className={`${styles.filterBtn} ${activeCategory === catKey ? styles.filterActive : ''}`}
                  onClick={() => setActiveCategory(catKey)}
                >
                  {catDisplay}
                </button>
              );
            })}
          </div>

          <div className={styles.projectGrid}>
            {filteredProjects.map((project) => {
              const name = project.name[locale] || project.name || '';
              const category = project.category[locale] || project.category || '';
              const location = project.location[locale] || project.location || '';
              
              return (
                <div key={project.id} className={styles.projectCard} onClick={() => handleOpenProject(project)}>
                  <div className={styles.projectImage}>
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', backgroundColor: '#f0f0f0', overflow: 'hidden' }}>
                      {project.image && (
                        <Image 
                          src={project.image} 
                          alt={`${name} - Proyek Instalasi Kitchen Set Stainless Steel PT Limars Teknik Indonesia`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: 'cover' }}
                        />
                      )}
                    </div>
                    <div className={styles.projectOverlay}>
                      <span className={styles.projectCategory}>{category}</span>
                      <h3>{name}</h3>
                      <p className={styles.projectLocation}>
                        <UiIcon name="location" size={15} /> {location}{project.year ? ` • ${project.year}` : ''}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className={styles.empty}>
              <p>{t('emptyState')}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContent}`}>
          <h2>{homeT('cta.title')}</h2>
          <p>{homeT('cta.subtitle')}</p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-primary">{homeT('cta.contactBtn')}</Link>
            <a href="https://wa.me/6281212671289" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              {homeT('cta.whatsappBtn')}
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className={styles.modal} onClick={() => setSelectedProject(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedProject(null)} aria-label="Close project details"><UiIcon name="close" size={18} /></button>
            <div className={styles.modalSlider} onClick={() => setLightboxOpen(true)} style={{ cursor: 'zoom-in' }}>
              {projectImages.length > 1 && (
                <div className={styles.imageCounter}>
                  {currentImgIndex + 1} / {projectImages.length}
                </div>
              )}
              {projectImages[currentImgIndex] && (
                <Image 
                  src={projectImages[currentImgIndex]} 
                  alt={`${selectedProject.name[locale] || selectedProject.name || ''} - foto ${currentImgIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              )}
              {projectImages.length > 1 && (
                <>
                  <button className={`${styles.sliderBtn} ${styles.sliderPrev}`} onClick={handlePrevImg} aria-label="Previous image">‹</button>
                  <button className={`${styles.sliderBtn} ${styles.sliderNext}`} onClick={handleNextImg} aria-label="Next image">›</button>
                  <div className={styles.sliderDots}>
                    {projectImages.map((_, idx) => (
                      <button
                        key={idx}
                        className={`${styles.dot} ${idx === currentImgIndex ? styles.dotActive : ''}`}
                        onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(idx); }}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className={styles.modalBody}>
              <span className={styles.modalCategory}>
                {selectedProject.category[locale] || selectedProject.category || ''}
              </span>
              <h2>{selectedProject.name[locale] || selectedProject.name || ''}</h2>
              <p className={styles.modalLocation}>
                <UiIcon name="location" size={15} /> {selectedProject.location[locale] || selectedProject.location || ''}{selectedProject.year ? ` • ${selectedProject.year}` : ''}
              </p>
              <p className={styles.modalDesc}>
                {selectedProject.description[locale] || selectedProject.description || ''}
              </p>
              {selectedProject.scope && selectedProject.scope.length > 0 && (
                <div className={styles.modalScope}>
                  <h3>{t('scopeOfWork')}</h3>
                  <ul>
                    {selectedProject.scope.map((s, i) => (
                      <li key={i}><UiIcon name="check" size={15} /> {typeof s === 'object' ? s[locale] || s.en : s}</li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedProject.videoUrl && (() => {
                const match = selectedProject.videoUrl.match(/(?:youtu\.be\/|v=|\/embed\/|\/watch\?v=)([\w-]{11})/);
                return match ? (
                  <div className={styles.modalVideo}>
                    <h3>Video Dokumentasi</h3>
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 8 }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${match[1]}`}
                        title={`Video dokumentasi ${selectedProject.name[locale] || selectedProject.name || ''}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      />
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          </div>
        </div>
      )}
      {/* Modal Lightbox */}
      {selectedProject && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={currentImgIndex}
          slides={projectImages.map(src => ({ src }))}
        />
      )}
    </>
  );
}
