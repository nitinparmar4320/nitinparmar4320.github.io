import React from 'react';
import type { Project } from '@/types';
import {
  LuExternalLink as ExternalLink,
  LuCheck as Check,
  LuShoppingBag as ShoppingBag,
  LuPlane as Plane,
  LuHotel as Hotel,
  LuSmartphone as Smartphone,
  LuCreditCard as CreditCard,
  LuShieldCheck as ShieldCheck,
} from 'react-icons/lu';

interface ProjectCardWideProps {
  project: Project;
  className?: string;
}

export const ProjectCardWide: React.FC<ProjectCardWideProps> = ({ project, className }) => {
  return (
    <article
      id={project.id}
      className={`bg-white border border-[var(--border-medium)] rounded-md overflow-hidden shadow-[var(--shadow-card)] relative ${className ?? 'mb-12 lg:mb-16'}`}
    >
      {/* Editorial Header Strip */}
      <div className="flex items-center justify-between p-4 sm:p-5 sm:px-8 border-b border-[var(--border-light)] bg-[var(--bg-subtle)] flex-wrap gap-4 shrink-0">
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl sm:text-3xl font-bold text-[var(--accent-vermilion)] leading-none">
            {project.number}
          </span>
          <span className="w-px h-4.5 bg-[var(--border-strong)] inline-block" />
          <span className="mono-label text-[var(--text-primary)] font-semibold text-xs tracking-wider">
            {project.category.toUpperCase()}
          </span>
        </div>

        {project.links.length > 0 && (
          <div className="flex items-center gap-3">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-xs py-1.5 px-3.5 gap-2 rounded"
              >
                <span>{link.label}</span>
                <ExternalLink size={13} />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Main Content Asymmetric Split */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,1.15fr)_minmax(320px,1fr)] flex-1 min-h-0 overflow-y-auto">
        {/* Left Column: Context, Role, and Technical Contributions */}
        <div className="p-6 sm:p-10 lg:border-r border-[var(--border-light)] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 text-[var(--text-primary)]">
              {project.title}
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] mb-6">
              {project.description}
            </p>

            {/* Role & Context Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-[var(--border-light)] mb-6">
              <div>
                <span className="mono-label text-xs block mb-1">
                  DEVELOPMENT ROLE:
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {" Full Stack Engineer (MERN & PostgreSQL)"}
                </span>
              </div>
              <div>
                <span className="mono-label text-xs block mb-1">
                  CORE ARCHITECTURE:
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {" Microservices & API Integrations"}
                </span>
              </div>
            </div>

            {/* Key Technical Contributions */}
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
                    <span className="mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-medium)] text-[var(--accent-vermilion)] shrink-0">
                      <Check size={10} />
                    </span>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology Badges & Resume Callout */}
          <div className="pt-4">
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.technologies.map((tech) => (
                <span key={tech} className="mono-tag text-xs">
                  {tech}
                </span>
              ))}
            </div>

            {project.resumeOutcome && (
              <div className="p-3.5 sm:p-4 bg-[var(--bg-subtle)] rounded border border-[var(--border-medium)] border-l-4 border-l-[var(--accent-vermilion)]">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-display text-xl sm:text-2xl font-bold text-[var(--accent-vermilion)]">
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

        {/* Right Column: Custom Conceptual Microservices Ecosystem Blueprint */}
        <div className="bg-[#FAF9F5] p-6 sm:p-10 flex flex-col justify-center border-t lg:border-t-0 border-[var(--border-light)]">
          <div className="border border-[var(--border-medium)] rounded-md bg-white p-5 sm:p-6 shadow-[var(--shadow-subtle)]">
            <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-3 mb-5">
              <span className="mono-label text-xs text-[var(--text-primary)] font-semibold">
                ARCHITECTURE // MICROSERVICES TOPOLOGY
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--accent-green)] font-medium">
                <ShieldCheck size={13} />
                JWT AUTH VERIFIED
              </span>
            </div>

            {/* Microservice Node Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div className="p-3 rounded bg-[var(--bg-subtle)] border border-[var(--border-light)] hover:border-[var(--border-strong)] transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <ShoppingBag size={14} className="text-[var(--accent-vermilion)]" />
                  <span className="text-xs font-semibold text-[var(--text-primary)]">E-Commerce Catalog</span>
                </div>
                <span className="mono-label text-[0.68rem] text-[var(--text-tertiary)]">Product & Inventory Service</span>
              </div>

              <div className="p-3 rounded bg-[var(--bg-subtle)] border border-[var(--border-light)] hover:border-[var(--border-strong)] transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Plane size={14} className="text-[var(--accent-blue)]" />
                  <span className="text-xs font-semibold text-[var(--text-primary)]">Flight & Travel Bookings</span>
                </div>
                <span className="mono-label text-[0.68rem] text-[var(--text-tertiary)]">External API Orchestration</span>
              </div>

              <div className="p-3 rounded bg-[var(--bg-subtle)] border border-[var(--border-light)] hover:border-[var(--border-strong)] transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Hotel size={14} className="text-[var(--accent-amber)]" />
                  <span className="text-xs font-semibold text-[var(--text-primary)]">Hotel Reservations</span>
                </div>
                <span className="mono-label text-[0.68rem] text-[var(--text-tertiary)]">Room Availability Engine</span>
              </div>

              <div className="p-3 rounded bg-[var(--bg-subtle)] border border-[var(--border-light)] hover:border-[var(--border-strong)] transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <Smartphone size={14} className="text-[var(--accent-green)]" />
                  <span className="text-xs font-semibold text-[var(--text-primary)]">eSIM & Gift Cards</span>
                </div>
                <span className="mono-label text-[0.68rem] text-[var(--text-tertiary)]">Automated Provisioning API</span>
              </div>
            </div>

            {/* Central Persistence & Payment Hub */}
            <div className="p-4 rounded bg-[var(--bg-subtle)] border border-[var(--border-light)] flex items-center justify-between">
              <div>
                <span className="mono-label text-[var(--accent-vermilion)] text-[0.68rem] block mb-0.5">
                  SHARED TRANSACTION DATA BUS:
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {' PostgreSQL Relational Storage + Express.js API Gateway'}
                </span>
              </div>
              <CreditCard size={18} className="text-[var(--accent-vermilion)] shrink-0 ml-2" />
            </div>

            {/* Admin Console Annotation */}
            <div className="mt-4 pt-3 border-t border-dashed border-[var(--border-medium)] flex items-center justify-between font-mono text-xs text-[var(--text-tertiary)]">
              <span>OPERATOR CONSOLE: Multi-Vendor Auditing</span>
              <span className="text-[var(--accent-vermilion)] font-medium">ROLE-BASED RBAC</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
