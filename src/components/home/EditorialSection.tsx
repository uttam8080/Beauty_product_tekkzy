import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, ShieldCheck } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';

interface EditorialSlide {
  id: string;
  image: string;
  step: string;
  tag: string;
  badge: string;
  quote: string;
}

const EDITORIAL_SLIDES: EditorialSlide[] = [
  {
    id: 'editorial-1',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop',
    step: '01',
    tag: 'Awaken & Prime',
    badge: '100% Bio-Active',
    quote: 'Formulated with zero synthetic fillers, honoring the skin’s living microbiome.'
  },
  {
    id: 'editorial-2',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop',
    step: '02',
    tag: 'Active Hydration',
    badge: 'Multi-Peptide Matrix',
    quote: 'Micro-encapsulated hyaluronic spheres for continuous cellular plumping and glow.'
  },
  {
    id: 'editorial-3',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop',
    step: '03',
    tag: 'Velvet Silk Touch',
    badge: 'Weightless Finish',
    quote: 'Cold-pressed botanical oils deliver ultra-nourishing satin softness without heaviness.'
  },
  {
    id: 'editorial-4',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=1200&auto=format&fit=crop',
    step: '04',
    tag: 'Night Sanctuary',
    badge: 'Lipid Barrier Shield',
    quote: 'Replenishes essential ceramides overnight for wake-up glass skin luminosity.'
  }
];

export const EditorialSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll progress across the sticky section container (0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Vertical translateY transforms directly tied to scroll progress with settled states (dead zones).
  // Slide 0: fully visible at [0, 0.08], transitions out at [0.08, 0.28]
  // Slide 1: transitions in at [0.08, 0.28], settled at [0.28, 0.40], transitions out at [0.40, 0.60]
  // Slide 2: transitions in at [0.40, 0.60], settled at [0.60, 0.72], transitions out at [0.72, 0.92]
  // Slide 3: transitions in at [0.72, 0.92], settled at [0.92, 1.0]
  const y0 = useTransform(scrollYProgress, [0.08, 0.28], ['0%', '-100%'], { clamp: true });
  const y1 = useTransform(scrollYProgress, [0.08, 0.28, 0.40, 0.60], ['100%', '0%', '0%', '-100%'], { clamp: true });
  const y2 = useTransform(scrollYProgress, [0.40, 0.60, 0.72, 0.92], ['100%', '0%', '0%', '-100%'], { clamp: true });
  const y3 = useTransform(scrollYProgress, [0.72, 0.92], ['100%', '0%'], { clamp: true });

  const yTransforms = [y0, y1, y2, y3];

  // Dynamically update active index as user scrolls down the section
  // Midpoints of transitions:
  // Transition 0 -> 1: (0.08 + 0.28) / 2 = 0.18
  // Transition 1 -> 2: (0.40 + 0.60) / 2 = 0.50
  // Transition 2 -> 3: (0.72 + 0.92) / 2 = 0.82
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    let computedIndex = 0;
    if (latest < 0.18) {
      computedIndex = 0;
    } else if (latest < 0.50) {
      computedIndex = 1;
    } else if (latest < 0.82) {
      computedIndex = 2;
    } else {
      computedIndex = 3;
    }
    if (computedIndex !== activeIndex) {
      setActiveIndex(computedIndex);
    }
  });

  const currentSlide = EDITORIAL_SLIDES[activeIndex];

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = window.scrollY + rect.top;
      const containerHeight = containerRef.current.offsetHeight - window.innerHeight;

      // Targets correspond to the center of the settled range for each slide
      const targets = [0.04, 0.34, 0.66, 0.96];
      const targetScroll = containerTop + (containerHeight * targets[index]);

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      ref={containerRef}
      id="editorial-scroll-section"
      className="relative bg-[#FAF8F5] h-[350vh] sm:h-[400vh]"
    >
      {/* Sticky container that stays pinned in view during the scroll through all images */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[linear-gradient(to_bottom,#E5ECE4_50%,#FAF8F5_50%)] lg:bg-[linear-gradient(to_right,#E5ECE4_50%,#FAF8F5_50%)]">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-16 items-center">

            {/* ========================================================= */}
            {/* LEFT: SCROLL-DRIVEN STICKY IMAGE CONTAINER               */}
            {/* ========================================================= */}
            <div className="lg:col-span-6 relative">

              {/* Image Frame Container (Optimized for responsive viewport dimensions) */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5] max-h-[38vh] sm:max-h-[50vh] lg:max-h-[70vh] w-full max-w-md lg:max-w-none mx-auto rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-[#E8DCCE] border border-[#E8DCCE]">

                {/* Scroll-Driven Vertical Stack of Images */}
                {EDITORIAL_SLIDES.map((slide, idx) => (
                  <motion.div
                    key={slide.id}
                    style={{ y: yTransforms[idx] }}
                    className="absolute inset-0 w-full h-full will-change-transform"
                  >
                    <img
                      src={slide.image}
                      alt={`LUMÉRA Editorial - ${slide.tag}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2724]/50 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                ))}


              </div>

              {/* Dynamic Floating Luxury Glass Badge */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:right-4 z-20 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-[#E8DCCE] max-w-[200px] sm:max-w-[250px] transition-all duration-300">
                <div className="flex items-center gap-2 text-[#8C6D53] mb-1">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#8C6D53]">
                    {currentSlide.badge}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#5C5046] font-serif leading-snug">
                  "{currentSlide.quote}"
                </p>
              </div>

            </div>

            {/* ========================================================= */}
            {/* RIGHT: EDITORIAL CONTENT (REMAINS COMPLETELY STATIC)      */}
            {/* ========================================================= */}
            <div className="lg:col-span-6 space-y-3.5 sm:space-y-5 lg:space-y-6">

              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6D53] block">
                The LUMÉRA Philosophy
              </span>

              <h2 className="text-[#2C2724] leading-[1.15]">
                <span style={{ fontFamily: "'Kaushan Script', cursive" }} className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-wide">
                  Your Ritual.
                </span>
                <br />
                <span className="italic font-light font-serif text-3xl sm:text-4xl lg:text-5xl text-[#8C6D53]">
                  Your Glow.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#5C5046] font-semibold leading-relaxed">
                We believe beauty should feel like a sanctuary, not a chore. Every LUMÉRA formula is crafted at the intersection of high-potency dermatological science and sensorial pleasure — blending cold-pressed botanicals with multi-molecular peptides.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#E8DCCE]/70 shadow-sm">
                  <Droplets className="w-5 h-5 text-[#8C6D53] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#2C2724] uppercase tracking-wider">Multi-Peptide Science</h4>
                    <p className="text-[11px] text-[#786C62] mt-0.5">Penetrates deeper for clinical barrier repair.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-[#E8DCCE]/70 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-[#8C6D53] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#2C2724] uppercase tracking-wider">Zero Compromise</h4>
                    <p className="text-[11px] text-[#786C62] mt-0.5">No parabens, microplastics, or synthetic dyes.</p>
                  </div>
                </div>
              </div>

              {/* Scroll progress indicators & Action CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  id="editorial-discover-story"
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-8 bg-[#2C2724] text-[#FAF8F5] hover:bg-[#8C6D53] text-xs uppercase tracking-[0.2em] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all group"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
