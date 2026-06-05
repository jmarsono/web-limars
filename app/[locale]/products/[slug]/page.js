import { Link, routing } from '../../../../i18n/routing';
import { notFound } from 'next/navigation';
import { products } from '../../../../data/products';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import ProductLightbox from './ProductLightbox';
import styles from './ProductDetail.module.css';
import { setRequestLocale } from 'next-intl/server';

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    products.map((p) => ({
      locale,
      slug: p.slug,
    }))
  );
}

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name[locale]} | PT. Limars Teknik Indonesia`,
    description: product.shortDescription[locale],
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const pData = products.find(p => p.slug === slug);
  if (!pData) notFound();
  
  // We cannot use hooks inside an async component trivially in Server Components,
  // but if we need a translation dictionary we can fetch it via getTranslations or just pass locale.
  // The simplest here is:
  const isEn = locale === 'en';
  // Let's grab some UI labels directly or we can use next-intl/server getTranslations
  const getTranslations = (await import('next-intl/server')).getTranslations;
  const t = await getTranslations({ locale, namespace: 'Products' });

  const product = pData;

  const relatedProducts = products
    .filter(p => (p.category.en === product.category.en || p.category.id === product.category.id) && p.id !== product.id)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name['en'], // default
    description: product.description['en'],
    image: `https://www.limarsteknik.com/images/products/${product.slug}.png`,
    category: product.category['en'],
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
          <Link href="/">{t('breadcrumbHome')}</Link>
          <span>/</span>
          <Link href="/products">{t('breadcrumbProducts')}</Link>
          <span>/</span>
          <span className={styles.current}>{product.name[locale]}</span>
        </div>
      </section>

      {/* Product Detail */}
      <section className={styles.detailSection}>
        <div className="container">
          <div className={styles.detailGrid}>
            <div className={styles.imageSection}>
              <ProductLightbox src={product.image} alt={product.name[locale]} />
            </div>
            <div className={styles.infoSection}>
              <span className={styles.category}>{product.category[locale]}</span>
              <h1>{product.name[locale]}</h1>
              <p className={styles.description}>{product.description[locale]}</p>

              {product.specs && (
                <div className={styles.specs}>
                  <h3>{t('specifications')}</h3>
                  <table className={styles.specTable}>
                    <tbody>
                      {Object.entries(product.specs).map(([key, value]) => (
                        <tr key={key}>
                          <td className={styles.specLabel}>
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}
                          </td>
                          <td className={styles.specValue}>{typeof value === 'object' ? value[locale] : value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className={styles.actions}>
                <Link href="/contact" className="btn btn-primary">{t('requestQuote')}</Link>
                <a href="https://wa.me/6281212671289" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  {t('askWhatsapp')}
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
            <h2>{t('relatedProducts')}</h2>
            <div className={styles.relatedGrid}>
              {relatedProducts.map((p) => (
                <Link href={`/products/${p.slug}`} key={p.id} className={styles.relatedCard}>
                  <div className={styles.relatedImage}>
                    <div style={{ position: 'relative', width: '100%', height: '150px', backgroundColor: '#f0f0f0', borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
                      <Image 
                        src={p.image} 
                        alt={p.name[locale]} 
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <h4>{p.name[locale]}</h4>
                  <span className={styles.relatedLink}>{t('viewDetails')}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
