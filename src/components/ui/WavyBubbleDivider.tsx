import React from 'react';
import { motion } from 'motion/react';

export interface WavyBubbleDividerProps {
  /**
   * Background color of the section above.
   * Defaults to 'transparent'.
   */
  topColor?: string;
  /**
   * Background color of the section below (and the wave itself).
   * Defaults to '#ffffff'.
   */
  bottomColor?: string;
  /**
   * Color of the floating bubbles.
   * Defaults to match the bottomColor or topColor.
   */
  bubbleColor?: string;
  /**
   * Height of the divider in pixels.
   * Defaults to 110.
   */
  height?: number;
  /**
   * Additional custom CSS classes.
   */
  className?: string;
}

/**
 * WavyBubbleDivider
 * A premium section divider featuring a smooth, organic liquid wave path
 * with interactive, floating bubbles that bob gently and respond to user hover.
 */
export const WavyBubbleDivider: React.FC<WavyBubbleDividerProps> = ({
  topColor = 'transparent',
  bottomColor = '#ffffff',
  bubbleColor,
  height = 110,
  className = '',
}) => {
  // Use bottomColor for bubbles by default to create contrast if they float in the topColor area,
  // or topColor if it's defined and distinct.
  const resolvedBubbleColor = bubbleColor || bottomColor;

  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none -mt-[1px] relative ${className}`}
      style={{ height: `${height}px`, backgroundColor: topColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        className="w-full h-full block pointer-events-none"
      >
        {/* Organic Asymmetrical Liquid Wave Path */}
        <path
          d="M 0 140 C 150 60, 300 60, 450 140 C 600 220, 800 50, 1000 50 C 1200 50, 1350 170, 1440 170 L 1440 200 L 0 200 Z"
          fill={bottomColor}
        />

        {/* Floating Bubble 1 (Large - Left) */}
        <motion.circle
          cx={220}
          cy={70}
          r={20}
          fill={resolvedBubbleColor}
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
          fill={resolvedBubbleColor}
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
          fill={resolvedBubbleColor}
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
          fill={resolvedBubbleColor}
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
  );
};
