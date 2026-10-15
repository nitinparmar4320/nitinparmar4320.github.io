import React from 'react';
import type { Project } from '@/types';
import {
  LuExternalLink as ExternalLink,
  LuCheck as Check,
  LuNetwork as Network,
  LuUsers as Users,
  LuLayoutDashboard as LayoutDashboard,
  LuZap as Zap,
  LuGitBranch as GitBranch,
} from 'react-icons/lu';

interface ProjectCardSplitProps {
  project: Project;
  className?: string;
}

export const ProjectCardSplit: React.FC<ProjectCardSplitProps> = ({ project, className }) => {
  return (
    <article
      id={project.id}
      className={`bg-white border border-[var(--border-medium)] rounded-md overflow-hidden shadow-[var(--shadow-card)] relative ${className ?? 'mb-12 lg:mb-16'}`}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 sm:p-5 sm:px-8 border-b border-[var(--border-light)] bg-[var(--bg-subtle)] flex-wrap gap-4 shrink-0">
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl sm:text-3xl font-bold text-[var(--accent-blue)] leading-none">
            {project.number}
          </span>
          <span className="w-px h-4.5 bg-[var(--border-strong)] inline-block" />
          <span className="mono-label text-[var(--text-primary)] font-semibold text-xs tracking-wider">
            {project.category.toUpperCase()}
          </span>
        </div>

        {/* Multi-link Action Bar */}
        <div className="flex items-center gap-2 flex-wrap">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={
                link.isPrimary
                  ? 'btn btn-primary text-xs py-1.5 px-3.5 gap-2 rounded'
                  : 'btn btn-secondary text-xs py-1.5 px-3.5 gap-2 rounded'
              }
            >
              <span>{link.label}</span>
              <ExternalLink size={12} />
            </a>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,1fr)_minmax(320px,1.15fr)] flex-1 min-h-0 overflow-y-auto">
        {/* Left Column: Conceptual Architecture & Interface Mockup */}
        <div className="bg-[#FAF9F5] p-6 sm:p-10 lg:border-r border-[var(--border-light)] flex flex-col justify-center">
          {/* Headless Decoupled Architecture Graphic */}
          <div className="bg-white border border-[var(--border-medium)] rounded-md p-5 sm:p-6 shadow-[var(--shadow-subtle)] mb-5">
            <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-3 mb-4">
              <span className="mono-label text-xs text-[var(--text-primary)] font-semibold">
                HEADLESS CMS DATA PIPELINE
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--accent-blue)] font-medium">
                <Zap size={12} />
                SSR & STATIC GENERATION
              </span>
            </div>

            {/* Architecture Node Diagram */}
            <div className="flex items-center justify-between p-3.5 bg-[var(--bg-subtle)] rounded border border-[var(--border-light)] mb-4 gap-2">
              <div className="text-center flex-1">
                <span className="mono-label text-[0.65rem] block mb-0.5">FRONTEND</span>
                <span className="text-xs font-bold text-[var(--text-primary)]">Next.js App</span>
              </div>

              <div className="flex flex-col items-center shrink-0">
                <GitBranch size={14} className="text-[var(--accent-blue)]" />
                <span className="mono-label text-[0.6rem] text-[var(--accent-blue)] font-semibold">GraphQL</span>
              </div>

              <div className="text-center flex-1">
                <span className="mono-label text-[0.65rem] block mb-0.5">CONTENT</span>
                <span className="text-xs font-bold text-[var(--text-primary)]">WordPress CMS</span>
              </div>

              <div className="flex flex-col items-center shrink-0">
                <Network size={14} className="text-[var(--accent-vermilion)]" />
                <span className="mono-label text-[0.6rem] text-[var(--accent-vermilion)] font-semibold">REST</span>
              </div>

              <div className="text-center flex-1">
                <span className="mono-label text-[0.65rem] block mb-0.5">SERVICE</span>
                <span className="text-xs font-bold text-[var(--text-primary)]">Node.js API</span>
              </div>
            </div>

            {/* Admin Console Representation */}
            <div className="border border-[var(--border-light)] rounded p-3.5 bg-white">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2">
                  <LayoutDashboard size={14} className="text-[var(--accent-blue)]" />
                  <span className="text-xs font-semibold text-[var(--text-primary)]">
                    Role-Based Project Administration
                  </span>
                </div>
                <Users size={14} className="text-[var(--text-tertiary)]" />
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                <div className="bg-[var(--bg-subtle)] p-2 rounded text-center text-[var(--text-secondary)]">
                  Projects: Active
                </div>
                <div className="bg-[var(--bg-subtle)] p-2 rounded text-center text-[var(--text-secondary)]">
                  Teams: Synced
                </div>
                <div className="bg-[var(--bg-subtle)] p-2 rounded text-center text-[var(--text-secondary)]">
                  Members: RBAC
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Context, Role, and Technical Details */}
        <div className="p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 border-[var(--border-light)]">
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 text-[var(--text-primary)]">
              {project.title}
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] mb-6">
              {project.description}
            </p>

            {/* Architecture Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-[var(--border-light)] mb-6">
              <div>
                <span className="mono-label text-xs block mb-1">
                  STACK STRATEGY:
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {' Decoupled Headless CMS (Next.js + WP)'}
                </span>
              </div>
              <div>
                <span className="mono-label text-xs block mb-1">
                  DATA INTERFACE:
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {' GraphQL Schemas & REST Webhooks'}
                </span>
              </div>
            </div>

            {/* Contributions List */}
            <div className="mb-6">
              <span className="mono-label block text-[var(--text-primary)] mb-3 font-semibold text-xs tracking-wider">
                KEY TECHNICAL CONTRIBUTIONS
              </span>
              <ul className="space-y-3">
                {project.contributions.map((contribution, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[var(--text-secondary)]"
                  >
                    <span className="mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-medium)] text-[var(--accent-blue)] shrink-0">
                      <Check size={10} />
                    </span>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Badges & Metric */}
          <div className="pt-4">
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.technologies.map((tech) => (
                <span key={tech} className="mono-tag text-xs">
                  {tech}
                </span>
              ))}
            </div>

            {project.resumeOutcome && (
              <div className="p-3.5 sm:p-4 bg-[var(--bg-subtle)] rounded border border-[var(--border-medium)] border-l-4 border-l-[var(--accent-blue)]">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-display text-xl sm:text-2xl font-bold text-[var(--accent-blue)]">
                    {project.resumeOutcome.metric}
                  </span>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                    {project.resumeOutcome.label}
                  </span>
                </div>
                <p className="font-mono text-xs text-[var(--text-tertiary)] mt-1">
                  * {project.resumeOutcome.disclaimer}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
