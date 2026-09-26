import React, { useEffect, useState } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProductCard } from '../components/cards/ProductCard';
import { api } from '../services/api';
import { ProductItem } from '../types';
import { LoadingSpinner } from '../components/common/LoadingSpinner';

export const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .getProducts()
      .then(setProducts)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <SectionHeading
        badge="Enterprise Software"
        title="Our Product Portfolio"
        subtitle="Turnkey IT solutions, institute management ERPs, and advertising management software built for scale."
      />

      {loading ? (
        <LoadingSpinner message="Loading products..." />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
