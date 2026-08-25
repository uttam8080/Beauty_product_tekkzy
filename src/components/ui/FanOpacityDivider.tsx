import React from 'react';

export interface FanOpacityDividerProps {
  /**
   * Position/direction of the divider.
   * 'bottom': Sits at the bottom edge of a section with translucent planes sloping up toward the center.
   * 'top': Sits at the top edge of a section (inverted).
   */
  position?: 'bottom' | 'top';
  /**
   * Color of the section or divider planes.
   * Defaults to 'current' (inherits fill or uses provided color hex).
   */
  color?: string;
  /**
   * Additional custom CSS classes for positioning or sizing.
   */
  className?: string;
}

/**
 * Fan Opacity Section Divider
 * Matches the reference catalog design: 4 layered translucent angled planes
 * meeting towards a central base apex with decreasing opacity tiers (15%, 30%, 60%, 100%).
 */
export const FanOpacityDivider: React.FC<FanOpacityDividerProps> = ({
  position = 'bottom',
  color = '#FAF8F5',
  className = '',
}) => {
  const isTop = position === 'top';

  return (
    <div
      className={`w-full overflow-hidden leading-none select-none pointer-events-none ${
        isTop ? 'rotate-180 -mb-[1px]' : '-mt-[1px]'
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-16 lg:h-20 block"
      >
        {/* Layer 1: Lowest Opacity Wide Angle Wing */}
        <polygon
          points="0,120 1200,120 600,30 0,65"
          fill={color}
          opacity="0.2"
        />
        <polygon
          points="1200,120 0,120 600,30 1200,65"
          fill={color}
          opacity="0.2"
        />

        {/* Layer 2: Medium-Low Opacity Wing */}
        <polygon
          points="0,120 1200,120 600,45 0,80"
          fill={color}
          opacity="0.4"
        />
        <polygon
          points="1200,120 0,120 600,45 1200,80"
          fill={color}
          opacity="0.4"
        />

        {/* Layer 3: Medium Opacity Wing */}
        <polygon
          points="0,120 1200,120 600,65 0,95"
          fill={color}
          opacity="0.65"
        />
        <polygon
          points="1200,120 0,120 600,65 1200,95"
          fill={color}
          opacity="0.65"
        />

        {/* Layer 4: Solid Ground Apex (100% Fill) */}
        <polygon
          points="0,120 1200,120 600,85"
          fill={color}
          opacity="1"
        />
      </svg>
    </div>
  );
};
