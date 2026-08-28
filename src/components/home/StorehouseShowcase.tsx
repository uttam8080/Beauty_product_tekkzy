import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';

interface ShowcaseItem {
  id: string;
  productId: string;
  shortName: string;
  tagline: string;
  spec: string;
  bgColor: string;
  bubbleColor: string;
  hotspots: {
    top: { label: string; icon: React.ReactNode };
    bottom: { label: string; icon: React.ReactNode };
  };
  tags: string[];
}

export const StorehouseShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { addToCart, openCart } = useCart();

  const SHOWCASE_ITEMS: ShowcaseItem[] = [
    {
      id: 'sc-1',
      productId: 'dew-drop-serum',
      shortName: 'Glass Drop',
      tagline: 'FEEL TRUE HYDRATION WITH LUMÉRA DROP - FOLLOW GLOW',
      spec: '50ml × 1.7oz',
      bgColor: '#D5EBE6', // soft mint/sky green for white tube
      bubbleColor: '#A8DCD0',
      hotspots: {
        top: { label: 'Prebiotic Complex' },
        bottom: { label: '4x Hydration Barrier' },
      },
      tags: ['Hydrating', 'Peptide', 'Squalane', 'Barrier', 'Bouncy'],
    },
    {
      id: 'sc-2',
      productId: 'rose-silk-lip-tint',
      shortName: 'Petal Silk',
      tagline: 'FEEL TRUE PLUMPING WITH BULGARIAN ROSE - FOLLOW SHINE',
      spec: '6ml × 0.2oz',
      bgColor: '#DC2626', // solid vibrant red
      bubbleColor: '#EF4444',
      hotspots: {
        top: { label: 'Soft Satin Tint' },
        bottom: { label: 'Bulgarian Rose Oil' },
      },
      tags: ['Satin', 'Nourishing', 'Rosehip', 'Plumping', 'Shine'],
    },
    {
      id: 'sc-3',
      productId: 'velvet-glow-foundation',
      shortName: 'Velvet Glow',
      tagline: 'FEEL TRUE COVERAGE WITH SECOND-SKIN VELVET - FOLLOW MATTE',
      spec: '30ml × 1.0oz',
      bgColor: '#BACEEA', // slate/navy blue for Curology products
      bubbleColor: '#99B9E7',
      hotspots: {
        top: { label: 'Second-Skin Matte' },
        bottom: { label: '16H Breathable Wear' },
      },
      tags: ['Niacinamide', 'Non-peeling', 'Coverage', 'Blur', 'Satin'],
    },
    {
      id: 'sc-4',
      productId: 'cloud-skin-moisturizer',
      shortName: 'Cloud Cream',
      tagline: 'FEEL TRUE REPAIR WITH CERAMIDE SOUFFLÉ - FOLLOW RADIANCE',
      spec: '60ml × 2.0oz',
      bgColor: '#FFBFA3', // beautiful warm apricot / orange
      bubbleColor: '#FFD6C4',
      hotspots: {
        top: { label: 'Barrier Deep Repair' },
        bottom: { label: '5 Complex Ceramides' },
      },
      tags: ['Soufflé', 'Squalane', 'Soothe', 'Microbiome', 'Hydration'],
    },
  ];

  let R_x = 230;
  let R_y = 270;
  if (windowWidth < 640) {
    R_x = 150;
    R_y = 175;
  } else if (windowWidth < 1024) {
    R_x = 190;
    R_y = 225;
  }

  // Track scroll progress across the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Dynamically map scroll progress to colors
  const blobBg = useTransform(
    scrollYProgress,
    [0.12, 0.37, 0.62, 0.87],
    [
      SHOWCASE_ITEMS[0].bgColor,
      SHOWCASE_ITEMS[1].bgColor,
      SHOWCASE_ITEMS[2].bgColor,
      SHOWCASE_ITEMS[3].bgColor,
    ]
  );

  // Dynamically map scroll progress to bubble color
  const bubbleBg = useTransform(
    scrollYProgress,
    [0.12, 0.37, 0.62, 0.87],
    [
      SHOWCASE_ITEMS[0].bubbleColor,
      SHOWCASE_ITEMS[1].bubbleColor,
      SHOWCASE_ITEMS[2].bubbleColor,
      SHOWCASE_ITEMS[3].bubbleColor,
    ]
  );

  // Parallax background bubbles drift
  const bubble1Y = useTransform(scrollYProgress, [0, 1], [-40, 120]);
  const bubble2Y = useTransform(scrollYProgress, [0, 1], [60, -90]);
  const bubble3Y = useTransform(scrollYProgress, [0, 1], [-15, 60]);

  // Update active slide index based on scroll progress
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    let index = 0;
    if (latest < 0.25) index = 0;
    else if (latest < 0.5) index = 1;
    else if (latest < 0.75) index = 2;
    else index = 3;

    if (index !== activeIdx) {
      setActiveIdx(index);
    }
  });

  const handleItemClick = (index: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = window.scrollY + rect.top;
      const containerHeight = containerRef.current.offsetHeight - window.innerHeight;

      // scroll target is at the center of the item's scroll range
      const targets = [0.12, 0.37, 0.62, 0.87];
      const targetScroll = containerTop + containerHeight * targets[index];

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  const handleAddToBag = (productId: string) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (product) {
      addToCart(product, 1);
      setAddedItems((prev) => ({ ...prev, [productId]: true }));
      openCart();
      setTimeout(() => {
        setAddedItems((prev) => ({ ...prev, [productId]: false }));
      }, 2000);
    }
  };

  const activeItem = SHOWCASE_ITEMS[activeIdx];
  const activeProduct = PRODUCTS.find((p) => p.id === activeItem.productId) || PRODUCTS[0];

  return (
    <section
      ref={containerRef}
      id="storehouse-showcase-section"
      className="relative bg-[#e3dcd2] h-[350vh] sm:h-[400vh]"
    >
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Wavy Section Divider (zIndex: 30) - Masks the background card along the wave curve */}
        <div className="absolute top-0 left-0 w-full h-[80px] overflow-hidden leading-none select-none pointer-events-none z-30 bg-transparent">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-full block">
            <defs>
              <linearGradient id="editorialSplit" x1="0" y1="0" x2="1" y2="0">
                <stop offset="50%" stopColor="#E5ECE4" />
                <stop offset="50%" stopColor="#FAF8F5" />
              </linearGradient>
            </defs>
            <path
              d="M 0 140 C 150 60, 300 60, 450 140 C 600 220, 800 50, 1000 50 C 1200 50, 1350 170, 1440 170 L 1440 0 L 0 0 Z"
              fill={windowWidth >= 1024 ? 'url(#editorialSplit)' : '#FAF8F5'}
            />
            {/* Floating Bubble 1 (Large - Left) */}
            <motion.circle
              cx={220}
              cy={70}
              r={20}
              fill="#FAF8F5"
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
              fill="#FAF8F5"
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
              fill="#FAF8F5"
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
              fill="#FAF8F5"
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




        {/* 2. Dynamic Asymmetrical Background Card (zIndex: 25) */}
        {/* Zero-gap layout: flush with top, bottom, and left on desktop (borderRadius: 150px 0px 0px 380px) */}
        {/* On mobile: flush with top, left, right (h-[48vh] or h-[52vh], borderRadius: 0px 0px 60px 60px) */}
        <motion.div
          style={{
            backgroundColor: blobBg,
            borderRadius: windowWidth >= 1024 ? '150px 0px 0px 380px' : '0px 0px 60px 60px',
            zIndex: 25,
          }}
          className="absolute top-0 right-0 w-full h-[48vh] sm:h-[52vh] lg:w-[54vw] lg:h-full flex items-center justify-center shadow-[0_24px_55px_rgba(44,39,36,0.05)] transition-colors duration-500 ease-out will-change-transform z-25"
        >
          {/* Blurred background element (Bubble 1) */}
          <motion.div
            style={{ y: bubble1Y, backgroundColor: bubbleBg }}
            className="absolute w-12 h-12 rounded-full blur-[8px] opacity-75 -left-6 top-10 pointer-events-none"
          />

          {/* Blurred background element (Bubble 2) */}
          <motion.div
            style={{ y: bubble2Y, backgroundColor: bubbleBg }}
            className="absolute w-20 h-20 rounded-full blur-[14px] opacity-60 -right-8 bottom-12 pointer-events-none"
          />

          {/* Blurred background element (Bubble 3) */}
          <motion.div
            style={{ y: bubble3Y, backgroundColor: bubbleBg }}
            className="absolute w-10 h-10 rounded-full blur-[6px] opacity-80 left-20 -bottom-4 pointer-events-none"
          />

          {/* Vertical Pill Tag (matching the Vespa vertical pill) */}
          <div className="absolute left-6 lg:left-12 top-10 flex flex-col items-center gap-4 z-30 pointer-events-none">
            <div className="bg-white/95 backdrop-blur-md px-2 py-4 rounded-full border border-white/40 flex items-center justify-center [writing-mode:vertical-lr] select-none shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
              <span className="text-[9px] font-black uppercase text-[#2C2724] tracking-[0.25em]">
                LUMÉRA ATELIER
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#1C1917] text-white flex items-center justify-center shadow-md">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Floating Pill Tags Cloud (bottom-right) */}
          <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-16 flex flex-wrap gap-1.5 max-w-[220px] sm:max-w-xs justify-end z-30 pointer-events-none">
            {activeItem.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-bold text-[#1C1917]/95 bg-white/70 backdrop-blur-md border border-white/30 px-3 py-1.5 rounded-full shadow-2xs select-none"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 3. Spatial 3D Multi-Product Showcase (depth of field foreground/background transition) */}
        {/* Rendered directly as direct siblings of the card, sharing the same absolute coordinate box */}
        {SHOWCASE_ITEMS.map((item, idx) => {
          const product = PRODUCTS.find((p) => p.id === item.productId) || PRODUCTS[0];
          const diff = idx - activeIdx;

          let x = 0;
          let y = 0;
          let scale = 1;
          let opacity = 1;
          let blur = 0;
          let zIndex = 30;

          if (diff === 0) {
            // Active center item (in sharp focus)
            x = 0;
            y = 0;
            scale = 1.0;
            opacity = 1;
            blur = 0;
            zIndex = 30;
          } else {
            // Circular orbit calculations (elliptical track around the border of the card)
            const theta = diff * (Math.PI / 2); // 90 degree step per slide diff
            x = R_x * Math.sin(theta);
            y = -R_y * Math.cos(theta);

            // Depth of field calculations based on Y position (y < 0 background, y > 0 foreground)
            zIndex = 20; // Rendered BEHIND the card (zIndex 25)
            if (y < 0) {
              scale = 0.6;
              opacity = 0.45;
              blur = 5;
            } else if (y > 0) {
              scale = 1.25;
              opacity = 0.6;
              blur = 8;
            } else {
              scale = x > 0 ? 0.75 : 1.1;
              opacity = x > 0 ? 0.5 : 0.7;
              blur = x > 0 ? 4 : 6;
            }
          }

          // Offset the showcase wrappers horizontally to align perfectly centered on top of the right-side card
          return (
            <motion.div
              key={item.id}
              style={{
                zIndex,
              }}
              animate={{
                x,
                y,
                scale,
                opacity,
                filter: `blur(${blur}px)`,
              }}
              transition={{
                type: 'spring',
                stiffness: 85,
                damping: 15,
              }}
              className="absolute top-0 right-0 w-full h-[48vh] sm:h-[52vh] lg:w-[54vw] lg:h-full flex items-center justify-center p-8 will-change-transform pointer-events-none"
            >
              <div className="relative w-full h-full max-w-[260px] sm:max-w-[350px] lg:max-w-[460px] aspect-square flex items-center justify-center">

                {/* Active Interactive Hotspots (Badges) floating in front of product */}
                {diff === 0 && (
                  <div className="absolute inset-0 z-40 pointer-events-none select-none">
                    {/* Hotspot 1 (Upper-Right) */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.4 }}
                      className="absolute right-0 top-1/4 translate-x-12 -translate-y-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/50 flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.06)] pointer-events-auto"
                    >
                      <span className="text-[10px] font-bold tracking-wide text-[#2C2724] whitespace-nowrap">
                        {activeItem.hotspots.top.label}
                      </span>
                    </motion.div>

                    {/* Hotspot 2 (Lower-Left) */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.4 }}
                      className="absolute left-0 bottom-1/4 -translate-x-12 translate-y-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/50 flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.06)] pointer-events-auto"
                    >
                      <span className="text-[10px] font-bold tracking-wide text-[#2C2724] whitespace-nowrap">
                        {activeItem.hotspots.bottom.label}
                      </span>
                    </motion.div>
                  </div>
                )}

                {/* Gently bobbing animation */}
                <motion.div
                  animate={{
                    y: diff === 0 ? [0, -12, 0] : 0,
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-full h-full flex items-center justify-center drop-shadow-[0_30px_45px_rgba(0,0,0,0.25)] filter z-30"
                >
                  <img
                    src={`/transparent-products/${product.id}.png`}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).onerror = null;
                      (e.currentTarget as HTMLImageElement).src = product.images[0];
                    }}
                    className="w-full h-full object-contain select-none"
                  />
                </motion.div>

              </div>
            </motion.div>
          );
        })}

        {/* 4. Content Grid: Contains the text columns, description details and thumbnails */}
        {/* Pointers: pointer-events-none on parent grid, pointer-events-auto on interactive elements */}
        <div className="relative w-full h-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-10 lg:py-16 pointer-events-none z-40">

          {/* LEFT COLUMN: Heading, Paragraph, CTA and Thumbnail Selectors */}
          <div className="w-full lg:w-[46%] flex flex-col justify-center h-full pt-[46vh] sm:pt-[50vh] lg:pt-0 pointer-events-auto select-text">

            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8C6D53] block mb-2 pointer-events-none">
              Atelier Showcase
            </span>

            {/* Giant Heading */}
            <h2 className="font-serif font-black text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] leading-[1.1] tracking-tight mb-6">
              Feel True Comfort <br className="hidden sm:inline" /> With Luméra Rituals - <br /> Follow Elegance
            </h2>

            {/* Scroll Mouse Indicator */}
            <div className="flex items-center gap-3 mb-6 pointer-events-none">
              <div className="w-5 h-8 border-2 border-[#8C6D53]/30 rounded-full flex justify-center p-0.5">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1 h-1 bg-[#8C6D53] rounded-full"
                />
              </div>
              <span className="text-[9px] uppercase font-bold text-[#8C6D53]/60 tracking-widest">
                Scroll to Explore
              </span>
            </div>

            {/* Paragraph description with accent bullet */}
            <div className="flex items-start gap-3 max-w-md mb-8 pointer-events-none">
              <span className="w-2.5 h-2.5 bg-[#8C6D53] shrink-0 mt-1 rounded-xs" />
              <p className="text-[10px] sm:text-xs uppercase leading-relaxed text-[#5C534C] tracking-wider font-semibold">
                {activeItem.tagline}. {activeProduct.description.substring(0, 105).toUpperCase()}...
              </p>
            </div>

            {/* CTA and Slide Index row */}
            <div className="flex items-center gap-6 mb-8">
              {/* Add to Bag Button */}
              <button
                onClick={() => handleAddToBag(activeProduct.id)}
                className="px-6 py-3 rounded-full bg-[#1C1917] text-white text-[10px] font-bold tracking-wider hover:bg-[#8C6D53] transition-all flex items-center gap-2 shadow-sm pointer-events-auto cursor-pointer"
              >
                <ShoppingBag className="w-4.5 h-4.5" />
                {addedItems[activeProduct.id] ? 'ADDED TO BAG' : `ADD TO BAG — ₹${activeProduct.price}`}
              </button>

              {/* Slide Index display */}
              <div className="flex items-baseline gap-0.5 font-serif text-2xl text-[#2C2724] font-medium select-none pointer-events-none">
                <span>0{activeIdx + 1}</span>
                <span className="text-xs text-[#8C7A6B]/50">/ 04</span>
              </div>
            </div>

            {/* Thumbnail selector carousel */}
            <div className="flex items-center gap-3 pointer-events-auto">
              {SHOWCASE_ITEMS.map((item, idx) => {
                const product = PRODUCTS.find((p) => p.id === item.productId) || PRODUCTS[0];
                const isActive = idx === activeIdx;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(idx)}
                    className={`relative flex flex-col items-end justify-end w-20 h-24 sm:w-22 sm:h-26 rounded-2xl border overflow-hidden transition-all cursor-pointer ${isActive
                      ? 'border-[#8C6D53] shadow-[0_8px_20px_rgba(0,0,0,0.12)] scale-105 z-10'
                      : 'border-[#E8DCCE] hover:border-[#8C6D53]/40'
                      }`}
                  >
                    {/* Lifestyle background image */}
                    <img
                      src={product.images[0]}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />
                    {/* Transparent product image */}
                    <div className="absolute top-1 right-1 w-8 h-8 sm:w-10 sm:h-10 drop-shadow-md pointer-events-none">
                      <img
                        src={`/transparent-products/${product.id}.png`}
                        alt={product.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>
                    {/* Name label at bottom */}
                    <span className="relative z-10 text-[8px] font-black text-white truncate w-full text-center tracking-wide select-none px-1 pb-1.5">
                      {item.shortName}
                    </span>
                  </button>
                );
              })}

              {/* Navigation Arrows switcher */}
              <div className="flex items-center gap-1.5 ml-2">
                <button
                  onClick={() => handleItemClick(Math.max(activeIdx - 1, 0))}
                  className="w-7 h-7 rounded-full border border-[#E8DCCE] bg-white flex items-center justify-center text-[#2C2724] hover:border-[#8C6D53] disabled:opacity-40 disabled:hover:border-[#E8DCCE] transition-colors cursor-pointer"
                  disabled={activeIdx === 0}
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleItemClick(Math.min(activeIdx + 1, 3))}
                  className="w-7 h-7 rounded-full border border-[#E8DCCE] bg-white flex items-center justify-center text-[#2C2724] hover:border-[#8C6D53] disabled:opacity-40 disabled:hover:border-[#E8DCCE] transition-colors cursor-pointer"
                  disabled={activeIdx === 3}
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN SPACER (reserves the right half of the screen for the absolute-positioned card & product details) */}
          <div className="w-full lg:w-[54%] h-full pointer-events-none" />

        </div>

      </div>
    </section>
  );
};
