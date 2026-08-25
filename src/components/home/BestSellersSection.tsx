import React from 'react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';
import { motion } from 'motion/react';

export const BestSellersSection: React.FC = () => {
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <section className="py-20 bg-white border-y border-[#E8DCCE]/60">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-1.5 text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D53] mb-2">
            <span>Iconic Formulations</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="italic text-5xl sm:text-6xl lg:text-7xl text-[#2C2724] font-semibold tracking-wide">
            Our Best Sellers
          </h2>
        </div>

        {/* 4 Desktop Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
};
