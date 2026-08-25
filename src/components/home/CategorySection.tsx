import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES_DATA } from '../../data/content';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const CategorySection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm sm:text-base uppercase tracking-[0.25em] font-semibold text-[#8C6D53] block mb-3">
            Curated Collections
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="italic text-5xl sm:text-6xl lg:text-7xl text-[#2C2724] font-semibold tracking-wide">
            Crafted for Every Ritual
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#786C62] font-light mt-4 max-w-xl mx-auto">
            Explore our thoughtfully categorized cosmetics and skincare formulations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES_DATA.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/shop?category=${cat.id}`}
                className="group relative block aspect-[3/4] rounded-2xl overflow-hidden shadow-md bg-[#2C2724]"
              >
                {/* Background Image with hover scale */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Dark Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1816]/85 via-[#1C1816]/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                {/* Content at Bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#DDB68C] font-semibold block mb-1">
                    {cat.subtitle}
                  </span>

                  <h3 className="font-serif text-2xl text-[#FAF8F5] font-medium mb-1.5 transition-transform duration-300 group-hover:-translate-y-1">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-[#D9CBBE] line-clamp-2 font-light opacity-90 mb-3">
                    {cat.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#FAF8F5] transition-all duration-300 group-hover:text-[#DDB68C]">
                    <span>Shop Collection</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
