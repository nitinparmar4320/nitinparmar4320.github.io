'use client';

import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import {
  LuMapPin as MapPin,
  LuClock as Clock,
  LuCodeXml as Code2,
  LuServer as Server,
  LuCircleCheck as CheckCircle,
} from 'react-icons/lu';

export const AboutSection: React.FC = () => {
  // Live India Standard Time (IST - UTC+5:30) display
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date());
        setLocalTime(timeStr);
      } catch {
        setLocalTime('IST (UTC+5:30)');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section-spacing" aria-label="About Nitin Parmar">
      <div className="container">
        <SectionHeader
          index="02"
          tag="PHILOSOPHY & PROFILE"
          title="A little about how I build."
          subtitle="Full-stack engineering grounded in architectural modularity, predictable data contracts, and deliberate user experience."
        />

        {/* Editorial Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,1.25fr)_minmax(320px,1fr)] gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Manifesto & Content */}
          <div>
            {/* Large Editorial Pull Quote */}
            <blockquote className="font-display text-2xl sm:text-3xl leading-snug text-[var(--text-primary)] italic font-normal mb-8 border-l-4 border-l-[var(--accent-vermilion)] pl-6">
              “I enjoy solving practical engineering problems, organizing complex functionality into maintainable modules, and building interfaces that make sophisticated systems easier to use.”
            </blockquote>

            {/* Narrative Body Copy */}
            <div className="flex flex-col gap-5 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] mb-10">
              <p>
                I'm a Full Stack Developer with over three years of experience developing web applications across frontend interfaces, backend APIs, database systems, and third-party integrations.
              </p>
              <p>
                My work spans multi-service platforms, project management tools, real-time monitoring applications, and administrative systems. I focus on reducing architectural complexity, preventing race conditions, and delivering robust software that teams can operate with confidence.
              </p>
            </div>

            {/* Core Architectural Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[var(--border-medium)] pt-6">
              <div>
                <span className="mono-label text-[var(--accent-vermilion)] mb-1.5 flex items-center gap-1.5 font-semibold">
                  <Code2 size={13} />
                  01. FRONTEND CRAFT
                </span>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  Deterministic client state, strict TypeScript interfaces, responsive layouts, and accessible interaction states.
                </p>
              </div>

              <div>
                <span className="mono-label text-[var(--accent-blue)] mb-1.5 flex items-center gap-1.5 font-semibold">
                  <Server size={13} />
                  02. BACKEND RESILIENCE
                </span>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  Decoupled microservice boundaries, ACID-compliant schema design, structured logging, and verified API contracts.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Location & Technical Identity Card */}
          <div className="bg-white border border-[var(--border-medium)] rounded-md p-6 sm:p-8 shadow-[var(--shadow-card)] relative">
            <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-4 mb-6">
              <span className="mono-label text-[var(--text-primary)] font-semibold text-xs tracking-wider">
                OPERATIONAL BASE // METRICS
              </span>
              <span className="mono-label text-[var(--accent-vermilion)] text-xs font-semibold">
                DEV PROFILE
              </span>
            </div>

            {/* Location & Time Stamp */}
            <div className="bg-[var(--bg-subtle)] border border-[var(--border-light)] rounded p-5 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={18} className="text-[var(--accent-vermilion)] shrink-0" />
                <div>
                  <div className="font-bold text-base text-[var(--text-primary)]">
                    Ahmedabad, Gujarat, India
                  </div>
                  <span className="mono-label text-xs text-[var(--text-tertiary)]">
                    COORDINATES: 23.0225° N, 72.5714° E
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-dashed border-[var(--border-medium)] pt-3 mt-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
                  <Clock size={13} className="text-[var(--accent-blue)]" />
                  <span>LOCAL TIME (IST):</span>
                </div>
                <span className="font-mono font-bold text-sm text-[var(--accent-vermilion)]">
                  {localTime || 'Calculating...'}
                </span>
              </div>
            </div>

            {/* Scope of Engineering */}
            <div className="mb-6">
              <span className="mono-label block mb-3 text-[var(--text-primary)] font-semibold text-xs">
                DOMAINS OF EXPERIENCE
              </span>
              <ul className="space-y-2.5">
                {[
                  'Multi-Service E-Commerce & Booking Platforms',
                  'Headless CMS Websites with Next.js & GraphQL',
                  'Real-Time Farm Sensor Telemetry & Push Alerts',
                  'Retail Point-of-Sale (POS) & GRN Inventory Systems',
                  'Relational & Document Database Schema Design'
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]"
                  >
                    <CheckCircle size={14} className="text-[var(--accent-vermilion)] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intent Badge */}
            <div className="border-t border-[var(--border-light)] pt-4 flex items-center justify-between font-mono text-xs text-[var(--text-tertiary)]">
              <span>ENGINEERED WITH INTENT</span>
              <span className="text-[var(--text-primary)] font-semibold">v3.4 PRODUCTION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
