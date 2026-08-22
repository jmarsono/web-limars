// app/[locale]/products/[slug]/page.js
import { Link, routing } from '../../../../i18n/routing';
import { notFound } from 'next/navigation';
import { products as staticProducts } from '../../../../data/products';
import { services as staticServices } from '../../../../data/services';
import Image from 'next/image';
import ProductLightbox from './ProductLightbox';
import styles from './ProductDetail.module.css';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getProductBySlug, getProducts } from '../../../../lib/db';
import WhatsAppIcon from '../../../../components/WhatsAppIcon';
import TrackedWhatsAppLink from '../../../../components/TrackedWhatsAppLink';
import BreadcrumbJsonLd from '../../../../components/BreadcrumbJsonLd';
import { constructMetadata } from '../../../../lib/seo';
import { localize } from '../../../../lib/localize';

// ISR: revalidate hourly instead of forcing fresh D1 query on every request
export const revalidate = 3600;

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    staticProducts.map((p) => ({
      locale,
      slug: p.slug,
    }))
  );
}

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };

  const name = localize(product.name, locale);
  const desc = localize(product.shortDescription, locale);

  return constructMetadata({
    title: `${name} | PT. Limars Teknik Indonesia`,
    description: desc,
    path: `/products/${slug}/`,
    locale,
    image: product.image,
  });
}

export default async function ProductDetailPage({ params }) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const t = await getTranslations({ locale, namespace: 'Products' });

  // Load products list for related recommendations
  const allProducts = await getProducts();
  
  const relatedProducts = allProducts
    .filter(p => {
      const matchCat = (p.category?.en === product.category?.en || p.category === product.category);
      return matchCat && p.id !== product.id;
    })
    .slice(0, 3);

  const name = localize(product.name, locale);
  const desc = localize(product.description, locale);
  const category = localize(product.category, locale);

  // Get related service slug and key
  let relatedServiceSlug = '';
  let translationKey = '';
  const isStoveOrOven = ['Traditional Stoves', 'Regional Ovens', 'Modern Ovens'].includes(product.category?.en || product.category);
  const isCoffeeShop = (product.category?.en === 'Coffee Shop Equipment' || product.category === 'Coffee Shop Equipment');

  if (isStoveOrOven) {
    relatedServiceSlug = 'gas-installation';
    translationKey = 'relatedServiceStove';
  } else if (isCoffeeShop) {
    relatedServiceSlug = 'electrical';
    translationKey = 'relatedServiceCoffee';
  } else {
    relatedServiceSlug = 'kitchen-sets';
    translationKey = 'relatedServiceDefault';
  }

  const relService = staticServices.find(s => s.slug === relatedServiceSlug);
  const serviceTitle = relService ? localize(relService.title, locale) : '';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: desc,
    image: product.image.startsWith('http') ? product.image : `https://limarsteknik.com${product.image}`,
    category: category,
    brand: {
      '@type': 'Brand',
      name: 'Limars Teknik'
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'IDR',
      url: `https://limarsteknik.com/${locale}/products/${slug}/`,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'PT. Limars Teknik Indonesia'
      }
    }
  };

  const crumbs = [
    { name: t('breadcrumbProducts'), path: '/products/' },
    { name: name, path: `/products/${slug}/` }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd crumbs={crumbs} />
      {/* Breadcrumb */}
      <section className={styles.breadcrumb}>
        <div className="container">
          <Link href="/">{t('breadcrumbHome')}</Link>
          <span>/</span>
          <Link href="/products">{t('breadcrumbProducts')}</Link>
          <span>/</span>
          <span className={styles.current}>{name}</span>
        </div>
      </section>

      {/* Product Detail */}
      <section className={styles.detailSection}>
        <div className="container">
          <div className={styles.detailGrid}>
            <div className={styles.imageSection}>
              <ProductLightbox
                src={product.image}
                alt={`${name} - Limars Teknik commercial kitchen equipment`}
                priority={true}
              />
            </div>
            <div className={styles.infoSection}>
              <span className={styles.category}>{category}</span>
              <h1>{name}</h1>
              <p className={styles.description}>{desc}</p>

              {/* Related Service Promo */}
              {relatedServiceSlug && (
                <div className={styles.relatedServiceBox}>
                  <p>
                    {t.rich(translationKey, {
                      serviceTitle: serviceTitle,
                      link: (chunks) => (
                        <Link href={`/services/${relatedServiceSlug}`} className={styles.serviceLink}>
                          {chunks}
                        </Link>
                      )
                    })}
                  </p>
                </div>
              )}

              {product.specs && Object.keys(product.specs).length > 0 && (
                <div className={styles.specs}>
                  <h2>{t('specifications')}</h2>
                  <table className={styles.specTable}>
                    <tbody>
                      {Object.entries(product.specs).map(([key, value]) => {
                        const valDisplay = localize(value, locale);
                        return (
                          <tr key={key}>
                            <td className={styles.specLabel}>
                              {key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}
                            </td>
                            <td className={styles.specValue}>{valDisplay}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}

              <div className={styles.actions}>
                <Link href="/contact" className="btn btn-primary">{t('requestQuote')}</Link>
                <TrackedWhatsAppLink href="https://wa.me/6281212671289" className="btn btn-outline" label="product_detail_cta">
                  <WhatsAppIcon />
                  {t('askWhatsapp')}
                </TrackedWhatsAppLink>
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
              {relatedProducts.map((p) => {
                const rName = localize(p.name, locale);
                return (
                  <Link href={`/products/${p.slug}`} key={p.id} className={styles.relatedCard}>
                    <div className={styles.relatedImage}>
                      <div style={{ position: 'relative', width: '100%', height: '150px', backgroundColor: '#f0f0f0', borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
                        {p.image && (
                          <Image
                            src={p.image}
                            alt={rName}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                          />
                        )}
                      </div>
                    </div>
                    <h3>{rName}</h3>
                    <span className={styles.relatedLink}>{t('viewDetails')}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
