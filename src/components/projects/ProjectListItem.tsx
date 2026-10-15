'use client';

import React from 'react';
import Link from 'next/link';
import type { Project } from '@/types';
import {
  LuArrowRight as ArrowRight,
  LuExternalLink as ExternalLink,
  LuCheck as Check,
  LuLayers as Layers,
} from 'react-icons/lu';

interface ProjectListItemProps {
  project: Project;
}

export const ProjectListItem: React.FC<ProjectListItemProps> = ({ project }) => {
  return (
    <article
      id={project.id}
      className="bg-white border border-[var(--border-medium)] rounded-lg shadow-[var(--shadow-card)] overflow-hidden transition-all duration-300 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-hover)] group"
    >
      {/* Editorial Header Strip */}
      <div className="flex items-center justify-between p-4 sm:px-6 border-b border-[var(--border-light)] bg-[var(--bg-subtle)] flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <span
            className="font-display text-2xl sm:text-3xl font-bold leading-none"
            style={{ color: project.accentColor || 'var(--accent-vermilion)' }}
          >
            {project.number}
          </span>
          <span className="w-px h-4.5 bg-[var(--border-strong)] inline-block" />
          <span className="mono-label text-[var(--text-primary)] font-semibold text-xs tracking-wider">
            {project.category.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {project.timeline && (
            <span className="mono-tag text-xs bg-white text-[var(--text-tertiary)] hidden sm:inline-block">
              {project.timeline}
            </span>
          )}
          {project.links.length > 0 && (
            <a
              href={project.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-xs py-1 px-3 gap-1.5 rounded"
            >
              <span>{project.links[0].label}</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] font-display mb-2 group-hover:text-[var(--accent-vermilion)] transition-colors">
              <Link href={`/projects/${project.id}`}>{project.title}</Link>
            </h3>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Role & Context Meta */}
            <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-tertiary)] flex-wrap">
              <span>ROLE: <strong className="text-[var(--text-primary)]">{project.roleTitle || 'Full Stack Engineer'}</strong></span>
              <span>•</span>
              <span>FOCUS: <strong className="text-[var(--text-primary)]">Architecture & Scaling</strong></span>
            </div>
          </div>

          {/* Metric Outcome Badge */}
          {project.resumeOutcome && (
            <div className="p-4 bg-[var(--bg-subtle)] rounded-lg border border-[var(--border-light)] lg:w-72 shrink-0">
              <span
                className="font-display text-2xl sm:text-3xl font-bold block mb-1"
                style={{ color: project.accentColor || 'var(--accent-vermilion)' }}
              >
                {project.resumeOutcome.metric}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] block leading-snug">
                {project.resumeOutcome.label}
              </span>
              <p className="font-mono text-[0.68rem] text-[var(--text-tertiary)] mt-1.5">
                * {project.resumeOutcome.disclaimer}
              </p>
            </div>
          )}
        </div>

        {/* Highlights & Contributions */}
        <div className="mb-6 pt-5 border-t border-[var(--border-light)]">
          <span className="mono-label text-xs text-[var(--text-primary)] font-bold block mb-3">
            TECHNICAL ACHIEVEMENTS & CONTRIBUTIONS
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {(project.highlights || project.contributions).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                <span
                  className="mt-0.5 flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-medium)] shrink-0"
                  style={{ color: project.accentColor || 'var(--accent-vermilion)' }}
                >
                  <Check size={9} />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Strip: Technologies & Full Details CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-[var(--border-light)]">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="mono-tag text-xs">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href={`/projects/${project.id}`}
              className="btn btn-primary text-xs sm:text-sm py-2 px-4 rounded-md gap-2"
            >
              <span>Full Details & Architecture</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
