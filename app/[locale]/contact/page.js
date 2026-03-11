'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './Contact.module.css';

export default function ContactPage() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: t('form.sending') });

    // Simulate API call
    setTimeout(() => {
      setStatus({ type: 'success', message: t('form.success') });
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 1500);
  };

  return (
    <>
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
                    <h4>{t('info.office.label')}</h4>
                    <p>{t('info.office.line1')}<br />{t('info.office.line2')}</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📞</div>
                  <div>
                    <h4>{t('info.phone.label')}</h4>
                    <p>+62 21 1234 5678</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📱</div>
                  <div>
                    <h4>{t('info.whatsapp.label')}</h4>
                    <p>+62 812 3456 7890</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>✉️</div>
                  <div>
                    <h4>{t('info.email.label')}</h4>
                    <p>info@limarsteknik.co.id<br />sales@limarsteknik.co.id</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>🕒</div>
                  <div>
                    <h4>{t('info.hours.label')}</h4>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126938.64735235334!2d106.7460670877569!3d-6.155459345681656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1709825459424!5m2!1sid!2sid"
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
