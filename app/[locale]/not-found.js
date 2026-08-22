'use client';

import { Link } from '../../i18n/routing';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('Error');

  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 2rem',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 520 }}>
        <div style={{
          fontSize: '6rem',
          fontWeight: 800,
          lineHeight: 1,
          background: 'linear-gradient(135deg, var(--dark-blue, #1a1a2e), var(--light-blue, #3b82f6))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1rem',
        }}>
          404
        </div>
        <h1 style={{
          fontSize: '1.75rem',
          fontWeight: 700,
          color: 'var(--dark-blue, #1a1a2e)',
          marginBottom: '0.75rem',
        }}>
          {t('notFoundTitle')}
        </h1>
        <p style={{
          fontSize: '1rem',
          color: '#555',
          lineHeight: 1.6,
          marginBottom: '2rem',
        }}>
          {t('notFoundDescription')}
        </p>
        <Link href="/" className="btn btn-primary">
          {t('backHome')}
        </Link>
      </div>
    </div>
  );
}
