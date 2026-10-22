'use client';

import React from 'react';
import { LazyMotion, domAnimation, MotionConfig } from 'motion/react';

interface MotionProviderProps {
  children: React.ReactNode;
}

/**
 * Global Motion & Animation Provider
 * - LazyMotion with domAnimation keeps the initial JS bundle lean (~17kb)
 * - MotionConfig reducedMotion="user" respects OS accessibility preferences
 * - Clean native cursor preserved for classic, professional UX
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict={false}>
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
