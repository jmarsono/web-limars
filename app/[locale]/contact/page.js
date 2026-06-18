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
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3>{t('info.office.label')}</h3>
                    <p>
                      <a href="https://www.google.com/maps/place/LIMARS+TEKNIK+-+JASA+PEMBUATAN+TUNGKU+ROTI+ARAB+DAN+PIZZA+TRADISIONAL/@-6.19158,106.843908,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f440d11e616f:0xeaef87224146ce02!8m2!3d-6.19158!4d106.843908!16s%2Fg%2F11cjj88c_z" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                        {t('info.office.line1')}<br />{t('info.office.line2')}
                      </a>
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3>{t('info.phone.label')}</h3>
                    <p>
                      <a href="tel:+6281212671289" className={styles.infoLink}>+62 812 1267 1289</a>
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.86.002-2.636-1.023-5.114-2.887-6.978C16.58 1.902 14.1 .879 11.47.879c-5.442 0-9.866 4.422-9.87 9.861a9.82 9.82 0 0 0 1.51 5.163l-.995 3.63 3.738-.98zm11.383-7.53c-.37-.185-2.18-1.077-2.52-1.2-.34-.125-.588-.185-.835.185-.246.37-.956 1.2-1.17 1.45-.216.25-.432.282-.803.096-.37-.185-1.564-.577-2.98-1.842-1.101-.982-1.844-2.194-2.06-2.564-.216-.37-.022-.57.163-.755.166-.165.37-.43.555-.646.185-.216.246-.37.37-.616.123-.246.06-.462-.03-.647-.09-.185-.835-2.01-1.144-2.754-.3-.722-.605-.624-.835-.636-.216-.01-.463-.013-.71-.013-.247 0-.648.093-.987.462-.34.37-1.297 1.27-1.297 3.1 0 1.83 1.328 3.597 1.513 3.844.185.247 2.61 3.986 6.323 5.59 1.096.473 1.95.757 2.616.967.876.277 1.673.238 2.3.145.7-.104 2.18-.89 2.488-1.753.308-.862.308-1.603.216-1.753-.093-.15-.34-.242-.71-.427z"/>
                    </svg>
                  </div>
                  <div>
                    <h3>{t('info.whatsapp.label')}</h3>
                    <p>
                      <a href="https://wa.me/6281212671289" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>+62 812 1267 1289</a>
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3>{t('info.email.label')}</h3>
                    <p>
                      <a href="mailto:info@limarsteknik.com" className={styles.infoLink}>info@limarsteknik.com</a>
                      <br />
                      <a href="mailto:sales@limarsteknik.com" className={styles.infoLink}>sales@limarsteknik.com</a>
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
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
