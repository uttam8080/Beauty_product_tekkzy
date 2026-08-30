import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24">
      
      {/* Hero Banner */}
      <section className="relative py-24 bg-[#FAF8F5] border-b border-[#E8DCCE]/70 overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DCCE] text-[#8C6D53] text-xs uppercase tracking-[0.2em] font-semibold mb-6 shadow-2xs">
            <span>The VÉLURE Heritage</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#2C2724] font-medium tracking-tight leading-tight">
            Elevating everyday beauty into a soulful ritual.
          </h1>

          <p className="mt-6 text-sm sm:text-base text-[#5C5046] font-light leading-relaxed">
            Founded on the belief that luxury skincare should never compromise on purity or efficacy, VÉLURE formulates clean, peptide-rich botanical solutions that nourish the skin barrier from within.
          </p>
        </div>
      </section>

      {/* Editorial Split Story */}
      <section className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-[#E8DCCE]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                alt="VÉLURE Founder in Laboratory"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2724]/40 via-transparent to-transparent" />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D53] block">
                Radical Transparency
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2724] font-medium tracking-tight">
                Clinically Proven, Consciously Formulated
              </h2>

              <p className="text-xs sm:text-sm text-[#5C5046] leading-relaxed">
                In our Swiss and Indian formulation ateliers, our dermatological biochemists reject over 2,800 questionable synthetic ingredients, choosing bio-identical ceramides, cold-extracted rosehip, and micro-fermented hyaluronic acid instead.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white rounded-xl border border-[#E8DCCE]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C2724]">Eco-Luxury Packaging</h4>
                  <p className="text-[11px] text-[#786C62] mt-1">Weighted, recyclable Italian flint glass and FSC-certified paper.</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E8DCCE]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#2C2724]">Microbiome Friendly</h4>
                  <p className="text-[11px] text-[#786C62] mt-1">pH-balanced to respect your acid mantle and skin resilience.</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 py-3.5 px-8 bg-[#2C2724] text-[#FAF8F5] hover:bg-[#8C6D53] text-xs uppercase tracking-[0.2em] font-semibold rounded-xl shadow-lg transition-all"
                >
                  <span>Explore Formulations</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-16 bg-white border-y border-[#E8DCCE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <blockquote className="font-serif text-2xl sm:text-3xl text-[#2C2724] italic font-light leading-snug">
            "Beauty is not about masking or transforming who you are — it is the quiet, daily art of honoring your natural glow."
          </blockquote>
          <p className="text-xs font-bold uppercase tracking-widest text-[#8C6D53]">
            — Elena Vance, Founder & Master Formulator
          </p>
        </div>
      </section>

    </div>
  );
};
