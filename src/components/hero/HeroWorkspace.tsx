'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import {
  LuTerminal as Terminal,
  LuSparkles as Sparkles,
  LuMapPin as MapPin,
  LuClock as Clock,
  LuArrowDown as ArrowDown,
  LuArrowUpRight as ArrowUpRight,
  LuCopy as Copy,
  LuCheck as Check,
  LuCodeXml as Code2,
  LuServer as Server,
  LuDatabase as Database,
  LuLaptop as Laptop,
  LuZap as Zap,
  LuLayers as Layers,
} from 'react-icons/lu';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiGithub,
} from 'react-icons/si';
import { TbBrandLinkedin } from 'react-icons/tb';

interface TechPill {
  name: string;
  icon: React.ElementType;
  color: string;
  category: string;
  description: string;
}

const techStackList: TechPill[] = [
  {
    name: 'React.js',
    icon: SiReact,
    color: '#087ea4',
    category: 'Frontend',
    description: 'Component architecture, hooks, state management',
  },
  {
    name: 'Next.js 15',
    icon: SiNextdotjs,
    color: '#000000',
    category: 'Full Stack',
    description: 'App Router, SSR, Server Actions, SEO',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#3178C6',
    category: 'Language',
    description: 'Strict type safety & maintainable code contracts',
  },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: '#339933',
    category: 'Backend',
    description: 'Scalable RESTful microservices & Express APIs',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#4169E1',
    category: 'Database',
    description: 'Relational data modeling, indexing & ACID compliance',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#06B6D4',
    category: 'Styling',
    description: 'Responsive design tokens & clean component systems',
  },
  {
    name: 'Docker',
    icon: SiDocker,
    color: '#2496ED',
    category: 'DevOps',
    description: 'Containerized environments & reproducible builds',
  },
];

