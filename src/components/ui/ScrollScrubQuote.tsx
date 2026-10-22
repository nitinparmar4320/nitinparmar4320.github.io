'use client';

import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useReducedMotion,
} from 'motion/react';

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlighted?: boolean;
}

const Word: React.FC<WordProps> = ({ children, progress, range, isHighlighted }) => {
  const prefersReduced = useReducedMotion();

  // Scrub opacity from 0.20 to 1.0 based on scroll position within this word's range
  const opacity = useTransform(progress, range, [0.22, 1.0]);

  // Subtle blur sharpness transition
  const blurFilter = useTransform(progress, range, ['blur(1.5px)', 'blur(0px)']);

  // Subtle scale snap
  const scale = useTransform(progress, range, [0.97, 1.0]);

  if (prefersReduced) {
    return (
      <span
        className={`inline-block mr-[0.28em] ${
          isHighlighted ? 'text-[var(--accent-vermilion)] font-medium not-italic' : ''
        }`}
      >
        {children}
      </span>
    );
  }

  return (
    <motion.span
      style={{
        opacity,
        filter: blurFilter,
        scale,
      }}
      className={`inline-block mr-[0.28em] transition-colors duration-200 will-change-[opacity,filter] ${
        isHighlighted
          ? 'text-[var(--accent-vermilion)] font-medium not-italic'
          : 'text-[var(--text-primary)]'
      }`}
    >
      {children}
    </motion.span>
  );
};

export interface ScrollScrubQuoteProps {
  quote?: string;
  className?: string;
  highlightWords?: string[];
}

const DEFAULT_QUOTE =
  'I enjoy solving practical engineering problems, organizing complex functionality into maintainable modules, and building interfaces that make sophisticated systems easier to use.';

/**
 * ScrollScrubQuote
 * Kinetic reading reveal that scrubs word opacity from 0.2 to 1.0 progressively on scroll.
 */
export const ScrollScrubQuote: React.FC<ScrollScrubQuoteProps> = ({
  quote = DEFAULT_QUOTE,
  className = '',
  highlightWords = ['practical engineering problems', 'maintainable modules', 'sophisticated systems'],
}) => {
  const containerRef = useRef<HTMLQuoteElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = quote.split(' ');

  // Helper to test if a word belongs to an accented phrase
  const isWordHighlighted = (word: string) => {
    const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
    return highlightWords.some((phrase) =>
      phrase.toLowerCase().split(' ').includes(cleanWord)
    );
  };

  return (
    <blockquote
      ref={containerRef}
      aria-label={quote}
      className={`font-display text-2xl sm:text-3xl leading-snug text-[var(--text-primary)] italic font-normal mb-8 border-l-4 border-l-[var(--accent-vermilion)] pl-6 select-none ${className}`}
    >
      “
      {words.map((word, i) => {
        const start = i / words.length;
        const end = Math.min(1, (i + 1.2) / words.length);

        return (
          <Word
            key={`${word}-${i}`}
            progress={scrollYProgress}
            range={[start, end]}
            isHighlighted={isWordHighlighted(word)}
          >
            {word}
          </Word>
        );
      })}
      ”
    </blockquote>
  );
};

export default ScrollScrubQuote;
