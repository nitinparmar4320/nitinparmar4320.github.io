'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { experienceData } from '@/data/experience';
import {
  LuBriefcase as Briefcase,
  LuCalendar as Calendar,
  LuMapPin as MapPin,
  LuChevronLeft as ChevronLeft,
  LuChevronRight as ChevronRight,
  LuCheck as Check,
} from 'react-icons/lu';

export const ExperienceSection: React.FC = () => {
  // Initialize Embla Carousel without autoplay to satisfy "do not auto scroll"
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
    skipSnaps: false,
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Keyboard navigation for carousel
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      scrollPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      scrollNext();
    }
  };

  return (
    <section
      id="experience"
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-6 sm:py-8 lg:py-10 border-b border-[var(--border-medium)] relative"
      aria-label="Professional Experience"
    >
      <div className="container">
        {/* Compact Editorial Section Header */}
        <div className="mb-4 sm:mb-5 pb-3 border-b border-[var(--border-medium)]">
          <div className="flex items-center justify-between mb-1.5">
            <span className="mono-label text-xs">
              <span className="text-[var(--accent-vermilion)]">[03]</span> // CAREER TIMELINE
            </span>
            <span className="mono-label text-xs opacity-75 hidden sm:inline">
              SYS.SPEC // 2026
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-[var(--text-primary)] tracking-tight">
              Professional Experience
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-sans max-w-xl">
              Engineering full stack web platforms, backend APIs, and distributed architectures.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="max-w-3xl mx-auto w-full"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-label="Experience slider"
        >
          {/* Top Control Bar: Slide Status & Prev/Next Arrows */}
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-[var(--border-light)] flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="mono-label text-xs tracking-wider text-[var(--accent-vermilion)] font-semibold">
                CHAPTER {String(selectedIndex + 1).padStart(2, '0')} // {String(experienceData.length).padStart(2, '0')}
              </span>
              <span className="text-[var(--text-tertiary)] font-mono text-xs">•</span>
              <span className="font-mono text-xs text-[var(--text-secondary)] truncate max-w-[200px] sm:max-w-none">
                {experienceData[selectedIndex]?.company}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className={`p-1.5 rounded border transition-all cursor-pointer ${
                  canScrollPrev
                    ? 'border-[var(--border-medium)] bg-white text-[var(--text-primary)] hover:border-[var(--accent-vermilion)] hover:text-[var(--accent-vermilion)] shadow-xs'
                    : 'border-[var(--border-light)] bg-[var(--bg-subtle)] text-[var(--text-tertiary)] opacity-35 cursor-not-allowed'
                }`}
                aria-label="Previous experience slide"
              >
                <ChevronLeft size={15} />
              </button>

              <button
                type="button"
                onClick={scrollNext}
                disabled={!canScrollNext}
                className={`p-1.5 rounded border transition-all cursor-pointer ${
                  canScrollNext
                    ? 'border-[var(--border-medium)] bg-white text-[var(--text-primary)] hover:border-[var(--accent-vermilion)] hover:text-[var(--accent-vermilion)] shadow-xs'
                    : 'border-[var(--border-light)] bg-[var(--bg-subtle)] text-[var(--text-tertiary)] opacity-35 cursor-not-allowed'
                }`}
                aria-label="Next experience slide"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>

          {/* Embla Carousel Viewport */}
          <div className="overflow-hidden rounded-lg cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-4">
              {experienceData.map((item, index) => {
                const isCurrent = item.isCurrent;
                return (
                  <div key={item.id} className="flex-[0_0_100%] min-w-0 pl-4">
                    <div
                      className={`bg-white rounded-lg p-4 sm:p-5 md:p-6 transition-all duration-300 relative ${
                        isCurrent
                          ? 'border-2 border-[var(--accent-vermilion)] shadow-[var(--shadow-card)]'
                          : 'border border-[var(--border-medium)] shadow-[var(--shadow-subtle)]'
                      }`}
                    >
                      {/* Top Header: Chapter Notation, Period & Current Pill */}
                      <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-[var(--border-light)] flex-wrap gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="mono-label text-xs tracking-wider text-[var(--accent-vermilion)] font-semibold">
                            [{String(index + 1).padStart(2, '0')}] TENURE RECORD
                          </span>
                          <span className="w-px h-3 bg-[var(--border-medium)]" />
                          <div className="flex items-center gap-1 font-mono text-xs text-[var(--text-secondary)]">
                            <Calendar size={12} className="text-[var(--accent-vermilion)]" />
                            <span>{item.period}</span>
                          </div>
                        </div>

                        {isCurrent ? (
                          <span className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-semibold text-[var(--accent-vermilion)] bg-red-500/10 border border-red-500/25 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-vermilion)] animate-pulse" />
                            CURRENT POSITION
                          </span>
                        ) : (
                          <span className="mono-label text-[0.68rem] bg-[var(--bg-subtle)] px-2 py-0.5 rounded border border-[var(--border-light)]">
                            PREVIOUS ENGAGEMENT
                          </span>
                        )}
                      </div>

                      {/* Main Title, Role, and Location */}
                      <div className="mb-3">
                        <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                          <h3 className="text-xl sm:text-2xl font-bold font-display text-[var(--text-primary)] tracking-tight">
                            {item.company}
                          </h3>
                          <div className="flex items-center gap-1 font-mono text-[0.72rem] text-[var(--text-tertiary)] pt-0.5">
                            <MapPin size={12} className="text-[var(--accent-vermilion)]" />
                            <span>{item.location || 'Ahmedabad, India'}</span>
                          </div>
                        </div>

                        <div
                          className={`inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold font-sans ${
                            isCurrent ? 'text-[var(--accent-vermilion)]' : 'text-[var(--accent-blue)]'
                          }`}
                        >
                          <Briefcase size={15} />
                          <span>{item.role}</span>
                        </div>
                      </div>

                      {/* Summary Note */}
                      <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)] mb-3">
                        {item.verifiedDetailsNote}
                      </p>

                      {/* Key Engineering Highlights - Max 2 points */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="mb-3">
                          <span className="mono-label text-[0.65rem] text-[var(--text-tertiary)] block mb-1.5 font-semibold">
                            KEY CONTRIBUTIONS & SCOPE
                          </span>
                          <ul className="space-y-1.5">
                            {item.highlights.slice(0, 2).map((highlight, hIdx) => (
                              <li
                                key={hIdx}
                                className="flex items-start gap-2 text-xs text-[var(--text-secondary)] leading-snug"
                              >
                                <Check
                                  size={13}
                                  className={`mt-0.5 shrink-0 ${
                                    isCurrent ? 'text-[var(--accent-vermilion)]' : 'text-[var(--accent-blue)]'
                                  }`}
                                />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technology Chips */}
                      {item.technologies && item.technologies.length > 0 && (
                        <div className="pt-2.5 border-t border-[var(--border-light)]">
                          <span className="mono-label text-[0.65rem] text-[var(--text-tertiary)] block mb-1.5">
                            CORE TECHNOLOGIES & TOOLING
                          </span>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {item.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="font-mono text-[0.68rem] px-2 py-0.5 rounded bg-[var(--bg-subtle)] border border-[var(--border-light)] text-[var(--text-primary)]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Notation Dots & Pagination Controls */}
          <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-between gap-2.5">
            {/* Notation Dots Row */}
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Experience slider navigation"
            >
              {scrollSnaps.map((_, index) => {
                const isActive = selectedIndex === index;
                const item = experienceData[index];
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    onClick={() => scrollTo(index)}
                    aria-selected={isActive}
                    aria-label={`Slide ${index + 1}: ${item.company}`}
                    className={`group relative flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[var(--text-primary)] text-white shadow-xs'
                        : 'bg-white text-[var(--text-secondary)] border border-[var(--border-light)] hover:border-[var(--border-strong)]'
                    }`}
                  >
                    {/* The Notation Dot */}
                    <span
                      className={`rounded-full transition-all duration-300 ${
                        isActive
                          ? 'w-2 h-2 bg-[var(--accent-vermilion)]'
                          : 'w-1.5 h-1.5 bg-[var(--border-strong)] group-hover:bg-[var(--text-secondary)]'
                      }`}
                    />
                    <span className="font-mono text-[0.7rem] font-semibold">
                      0{index + 1}
                    </span>
                    <span className="hidden sm:inline font-sans text-[0.72rem] truncate max-w-[120px]">
                      {item.company}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Helper Hint */}
            <div className="flex items-center gap-2 font-mono text-[0.65rem] text-[var(--text-tertiary)]">
              <span>SWIPE OR CLICK DOTS TO NAVIGATE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
