'use client';

import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'motion/react';

export interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Magnetic pull intensity factor (0.1 to 0.6). Default: 0.35
   */
  distance?: number;
  /**
   * Spring physics customization
   */
  springConfig?: {
    stiffness: number;
    damping: number;
    mass?: number;
  };
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /**
   * When true, applies parallax translation to inner child as well
   */
  parallaxContent?: boolean;
}

/**
 * MagneticButton
 * Motion spring-powered magnetic attraction wrapper for CTAs, project tags, and icons.
 * Smoothly tugs toward cursor on desktop hover with spring dampening, then snaps back seamlessly.
 */
export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  distance = 0.35,
  springConfig = { stiffness: 350, damping: 20, mass: 0.15 },
  onClick,
  parallaxContent = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Raw coordinate offsets
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Smooth spring physics
  const springX = useSpring(rawX, springConfig);
  const springY = useSpring(rawY, springConfig);

  // Subtle interior parallax offset (text moves slightly faster than container)
  const innerX = useTransform(springX, (val) => (parallaxContent ? val * 0.45 : 0));
  const innerY = useTransform(springY, (val) => (parallaxContent ? val * 0.45 : 0));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * distance;
    const deltaY = (e.clientY - centerY) * distance;

    rawX.set(deltaX);
    rawY.set(deltaY);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-cursor-magnetic="true"
      style={{
        x: springX,
        y: springY,
      }}
      className={`inline-block will-change-transform ${className}`}
    >
      <motion.div
        style={{
          x: innerX,
          y: innerY,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default MagneticButton;
