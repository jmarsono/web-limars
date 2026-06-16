'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false });
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import styles from './Contact.module.css';

export default function ContactPage() {
  const t = useTranslations('Contact');
  const navT = useTranslations('Navigation');
  const crumbs = [
    { name: navT('contact'), path: '/contact/' }
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: t('form.sending') });

    const captchaValue = recaptchaRef.current.getValue();
    if (!captchaValue) {
      setStatus({ type: 'error', message: 'Please verify that you are not a robot.' });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, recaptchaToken: captchaValue }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: t('form.success') });
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
        recaptchaRef.current.reset();
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An unexpected error occurred. Please try again later.' });
    }
  };

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroBadge}>{t('heroBadge')}</span>
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSubtitle')}</p>
        </div>
      </section>

      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactWrapper}>
            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <h2>{t('info.title')}</h2>
              <p className={styles.infoDesc}>{t('info.subtitle')}</p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📍</div>
                  <div>
                    <h3>{t('info.office.label')}</h3>
                    <p>{t('info.office.line1')}<br />{t('info.office.line2')}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📞</div>
                  <div>
                    <h3>{t('info.phone.label')}</h3>
                    <p>+62 812 1267 1289</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📱</div>
                  <div>
                    <h3>{t('info.whatsapp.label')}</h3>
                    <p>+62 812 1267 1289</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>✉️</div>
                  <div>
                    <h3>{t('info.email.label')}</h3>
                    <p>info@limarsteknik.com<br />sales@limarsteknik.com</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>🕒</div>
                  <div>
                    <h3>{t('info.hours.label')}</h3>
                    <p>{t('info.hours.line1')}<br />{t('info.hours.line2')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.contactForm}>
              <h2>{t('form.title')}</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">{t('form.fields.name.label')} *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('form.fields.name.placeholder')}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">{t('form.fields.email.label')} *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('form.fields.email.placeholder')}
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">{t('form.fields.phone.label')} *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('form.fields.phone.placeholder')}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="company">{t('form.fields.company.label')}</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t('form.fields.company.placeholder')}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="service">{t('form.fields.service.label')}</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">{t('form.fields.service.options.select')}</option>
                    <option value="equipment">{t('form.fields.service.options.equipment')}</option>
                    <option value="kitchen-set">{t('form.fields.service.options.kitchenSet')}</option>
                    <option value="ducting">{t('form.fields.service.options.ducting')}</option>
                    <option value="gas">{t('form.fields.service.options.gas')}</option>
                    <option value="well">{t('form.fields.service.options.well')}</option>
                    <option value="electrical">{t('form.fields.service.options.electrical')}</option>
                    <option value="other">{t('form.fields.service.options.other')}</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">{t('form.fields.message.label')} *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('form.fields.message.placeholder')}
                  ></textarea>
                </div>

                {status.message && (
                  <div className={`${styles.statusMessage} ${styles[status.type]}`}>
                    {status.message}
                  </div>
                )}

                <div className={styles.formGroup} style={{ marginBottom: '1.5rem' }}>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={status.type === 'loading'}
                >
                  {status.type === 'loading' ? t('form.sending') : t('form.submitBtn')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <iframe
          src="https://maps.google.com/maps?q=LIMARS%20TEKNIK%20-%20JASA%20PEMBUATAN%20TUNGKU%20ROTI%20ARAB%20DAN%20PIZZA%20TRADISIONAL&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </section>
    </>
  );
}
