'use client';

import React from 'react';
import Link from 'next/link';
import {
  LuFolderGit2 as FolderGit2,
  LuArrowRight as ArrowRight,
  LuLayers as Layers,
  LuSparkles as Sparkles,
  LuCpu as Cpu,
  LuGlobe as Globe,
} from 'react-icons/lu';

export const ShowMoreProjectsCard: React.FC = () => {
  return (
    <article className="bg-[#FAF9F5] border border-[var(--border-medium)] rounded-md shadow-[var(--shadow-card)] h-full flex flex-col justify-between overflow-hidden relative">
      {/* Top Strip */}
      <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 sm:py-4 border-b border-[var(--border-light)] bg-white shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-display text-2xl sm:text-3xl font-bold text-[var(--accent-vermilion)] leading-none">
            05
          </span>
          <span className="w-px h-4 bg-[var(--border-strong)] inline-block" />
          <span className="mono-label text-[var(--text-primary)] font-semibold text-xs tracking-wider">
            COMPLETE ARCHIVE
          </span>
        </div>
        <span className="mono-tag text-xs bg-[var(--bg-subtle)]">CATALOG INDEX</span>
      </div>

      {/* Main Content */}
      <div className="p-6 sm:p-10 flex-1 flex flex-col justify-center items-center text-center max-w-xl mx-auto min-h-0">
        <div className="w-14 h-14 rounded-full bg-white border border-[var(--border-medium)] flex items-center justify-center text-[var(--accent-vermilion)] mb-5 shadow-xs">
          <Layers size={24} />
        </div>

        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3 leading-tight">
          Explore All Projects & In-Depth Case Studies
        </h3>

        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 max-w-md">
          Browse the full structured catalog with architectural blueprints, technical retrospectives, database schemas, and live production deployments.
        </p>

        {/* Catalog stats */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-md mb-8">
          <div className="p-3 bg-white rounded border border-[var(--border-light)] text-center">
            <span className="font-display text-xl font-bold text-[var(--text-primary)] block">4+</span>
            <span className="mono-label text-[0.65rem] text-[var(--text-tertiary)]">Case Studies</span>
          </div>
          <div className="p-3 bg-white rounded border border-[var(--border-light)] text-center">
            <span className="font-display text-xl font-bold text-[var(--accent-vermilion)] block">100%</span>
            <span className="mono-label text-[0.65rem] text-[var(--text-tertiary)]">Production</span>
          </div>
          <div className="p-3 bg-white rounded border border-[var(--border-light)] text-center">
            <span className="font-display text-xl font-bold text-[var(--accent-blue)] block">Full Stack</span>
            <span className="mono-label text-[0.65rem] text-[var(--text-tertiary)]">Architecture</span>
          </div>
        </div>

        {/* Prominent CTA to /projects */}
        <Link
          href="/projects"
          className="btn btn-primary text-sm sm:text-base py-3 px-6 rounded-md shadow-md gap-2.5 group"
        >
          <span>View All Projects (List View)</span>
          <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
        </Link>
      </div>

      {/* Bottom status */}
      <div className="px-5 sm:px-8 py-3.5 border-t border-[var(--border-light)] bg-white flex items-center justify-between shrink-0 font-mono text-xs text-[var(--text-tertiary)]">
        <span>ARCHITECTURAL DIRECTORY</span>
        <span className="text-[var(--accent-vermilion)] font-medium">VIEW FULL LIST →</span>
      </div>
    </article>
  );
};
