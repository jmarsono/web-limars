// app/[locale]/error.js
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('[limarsteknik] Client error:', error);
    // Optional: send error to monitoring endpoint if configured
  }, [error]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f8f9fa',
      padding: '2rem',
      fontFamily: 'Inter, system-ui, sans-serif',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 480 }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a1a', marginBottom: 8 }}>
          Terjadi Kesalahan
        </h1>
        <p style={{ fontSize: '1.05rem', color: '#555', marginBottom: 32, lineHeight: 1.6 }}>
          Maaf, terjadi kesalahan tak terduga. Silakan coba lagi atau kembali ke beranda.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{
            padding: '12px 24px',
            borderRadius: 8,
            border: '1px solid #1a1a1a',
            background: '#fff',
            color: '#1a1a1a',
            fontWeight: 600,
            fontSize: '0.95rem',
            textDecoration: 'none',
            cursor: 'pointer',
          }}>
            Kembali ke Beranda
          </Link>
          <button
            onClick={() => reset()}
            style={{
              padding: '12px 24px',
              borderRadius: 8,
              border: 'none',
              background: '#2563eb',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
            }}
          >
            Coba Lagi
          </button>
        </div>
      </div>
    </div>
  );
}