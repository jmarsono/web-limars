'use client';

import { useState } from 'react';
import styles from './ProjectDetail.module.css';

export default function ProjectLightbox({ images, name }) {
  const [selectedImg, setSelectedImg] = useState(null);

  if (!images || images.length === 0) return null;

  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Dokumentasi Visual</span>
          <h2>Galeri Foto Proyek</h2>
        </div>
        <div className={styles.galleryGrid}>
          {images.map((img, idx) => (
            <div
              key={idx}
              className={styles.galleryCard}
              onClick={() => setSelectedImg(img)}
            >
              <img
                src={img}
                alt={`${name} - Dokumentasi Foto ${idx + 1}`}
                className={styles.galleryImg}
                loading="lazy"
              />
              <div className={styles.galleryOverlay}>
                <span className={styles.zoomIcon}>🔍 Lihat Foto</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImg && (
          <div className={styles.lightboxModal} onClick={() => setSelectedImg(null)}>
            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.lightboxClose}
                onClick={() => setSelectedImg(null)}
                aria-label="Tutup"
              >
                ✕
              </button>
              <div className={styles.lightboxImgContainer}>
                <img
                  src={selectedImg}
                  alt={`${name} - Foto Perbesar`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}