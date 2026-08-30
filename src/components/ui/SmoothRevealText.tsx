import React from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface SmoothRevealTextProps {
  children: string | React.ReactNode;
  className?: string;
  type?: 'word' | 'block';
  delay?: number;
  duration?: number;
}

export const SmoothRevealText: React.FC<SmoothRevealTextProps> = ({
  children,
  className = '',
  type = 'word',
  delay = 0,
  duration = 0.8,
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-10% 0px' });

  // Fallback for non-string children (if they pass complex JSX)
  if (typeof children !== 'string' || type === 'block') {
    return (
      <div ref={containerRef} className={`overflow-hidden ${className}`}>
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
          transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }} // smooth spring-like ease
        >
          {children}
        </motion.div>
      </div>
    );
  }

  // Word-by-word reveal
  const words = children.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 24,
        stiffness: 100,
        duration,
      },
    },
    hidden: {
      opacity: 0,
      y: '100%',
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-flex mr-[0.25em]">
          <motion.span variants={child}>{word}</motion.span>
        </span>
      ))}
    </motion.div>
  );
};
