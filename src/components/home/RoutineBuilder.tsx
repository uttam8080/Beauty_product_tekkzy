import React, { useState } from 'react';
import { ROUTINE_STEPS } from '../../data/content';
import { PRODUCTS } from '../../data/products';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const RoutineBuilder: React.FC = () => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const currentStep = ROUTINE_STEPS[activeStepIdx];
  const stepProduct = PRODUCTS.find(p => p.id === currentStep.productId) || PRODUCTS[0];

  return (
    <section className="relative py-24 bg-[#FAF8F5]/30 overflow-hidden border-b border-[#E8DCCE]/70">
      {/* Decorative Background Design Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[45%] aspect-square rounded-full bg-[#E5ECE4]/50 blur-[80px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[35%] aspect-square rounded-full bg-[#8C6D53]/10 blur-[80px] sm:blur-[100px] pointer-events-none" />
      
      {/* Delicate thin grid lines pattern in the background for a modern luxury feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(44,39,36,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(44,39,36,0.015)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D53] mb-2">
            <span>Interactive Skincare Guide</span>
          </div>
          <h2 style={{ fontFamily: "'LemonJelly', cursive", fontSize: '4rem', lineHeight: '1.2' }} className="text-[#2C2724] font-medium tracking-tight">
            Build Your Beauty Ritual
          </h2>
          <p className="text-xs sm:text-sm text-[#786C62] font-light mt-2.5">
            Click through our signature 4-step regimen designed to restore, replenish, and illuminate.
          </p>
        </div>

        {/* Step Navigation Pills */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-[#FAF8F5] rounded-2xl border border-[#E8DCCE] shadow-xs max-w-full overflow-x-auto no-scrollbar">
            {ROUTINE_STEPS.map((step, idx) => (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIdx(idx)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                  activeStepIdx === idx
                    ? 'bg-[#2C2724] text-[#FAF8F5] shadow-md font-semibold'
                    : 'text-[#5C5046] hover:text-[#2C2724]'
                }`}
              >
                <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                  activeStepIdx === idx ? 'bg-[#8C6D53] text-white' : 'bg-[#E8DCCE] text-[#2C2724]'
                }`}>
                  {step.stepNumber}
                </span>
                <span>{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Step Card Showcase */}
        <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-10 border border-[#E8DCCE] shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.stepNumber}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              
              {/* Product Visual */}
              <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-white">
                <img
                  src={stepProduct.images[0]}
                  alt={stepProduct.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop';
                  }}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />

              </div>

              {/* Step Info & Direct Add to Bag */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-base sm:text-lg lg:text-xl uppercase tracking-[0.25em] font-semibold text-[#8C6D53] block mb-3">
                    {currentStep.subtitle}
                  </span>

                  <h3
                    style={
                      [
                        'Celestial Gel-to-Milk Silken Cleanser',
                        'Dew Drop Polyglutamic Peptide Serum',
                        'Cloud Skin Ceramide Barrier Soufflé',
                        'Luminary Liquid Champagne Highlighter'
                      ].includes(stepProduct.name)
                        ? { fontFamily: "'Minggola', 'Squealer', sans-serif", fontSize: '2.2em' }
                        : undefined
                    }
                    className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2724] font-semibold leading-tight"
                  >
                    {stepProduct.name}
                  </h3>

                  <div className="flex items-center gap-2.5 mt-3">
                    <div className="flex text-[#DDB68C]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4.5 h-4.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-[#2C2724]">{stepProduct.rating.toFixed(1)}</span>
                    <span className="text-sm text-[#8C7E72]">({stepProduct.reviewsCount} reviews)</span>
                  </div>

                  <p className="mt-5 text-base sm:text-lg lg:text-xl text-[#5C5046] leading-relaxed font-light">
                    {currentStep.description}
                  </p>

                  <div className="mt-5 p-4 bg-white rounded-xl border border-[#E8DCCE]/90 text-sm sm:text-base text-[#4A4036] shadow-2xs">
                    <span className="font-semibold text-[#8C6D53]">Ritual Key Active:</span>{' '}
                    {stepProduct.benefits[0] || 'Clinically verified multi-peptide botanical infusion'}
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <div className="text-2xl sm:text-3xl font-semibold text-[#2C2724]">
                    ₹{stepProduct.price.toLocaleString('en-IN')}
                  </div>


                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
