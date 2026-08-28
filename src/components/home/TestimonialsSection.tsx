import React from 'react';
import { TESTIMONIALS } from '../../data/content';
import { Star, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  // We will display the first 3 verified testimonials in a beautiful, editorial 3-column lookbook grid
  const displayedReviews = TESTIMONIALS.slice(0, 3);

  return (
    <section className="pt-36 pb-24 sm:pb-32 bg-white relative overflow-hidden select-none">
      
      {/* Wavy Section Divider (zIndex: 10) - Masks the corner accents along the wave curve */}
      <div className="absolute top-0 left-0 w-full h-[80px] overflow-hidden leading-none select-none pointer-events-none z-10 bg-transparent">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-full block">
          <path
            d="M 0 140 C 150 60, 300 60, 450 140 C 600 220, 800 50, 1000 50 C 1200 50, 1350 170, 1440 170 L 1440 0 L 0 0 Z"
            fill="#FAF8F5"
          />
          {/* Floating Bubble 1 (Large - Left) */}
          <motion.circle
            cx={220}
            cy={70}
            r={20}
            fill="#ffffff"
            className="pointer-events-auto cursor-pointer"
            style={{ transformOrigin: '220px 70px' }}
            animate={{
              y: [0, -14, 0],
              x: [0, 8, 0],
            }}
            whileHover={{
              scale: 1.3,
              y: -22,
              transition: { type: 'spring', stiffness: 300, damping: 15 },
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Floating Bubble 2 (Medium - Center-Left) */}
          <motion.circle
            cx={520}
            cy={50}
            r={12}
            fill="#ffffff"
            className="pointer-events-auto cursor-pointer"
            style={{ transformOrigin: '520px 50px' }}
            animate={{
              y: [0, -10, 0],
              x: [0, -6, 0],
            }}
            whileHover={{
              scale: 1.35,
              y: -15,
              transition: { type: 'spring', stiffness: 300, damping: 15 },
            }}
            transition={{
              duration: 5.5,
              delay: 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Floating Bubble 3 (Small - Center-Right) */}
          <motion.circle
            cx={960}
            cy={45}
            r={8}
            fill="#ffffff"
            className="pointer-events-auto cursor-pointer"
            style={{ transformOrigin: '960px 45px' }}
            animate={{
              y: [0, -8, 0],
              x: [0, 5, 0],
            }}
            whileHover={{
              scale: 1.4,
              y: -12,
              transition: { type: 'spring', stiffness: 300, damping: 15 },
            }}
            transition={{
              duration: 4.8,
              delay: 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          {/* Floating Bubble 4 (Medium-Large - Right) */}
          <motion.circle
            cx={1240}
            cy={55}
            r={15}
            fill="#ffffff"
            className="pointer-events-auto cursor-pointer"
            style={{ transformOrigin: '1240px 55px' }}
            animate={{
              y: [0, -12, 0],
              x: [0, -7, 0],
            }}
            whileHover={{
              scale: 1.3,
              y: -18,
              transition: { type: 'spring', stiffness: 300, damping: 15 },
            }}
            transition={{
              duration: 6.5,
              delay: 2.1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>
      </div>

      {/* Subtle brand Wavy Corner Accent (Top-Left) to unify with Our Story section, zIndex: 5, behind the divider */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] sm:w-[460px] sm:h-[460px] md:w-[520px] md:h-[520px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] pointer-events-none select-none overflow-hidden z-5">
        <svg className="w-full h-full rotate-270" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 60 0 C 60 70, 100 80, 120 120 C 130 140, 170 150, 200 150 L 200 0 Z"
            fill="#E8DCCE"
            opacity="0.3"
          />
          <path
            d="M 120 0 C 120 50, 150 60, 160 90 C 170 110, 185 120, 200 120 L 200 0 Z"
            fill="#C2A894"
            opacity="0.18"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* EDITORIAL CENTERED HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C6D53]/8 border border-[#8C6D53]/15 text-[#8C6D53] text-[9px] font-bold uppercase tracking-[0.15em] mb-4 pointer-events-none">
            <span>Verified Customer Reviews</span>
          </div>
          
          <h2 className="font-getai text-2.5xl sm:text-3.5xl lg:text-4xl text-[#2C2724] uppercase tracking-wide mb-4 pointer-events-none">
            Loved by Radiant Souls
          </h2>
          
          <p className="font-sans text-xs sm:text-sm text-[#786C62] tracking-wide font-medium leading-relaxed max-w-lg mx-auto pointer-events-none">
            Real feedback from real members of the LUMÉRA beauty ritual. Clean skincare formulations designed to restore, protect, and illuminate.
          </p>
        </div>

        {/* 3-COLUMN LOOKBOOK REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedReviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="bg-white/70 backdrop-blur-md border border-[#E8DCCE]/60 p-8 rounded-[32px] shadow-[0_12px_35px_rgba(44,39,36,0.02)] hover:shadow-[0_20px_45px_rgba(44,39,36,0.06)] hover:border-[#8C6D53]/35 transition-all duration-300 flex flex-col justify-between min-h-[340px] group cursor-default"
            >
              <div className="space-y-6">
                {/* Header: Stars & Product Badge */}
                <div className="flex items-center justify-between gap-4 pointer-events-none">
                  <div className="flex gap-0.5 text-[#C49B76]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#8C6D53]/90 bg-[#8C6D53]/10 px-2.5 py-1 rounded-full border border-[#8C6D53]/10">
                    {review.productName}
                  </span>
                </div>

                {/* Quotation text (using clean font-sans instead of italic serif) */}
                <p className="font-sans text-xs sm:text-sm leading-relaxed text-[#4A3E35] font-medium tracking-wide text-left select-text">
                  "{review.quote}"
                </p>
              </div>

              {/* Footer: User Details */}
              <div className="flex items-center justify-between pt-6 border-t border-[#E8DCCE]/40 mt-8">
                <div className="flex items-center gap-3">
                  {review.avatar && (
                    <div className="relative pointer-events-none">
                      <img
                        src={review.avatar}
                        alt={review.author}
                        className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-2xs"
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 bg-emerald-500 text-white p-0.5 rounded-full border border-white">
                        <CheckCircle className="w-2.5 h-2.5 fill-current text-emerald-500 stroke-white" />
                      </div>
                    </div>
                  )}
                  
                  <div className="text-left select-text">
                    <p className="font-sans text-[10px] font-black text-[#2C2724] uppercase tracking-[0.1em]">{review.author}</p>
                    <p className="font-sans text-[9px] text-[#8C7E72] tracking-wider font-semibold">{review.location}</p>
                  </div>
                </div>

                <span className="font-sans text-[8px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 pointer-events-none">
                  Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
