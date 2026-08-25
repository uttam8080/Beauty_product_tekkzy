import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';


const MESSAGES = [
  'NEW ARRIVALS JUST DROPPED  •  THE GLOW COLLECTION',
  'USE CODE "LUMERA10" FOR 10% OFF YOUR FIRST RITUAL'
];

export const AnnouncementBar: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx(prev => (prev + 1) % MESSAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside aria-label="Announcements" className="bg-[#2C2724] text-[#FAF8F5] text-[11px] sm:text-xs py-2 px-4 relative z-40 border-b border-[#3D352E]">
      <div className="w-full flex items-center justify-center relative overflow-hidden h-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="flex items-center justify-center gap-2 font-medium tracking-[0.18em] uppercase text-center"
          >
            <span className="text-[#E8DCCE] hover:text-[#FAF8F5] transition-colors">{MESSAGES[currentIdx]}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </aside>
  );
};
