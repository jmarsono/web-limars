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
                <span className={styles.zoomIcon}>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: 6 }}><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                  Lihat Foto
                </span>
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