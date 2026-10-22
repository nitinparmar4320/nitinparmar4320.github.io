'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Next.js dynamic import with ssr: false for zero-SSR performance
const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-25 flex items-center justify-center"
    >
      <div className="w-48 h-48 rounded-full border border-dashed border-[var(--accent-vermilion)] animate-spin-slow opacity-20" />
    </div>
  ),
});

export function HeroCanvasWrapper() {
  return <HeroScene />;
}

export default HeroCanvasWrapper;
