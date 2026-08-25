import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';

interface ProductCarouselProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, title, subtitle }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      {/* Header with Navigation Controls */}
      {(title || subtitle) && (
        <div className="flex items-end justify-between mb-8">
          <div>
            {subtitle && (
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D53] block mb-1">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2C2724] font-medium tracking-tight">
                {title}
              </h2>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-[#D9CBBE] hover:border-[#2C2724] hover:bg-[#2C2724] hover:text-[#FAF8F5] flex items-center justify-center transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-[#D9CBBE] hover:border-[#2C2724] hover:bg-[#2C2724] hover:text-[#FAF8F5] flex items-center justify-center transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {products.map(product => (
          <div key={product.id} className="min-w-[260px] sm:min-w-[280px] lg:min-w-[300px] flex-shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
