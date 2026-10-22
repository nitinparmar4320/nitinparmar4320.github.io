'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Next.js dynamic import with ssr: false for clean client-side mounting
const ClassicLightBackground = dynamic(() => import('./ClassicLightBackground'), {
  ssr: false,
  loading: () => null,
});

/**
 * GlobalBackground
 * Very light, classic, and professional architectural theme:
 * - Subtle ambient floating light auras
 * - Precision architectural drafting grid and coordinate crosshairs
 * - Slow peaceful technical compass rotation
 * - Gentle ambient focus sheen
 */
export function GlobalBackground() {
  return <ClassicLightBackground />;
}

export default GlobalBackground;
