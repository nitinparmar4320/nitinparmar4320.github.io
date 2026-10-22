'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'motion/react';
import { HomeProjectCard } from '@/components/projects/HomeProjectCard';
import { ShowMoreProjectsCard } from '@/components/projects/ShowMoreProjectsCard';
import { projectsData } from '@/data/projects';
import {
  LuLayers as Layers,
  LuChevronLeft as ChevronLeft,
  LuChevronRight as ChevronRight,
  LuArrowDown as ArrowDown,
  LuArrowRight as ArrowRight,
} from 'react-icons/lu';

export const ProjectsSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const prefersReduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(3600);
  const [maxTranslate, setMaxTranslate] = useState<number>(0);
  const [startOffset, setStartOffset] = useState<number>(0);
  const [endOffset, setEndOffset] = useState<number>(0);

  const projectItems = [
    { id: 'shoppingate', title: 'Shoppingate', number: '01' },
    { id: 'pmpeople', title: 'PMPeople', number: '02' },
    { id: 'seedling', title: 'Seedling IoT', number: '03' },
    { id: 'mpos', title: 'MPOS Suite', number: '04' },
    { id: 'all-projects', title: 'View All', number: '05' },
  ];

  const HEADER_HEIGHT = 64; // Sticky nav offset (4rem)

  // Motion useScroll attached to the pinning scroll container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Spring physics for progress bar and track translation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.15,
  });

  // Dedicated spring for scaleX progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  // Dynamic horizontal translation driven by smooth spring progress
  const translateX = useTransform(smoothProgress, (val) => -val * maxTranslate);

  // Measure card geometry and sync offsets
  const updateDimensions = useCallback(() => {
    if (!trackRef.current || !containerRef.current || !progressBarRef.current) return;

    const viewportWidth = window.innerWidth;
    const effectiveViewportHeight = window.innerHeight - HEADER_HEIGHT;

    const barRect = progressBarRef.current.getBoundingClientRect();
    const leftPad = Math.max(0, barRect.left);
    const rightPad = Math.max(0, viewportWidth - barRect.right);
    const barWidth = Math.max(100, barRect.width);

    setStartOffset(leftPad);
    setEndOffset(rightPad);

    const firstCard = cardRefs.current[0];
    const lastCard = cardRefs.current[cardRefs.current.length - 1];

    let cardsWidth = 0;
    if (firstCard && lastCard) {
      cardsWidth = lastCard.offsetLeft + lastCard.offsetWidth - firstCard.offsetLeft;
    } else {
      cardsWidth =
        Math.min(1180, viewportWidth * 0.8) * 4 +
        Math.min(920, viewportWidth * 0.65) +
        40 * 4;
    }

    const maxTrans = Math.max(0, cardsWidth - barWidth);
    setMaxTranslate(maxTrans);

    // Natural 1:1.15 scroll conversion ratio
    const scrollDistance = maxTrans * 1.15;
    setContainerHeight(Math.round(scrollDistance + effectiveViewportHeight));
  }, []);

  useEffect(() => {
    updateDimensions();

    const t1 = setTimeout(updateDimensions, 120);
    const t2 = setTimeout(updateDimensions, 400);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && trackRef.current) {
      resizeObserver = new ResizeObserver(() => updateDimensions());
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener('resize', updateDimensions, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, [updateDimensions]);

  // Keep active index updated with spring progress
  useEffect(() => {
    return smoothProgress.on('change', (latest) => {
      const idx = Math.min(
        projectItems.length - 1,
        Math.max(0, Math.round(latest * (projectItems.length - 1)))
      );
      setActiveIndex(idx);
    });
  }, [smoothProgress, projectItems.length]);

  // Jump to specific project card
  const scrollToProject = (index: number) => {
    if (!containerRef.current) return;
    const effectiveViewportHeight = window.innerHeight - HEADER_HEIGHT;
    const maxScroll = containerHeight - effectiveViewportHeight;
    const targetProgress = index / (projectItems.length - 1);

    const containerTop = window.scrollY + containerRef.current.getBoundingClientRect().top;
    const targetScrollY = containerTop + targetProgress * maxScroll;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  };

  // Click on progress bar scrubber
  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !containerRef.current) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const targetRatio = Math.max(0, Math.min(1, clickX / rect.width));

    const effectiveViewportHeight = window.innerHeight - HEADER_HEIGHT;
    const maxScroll = containerHeight - effectiveViewportHeight;
    const containerTop = window.scrollY + containerRef.current.getBoundingClientRect().top;
    const targetScrollY = containerTop + targetRatio * maxScroll;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-transparent border-b border-[var(--border-medium)] select-none"
      aria-label="Selected Projects — Horizontal Gallery"
      style={{ height: `${containerHeight}px` }}
    >
      {/* Sticky Viewport Frame pinned during scroll */}
      <div className="sticky top-16 h-[calc(100vh-4rem)] w-full overflow-hidden flex flex-col justify-between py-2 sm:py-3 lg:py-3 z-10">
        
        {/* ================= TOP EDITORIAL HEADER & PROGRESS SCRUBBER ================= */}
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
                {projectItems.map((item, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToProject(idx)}
                      className={`relative px-2 sm:px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                        isActive
                          ? 'text-[var(--accent-vermilion)] font-bold'
                          : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
                      }`}
                      title={`Jump to ${item.title}`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeProjectPill"
                          className="absolute inset-0 bg-white rounded shadow-xs border border-[var(--border-medium)] -z-10"
                          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                        />
                      )}
                      <span>{item.number}</span>
                      <span className="hidden md:inline ml-1 font-sans">{item.title}</span>
                    </button>
                  );
                })}
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
            aria-valuenow={Math.round((activeIndex / 4) * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            title="Click or scrub along the progress bar to navigate"
          >
            <div className="w-full h-[3px] group-hover:h-[5px] bg-[var(--border-light)] relative overflow-hidden rounded-full transition-all duration-150">
              <motion.div
                className="h-full bg-[var(--accent-vermilion)] rounded-full origin-left"
                style={{ scaleX }}
              />
            </div>
          </div>
        </div>

        {/* ================= HORIZONTAL MOVING TRACK (MOTION POWERED) ================= */}
        <div className="w-full flex-1 min-h-0 flex items-center overflow-hidden my-auto">
          <motion.div
            ref={trackRef}
            className="flex flex-row items-stretch gap-6 sm:gap-8 lg:gap-10 will-change-transform h-full max-h-[calc(100vh-175px)] sm:max-h-[calc(100vh-190px)]"
            style={{
              paddingLeft: `${startOffset}px`,
              paddingRight: `${endOffset}px`,
              x: prefersReduced ? 0 : translateX,
            }}
          >
            {/* Featured Projects 1 to 4 */}
            {projectsData.map((project, idx) => (
              <motion.div
                key={project.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="w-[88vw] sm:w-[84vw] md:w-[80vw] lg:w-[78vw] xl:w-[1100px] 2xl:w-[1180px] h-full shrink-0 flex flex-col"
                initial={prefersReduced ? false : { opacity: 0.85, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: idx * 0.05,
                }}
                whileHover={{
                  scale: 1.01,
                  transition: { type: 'spring', stiffness: 400, damping: 25 },
                }}
              >
                <HomeProjectCard project={project} />
              </motion.div>
            ))}

            {/* 5th Card: Show More / Complete Catalog */}
            <motion.div
              ref={(el) => {
                cardRefs.current[4] = el;
              }}
              className="w-[88vw] sm:w-[84vw] md:w-[75vw] lg:w-[65vw] xl:w-[850px] 2xl:w-[920px] h-full shrink-0 flex flex-col"
              initial={prefersReduced ? false : { opacity: 0.85, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.2,
              }}
              whileHover={{
                scale: 1.01,
                transition: { type: 'spring', stiffness: 400, damping: 25 },
              }}
            >
              <ShowMoreProjectsCard />
            </motion.div>
          </motion.div>
        </div>

        {/* ================= BOTTOM STATUS & STEPPER BAR ================= */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 shrink-0">
          <div className="flex items-center justify-between pt-2 border-t border-[var(--border-light)] text-xs font-mono text-[var(--text-tertiary)]">
            {/* Visual Direction Guidance */}
            <div className="flex items-center gap-3">
              {activeIndex < 4 ? (
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

export default ProjectsSlider;
