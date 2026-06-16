'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './FAQ.module.css';

export default function FAQClient({ faqData }) {
  const locale = useLocale();
  const t = useTranslations('FAQ');
  const navT = useTranslations('Navigation');
  const [activeCategory, setActiveCategory] = useState(0);
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIdx, itemIdx) => {
    const key = `${categoryIdx}-${itemIdx}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!faqData || faqData.length === 0) {
    return (
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <p>No FAQs available.</p>
      </div>
    );
  }

  return (
    <section className={`section ${styles.faqSection}`}>
      <div className="container">
        <div className={styles.faqWrapper}>
          {/* Sidebar Navigation */}
          <div className={styles.faqNav}>
            <h2>{t('categories')}</h2>
            <ul>
              {faqData.map((category, idx) => (
                <li key={idx}>
                  <button
                    className={`${styles.navBtn} ${activeCategory === idx ? styles.navActive : ''}`}
                    onClick={() => setActiveCategory(idx)}
                  >
                    {category.category[locale] || category.category.en}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Accordion List */}
          <div className={styles.faqContent}>
            <h2 className={styles.categoryTitle}>
              {faqData[activeCategory]?.category[locale] || faqData[activeCategory]?.category.en}
            </h2>
            <div className={styles.accordionList}>
              {faqData[activeCategory]?.items?.map((item, idx) => {
                const isOpen = openItems[`${activeCategory}-${idx}`];
                return (
                  <div key={idx} className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
                    <button
                      className={styles.accordionHeader}
                      onClick={() => toggleItem(activeCategory, idx)}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.question}>{item.question[locale] || item.question.en}</span>
                      <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
                    </button>
                    <div className={styles.accordionBody}>
                      <div className={styles.answer}>
                        <p>{item.answer[locale] || item.answer.en}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Still need help CTA */}
            <div className={styles.helpBox}>
              <h2>{t('ctaTitle')}</h2>
              <p>{t('ctaSubtitle')}</p>
              <div className={styles.helpButtons}>
                <Link href="/contact" className="btn btn-primary">
                  {navT('contact')}
                </Link>
                <a href="https://wa.me/6281212671289" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  {t('ctaBtn')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
