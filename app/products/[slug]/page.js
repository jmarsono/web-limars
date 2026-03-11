import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '../../../data/products';
import styles from './ProductDetail.module.css';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} | PT. Limars Teknik Indonesia`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) notFound();

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `https://www.limarsteknik.co.id/images/products/${product.slug}.jpg`,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'Limars Teknik'
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'IDR',
      seller: {
        '@type': 'Organization',
        name: 'PT. Limars Teknik Indonesia'
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb */}
      <section className={styles.breadcrumb}>
        <div className="container">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/products">Products</Link>
          <span>/</span>
          <span className={styles.current}>{product.name}</span>
        </div>
      </section>

      {/* Product Detail */}
      <section className={styles.detailSection}>
        <div className="container">
          <div className={styles.detailGrid}>
            <div className={styles.imageSection}>
              <div className={styles.mainImage}>
                <span className={styles.imagePlaceholder}>
                  {product.category === 'Traditional Stoves' ? '🔥' :
                   product.category === 'Regional Ovens' ? '🍕' :
                   product.category === 'Modern Ovens' ? '⚙️' : '🍳'}
                </span>
              </div>
            </div>
            <div className={styles.infoSection}>
              <span className={styles.category}>{product.category}</span>
              <h1>{product.name}</h1>
              <p className={styles.description}>{product.description}</p>

              {product.specs && (
                <div className={styles.specs}>
                  <h3>Specifications</h3>
                  <table className={styles.specTable}>
                    <tbody>
                      {Object.entries(product.specs).map(([key, value]) => (
                        <tr key={key}>
                          <td className={styles.specLabel}>
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}
                          </td>
                          <td className={styles.specValue}>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className={styles.actions}>
                <Link href="/contact" className="btn btn-primary">Request Quote</Link>
                <a href="https://wa.me/6281234567890" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  💬 Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className={`section ${styles.relatedSection}`}>
          <div className="container">
            <h2>Related Products</h2>
            <div className={styles.relatedGrid}>
              {relatedProducts.map((p) => (
                <Link href={`/products/${p.slug}`} key={p.id} className={styles.relatedCard}>
                  <div className={styles.relatedImage}>
                    <span>
                      {p.category === 'Traditional Stoves' ? '🔥' :
                       p.category === 'Regional Ovens' ? '🍕' :
                       p.category === 'Modern Ovens' ? '⚙️' : '🍳'}
                    </span>
                  </div>
                  <h4>{p.name}</h4>
                  <span className={styles.relatedLink}>View Details →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
