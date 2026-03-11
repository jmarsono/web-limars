'use client';

import { useState } from 'react';
import { Link } from '../../../i18n/routing';
import { useSearchParams } from 'next/navigation';
import { products, productCategories } from '../../../data/products';
import styles from './Products.module.css';
import { Suspense } from 'react';
import Image from 'next/image';

import { useLocale, useTranslations } from 'next-intl';

function ProductsContent() {
  const searchParams = useSearchParams();
  const locale = useLocale();
  const t = useTranslations('Products');
  
  const initialCat = searchParams.get('cat') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCat);

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category.en === activeCategory || p.category.id === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroBadge}>{t('heroBadge')}</span>
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroSubtitle')}</p>
        </div>
      </section>

      {/* Products */}
      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          {/* Filter */}
          <div className={styles.filterBar}>
            {productCategories.map((catKey) => {
              // 'All' is a special key, the rest we look up in translations (or just map directly)
              const catDisplay = catKey === 'All' ? t('all') : t(`categories.${catKey.replace(/\s+/g, '')}`);
              return (
                <button
                  key={catKey}
                  className={`${styles.filterBtn} ${activeCategory === catKey ? styles.filterActive : ''}`}
                  onClick={() => setActiveCategory(catKey)}
                >
                  {catDisplay}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className={styles.productGrid}>
            {filteredProducts.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id} className={styles.productCard}>
                <div className={styles.productImage}>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                    <Image 
                      src={product.image} 
                      alt={product.name[locale]} 
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.productBadge}>{product.category[locale]}</div>
                </div>
                <div className={styles.productInfo}>
                  <h3>{product.name[locale]}</h3>
                  <p>{product.shortDescription[locale]}</p>
                  <span className={styles.productLink}>{t('viewDetails')}</span>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className={styles.empty}>
              <p>{t('emptyState')}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}
