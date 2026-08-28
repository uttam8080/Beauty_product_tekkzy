import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, HelpCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PhilosophyTile {
  num: string;
  title: string;
  desc: string;
}

export const AboutSection: React.FC = () => {
  const [activeTile, setActiveTile] = useState<number>(0);

  const PHILOSOPHY_TILES: PhilosophyTile[] = [
    {
      num: '01',
      title: 'Bio-Active Peptide Science',
      desc: 'Formulated with multi-molecular weight peptides that penetrate deep within the skin layers to repair the lipid barrier, stimulate collagen synthesis, and restore natural bounce.',
    },
    {
      num: '02',
      title: 'French Botanical Infusions',
      desc: 'Every batch is enriched with premium cold-pressed rosehip oils, Damascus rose water, and organic extracts grown sustainably in the organic valleys of Southern France.',
    },
    {
      num: '03',
      title: 'Conscious & Zero-Compromise',
      desc: '100% vegan, cruelty-free, and dermatologically tested on sensitive skin. Formulated without synthetic dyes, microplastics, or parabens to protect both skin and ocean reefs.',
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden select-none">
      {/* Decorative luxury gradient background accent */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-[#E8DCCE]/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-10 w-[250px] h-[250px] bg-[#FFD6C4]/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* LEFT SIDE: LAYERED PHOTO COLLAGE WITH ROTATED STAMP */}
          <div className="lg:col-span-6 relative flex items-center justify-center pointer-events-none">
            
            {/* Background overlapping element (Main Photo) */}
            <div className="w-[82%] aspect-[4/5] rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(44,39,36,0.05)] border border-[#E8DCCE]/40 relative">
              <img 
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop" 
                alt="About LUMÉRA Skincare"
                className="w-full h-full object-cover select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/30 to-transparent" />
            </div>

            <motion.div 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute -bottom-8 -right-2 w-[48%] aspect-square rounded-[30px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.1)] border-4 border-[#FAF8F5]"
            >
              <img 
                src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=600&auto=format&fit=crop" 
                alt="Botanical Active Serums"
                className="w-full h-full object-cover select-none"
              />
            </motion.div>

            {/* Rotating Signature Stamp using custom Minggola font */}
            <div className="absolute -top-6 -left-4 w-32 h-32 bg-white/80 backdrop-blur-md rounded-full shadow-[0_12px_35px_rgba(44,39,36,0.06)] border border-white/40 flex flex-col items-center justify-center p-4 select-none hidden sm:flex">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#8C6D53]">EST. 2024</span>
              <span 
                style={{ fontFamily: 'Minggola' }}
                className="text-4xl text-[#2C2724] leading-none mt-1"
              >
                Paris
              </span>
              <span className="text-[8px] font-black uppercase text-[#8C6D53] tracking-widest mt-1">Formulations</span>
            </div>

          </div>

          {/* RIGHT SIDE: EDITORIAL CONTENT WITH MINGGOLA SCRIPT AND INTERACTIVE PHILOSOPHY TILES */}
          <div className="lg:col-span-6 flex flex-col justify-center select-text">
            
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D53] block mb-4 pointer-events-none">
              The Luméra Philosophy
            </span>

            {/* Main Editorial Signature Heading */}
            <h2 className="font-getai uppercase text-3xl sm:text-4xl lg:text-[40px] tracking-wide text-[#2C2724] leading-[1.05] mb-5">
              We Cultivate <br /> 
              <span 
                className="text-4xl sm:text-5xl lg:text-[52px] text-[#8C6D53] block mt-2"
              >
                True Radiance
              </span>
            </h2>

            {/* Tagline Statement */}
            <p className="text-[#8C6D53] font-serif text-base sm:text-lg italic leading-relaxed mb-4 max-w-xl">
              "A sanctuary for your daily skin ritual, marrying cold-pressed organic botanicals with dermatological multi-peptide science."
            </p>

            {/* Interactive Luxury Highlight Tiles */}
            <div className="space-y-2.5 mb-6 max-w-xl">
              {PHILOSOPHY_TILES.map((tile, idx) => {
                const isActive = activeTile === idx;

                return (
                  <div
                    key={tile.num}
                    onClick={() => setActiveTile(idx)}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-white border-[#8C6D53] shadow-[0_8px_30px_rgba(44,39,36,0.03)]'
                        : 'bg-white/40 border-[#E8DCCE]/75 hover:bg-white/60 hover:border-[#8C6D53]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className={`text-xs font-bold font-serif ${isActive ? 'text-[#8C6D53]' : 'text-[#8C7A6B]/50'}`}>
                          {tile.num}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2C2724]">
                          {tile.title}
                        </h4>
                      </div>
                      <div className={`p-1 transition-transform duration-300 ${isActive ? 'rotate-180 text-[#8C6D53]' : 'text-[#8C7A6B]/40'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: 'auto', opacity: 1, marginTop: 8 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs sm:text-[13px] leading-relaxed text-[#5C5046] border-t border-[#FAF8F5] pt-2">
                            {tile.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Learn More signature CTA button */}
            <div className="pt-2">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 py-3.5 px-9 bg-[#1C1917] text-white hover:bg-[#8C6D53] text-[10px] font-bold uppercase tracking-widest rounded-xl shadow-md transition-all duration-300"
              >
                <span>Learn Our Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
