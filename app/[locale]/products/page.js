// app/[locale]/products/page.js
import { getProducts } from '../../../lib/db';
import { productCategories } from '../../../data/products';
import ProductsClient from './ProductsClient';
import { Suspense } from 'react';
import { setRequestLocale } from 'next-intl/server';
import BreadcrumbJsonLd from '../../../components/BreadcrumbJsonLd';

export const revalidate = 0; // Ensure fresh data on D1 updates

export default async function ProductsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const dbProducts = await getProducts();
  const getTranslations = (await import('next-intl/server')).getTranslations;
  const navT = await getTranslations({ locale, namespace: 'Navigation' });

  const crumbs = [
    { name: navT('products'), path: '/products/' }
  ];

  const loadingText = locale === 'id' ? 'Memuat produk...' : 'Loading products...';

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} />
      <Suspense fallback={<div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>{loadingText}</div>}>
        <ProductsClient products={dbProducts} productCategories={productCategories} />
      </Suspense>
    </>
  );
}
