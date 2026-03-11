'use client';

import { useState } from 'react';
import { projects, projectCategories } from '../../data/projects';
import styles from './Projects.module.css';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroBadge}>Our Portfolio</span>
          <h1>Projects &amp; Completed Work</h1>
          <p>Explore our portfolio of kitchen installations, equipment setups, and engineering projects across Indonesia.</p>
        </div>
      </section>

      {/* Projects */}
      <section className={`section ${styles.projectsSection}`}>
        <div className="container">
          <div className={styles.filterBar}>
            {projectCategories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.projectGrid}>
            {filteredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard} onClick={() => setSelectedProject(project)}>
                <div className={styles.projectImage}>
                  <div className={styles.projectImagePlaceholder}>
                    <span>📸</span>
                    <p>{project.name}</p>
                  </div>
                  <div className={styles.projectOverlay}>
                    <span className={styles.projectCategory}>{project.category}</span>
                    <h3>{project.name}</h3>
                    <p className={styles.projectLocation}>📍 {project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className={styles.empty}>
              <p>No projects found in this category.</p>
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
              <span className={styles.modalCategory}>{selectedProject.category}</span>
              <h2>{selectedProject.name}</h2>
              <p className={styles.modalLocation}>📍 {selectedProject.location}</p>
              <p className={styles.modalDesc}>{selectedProject.description}</p>
              <div className={styles.modalScope}>
                <h4>Scope of Work</h4>
                <ul>
                  {selectedProject.scope.map((s, i) => (
                    <li key={i}>✓ {s}</li>
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
