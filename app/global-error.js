// app/global-error.js — Root-level error boundary (outside locale layout)
// This is the LAST resort when the root layout itself fails.
// Cannot use next-intl here (no locale context available).
// Detects locale from the URL path for bilingual support.
'use client';

import Link from 'next/link';

const messages = {
  en: {
    title: 'System Error',
    description: 'A system error has occurred. Our technical team has been notified. Please try again or contact us via WhatsApp.',
    backHome: 'Back to Home',
    contactWhatsApp: 'WhatsApp Us',
  },
  id: {
    title: 'Sistem Error',
    description: 'Terjadi kesalahan pada sistem. Tim teknis kami telah diberitahu. Silakan coba lagi atau hubungi kami melalui WhatsApp.',
    backHome: 'Kembali ke Beranda',
    contactWhatsApp: 'WhatsApp Kami',
  },
};

function detectLocale() {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    if (path.startsWith('/id')) return 'id';
  }
  return 'en';
}

export default function GlobalError({ error, reset }) {
  const locale = detectLocale();
  const t = messages[locale] || messages.en;

  return (
    <html lang={locale}>
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
              {t.title}
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#555', marginBottom: 32, lineHeight: 1.6 }}>
              {t.description}
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
                {t.backHome}
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
                {t.contactWhatsApp}
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
