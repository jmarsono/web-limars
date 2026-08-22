'use client';

import { Link } from '../i18n/routing';
import { useTranslations } from 'next-intl';
import WhatsAppIcon from './WhatsAppIcon';
import TrackedWhatsAppLink from './TrackedWhatsAppLink';
import styles from './CtaBanner.module.css';

/**
 * Reusable CTA banner used at the bottom of multiple pages.
 *
 * @param {string} [analyticsLabel='page_cta'] - Label for WhatsApp click tracking
 * @param {string} [titleKey] - Optional override translation key for the title (namespace.key)
 * @param {string} [subtitleKey] - Optional override translation key for the subtitle
 * @param {string} [contactBtnKey] - Optional override translation key for the contact button
 * @param {string} [whatsappBtnKey] - Optional override translation key for the WhatsApp button
 * @param {string} [className] - Optional additional CSS class for the section
 */
export default function CtaBanner({
  analyticsLabel = 'page_cta',
  titleKey,
  subtitleKey,
  contactBtnKey,
  whatsappBtnKey,
  className,
}) {
  const t = useTranslations('Home');

  return (
    <section className={`${styles.ctaSection} ${className || ''}`}>
      <div className={`container ${styles.ctaContent}`}>
        <h2>{titleKey || t('cta.title')}</h2>
        <p>{subtitleKey || t('cta.subtitle')}</p>
        <div className={styles.ctaButtons}>
          <Link href="/contact" className="btn btn-primary">
            {contactBtnKey || t('cta.contactBtn')}
          </Link>
          <TrackedWhatsAppLink
            href="https://wa.me/6281212671289"
            className="btn btn-secondary"
            label={analyticsLabel}
          >
            <WhatsAppIcon />
            {whatsappBtnKey || t('cta.whatsappBtn')}
          </TrackedWhatsAppLink>
        </div>
      </div>
    </section>
  );
}
