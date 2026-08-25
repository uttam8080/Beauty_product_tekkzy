import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, columns = 4 }) => {
  if (products.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="font-serif text-xl text-[#2C2724]">No products match your criteria</p>
        <p className="text-xs text-[#8C7E72] mt-1">Try relaxing filters or searching for something else.</p>
      </div>
    );
  }

  const colClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
  }[columns];

  return (
    <div className={`grid ${colClasses} gap-4 sm:gap-6`}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
