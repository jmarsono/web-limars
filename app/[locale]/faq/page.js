'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { faqData } from '../../../data/faq';
import styles from './FAQ.module.css';

export default function FAQPage() {
  const locale = useLocale();
  const t = useTranslations('FAQ');
  const [activeCategory, setActiveCategory] = useState(0);
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIdx, itemIdx) => {
    const key = `${categoryIdx}-${itemIdx}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.flatMap(category => 
      category.items.map(item => ({
        '@type': 'Question',
        name: item.question[locale],
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer[locale]
        }
      }))
    )
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroBadge}>{t('heroBadge')}</span>
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSubtitle')}</p>
        </div>
      </section>

      <section className={`section ${styles.faqSection}`}>
        <div className="container">
          <div className={styles.faqWrapper}>
            {/* Sidebar Navigation */}
            <div className={styles.faqNav}>
              <h3>{t('categories')}</h3>
              <ul>
                {faqData.map((category, idx) => (
                  <li key={idx}>
                    <button
                      className={`${styles.navBtn} ${activeCategory === idx ? styles.navActive : ''}`}
                      onClick={() => setActiveCategory(idx)}
                    >
                      {category.category[locale]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accordion List */}
            <div className={styles.faqContent}>
              <h2 className={styles.categoryTitle}>{faqData[activeCategory].category[locale]}</h2>
              <div className={styles.accordionList}>
                {faqData[activeCategory].items.map((item, idx) => {
                  const isOpen = openItems[`${activeCategory}-${idx}`];
                  return (
                    <div key={idx} className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
                      <button
                        className={styles.accordionHeader}
                        onClick={() => toggleItem(activeCategory, idx)}
                        aria-expanded={isOpen}
                      >
                        <span className={styles.question}>{item.question[locale]}</span>
                        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
                      </button>
                      <div className={styles.accordionBody}>
                        <div className={styles.answer}>
                          <p>{item.answer[locale]}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Still need help CTA */}
              <div className={styles.helpBox}>
                <h3>{t('ctaTitle')}</h3>
                <p>{t('ctaSubtitle')}</p>
                <a href="https://wa.me/6281234567890" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  {t('ctaBtn')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
