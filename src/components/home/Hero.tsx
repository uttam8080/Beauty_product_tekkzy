import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FanOpacityDivider } from '../ui/FanOpacityDivider';

interface HeroSlide {
  id: string;
  image: string;
  tag: string;
  title: string;
  highlightWord: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop',
    tag: 'Haute Velvet Lipsticks',
    title: 'Rich Color.',
    highlightWord: 'Pure Silk.',
    subtitle: 'Infused with cold-pressed rosehip and hyaluronic spheres for 12-hour plush hydration and weightless matte allure.',
    ctaText: 'Shop Lip Formulations',
    ctaLink: '/shop?category=makeup'
  },
  {
    id: 'slide-2',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2000&auto=format&fit=crop',
    tag: 'Autumn 2026 Atelier',
    title: 'Beauty,',
    highlightWord: 'Refined Radiance.',
    subtitle: 'Discover clean skincare and luminous cosmetics crafted with multi-peptide botanicals for an effortless everyday glow.',
    ctaText: 'Explore New Arrivals',
    ctaLink: '/shop?filter=new'
  },
  {
    id: 'slide-3',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2000&auto=format&fit=crop',
    tag: 'Atelier Botanical Elixirs',
    title: 'Pure Glass Skin',
    highlightWord: 'Hydration.',
    subtitle: 'Clinically balanced multi-active formulations that deeply replenish lipid barriers and illuminate dull skin tone.',
    ctaText: 'Discover Skincare',
    ctaLink: '/shop?category=skincare'
  },
  {
    id: 'slide-4',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2000&auto=format&fit=crop',
    tag: 'Complexion Perfection',
    title: 'Second-Skin',
    highlightWord: 'Luminous Glow.',
    subtitle: 'Breathable, medium-to-buildable coverage foundation that adapts to your natural undertone with a luminous satin finish.',
    ctaText: 'Find Your Shade',
    ctaLink: '/shop?category=makeup&subcategory=Foundation'
  }
];

export const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(1); // 1 = right-to-left, -1 = left-to-right
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Cinematic slide timing: 4.2 seconds per slide (3s viewing + 1.2s smooth slide)
  const SLIDE_DURATION_MS = 4200;

  // Next Slide (Right to Left auto-swap)
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
  }, []);

  // Previous Slide (Left to Right)
  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Continuous Autoplay timer
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, SLIDE_DURATION_MS);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const currentSlide = HERO_SLIDES[currentIndex];

  // Cinematic Horizontal Slider + Smooth Zoom Out Animation Variants
  const cinematicSlideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      scale: 1.15,
      opacity: 0.85,
    }),
    center: {
      x: 0,
      scale: 1.0,
      opacity: 1,
      transition: {
        x: {
          duration: 1.25,
          ease: [0.25, 1, 0.5, 1], // Smooth cinematic ease-out curve
        },
        scale: {
          duration: 3.0,
          ease: [0.22, 1, 0.36, 1], // Smooth deceleration zoom-out (1.15 -> 1.0)
        },
        opacity: {
          duration: 0.6,
          ease: 'easeOut',
        }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-100%' : '100%',
      scale: 0.98,
      opacity: 0.7,
      transition: {
        x: {
          duration: 1.25,
          ease: [0.25, 1, 0.5, 1], // Synchronized slide-left with entering slide
        },
        scale: {
          duration: 1.25,
          ease: 'easeInOut',
        },
        opacity: {
          duration: 0.8,
          ease: 'easeIn',
        }
      }
    })
  };

  return (
    <section 
      id="hero-section"
      className="relative w-full overflow-hidden bg-[#141110] min-h-[540px] sm:min-h-[600px] lg:min-h-[660px] flex items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* ========================================================================= */}
      {/* CINEMATIC HORIZONTAL IMAGE SLIDER (ZOOM-OUT + SLIDE-LEFT CONTINUOUS LOOP) */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide.id}
            custom={direction}
            variants={cinematicSlideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full will-change-transform"
          >
            {/* High-res background image */}
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover object-[center_35%] select-none pointer-events-none"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Sophisticated Luxury Scrim Overlays */}
        {/* Left-to-right deep dark vignette for crisp typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141110]/95 via-[#141110]/75 to-[#141110]/25 lg:to-transparent pointer-events-none z-10" />
        
        {/* Bottom subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141110]/80 via-transparent to-transparent pointer-events-none z-10" />

        {/* Top subtle vignette */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#141110]/60 to-transparent pointer-events-none z-10" />
      </div>

      {/* ========================================================= */}
      {/* MAIN FOREGROUND HERO CONTENT                              */}
      {/* ========================================================= */}
      <div className="relative z-20 w-full px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          


          {/* Dynamic Headline */}
          <div className="min-h-[85px] sm:min-h-[110px] lg:min-h-[135px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide.id}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-3.5xl sm:text-5xl lg:text-[62px] text-white tracking-tight leading-[1.08] font-normal drop-shadow-md"
              >
                {currentSlide.title}{' '}
                <span className="italic font-light text-[#E8C7A5] font-serif">
                  {currentSlide.highlightWord}
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Dynamic Subtitle */}
          <div className="min-h-[55px] sm:min-h-[68px] flex items-center mt-2.5 sm:mt-3.5">
            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${currentSlide.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="text-sm sm:text-base lg:text-lg text-[#EDE6E0]/90 font-light leading-relaxed max-w-xl drop-shadow-sm"
              >
                {currentSlide.subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Action Buttons & Minimal Slide Indicator Dots */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              id="hero-primary-cta"
              to={currentSlide.ctaLink}
              className="py-3.5 sm:py-4 px-8 bg-[#E8C7A5] hover:bg-[#DDB892] text-[#1C1917] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2.5 group"
            >
              <span>{currentSlide.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>



            {/* Subtle Minimal Slide Dots */}
            <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:pl-4">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className="p-1 focus:outline-none group"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? 'w-7 bg-[#E8C7A5]'
                        : 'w-1.5 bg-white/30 group-hover:bg-white/60'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Ethos Trust Badges */}
          <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 sm:gap-8 text-[11px] sm:text-xs uppercase tracking-wider text-[#D8CCC0]">
            <span className="flex items-center gap-2 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8C7A5]" /> 100% Clean & Vegan
            </span>
            <span className="flex items-center gap-2 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8C7A5]" /> Cruelty-Free Certified
            </span>
            <span className="flex items-center gap-2 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8C7A5]" /> Dermatologist Tested
            </span>
          </div>

        </div>
      </div>

      {/* Fan Opacity Section Divider (Translucent Layered Wings at Section Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none">
        <FanOpacityDivider position="bottom" color="#FAF8F5" />
      </div>
    </section>
  );
};
