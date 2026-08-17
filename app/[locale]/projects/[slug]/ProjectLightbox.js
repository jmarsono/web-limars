'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false });
import 'yet-another-react-lightbox/styles.css';

export default function ProjectLightbox({ images = [], name = 'Project' }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const slides = images.map((src) => ({
    src: src.startsWith('http') ? src : `https://limarsteknik.com${src}`,
  }));

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            style={{
              position: 'relative',
              height: '240px',
              borderRadius: '12px',
              overflow: 'hidden',
              cursor: 'zoom-in',
              backgroundColor: '#f0f0f0',
            }}
          >
            <Image
              src={img.startsWith('http') ? img : `https://limarsteknik.com${img}`}
              alt={`${name} - foto ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </>
  );
}
