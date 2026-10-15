'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import {
  LuArrowUpRight as ArrowUpRight,
  LuSparkles as Sparkles,
  LuMapPin as MapPin,
  LuEye as Eye,
  LuEyeOff as EyeOff,
} from 'react-icons/lu';
import {
  TbBrandDribbble,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandBehance,
} from 'react-icons/tb';

export const HeroShowcase: React.FC = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 200, y: 250 });
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [forceFullColor, setForceFullColor] = useState<boolean>(false);
  const portraitContainerRef = useRef<HTMLDivElement>(null);

  // Mouse move handler with direct state update for bulletproof mask-image rendering (768px+)
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    if (!portraitContainerRef.current) return;
    const rect = portraitContainerRef.current.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);

    setMousePos({ x, y });
    if (!isHovering) setIsHovering(true);
    if (!hasInteracted) setHasInteracted(true);
  }, [isHovering, hasInteracted]);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return;
    if (!portraitContainerRef.current) return;
    const rect = portraitContainerRef.current.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    setMousePos({ x, y });
    setIsHovering(true);
    if (!hasInteracted) setHasInteracted(true);
  }, [hasInteracted]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  // Social Links matching the exact buttons in the image
  const socialButtons = [
    // {
    //   name: 'Dribbble',
    //   icon: TbBrandDribbble,
    //   href: 'https://dribbble.com',
    //   ariaLabel: 'Visit Nitin Parmar on Dribbble',
    // },
    {
      name: 'Instagram',
      icon: TbBrandInstagram,
      href: 'https://instagram.com',
      ariaLabel: 'Visit Nitin Parmar on Instagram',
    },
    {
      name: 'LinkedIn',
      icon: TbBrandLinkedin,
      href: 'https://www.linkedin.com/in/nitinparmar4320',
      ariaLabel: 'Visit Nitin Parmar on LinkedIn',
    },
    // {
    //   name: 'Behance',
    //   icon: TbBrandBehance,
    //   href: 'https://behance.net',
    //   ariaLabel: 'Visit Nitin Parmar on Behance',
    // },
  ];

  return (
    <section
      id="hero"
      aria-label="Introduction — Nitin Parmar"
      className="relative min-h-[90vh] md:min-h-[calc(100vh-4rem)] flex flex-col justify-between pt-28 sm:pt-32 md:pt-14 pb-8 sm:pb-10 md:pb-6 overflow-hidden border-b border-[var(--border-medium)] select-none bg-[var(--bg-primary)]"
    >
      {/* 
        GIANT BACKGROUND TYPOGRAPHY: LARGE DESKTOP (xl: 1280px+) ONLY
        Absolute single fluid row flanking the central portrait
      */}
      <div
        className="hidden xl:flex w-full max-w-[1360px] mx-auto px-6 xl:px-10 absolute xl:top-24 xl:left-0 xl:right-0 pointer-events-none justify-center items-center pt-0"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      >
        <div className="w-full flex flex-row items-center justify-between font-sans font-black tracking-[-0.035em] uppercase leading-none select-none text-[11rem] 2xl:text-[11.5rem]">
          {/* Left: Outline Text "NITIN" */}
          <span
            className="text-left tracking-tight transition-all duration-300 transform-gpu whitespace-nowrap"
            style={{
              WebkitTextStroke: '2px var(--text-primary)',
              color: 'transparent',
              textShadow: '0 0 1px rgba(0,0,0,0.08)',
            }}
          >
            NITIN
          </span>

          {/* Right: Solid Text "PARMAR" */}
          <span className="text-right text-[var(--text-primary)] tracking-tight whitespace-nowrap">
            PARMAR
          </span>
        </div>
      </div>

      {/* 
        MAIN STAGE:
        - Mobile (<768px): 1-column stack (Name & Image -> Details -> Social buttons)
        - Tablet (768px - 1279px): 2 sections (Left: All Details & Buttons | Right: Name & Image only)
        - Desktop (1280px+): 3 columns (Left Details | Center Image | Right Social Buttons)
      */}
      <div
        className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative flex-1 flex flex-col justify-end mt-0 md:mt-8 lg:mt-12 xl:mt-24"
        style={{ position: 'relative', zIndex: 10 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.2fr_minmax(320px,460px)_1fr] items-end gap-6 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-8 pt-2 md:pt-4">

          {/* ================= LEFT SECTION: ROLE, DESCRIPTION, CTA & TABLET SOCIAL BUTTONS ================= */}
          <div className="flex flex-col mb-6 md:mb-8 lg:mb-10 xl:mb-12 justify-center items-center md:items-start text-center md:text-left max-w-md mx-auto md:mx-0 order-2 md:order-1 xl:order-1">
            {/* Role Header */}
            <h1
              className="text-2xl sm:text-3xl md:text-[1.85rem] lg:text-[2.2rem] xl:text-[2.2rem] font-bold text-[var(--text-primary)] tracking-[-0.03em] leading-[1.1] mb-3"
              style={{ fontFamily: 'var(--font-jakarta), -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              Full Stack Developer
            </h1>

            {/* Description tailored to portfolio */}
            <p className="text-sm sm:text-base md:text-[1rem] lg:text-[1.05rem] font-sans text-[var(--text-secondary)] leading-relaxed mb-6 sm:mb-8 max-w-sm text-center md:text-left">
              Designing digital products that are clear, usable, and engineered for high performance.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 flex-wrap w-full">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#18181B] text-white! text-sm sm:text-base font-sans font-medium tracking-tight shadow-md hover:bg-[var(--accent-vermilion)] hover:shadow-lg transition-all duration-200 transform-gpu hover:-translate-y-0.5 no-underline"
              >
                <span>Let's collaborate</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-2.5 px-4 border border-[var(--border-light)] hover:border-[var(--border-strong)] rounded-full bg-white/60"
              >
                <span>Explore Work ↓</span>
              </a>
            </div>

            {/* TABLET ONLY (768px to 1279px): SOCIAL BUTTONS INCLUDED ON LEFT SIDE */}
            <div className="hidden md:flex xl:hidden items-center justify-start gap-2.5 sm:gap-3 flex-wrap w-full pt-6">
              {socialButtons.map((btn) => {
                const IconComponent = btn.icon;
                return (
                  <a
                    key={btn.name}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={btn.ariaLabel}
                    className="group inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-white border border-[var(--border-medium)] text-[var(--text-primary)] shadow-2xs hover:shadow-md hover:border-[var(--text-primary)] hover:-translate-y-0.5 transition-all duration-200 no-underline shrink-0 text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <span className="text-[var(--text-primary)] group-hover:text-[var(--accent-vermilion)] transition-colors">
                        <IconComponent size={15} />
                      </span>
                      <span className="font-sans font-medium text-xs sm:text-sm text-[var(--text-primary)]">
                        {btn.name}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={12}
                      className="text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 shrink-0"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT SECTION (TABLET) / TOP (MOBILE) / CENTER COLUMN (DESKTOP) ================= */}
          <div
            className="flex flex-col items-center justify-end order-1 md:order-2 xl:order-2 relative w-full"
            style={{ position: 'relative', zIndex: 20 }}
          >
            <div className="relative w-full flex flex-col items-center justify-end">
              {/* 
                2-ROW TYPOGRAPHY:
                Rendered on Mobile (<768px) and Tablet (768px to 1279px).
                Hidden on Desktop (xl: 1280px+) where full-width background row is used.
              */}
              <div
                className="w-full flex xl:hidden flex-col items-stretch justify-between font-sans font-black tracking-[-0.035em] uppercase leading-[0.85] select-none text-[18vw] sm:text-[15vw] md:text-[5.5rem] lg:text-[7rem] pointer-events-none relative z-1 pt-2 sm:pt-4 md:pt-0"
                aria-hidden="true"
              >
                {/* Row 1: Outline Text "NITIN" */}
                <span
                  className="text-left self-start tracking-tight transition-all duration-300 transform-gpu whitespace-nowrap"
                  style={{
                    WebkitTextStroke: '2px var(--text-primary)',
                    color: 'transparent',
                    textShadow: '0 0 1px rgba(0,0,0,0.08)',
                  }}
                >
                  NITIN
                </span>

                {/* Row 2: Solid Text "PARMAR" */}
                <span className="text-right self-end text-[var(--text-primary)] tracking-tight whitespace-nowrap">
                  PARMAR
                </span>
              </div>

              {/* Interactive Image Frame */}
              <div
                id="hero-portrait-frame"
                ref={portraitContainerRef}
                style={{ position: 'relative', zIndex: 20 }}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[320px] lg:max-w-[380px] xl:max-w-[440px] 2xl:max-w-[480px] -mt-4 sm:-mt-14 md:-mt-8 xl:mt-0 md:cursor-crosshair cursor-default select-none group"
              >
                {/* Soft Silhouette Mask */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    WebkitMaskImage:
                      'radial-gradient(ellipse 92% 78% at 50% 26%, black 52%, rgba(0,0,0,0.5) 74%, transparent 94%)',
                    maskImage:
                      'radial-gradient(ellipse 92% 78% at 50% 26%, black 52%, rgba(0,0,0,0.5) 74%, transparent 94%)',
                  }}
                >
                  {/* LAYER 1: BASE BLACK & WHITE STUDIO PORTRAIT */}
                  <Image
                    src="/nitin-cutout-bw.png"
                    alt="Nitin Parmar — Full Stack Developer"
                    width={551}
                    height={709}
                    priority
                    className="w-full h-auto object-contain pointer-events-none drop-shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-filter duration-300 block"
                    style={{
                      filter: forceFullColor ? 'none' : 'grayscale(100%) contrast(106%)',
                    }}
                  />

                  {/* LAYER 2: COLOR IMAGE REVEALED IN SPOTLIGHT AROUND CURSOR (DESKTOP/TABLET ONLY) */}
                  {!forceFullColor && (
                    <div
                      className="hidden md:block absolute inset-0 pointer-events-none transition-opacity duration-150"
                      style={{
                        opacity: isHovering ? 1 : 0,
                        WebkitMaskImage: `radial-gradient(circle 140px at ${mousePos.x}px ${mousePos.y}px, black 35%, rgba(0,0,0,0.4) 68%, transparent 100%)`,
                        maskImage: `radial-gradient(circle 140px at ${mousePos.x}px ${mousePos.y}px, black 35%, rgba(0,0,0,0.4) 68%, transparent 100%)`,
                      }}
                    >
                      <Image
                        src="/nitin-cutout.png"
                        alt="Nitin Parmar (Full Color Spotlight Reveal)"
                        width={551}
                        height={709}
                        priority
                        className="w-full h-auto object-contain select-none drop-shadow-[0_12px_32px_rgba(0,0,0,0.15)] block"
                      />
                    </div>
                  )}
                </div>

                {/* LAYER 3: TACTILE LENS FOLLOWER RING (DESKTOP/TABLET ONLY) */}
                {!forceFullColor && (
                  <div
                    className={`hidden md:block absolute pointer-events-none rounded-full border border-white/60 shadow-[0_0_24px_rgba(255,255,255,0.7)] transition-opacity duration-150 ease-out ${isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                      }`}
                    style={{
                      width: '140px',
                      height: '140px',
                      transform: 'translate(-50%, -50%)',
                      left: `${mousePos.x}px`,
                      top: `${mousePos.y}px`,
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* ================= COLUMN 3: SOCIAL BUTTONS (MOBILE BOTTOM ROW & DESKTOP RIGHT COLUMN) ================= */}
          <div className="flex md:hidden xl:flex flex-col items-center xl:items-end justify-center pb-2 xl:pb-14 2xl:pb-20 order-3 w-full xl:w-auto">
            <div className="flex flex-row xl:flex-col items-center justify-center gap-2 sm:gap-2.5 xl:gap-3 w-full xl:w-auto">
              {socialButtons.map((btn) => {
                const IconComponent = btn.icon;
                return (
                  <a
                    key={btn.name}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={btn.ariaLabel}
                    className="group inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-white border border-[var(--border-medium)] text-[var(--text-primary)] shadow-2xs hover:shadow-md hover:border-[var(--text-primary)] hover:-translate-y-0.5 transition-all duration-200 no-underline shrink-0 text-xs sm:text-sm"
                  >
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <span className="text-[var(--text-primary)] group-hover:text-[var(--accent-vermilion)] transition-colors">
                        <IconComponent size={15} />
                      </span>
                      <span className="font-sans font-medium text-xs sm:text-sm text-[var(--text-primary)]">
                        {btn.name}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={12}
                      className="text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 shrink-0"
                    />
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
