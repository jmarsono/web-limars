// app/[locale]/faq/page.js
import { getFaqs } from '../../../lib/db';
import { faqData as staticFaqData } from '../../../data/faq';
import FAQClient from './FAQClient';
import styles from './FAQ.module.css';
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server';

export const revalidate = 0; // Fresh data on D1 dynamic updates

import { constructMetadata } from '../../../lib/seo';
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  const t = messages.SEO;

  return constructMetadata({
    title: t.faqTitle,
    description: t.faqDesc,
    path: '/faq/',
    locale,
  });
}

export default async function FAQPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('FAQ');
  const dbFaqs = await getFaqs();
  
  let faqData = [];
  if (dbFaqs && dbFaqs.length > 0) {
    if (dbFaqs[0].items) {
      // Already grouped (e.g. static fallback)
      faqData = dbFaqs;
    } else {
      // Flat list from D1, group dynamically
      const groupedMap = new Map();
      dbFaqs.forEach(faq => {
        const catEn = faq.category?.en || 'General';
        const catId = faq.category?.id || 'Umum';
        if (!groupedMap.has(catEn)) {
          groupedMap.set(catEn, {
            category: { en: catEn, id: catId },
            items: []
          });
        }
        groupedMap.get(catEn).items.push({
          question: faq.question,
          answer: faq.answer
        });
      });
      faqData = Array.from(groupedMap.values());
    }
  }

  // Fallback to static data if no FAQs are in database
  const activeFaqData = faqData.length > 0 ? faqData : staticFaqData;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: activeFaqData.flatMap(category => 
      (category.items || []).map(item => ({
        '@type': 'Question',
        name: item.question?.[locale] || item.question?.en || '',
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer?.[locale] || item.answer?.en || ''
        }
      }))
    )
  };

  const getTranslations = (await import('next-intl/server')).getTranslations;
  const navT = await getTranslations({ locale, namespace: 'Navigation' });
  const crumbs = [
    { name: navT('faq'), path: '/faq/' }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd crumbs={crumbs} />
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroBadge}>{t('heroBadge')}</span>
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSubtitle')}</p>
        </div>
      </section>

      <FAQClient faqData={activeFaqData} />
    </>
  );
}
