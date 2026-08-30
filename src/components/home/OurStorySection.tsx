import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SmoothRevealText } from '../ui/SmoothRevealText';

interface StoryCard {
  id: string;
  num: string;
  title: string;
  desc: string;
  borderRadius: string;
  bgColor: string;
  floatDuration: number;
  floatDelay: number;
}

const StoryCardItem: React.FC<{ card: StoryCard; idx: number }> = ({ card, idx }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cardEl = e.currentTarget;
    const box = cardEl.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;

    // Divide by a factor to control maximum tilt angle
    setRotateX(-y / 15);
    setRotateY(x / 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    // 1. Continuous Floating Liquid Animation wrapper
    <motion.div
      animate={{
        y: [0, -12, 0]
      }}
      transition={{
        duration: card.floatDuration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: card.floatDelay
      }}
      className="w-full h-full"
    >
      {/* 2. Interactive 3D perspective tilt card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        whileHover={{
          scale: 1.04,
        }}
        className="p-8 border border-[#E8DCCE]/70 shadow-[0_12px_35px_rgba(44,39,36,0.03)] hover:shadow-[0_20px_50px_rgba(44,39,36,0.08)] hover:border-[#8C6D53]/45 transition-all duration-300 relative group cursor-default min-h-[320px] flex flex-col justify-between"
        style={{
          borderRadius: card.borderRadius,
          backgroundColor: card.bgColor,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* 3D Depth Card Content container */}
        <div style={{ transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }} className="relative h-full flex flex-col justify-between flex-1">

          <div>
            {/* Header row: Number Badge (replacing custom icon symbols) */}
            <div className="flex items-center justify-between mb-6">
              {/* Clean circle number badge */}
              <div className="w-12 h-12 rounded-full bg-white border border-[#E8DCCE]/45 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform duration-300">
                <span className="text-sm font-serif font-bold text-[#8C6D53]">
                  {card.num}
                </span>
              </div>
            </div>

            <h4 className="font-sans text-xs sm:text-sm font-black uppercase tracking-widest text-[#2C2724] mb-3">
              {card.title}
            </h4>

            <p className="font-sans text-xs sm:text-[13px] leading-relaxed text-[#5C5046] select-text font-medium tracking-wide">
              {card.desc}
            </p>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export const OurStorySection: React.FC = () => {
  const STORY_CARDS: StoryCard[] = [
    {
      id: 'card-1',
      num: '01',
      title: 'Sustainable Origins',
      desc: 'We trace every botanical ingredient back to its source, ensuring ethical harvesting practices that respect the local ecosystem and farmers.',
      borderRadius: '60px 24px 60px 24px', // organic leaf shape
      bgColor: 'rgba(213, 235, 230, 0.5)', // soft transparent mint green
      floatDuration: 4.5,
      floatDelay: 0,
    },
    {
      id: 'card-2',
      num: '02',
      title: 'Clinical Efficacy',
      desc: 'Every active peptide serum and ceramide cream undergoes rigorous testing to guarantee transformative, visible skin barrier repair results.',
      borderRadius: '24px 60px 24px 60px', // organic shield shape
      bgColor: 'rgba(255, 214, 196, 0.45)', // soft transparent rose apricot
      floatDuration: 5.2,
      floatDelay: 0.6,
    },
    {
      id: 'card-3',
      num: '03',
      title: 'Parisian Craftsmanship',
      desc: 'Formulated in France, combining traditional European botanical wisdom with state-of-the-art green chemistry.',
      borderRadius: '60px 60px 24px 24px', // organic dome/apothecary shape
      bgColor: 'rgba(186, 206, 234, 0.45)', // soft transparent slate blue
      floatDuration: 4.8,
      floatDelay: 0.3,
    },
  ];

  return (
    <section className="pt-40 pb-28 bg-[#FAF8F5] relative overflow-hidden select-none">

      {/* Wavy Section Divider (zIndex: 10) - Masks the corner accents along the wave curve */}
      <div className="absolute top-0 left-0 w-full h-[80px] overflow-hidden leading-none select-none pointer-events-none z-10 bg-transparent">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-full block">
          <path
            d="M 0 140 C 150 60, 300 60, 450 140 C 600 220, 800 50, 1000 50 C 1200 50, 1350 170, 1440 170 L 1440 0 L 0 0 Z"
            fill="#ffffff"
          />

        </svg>
      </div>

      {/* Top-Right Corner Wavy Fluid Accents (matching user uploaded layout, zIndex: 5, behind the divider) */}
      <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] pointer-events-none select-none overflow-hidden z-5">
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outermost wave (Shape 1) */}
          <path
            d="M 60 0 C 60 70, 100 80, 120 120 C 130 140, 170 150, 200 150 L 200 0 Z"
            fill="#E8DCCE"
            opacity="0.45"
          />
          {/* Innermost wave (Shape 2) */}
          <path
            d="M 120 0 C 120 50, 150 60, 160 90 C 170 110, 185 120, 200 120 L 200 0 Z"
            fill="#C2A894"
            opacity="0.35"
          />
        </svg>
      </div>

      {/* Content wrapper */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto">

          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D53] block mb-4 pointer-events-none">
            <SmoothRevealText delay={0.1} type="block">
              Our Origins & Journey
            </SmoothRevealText>
          </span>

          {/* Headline in Getai Grotesk font */}
          <h2 className="font-getai uppercase text-3xl sm:text-4xl lg:text-[44px] text-[#2C2724] leading-[1.1] mb-8">
            <span className="inline-block"><SmoothRevealText delay={0.2}>Born from a</SmoothRevealText></span> <br />
            <span className="text-4xl sm:text-5xl lg:text-[56px] text-[#8C6D53] inline-block mt-2">
              <SmoothRevealText delay={0.4}>Desire for Better</SmoothRevealText>
            </span>
          </h2>

          {/* Grid of 3 Luxury Story Cards with custom shapes, skincare color themes, and floating animations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {STORY_CARDS.map((card, idx) => (
              <StoryCardItem key={card.id} card={card} idx={idx} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
