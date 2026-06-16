// app/[locale]/products/page.js
import { getProducts } from '../../../lib/db';
import { productCategories } from '../../../data/products';
import ProductsClient from './ProductsClient';
import { Suspense } from 'react';
import { setRequestLocale } from 'next-intl/server';

export const revalidate = 0; // Ensure fresh data on D1 updates

export default async function ProductsPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const dbProducts = await getProducts();

  return (
    <Suspense fallback={<div className="container" style={{ padding: '80px 20px', textLight: 'center' }}>Loading products...</div>}>
      <ProductsClient products={dbProducts} productCategories={productCategories} />
    </Suspense>
  );
}
