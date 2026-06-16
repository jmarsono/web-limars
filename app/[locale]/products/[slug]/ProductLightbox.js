'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false });
import 'yet-another-react-lightbox/styles.css';

export default function ProductLightbox({ src, alt, priority = false }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div 
        style={{ position: 'relative', width: '100%', height: '400px', backgroundColor: '#f9f9f9', borderRadius: '15px', overflow: 'hidden', cursor: 'zoom-in' }}
        onClick={() => setOpen(true)}
      >
        <Image 
          src={src} 
          alt={alt} 
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'contain', padding: '1rem' }}
        />
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src }]}
      />
    </>
  );
}
