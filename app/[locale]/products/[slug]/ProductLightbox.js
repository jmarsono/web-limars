'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function ProductLightbox({ src, alt }) {
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
