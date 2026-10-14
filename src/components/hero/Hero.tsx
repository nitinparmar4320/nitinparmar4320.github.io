'use client';

import React from 'react';
import { SystemArchitectureVisualizer } from './SystemArchitectureVisualizer';
import { ArrowDown, ArrowUpRight, MapPin, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction & Architecture"
      className="pt-28 sm:pt-36 pb-20 md:pb-24 border-b border-[var(--border-medium)] relative"
    >
      <div className="container">
        {/* Editorial Subheader Meta Bar */}
        <div className="flex items-center justify-between border-b border-[var(--border-medium)] pb-3 mb-10 md:mb-12 flex-wrap gap-3">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span className="mono-label text-xs sm:text-sm">
              <span className="text-[var(--accent-vermilion)]">[00 // IDENTITY]</span> NITIN PARMAR
            </span>
            <span className="w-px h-3 bg-[var(--border-strong)] hidden sm:inline-block" />
            <span className="mono-label text-[var(--text-secondary)] text-xs sm:text-sm">
              FULL STACK SOFTWARE DEVELOPER
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="mono-label text-xs sm:text-sm">
              <MapPin size={12} className="text-[var(--accent-vermilion)]" />
              AHMEDABAD, GUJARAT, INDIA
            </span>
            <span className="mono-label text-[var(--accent-blue)] hidden sm:inline text-xs sm:text-sm">
              23.0225° N, 72.5714° E
            </span>
          </div>
        </div>

        {/* Asymmetric Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,1.2fr)_minmax(320px,1fr)] gap-12 lg:gap-14 items-center">
          {/* Left Column: Bold Editorial Typography & Storytelling */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--bg-subtle)] border border-[var(--border-medium)] rounded mb-5">
              <Terminal size={13} className="text-[var(--accent-vermilion)]" />
              <span className="mono-label text-[var(--text-primary)] text-xs">
                ENGINEERED WITH INTENT // PRODUCTION-PROVEN
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] leading-[1.08] tracking-[-0.025em] font-medium text-[var(--text-primary)] mb-6">
              Building thoughtful digital experiences,{' '}
              <span className="italic font-normal text-[var(--accent-vermilion)]">
                from interface
              </span>{' '}
              to infrastructure.
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed text-[var(--text-secondary)] mb-8 max-w-xl">
              I'm a Full Stack Developer working with <strong className="text-[var(--text-primary)] font-semibold">React.js</strong>,{' '}
              <strong className="text-[var(--text-primary)] font-semibold">Next.js</strong>,{' '}
              <strong className="text-[var(--text-primary)] font-semibold">Node.js</strong>, and modern backend architectures to build reliable, scalable web applications.
            </p>

            {/* Experience & Credential Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 border-y border-[var(--border-medium)] mb-8">
              <div>
                <div className="flex items-baseline gap-1.5 font-display text-3xl font-semibold text-[var(--text-primary)] leading-none">
                  3+ <span className="text-sm font-mono font-medium text-[var(--accent-vermilion)]">YEARS</span>
                </div>
                <div className="mono-label text-xs mt-1.5 text-[var(--text-secondary)]">
                  Software development experience
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-1.5 font-display text-3xl font-semibold text-[var(--text-primary)] leading-none">
                  Full Stack
                </div>
                <div className="mono-label text-xs mt-1.5 text-[var(--text-secondary)]">
                  Frontend • APIs • Databases
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <a href="#projects" className="btn btn-primary">
                <span>Explore My Work</span>
                <ArrowDown size={15} className="btn-icon-arrow" />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <span>Get in Touch</span>
                <ArrowUpRight size={15} className="btn-icon-arrow" />
              </a>
            </div>

            {/* Technical Annotations */}
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              <span className="mono-tag">UI → API → DATA</span>
              <span className="mono-tag">React / Node.js</span>
              <span className="mono-tag">Microservices</span>
              <span className="mono-tag border-[rgba(229,83,61,0.4)] text-[var(--accent-vermilion)] font-medium">
                Built with intent
              </span>
            </div>
          </div>

          {/* Right Column: Custom Abstract Architecture Visualizer */}
          <div className="w-full">
            <SystemArchitectureVisualizer />
          </div>
        </div>
      </div>
    </section>
  );
};
