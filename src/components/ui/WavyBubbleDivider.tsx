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
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSplit = bottomColor === 'editorialSplit';
  const fillValue = isSplit
    ? (windowWidth >= 1024 ? 'url(#editorialSplit)' : '#E5ECE4')
    : bottomColor;

  // Use bottomColor for bubbles by default, or cream if it's the editorial split
  const resolvedBubbleColor = bubbleColor || (isSplit ? '#FAF8F5' : bottomColor);

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
        <defs>
          <linearGradient id="editorialSplit" x1="0" y1="0" x2="1" y2="0">
            <stop offset="50%" stopColor="#E5ECE4" />
            <stop offset="50%" stopColor="#FAF8F5" />
          </linearGradient>
        </defs>
        {/* Organic Asymmetrical Liquid Wave Path */}
        <path
          d="M 0 140 C 150 60, 300 60, 450 140 C 600 220, 800 50, 1000 50 C 1200 50, 1350 170, 1440 170 L 1440 200 L 0 200 Z"
          fill={fillValue}
        />


      </svg>
    </div>
  );
};
