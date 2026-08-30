import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF8F5] text-[#2C2724]"
        >
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-3xl sm:text-4xl font-serif tracking-[0.25em] font-light text-[#2C2724] uppercase">
              VÉLURE
            </span>
            <div className="w-12 h-[1px] bg-[#8C6D53]/40 animate-pulse" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#8C6D53] font-medium">
              Beauty, Refined
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
