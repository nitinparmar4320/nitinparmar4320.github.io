'use client';

import React from 'react';

interface MonogramProps {
  size?: number;
  className?: string;
}

export const Monogram: React.FC<MonogramProps> = ({ size = 36, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center justify-center relative select-none rounded-[6px] bg-[#F2F1EA] border border-[#DEDED6] shadow-[0_1px_2px_rgba(32,33,31,0.04)] font-sans ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      aria-label="Nitin Parmar Monogram"
    >
      <span
        className="font-extrabold text-[#20211F] leading-none tracking-tighter"
        style={{ fontSize: `${size * 0.44}px` }}
      >
        N
      </span>
      <span
        className="italic font-semibold text-[var(--accent-vermilion)] leading-none -ml-[1px]"
        style={{
          fontFamily: 'var(--font-newsreader), Georgia, serif',
          fontSize: `${size * 0.48}px`,
        }}
      >
        P
      </span>
      <span
        className="absolute top-1 right-1 w-1 h-1 rounded-full bg-[var(--accent-blue)]"
      />
    </div>
  );
};
