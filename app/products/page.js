'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { products, productCategories } from '../../data/products';
import styles from './Products.module.css';
import { Suspense } from 'react';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get('cat') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCat);

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroBadge}>Our Products</span>
          <h1>Kitchen Equipment &amp; Solutions</h1>
          <p>Browse our comprehensive range of commercial kitchen equipment, from traditional stoves to modern ovens.</p>
        </div>
      </section>

      {/* Products */}
      <section className={`section ${styles.productsSection}`}>
        <div className="container">
          {/* Filter */}
          <div className={styles.filterBar}>
            {productCategories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={styles.productGrid}>
            {filteredProducts.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.id} className={styles.productCard}>
                <div className={styles.productImage}>
                  <div className={styles.productImagePlaceholder}>
                    <span>
                      {product.category === 'Traditional Stoves' ? '🔥' :
                       product.category === 'Regional Ovens' ? '🍕' :
                       product.category === 'Modern Ovens' ? '⚙️' : '🍳'}
                    </span>
                  </div>
                  <div className={styles.productBadge}>{product.category}</div>
                </div>
                <div className={styles.productInfo}>
                  <h3>{product.name}</h3>
                  <p>{product.shortDescription}</p>
                  <span className={styles.productLink}>View Details →</span>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className={styles.empty}>
              <p>No products found in this category.</p>
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
