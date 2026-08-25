import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { FanOpacityDivider } from '../ui/FanOpacityDivider';

export const PromoBanner: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF8F5]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-xl bg-[#211D1A] min-h-[380px] sm:min-h-[440px] flex items-center"
        >
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1800&auto=format&fit=crop"
              alt="The Glow Edit"
              loading="lazy"
              className="w-full h-full object-cover object-[center_35%] opacity-45 sm:opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1614] via-[#1A1614]/80 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-14 max-w-xl text-[#FAF8F5]">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8C6D53]/30 border border-[#DDB68C]/40 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold text-[#DDB68C] mb-4">
              <span>Seasonal Curation</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight leading-tight">
              The Glow Edit
            </h2>

            <p className="mt-4 text-xs sm:text-base text-[#D9CBBE] font-light leading-relaxed max-w-md">
              Everything you need for effortlessly luminous skin. Featuring our cult-favorite highlighters, peptide serums, and silk tints in one radiant bundle.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link
                to="/shop?filter=best-sellers"
                className="py-3.5 px-8 bg-[#FAF8F5] text-[#2C2724] hover:bg-[#DDB68C] hover:text-[#1A1614] text-xs uppercase tracking-[0.2em] font-semibold rounded-xl shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Shop The Edit</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Fan Opacity section divider inside dark banner */}
          <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
            <FanOpacityDivider position="bottom" color="#211D1A" className="opacity-70" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
