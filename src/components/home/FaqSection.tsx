import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How do I choose the correct formulations for my skin type?',
    answer: 'We recommend starting with our Interactive Skincare Guide to identify your specific skin goals. Our collections are divided into clean, multi-peptide formulations designed for dry, combination, oily, and sensitive skin types.'
  },
  {
    question: 'Are LUMÉRA formulations cruelty-free and vegan?',
    answer: 'Yes, 100% of our products are vegan and certified cruelty-free. We do not use any animal-derived ingredients or byproducts, and we do not test on animals at any stage of development.'
  },
  {
    question: 'How should I store my active botanical elixirs?',
    answer: 'To preserve the potency of our cold-pressed botanical extracts and active vitamins, store your elixirs in a cool, dry place away from direct sunlight. Ensure the dropper cap is tightly sealed after each use.'
  },
  {
    question: 'What makes dry oil different from standard body oils?',
    answer: 'Our dry oils are formulated with lightweight lipid chains that absorb instantly into the skin barrier without leaving a greasy residue. This delivers immediate luminosity and deep moisture while leaving a weightless, satin finish.'
  },
  {
    question: 'Do you offer complimentary shipping and returns?',
    answer: 'Yes, we offer complimentary standard shipping on all orders over ₹999. Due to the personal nature of our cosmetics, returns are accepted within 30 days of purchase for unopened items in their original packaging.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="py-24 bg-[#FAF8F5] border-t border-[#E8DCCE]/70">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D53] block mb-3">
            Bespoke Care Guidance
          </span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="italic text-5xl sm:text-6xl lg:text-7xl text-[#2C2724] font-semibold tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#786C62] font-light mt-4 leading-relaxed">
            Find immediate answers to questions about our clean botanical formulations, shipping rates, and bespoke skincare rituals.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`border rounded-2xl bg-white overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-[#8C6D53] shadow-md shadow-[#8C6D53]/5' 
                    : 'border-[#E8DCCE] hover:border-[#8C6D53]/60'
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif text-base sm:text-lg text-[#2C2724] hover:text-[#8C6D53] transition-colors focus:outline-none gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-medium tracking-wide">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8C6D53] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm text-[#5C5046] font-light leading-relaxed border-t border-[#FAF8F5] pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
