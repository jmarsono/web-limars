// app/global-error.js — Root-level error boundary (outside locale layout)
// This is the LAST resort when the root layout itself fails.
// Cannot use next-intl here (no locale context available).
'use client';

import Link from 'next/link';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="id">
      <body>
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
              Sistem Error
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#555', marginBottom: 32, lineHeight: 1.6 }}>
              Terjadi kesalahan pada sistem. Tim teknis kami telah diberitahu.
              Silakan coba lagi atau hubungi kami melalui WhatsApp.
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
              }}>
                Kembali ke Beranda
              </Link>
              <a
                href="https://wa.me/6281212671289"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '12px 24px',
                  borderRadius: 8,
                  border: 'none',
                  background: '#25d366',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                }}
              >
                WhatsApp Kami
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}