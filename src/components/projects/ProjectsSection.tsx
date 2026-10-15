'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { HomeProjectCard } from './HomeProjectCard';
import { ShowMoreProjectsCard } from './ShowMoreProjectsCard';
import { projectsData } from '@/data/projects';
import {
  LuLayers as Layers,
  LuChevronLeft as ChevronLeft,
  LuChevronRight as ChevronRight,
  LuArrowDown as ArrowDown,
  LuArrowRight as ArrowRight,
} from 'react-icons/lu';

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState<number>(3800);
  const [translateX, setTranslateX] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [startOffset, setStartOffset] = useState(0);
  const [endOffset, setEndOffset] = useState(0);

  const projectItems = [
    { id: 'shoppingate', title: 'Shoppingate', number: '01' },
    { id: 'pmpeople', title: 'PMPeople', number: '02' },
    { id: 'seedling', title: 'Seedling IoT', number: '03' },
    { id: 'mpos', title: 'MPOS Suite', number: '04' },
    { id: 'all-projects', title: 'View All', number: '05' },
  ];

  const HEADER_HEIGHT = 64; // Corresponds to top-16 / 4rem site navbar

  // Measure track, align bounds strictly with the progress bar, and calculate scroll conversion distance
  const updateDimensions = useCallback(() => {
    if (!trackRef.current || !containerRef.current || !progressBarRef.current) return;

    const viewportWidth = window.innerWidth;
    const effectiveViewportHeight = window.innerHeight - HEADER_HEIGHT;

    // Measure the exact horizontal screen coordinates of the progress bar
    const barRect = progressBarRef.current.getBoundingClientRect();
    const leftPad = Math.max(0, barRect.left);
    const rightPad = Math.max(0, viewportWidth - barRect.right);
    const barWidth = Math.max(100, barRect.width);

    setStartOffset(leftPad);
    setEndOffset(rightPad);

    // Measure the exact span of the cards from left of Card 01 to right of Card 05
    const firstCard = cardRefs.current[0];
    const lastCard = cardRefs.current[cardRefs.current.length - 1];

    let cardsWidth = 0;
    if (firstCard && lastCard) {
      cardsWidth = (lastCard.offsetLeft + lastCard.offsetWidth) - firstCard.offsetLeft;
    } else {
      cardsWidth = Math.min(1180, viewportWidth * 0.8) * 4 + Math.min(920, viewportWidth * 0.65) + 40 * 4;
    }

    // When translateX = 0, Card 01 starts at barRect.left.
    // When translateX = maxTrans, Card 05 ends at barRect.right.
    const maxTrans = Math.max(0, cardsWidth - barWidth);
    setMaxTranslate(maxTrans);

    // Natural 1:1.15 scroll conversion
    const scrollDistance = maxTrans * 1.15;
    setContainerHeight(Math.round(scrollDistance + effectiveViewportHeight));
  }, []);

  // Set up resize observers and measurements
  useEffect(() => {
    updateDimensions();

    const timer1 = setTimeout(updateDimensions, 100);
    const timer2 = setTimeout(updateDimensions, 400);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && trackRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateDimensions();
      });
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener('resize', updateDimensions, { passive: true });

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, [updateDimensions]);

  // Main scroll driver converting vertical scroll into horizontal translation
  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const effectiveViewportHeight = window.innerHeight - HEADER_HEIGHT;
      const maxScroll = containerHeight - effectiveViewportHeight;

      if (maxScroll <= 0) {
        setTranslateX(0);
        setProgress(0);
        setActiveIndex(0);
        return;
      }

      // rect.top <= HEADER_HEIGHT means section has docked under the top navigation
      const scrolled = HEADER_HEIGHT - rect.top;
      const currentProgress = Math.max(0, Math.min(1, scrolled / maxScroll));

      const newTranslateX = currentProgress * maxTranslate;
      setTranslateX(newTranslateX);
      setProgress(currentProgress);

      // Determine active project card based on progress and viewport coordinates
      if (currentProgress <= 0.05) {
        setActiveIndex(0);
      } else if (currentProgress >= 0.95) {
        setActiveIndex(projectItems.length - 1);
      } else {
        const barRect = progressBarRef.current ? progressBarRef.current.getBoundingClientRect() : null;
        const progressCenter = barRect ? barRect.left + barRect.width / 2 : window.innerWidth / 2;
        let closestIdx = 0;
        let minDistance = Infinity;

        cardRefs.current.forEach((card, idx) => {
          if (card) {
            const cardCenterInViewport = (card.offsetLeft + card.offsetWidth / 2) - newTranslateX;
            const dist = Math.abs(cardCenterInViewport - progressCenter);
            if (dist < minDistance) {
              minDistance = dist;
              closestIdx = idx;
            }
          }
        });

        setActiveIndex(closestIdx);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [containerHeight, maxTranslate, projectItems.length]);

  // Jump directly to a project card
  const scrollToProject = (index: number) => {
    if (!containerRef.current || !trackRef.current || !progressBarRef.current) return;
    const effectiveViewportHeight = window.innerHeight - HEADER_HEIGHT;
    const maxScroll = containerHeight - effectiveViewportHeight;
    const barRect = progressBarRef.current.getBoundingClientRect();

    let targetTranslateX = 0;

    if (index === 0) {
      targetTranslateX = 0;
    } else if (index === projectItems.length - 1) {
      targetTranslateX = maxTranslate;
    } else {
      const targetCard = cardRefs.current[index];
      if (targetCard) {
        const cardCenter = targetCard.offsetLeft + targetCard.offsetWidth / 2;
        const progressCenter = barRect.left + barRect.width / 2;
        targetTranslateX = Math.max(0, Math.min(maxTranslate, cardCenter - progressCenter));
      } else {
        targetTranslateX = (index / (projectItems.length - 1)) * maxTranslate;
      }
    }

    const targetProgress = maxTranslate > 0 ? targetTranslateX / maxTranslate : 0;
    const containerTop = window.scrollY + containerRef.current.getBoundingClientRect().top;
    const targetScrollY = containerTop - HEADER_HEIGHT + targetProgress * maxScroll;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  };

  // Interactive scrubber click on the progress bar
  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !containerRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickedProgress = Math.max(0, Math.min(1, clickX / rect.width));

    const effectiveViewportHeight = window.innerHeight - HEADER_HEIGHT;
    const maxScroll = containerHeight - effectiveViewportHeight;
    const containerTop = window.scrollY + containerRef.current.getBoundingClientRect().top;
    const targetScrollY = containerTop - HEADER_HEIGHT + clickedProgress * maxScroll;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-[var(--bg-primary)] border-b border-[var(--border-medium)] select-none"
      aria-label="Selected Projects — Horizontal Gallery"
      style={{ height: `${containerHeight}px` }}
    >
      {/* 
        Sticky Viewport Frame:
        Locks under the sticky header (top-16) while the user scrolls down through the container's height.
      */}
      <div className="sticky top-16 h-[calc(100vh-4rem)] w-full overflow-hidden flex flex-col justify-between py-2 sm:py-3 lg:py-3 z-10">
        
        {/* ================= TOP EDITORIAL HEADER & SCRUBBER BAR ================= */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-[var(--border-light)] gap-3">
            {/* Title & Tag */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <span className="font-display text-xl sm:text-2xl font-bold text-[var(--accent-vermilion)] leading-none">
                01
              </span>
              <span className="w-px h-4 bg-[var(--border-strong)] inline-block" />
              <div className="flex items-center gap-2">
                <span className="mono-label text-xs tracking-wider text-[var(--text-primary)] font-semibold">
                  SELECTED WORK
                </span>
                <span className="hidden md:inline-flex items-center gap-1.5 mono-tag text-[0.7rem] py-0.5 px-2 bg-[var(--bg-subtle)] text-[var(--text-secondary)]">
                  <Layers size={11} className="text-[var(--accent-vermilion)]" />
                  FEATURED HIGHLIGHTS
                </span>
              </div>
              <span className="hidden xl:inline-block text-xs font-sans text-[var(--text-tertiary)] pl-2">
                Click &ldquo;Full Details&rdquo; on any case study for architecture deep-dives.
              </span>
            </div>

            {/* Interactive Project Switcher & Direct Link */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <div className="flex items-center gap-1 bg-[var(--bg-subtle)] p-1 rounded border border-[var(--border-light)]">
                {projectItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToProject(idx)}
                    className={`px-2 sm:px-2.5 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                      activeIndex === idx
                        ? 'bg-white text-[var(--accent-vermilion)] font-bold shadow-xs border border-[var(--border-medium)]'
                        : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
                    }`}
                    title={`Jump to ${item.title}`}
                  >
                    <span>{item.number}</span>
                    <span className="hidden md:inline ml-1 font-sans">{item.title}</span>
                  </button>
                ))}
              </div>

              {/* Progress Count Badge */}
              <span className="mono-label text-xs font-semibold text-[var(--text-primary)] px-2 py-1 bg-white border border-[var(--border-light)] rounded">
                0{activeIndex + 1} / 05
              </span>

              {/* Direct Link to All Projects Route */}
              <Link
                href="/projects"
                className="btn btn-secondary text-xs py-1 px-3 rounded gap-1.5 hidden sm:inline-flex"
                title="View complete list of all projects"
              >
                <span>All Projects</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          {/* Thin Horizontal Scroll Progress Scrubber Bar */}
          <div
            ref={progressBarRef}
            onClick={handleProgressBarClick}
            className="w-full py-1.5 cursor-pointer group select-none"
            role="slider"
            aria-label="Projects Timeline Progress"
            aria-valuenow={Math.round(progress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            title="Click or scrub along the progress bar to navigate"
          >
            <div className="w-full h-[3px] group-hover:h-[5px] bg-[var(--border-light)] relative overflow-hidden rounded-full transition-all duration-150">
              <div
                className="h-full bg-[var(--accent-vermilion)] transition-[width] duration-75 ease-out rounded-full"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* ================= HORIZONTAL MOVING TRACK (ALIGNED WITH PROGRESS BAR BOUNDS) ================= */}
        <div className="w-full flex-1 min-h-0 flex items-center overflow-hidden my-auto">
          <div
            ref={trackRef}
            className="flex flex-row items-stretch gap-6 sm:gap-8 lg:gap-10 will-change-transform h-full max-h-[calc(100vh-175px)] sm:max-h-[calc(100vh-190px)]"
            style={{
              paddingLeft: `${startOffset}px`,
              paddingRight: `${endOffset}px`,
              transform: `translate3d(-${translateX}px, 0, 0)`,
            }}
          >
            {/* Featured Projects 1 to 4: Compact Highlighted Cards */}
            {projectsData.map((project, idx) => (
              <div
                key={project.id}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className="w-[88vw] sm:w-[84vw] md:w-[80vw] lg:w-[78vw] xl:w-[1100px] 2xl:w-[1180px] h-full shrink-0 flex flex-col"
              >
                <HomeProjectCard project={project} />
              </div>
            ))}

            {/* 5th Card: Show More / Complete Catalog */}
            <div
              ref={(el) => { cardRefs.current[4] = el; }}
              className="w-[88vw] sm:w-[84vw] md:w-[75vw] lg:w-[65vw] xl:w-[850px] 2xl:w-[920px] h-full shrink-0 flex flex-col"
            >
              <ShowMoreProjectsCard />
            </div>
          </div>
        </div>

        {/* ================= BOTTOM STATUS & STEPPER BAR ================= */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 shrink-0">
          <div className="flex items-center justify-between pt-2 border-t border-[var(--border-light)] text-xs font-mono text-[var(--text-tertiary)]">
            {/* Visual Direction Guidance */}
            <div className="flex items-center gap-3">
              {progress < 0.94 ? (
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-vermilion)] animate-pulse" />
                  Scroll down vertically to navigate projects horizontally →
                </span>
              ) : (
                <span className="flex items-center gap-1.5 text-[var(--accent-vermilion)] font-semibold">
                  <ArrowDown size={13} className="animate-bounce" />
                  All case studies viewed — continue scrolling down for About Me ↓
                </span>
              )}

              {/* Link to /projects */}
              <Link
                href="/projects"
                className="text-[var(--accent-vermilion)] hover:underline hidden md:inline-flex items-center gap-1 font-semibold"
              >
                <span>Full List Page</span>
                <ArrowRight size={11} />
              </Link>
            </div>

            {/* Step Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollToProject(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                className="p-1 rounded border border-[var(--border-light)] hover:bg-white hover:border-[var(--border-strong)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                title="Previous Project"
                aria-label="Previous Project"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() => scrollToProject(Math.min(4, activeIndex + 1))}
                disabled={activeIndex === 4}
                className="p-1 rounded border border-[var(--border-light)] hover:bg-white hover:border-[var(--border-strong)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                title="Next Project"
                aria-label="Next Project"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
