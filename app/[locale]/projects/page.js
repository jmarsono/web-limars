'use client';

import { useState } from 'react';
import { projects, projectCategories } from '../../../data/projects';
import styles from './Projects.module.css';

import { useLocale, useTranslations } from 'next-intl';

export default function ProjectsPage() {
  const locale = useLocale();
  const t = useTranslations('Projects');
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.en === activeCategory || p.category.id === activeCategory);

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
            {filteredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard} onClick={() => setSelectedProject(project)}>
                <div className={styles.projectImage}>
                  <div className={styles.projectImagePlaceholder}>
                    <span>📸</span>
                    <p>{project.name[locale]}</p>
                  </div>
                  <div className={styles.projectOverlay}>
                    <span className={styles.projectCategory}>{project.category[locale]}</span>
                    <h3>{project.name[locale]}</h3>
                    <p className={styles.projectLocation}>📍 {project.location[locale]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className={styles.empty}>
              <p>{t('emptyState')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className={styles.modal} onClick={() => setSelectedProject(null)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedProject(null)}>✕</button>
            <div className={styles.modalImage}>
              <div className={styles.modalImagePlaceholder}>
                <span>📸</span>
              </div>
            </div>
            <div className={styles.modalBody}>
              <span className={styles.modalCategory}>{selectedProject.category[locale]}</span>
              <h2>{selectedProject.name[locale]}</h2>
              <p className={styles.modalLocation}>📍 {selectedProject.location[locale]}</p>
              <p className={styles.modalDesc}>{selectedProject.description[locale]}</p>
              <div className={styles.modalScope}>
                <h4>{t('scopeOfWork')}</h4>
                <ul>
                  {selectedProject.scope.map((s, i) => (
                    <li key={i}>✓ {s[locale]}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