export const HeroWorkspace: React.FC = () => {
  // Live India Standard Time (IST - UTC+5:30)
  const [istTime, setIstTime] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'code' | 'specs'>('code');
  const [activePillIndex, setActivePillIndex] = useState<number>(0);
  const [lightingMood, setLightingMood] = useState<'dual' | 'warm' | 'electric'>('dual');

  // 3D Tilt state on portrait
  const [tilt, setTilt] = useState<{ x: number; y: number; shineX: number; shineY: number }>({
    x: 0,
    y: 0,
    shineX: 50,
    shineY: 50,
  });
  const [isCardHovered, setIsCardHovered] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Live IST Clock updater
  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setIstTime(formatter.format(new Date()));
      } catch {
        setIstTime('IST (UTC+5:30)');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Tech stack pill auto-rotation preview
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePillIndex((prev) => (prev + 1) % techStackList.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  // 3D Tilt calculation on mouse move
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    // Normalize from -1 to 1
    const normalizedX = (clientX / rect.width) * 2 - 1;
    const normalizedY = (clientY / rect.height) * 2 - 1;

    // Max tilt angles: 6 deg
    const rotateY = Number((normalizedX * 6).toFixed(2));
    const rotateX = Number((-normalizedY * 6).toFixed(2));

    const shineX = Math.round((clientX / rect.width) * 100);
    const shineY = Math.round((clientY / rect.height) * 100);

    setTilt({ x: rotateX, y: rotateY, shineX, shineY });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsCardHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsCardHovered(false);
    setTilt({ x: 0, y: 0, shineX: 50, shineY: 50 });
  }, []);

  // Quick email copy
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nitinparmar4320@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const currentPill = techStackList[activePillIndex];

  return (
    <section
      id="hero"
      aria-label="Studio Workspace — Nitin Parmar"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 border-b border-[var(--border-medium)] overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Background Architectural Grid Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(var(--border-strong) 1px, transparent 1px), radial-gradient(var(--border-strong) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        {/* ================= 1. EDITORIAL METADATA BAR ================= */}
        <div className="flex items-center justify-between border-b border-[var(--border-medium)] pb-3 mb-8 md:mb-12 flex-wrap gap-3">
          {/* Identity & Role */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span className="mono-label text-xs sm:text-sm">
              <span className="text-[var(--accent-vermilion)] font-semibold">[00 // IDENTITY]</span>{' '}
              <span className="text-[var(--text-primary)] font-semibold tracking-wider">NITIN PARMAR</span>
            </span>
            <span className="w-px h-3.5 bg-[var(--border-strong)] hidden sm:inline-block" />
            <span className="mono-label text-[var(--text-secondary)] text-xs sm:text-sm">
              FULL STACK SOFTWARE DEVELOPER
            </span>
          </div>

          {/* Location, Live Clock & Availability */}
          <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
            {/* Live Status Pill with Radar Ping */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[rgba(46,125,50,0.08)] border border-[rgba(46,125,50,0.28)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-green)]" />
              </span>
              <span className="mono-label text-[var(--accent-green)] text-[0.68rem] font-semibold tracking-wider">
                AVAILABLE FOR HIRE
              </span>
            </div>

            {/* Live IST Time */}
            <div className="hidden md:flex items-center gap-1.5 mono-label text-xs text-[var(--text-secondary)]">
              <Clock size={12} className="text-[var(--accent-vermilion)]" />
              <span>{istTime || 'IST (UTC+5:30)'}</span>
            </div>

            {/* Geocoordinates */}
            <div className="hidden lg:flex items-center gap-1.5 mono-label text-xs text-[var(--accent-blue)]">
              <MapPin size={12} />
              <span>23.0225° N, 72.5714° E</span>
            </div>
          </div>
        </div>

        {/* ================= 2. MAIN ASYMMETRIC GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(330px,1.15fr)_minmax(320px,1fr)] gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* ================= LEFT COLUMN: STORY, VALUE PROP & ACTIONS ================= */}
          <div className="flex flex-col">
            {/* Editorial Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 bg-[var(--bg-subtle)] border border-[var(--border-medium)] rounded mb-4">
              <Terminal size={13} className="text-[var(--accent-vermilion)]" />
              <span className="mono-label text-[var(--text-primary)] text-xs font-medium">
                ENGINEERED WITH INTENT // PRODUCTION TESTED
              </span>
            </div>

            {/* Editorial Master Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] leading-[1.08] tracking-[-0.025em] font-medium text-[var(--text-primary)] mb-5">
              Building thoughtful web applications,{' '}
              <span className="font-display italic font-normal text-[var(--accent-vermilion)]">
                from interface
              </span>{' '}
              to infrastructure.
            </h1>

            {/* Narrative Value Proposition */}
            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] mb-7 max-w-xl">
              I'm <strong className="text-[var(--text-primary)] font-semibold">Nitin Parmar</strong>, a Full Stack Developer
              with over 3 years of hands-on experience engineering scalable web systems with{' '}
              <strong className="text-[var(--text-primary)] font-semibold">React</strong>,{' '}
              <strong className="text-[var(--text-primary)] font-semibold">Next.js</strong>,{' '}
              <strong className="text-[var(--text-primary)] font-semibold">Node.js</strong>, and robust relational data
              architectures in Ahmedabad, India.
            </p>

            {/* Experience & Quality Metric Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4 border-y border-[var(--border-medium)] mb-7">
              <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-light)] rounded-md shadow-2xs">
                <div className="flex items-baseline gap-1 font-display text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] leading-none">
                  3+ <span className="text-xs font-mono text-[var(--accent-vermilion)] font-medium">YRS</span>
                </div>
                <div className="mono-label text-[0.68rem] mt-1.5 text-[var(--text-secondary)]">
                  Production Exp
                </div>
              </div>

              <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-light)] rounded-md shadow-2xs">
                <div className="flex items-baseline gap-1 font-display text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] leading-none">
                  15+ <span className="text-xs font-mono text-[var(--accent-blue)] font-medium">APPS</span>
                </div>
                <div className="mono-label text-[0.68rem] mt-1.5 text-[var(--text-secondary)]">
                  Shipped Systems
                </div>
              </div>

              <div className="p-3 bg-[var(--bg-surface)] border border-[var(--border-light)] rounded-md shadow-2xs">
                <div className="flex items-baseline gap-1 font-display text-2xl sm:text-3xl font-semibold text-[var(--text-primary)] leading-none">
                  100% <span className="text-xs font-mono text-[var(--accent-green)] font-medium">MODULAR</span>
                </div>
                <div className="mono-label text-[0.68rem] mt-1.5 text-[var(--text-secondary)]">
                  Clean Architecture
                </div>
              </div>
            </div>

            {/* Action Buttons & Quick Connect */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap mb-7">
              <a href="#projects" className="btn btn-primary shadow-sm">
                <span>Explore Work</span>
                <ArrowDown size={15} className="btn-icon-arrow" />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <span>Get In Touch</span>
                <ArrowUpRight size={15} className="btn-icon-arrow" />
              </a>

              {/* Quick Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-2 px-3.5 py-2.5 rounded border border-[var(--border-medium)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--accent-vermilion)] hover:text-[var(--accent-vermilion)] text-xs font-mono transition-all duration-200 cursor-pointer"
                title="Click to copy email address"
                aria-label="Copy Nitin's email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check size={13} className="text-[var(--accent-green)]" />
                    <span className="text-[var(--accent-green)] font-semibold">COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} className="text-[var(--text-tertiary)] group-hover:text-[var(--accent-vermilion)] transition-colors" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>

              {/* Direct Social Links */}
              <div className="flex items-center gap-1.5 ml-auto sm:ml-0">
                <a
                  href="https://www.linkedin.com/in/nitinparmar4320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded border border-[var(--border-light)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[#0077B5] hover:border-[#0077B5] transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <TbBrandLinkedin size={16} />
                </a>
                <a
                  href="https://github.com/nitinparmar4320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded border border-[var(--border-light)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors"
                  aria-label="GitHub profile"
                >
                  <SiGithub size={16} />
                </a>
              </div>
            </div>

            {/* Interactive Technology Ticker Bar */}
            <div className="p-3 bg-[var(--bg-subtle)] border border-[var(--border-medium)] rounded-md">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="mono-label text-[0.7rem] text-[var(--text-tertiary)] flex items-center gap-1.5">
                  <Zap size={11} className="text-[var(--accent-vermilion)]" />
                  CORE ARCHITECTURAL STACK
                </span>
                <span className="mono-label text-[0.68rem] text-[var(--accent-blue)]">
                  {currentPill.category.toUpperCase()}
                </span>
              </div>

              {/* Pills row */}
              <div className="flex items-center gap-1.5 flex-wrap">
                {techStackList.map((pill, idx) => {
                  const Icon = pill.icon;
                  const isActive = idx === activePillIndex;
                  return (
                    <button
                      key={pill.name}
                      type="button"
                      onClick={() => setActivePillIndex(idx)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[var(--text-primary)] text-white shadow-xs scale-102'
                          : 'bg-[var(--bg-surface)] border border-[var(--border-light)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      <Icon
                        size={12}
                        style={{ color: isActive ? '#FFFFFF' : pill.color }}
                      />
                      <span>{pill.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Stack Description */}
              <div className="mt-2.5 pt-2 border-t border-[var(--border-light)] text-[0.75rem] font-mono text-[var(--text-secondary)] flex items-center justify-between">
                <span>
                  <strong className="text-[var(--text-primary)]">{currentPill.name}</strong>:{' '}
                  {currentPill.description}
                </span>
                <span className="mono-label text-[0.65rem] text-[var(--text-tertiary)] hidden sm:inline">
                  [{activePillIndex + 1}/{techStackList.length}]
                </span>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: 3D INTERACTIVE STUDIO PORTRAIT SHOWPIECE ================= */}
          <div className="relative flex flex-col items-center justify-center">

            {/* Dynamic Dual Ambient Glow Matching Image Studio Lighting */}
            <div
              className={`absolute -inset-4 sm:-inset-8 pointer-events-none transition-opacity duration-700 ${
                lightingMood === 'warm'
                  ? 'opacity-85'
                  : lightingMood === 'electric'
                  ? 'opacity-85'
                  : 'opacity-70'
              }`}
              aria-hidden="true"
            >
              {/* Left Warm Tube Glow (amber/vermilion) */}
              <div
                className={`absolute top-1/4 -left-6 w-72 h-72 sm:w-88 sm:h-88 rounded-full filter blur-[60px] animate-ambient-warm ${
                  lightingMood === 'electric' ? 'opacity-10' : 'opacity-80'
                }`}
                style={{
                  background: 'radial-gradient(circle, rgba(229,83,61,0.28) 0%, rgba(217,119,6,0.18) 50%, transparent 70%)',
                }}
              />

              {/* Right Cool Code Monitor Glow (electric blue/indigo) */}
              <div
                className={`absolute bottom-1/4 -right-6 w-72 h-72 sm:w-88 sm:h-88 rounded-full filter blur-[60px] animate-ambient-blue ${
                  lightingMood === 'warm' ? 'opacity-10' : 'opacity-80'
                }`}
                style={{
                  background: 'radial-gradient(circle, rgba(82,103,216,0.25) 0%, rgba(46,125,50,0.12) 50%, transparent 70%)',
                }}
              />
            </div>

            {/* Interactive 3D Card Container */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[440px] xl:max-w-[470px] select-none transition-transform duration-300 ease-out"
              style={{
                perspective: '1200px',
                transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${
                  isCardHovered ? 1.015 : 1
                }, ${isCardHovered ? 1.015 : 1}, 1)`,
              }}
            >
              {/* Outer Architectural Blueprint Frame */}
              <div className="relative rounded-2xl p-2.5 sm:p-3 bg-[var(--bg-surface)] border border-[var(--border-medium)] shadow-[0_16px_40px_rgba(32,33,31,0.08)] backdrop-blur-sm">
                
                {/* Blueprint Precision Corner Crosshairs (+) */}
                <span className="absolute -top-1.5 -left-1.5 text-xs font-mono font-bold text-[var(--accent-vermilion)] leading-none select-none">
                  +
                </span>
                <span className="absolute -top-1.5 -right-1.5 text-xs font-mono font-bold text-[var(--accent-vermilion)] leading-none select-none">
                  +
                </span>
                <span className="absolute -bottom-1.5 -left-1.5 text-xs font-mono font-bold text-[var(--accent-vermilion)] leading-none select-none">
                  +
                </span>
                <span className="absolute -bottom-1.5 -right-1.5 text-xs font-mono font-bold text-[var(--accent-vermilion)] leading-none select-none">
                  +
                </span>

                {/* Studio Window Header Strip */}
                <div className="flex items-center justify-between px-2 pb-2 mb-1.5 border-b border-[var(--border-light)] text-[0.7rem] font-mono text-[var(--text-tertiary)]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-vermilion)] inline-block opacity-80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-amber)] inline-block opacity-80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-green)] inline-block opacity-80" />
                    <span className="ml-1 text-[var(--text-secondary)] font-medium">developer_studio.hdr</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Lighting Mood Switcher */}
                    <div className="flex items-center gap-1 bg-[var(--bg-subtle)] p-0.5 rounded border border-[var(--border-light)]">
                      <button
                        type="button"
                        onClick={() => setLightingMood('warm')}
                        className={`px-1.5 py-0.5 rounded text-[0.62rem] font-mono transition-colors ${
                          lightingMood === 'warm'
                            ? 'bg-[var(--accent-vermilion)] text-white font-semibold'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                        title="Warm Studio Glow"
                      >
                        WARM
                      </button>
                      <button
                        type="button"
                        onClick={() => setLightingMood('dual')}
                        className={`px-1.5 py-0.5 rounded text-[0.62rem] font-mono transition-colors ${
                          lightingMood === 'dual'
                            ? 'bg-[var(--text-primary)] text-white font-semibold'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                        title="Balanced Studio Glow"
                      >
                        DUAL
                      </button>
                      <button
                        type="button"
                        onClick={() => setLightingMood('electric')}
                        className={`px-1.5 py-0.5 rounded text-[0.62rem] font-mono transition-colors ${
                          lightingMood === 'electric'
                            ? 'bg-[var(--accent-blue)] text-white font-semibold'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                        title="Electric Code Glow"
                      >
                        CYBER
                      </button>
                    </div>
                  </div>
                </div>

                {/* Portrait Canvas Frame with Specular Sheen */}
                <div className="relative rounded-xl overflow-hidden bg-neutral-900 border border-[var(--border-light)] aspect-[3/4] shadow-inner group">
                  <Image
                    src="/nitin-workspace.jpg"
                    alt="Nitin Parmar — Full Stack Developer in modern workspace studio"
                    fill
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 470px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  {/* Dynamic Specular Sheen follows cursor */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                    style={{
                      opacity: isCardHovered ? 0.35 : 0,
                      background: `radial-gradient(circle 260px at ${tilt.shineX}% ${tilt.shineY}%, rgba(255,255,255,0.4) 0%, transparent 75%)`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Bottom Vignette Overlay */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-28 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(17,17,17,0.75) 0%, rgba(17,17,17,0.2) 60%, transparent 100%)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Subtle In-Image Tech Badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white/90 text-xs font-mono pointer-events-none">
                    <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-green)] animate-ping" />
                      <span className="text-[0.68rem] tracking-wider text-emerald-300">ACTIVE SESSION</span>
                    </span>

                    <span className="text-[0.68rem] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 text-slate-300">
                      AHMEDABAD // STUDIO
                    </span>
                  </div>
                </div>

                {/* Studio Meta Strip Footer */}
                <div className="flex items-center justify-between px-2 pt-2 text-[0.68rem] font-mono text-[var(--text-secondary)] border-t border-[var(--border-light)] mt-1">
                  <span className="flex items-center gap-1.5">
                    <Laptop size={11} className="text-[var(--accent-blue)]" />
                    <span>DEV_ENV: MAC + DUAL_DISPLAY</span>
                  </span>
                  <span className="text-[var(--accent-vermilion)] font-semibold">
                    ARCH: FULL_STACK_V3
                  </span>
                </div>
              </div>

              {/* ================= FLOATING BADGE 1: TOP RIGHT (Full Stack Architect) ================= */}
              <div
                className="hidden sm:flex absolute top-16 -right-6 sm:-right-8 lg:-right-12 z-20 animate-studio-float pointer-events-auto"
                style={{ filter: 'drop-shadow(0 10px 24px rgba(0,0,0,0.12))' }}
              >
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/95 border border-[var(--border-medium)] shadow-md backdrop-blur-md">
                  <div className="p-1.5 rounded-lg bg-[rgba(229,83,61,0.12)] text-[var(--accent-vermilion)]">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-xs text-[var(--text-primary)] leading-tight">
                      Full Stack Engineer
                    </div>
                    <div className="font-mono text-[0.65rem] text-[var(--text-secondary)]">
                      React • Next.js • Node.js
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= FLOATING BADGE 2: BOTTOM LEFT (Production Status) ================= */}
              <div
                className="hidden sm:flex absolute bottom-12 -left-4 sm:-left-6 lg:-left-8 z-20 animate-studio-float-slow pointer-events-auto"
                style={{ filter: 'drop-shadow(0 10px 24px rgba(0,0,0,0.12))' }}
              >
                <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/95 border border-[var(--border-medium)] shadow-md backdrop-blur-md">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-green)] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent-green)]" />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-xs text-[var(--text-primary)] leading-tight flex items-center gap-1.5">
                      <span>Status: In The Zone</span>
                    </div>
                    <div className="font-mono text-[0.65rem] text-[var(--accent-green)] font-semibold">
                      Scalable Systems Ready
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ================= 3. BOTTOM INTERACTIVE SYSTEM DRAWER ================= */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[var(--border-medium)]">
          <div className="bg-[var(--bg-surface)] border border-[var(--border-medium)] rounded-xl shadow-xs overflow-hidden">
            {/* Drawer Header Tabs */}
            <div className="flex items-center justify-between border-b border-[var(--border-light)] bg-[var(--bg-subtle)] px-4 py-2.5 flex-wrap gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('code')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                    activeTab === 'code'
                      ? 'bg-[var(--text-primary)] text-white shadow-2xs font-medium'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
                  }`}
                >
                  <Code2 size={13} />
                  <span>// nitin_config.ts</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('profile')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                    activeTab === 'profile'
                      ? 'bg-[var(--text-primary)] text-white shadow-2xs font-medium'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
                  }`}
                >
                  <Layers size={13} />
                  <span>// engineering_philosophy.json</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('specs')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                    activeTab === 'specs'
                      ? 'bg-[var(--text-primary)] text-white shadow-2xs font-medium'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
                  }`}
                >
                  <Server size={13} />
                  <span>// system_telemetry.log</span>
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-3 text-[0.7rem] font-mono text-[var(--text-tertiary)]">
                <span>RUNTIME: NODE 20+</span>
                <span>•</span>
                <span>COMPILER: TS 5.X</span>
              </div>
            </div>

            {/* Drawer Content Body */}
            <div className="p-4 sm:p-5 font-mono text-xs sm:text-[0.82rem] leading-relaxed overflow-x-auto">
              {activeTab === 'code' && (
                <pre className="text-[var(--text-secondary)]">
                  <code>
                    <span className="text-[var(--accent-blue)]">import</span> &#123;{' '}
                    <span className="text-[var(--accent-vermilion)]">Developer</span>,{' '}
                    <span className="text-[var(--accent-vermilion)]">Architecture</span> &#125;{' '}
                    <span className="text-[var(--accent-blue)]">from</span>{' '}
                    <span className="text-[var(--accent-green)]">'@/nitin/portfolio'</span>;{'\n\n'}
                    <span className="text-[var(--accent-blue)]">export const</span>{' '}
                    <span className="text-[var(--text-primary)] font-semibold">nitinParmar</span>:{' '}
                    <span className="text-[var(--accent-vermilion)]">Developer</span> = &#123;{'\n'}
                    {'  '}name: <span className="text-[var(--accent-green)]">'Nitin Parmar'</span>,{'\n'}
                    {'  '}role: <span className="text-[var(--accent-green)]">'Full Stack Software Developer'</span>,{'\n'}
                    {'  '}experienceYears: <span className="text-[var(--accent-amber)] font-bold">3.2</span>,{'\n'}
                    {'  '}location: <span className="text-[var(--accent-green)]">'Ahmedabad, Gujarat, India'</span>,{'\n'}
                    {'  '}coreStack: [
                    <span className="text-[var(--accent-green)]">'Next.js'</span>,{' '}
                    <span className="text-[var(--accent-green)]">'React.js'</span>,{' '}
                    <span className="text-[var(--accent-green)]">'TypeScript'</span>,{' '}
                    <span className="text-[var(--accent-green)]">'Node.js'</span>,{' '}
                    <span className="text-[var(--accent-green)]">'PostgreSQL'</span>
                    ],{'\n'}
                    {'  '}architecturePhilosophy: <span className="text-[var(--accent-green)]">'Modularity, predictable state contracts, and seamless UX'</span>,{'\n'}
                    {'  '}contact: <span className="text-[var(--accent-green)]">'nitinparmar4320@gmail.com'</span>,{'\n'}
                    {'  '}isAvailableForNewProjects: <span className="text-[var(--accent-green)] font-bold">true</span>,{'\n'}
                    &#125;;
                  </code>
                </pre>
              )}

              {activeTab === 'profile' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
                  <div className="p-3 bg-[var(--bg-subtle)] rounded border border-[var(--border-light)]">
                    <div className="font-mono text-[var(--accent-vermilion)] font-bold mb-1">
                      01 // MODULARITY
                    </div>
                    <p className="text-[var(--text-secondary)] text-xs leading-normal">
                      Every feature is built as isolated, reusable components with explicit props, decoupled state, and strict TypeScript interfaces.
                    </p>
                  </div>

                  <div className="p-3 bg-[var(--bg-subtle)] rounded border border-[var(--border-light)]">
                    <div className="font-mono text-[var(--accent-blue)] font-bold mb-1">
                      02 // RELIABLE BACKEND
                    </div>
                    <p className="text-[var(--text-secondary)] text-xs leading-normal">
                      RESTful and GraphQL endpoints engineered with structured error boundaries, schema validation, and secure database indexing.
                    </p>
                  </div>

                  <div className="p-3 bg-[var(--bg-subtle)] rounded border border-[var(--border-light)]">
                    <div className="font-mono text-[var(--accent-green)] font-bold mb-1">
                      03 // HUMAN CENTRIC
                    </div>
                    <p className="text-[var(--text-secondary)] text-xs leading-normal">
                      Deep attention to tactile micro-animations, accessible contrast ratios, sub-100ms UI responses, and zero visual clutter.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="font-mono text-[0.78rem] text-[var(--text-secondary)] space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--accent-green)]">✓</span>
                    <span>[2026-10-22] Portfolio system boot: optimal latency (28ms)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--accent-blue)]">ℹ</span>
                    <span>Stack: Next.js 16.4 (App Router) + React 19 + Tailwind CSS 4</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--accent-vermilion)]">⚡</span>
                    <span>Developer Studio: Nitin Parmar • Live in Ahmedabad, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--accent-green)]">✓</span>
                    <span>All services operational • Ready to collaborate on production applications</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
