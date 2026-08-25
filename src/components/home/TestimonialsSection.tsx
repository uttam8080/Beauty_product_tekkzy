import React, { useState } from 'react';
import { TESTIMONIALS } from '../../data/content';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevTestimonial = () => {
    setCurrentIdx(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIdx(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIdx];

  return (
    <section className="py-24 bg-[#FAF8F5] border-y border-[#E8DCCE]/70 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        
        <Quote className="w-12 h-12 mx-auto text-[#D9CBBE] mb-6 opacity-60" />

        <div className="min-h-[220px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 text-[#DDB68C]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#2C2724] font-normal leading-relaxed italic max-w-2xl mx-auto">
                "{current.quote}"
              </blockquote>

              {/* Author & Location */}
              <div className="flex items-center justify-center gap-3">
                {current.avatar && (
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-10 h-10 rounded-full object-cover border border-[#D9CBBE]"
                  />
                )}
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2C2724]">{current.author}</p>
                  <p className="text-[11px] text-[#8C7E72]">{current.location} • Verified Ritual User</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Dots and Arrows */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full border border-[#D9CBBE] hover:border-[#2C2724] hover:bg-[#2C2724] hover:text-[#FAF8F5] flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIdx(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIdx === i ? 'w-6 bg-[#8C6D53]' : 'bg-[#D9CBBE]'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full border border-[#D9CBBE] hover:border-[#2C2724] hover:bg-[#2C2724] hover:text-[#FAF8F5] flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
