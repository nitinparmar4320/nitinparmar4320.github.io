'use client';

import React from 'react';
import Link from 'next/link';
import type { Project } from '@/types';
import {
  LuArrowRight as ArrowRight,
  LuExternalLink as ExternalLink,
  LuCheck as Check,
  LuShieldCheck as ShieldCheck,
  LuShoppingBag as ShoppingBag,
  LuPlane as Plane,
  LuHotel as Hotel,
  LuSmartphone as Smartphone,
  LuCreditCard as CreditCard,
  LuRadio as Radio,
  LuNetwork as Network,
  LuPackage as Package,
  LuFileCheck as FileCheck,
  LuStore as Store,
  LuSparkles as Sparkles,
} from 'react-icons/lu';

interface HomeProjectCardProps {
  project: Project;
}

export const HomeProjectCard: React.FC<HomeProjectCardProps> = ({ project }) => {
  // Render a compact, clean visual teaser tailored to each project's domain
  const renderVisualTeaser = () => {
    switch (project.id) {
      case 'shoppingate':
        return (
          <div className="h-full rounded-md bg-[#FAF9F5] border border-[var(--border-medium)] p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-2.5 mb-3">
              <span className="mono-label text-[0.7rem] text-[var(--text-primary)] font-semibold">
                MICROSERVICES BLUEPRINT
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-[0.68rem] text-[var(--accent-green)] font-medium">
                <ShieldCheck size={12} />
                JWT AUTH VERIFIED
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="p-2.5 rounded bg-white border border-[var(--border-light)] flex items-center gap-2">
                <ShoppingBag size={14} className="text-[var(--accent-vermilion)] shrink-0" />
                <div className="min-w-0">
                  <span className="text-xs font-semibold text-[var(--text-primary)] block truncate">E-Commerce</span>
                  <span className="mono-label text-[0.62rem] text-[var(--text-tertiary)] block truncate">Catalog & Cart</span>
                </div>
              </div>
              <div className="p-2.5 rounded bg-white border border-[var(--border-light)] flex items-center gap-2">
                <Plane size={14} className="text-[var(--accent-blue)] shrink-0" />
                <div className="min-w-0">
                  <span className="text-xs font-semibold text-[var(--text-primary)] block truncate">Travel & Flights</span>
                  <span className="mono-label text-[0.62rem] text-[var(--text-tertiary)] block truncate">GDS Pipelines</span>
                </div>
              </div>
              <div className="p-2.5 rounded bg-white border border-[var(--border-light)] flex items-center gap-2">
                <Hotel size={14} className="text-[var(--accent-amber)] shrink-0" />
                <div className="min-w-0">
                  <span className="text-xs font-semibold text-[var(--text-primary)] block truncate">Hotels</span>
                  <span className="mono-label text-[0.62rem] text-[var(--text-tertiary)] block truncate">Room Engine</span>
                </div>
              </div>
              <div className="p-2.5 rounded bg-white border border-[var(--border-light)] flex items-center gap-2">
                <Smartphone size={14} className="text-[var(--accent-green)] shrink-0" />
                <div className="min-w-0">
                  <span className="text-xs font-semibold text-[var(--text-primary)] block truncate">eSIM & Cards</span>
                  <span className="mono-label text-[0.62rem] text-[var(--text-tertiary)] block truncate">Auto Delivery</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded bg-white border border-[var(--border-light)] flex items-center justify-between">
              <div>
                <span className="mono-label text-[var(--accent-vermilion)] text-[0.65rem] block">
                  SHARED DATA BUS:
                </span>
                <span className="text-xs font-semibold text-[var(--text-primary)]">
                  PostgreSQL Relational Storage + Express Gateway
                </span>
              </div>
              <CreditCard size={16} className="text-[var(--accent-vermilion)] shrink-0 ml-2" />
            </div>
          </div>
        );

      case 'pmpeople':
        return (
          <div className="h-full rounded-md bg-[#FAF9F5] border border-[var(--border-medium)] p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-2.5 mb-3">
              <span className="mono-label text-[0.7rem] text-[var(--text-primary)] font-semibold">
                HEADLESS CMS DATA PIPELINE
              </span>
              <span className="mono-tag text-[0.65rem] py-0.5 px-2 bg-blue-500/10 text-[var(--accent-blue)] border-blue-500/20">
                SSR & STATIC GENERATION
              </span>
            </div>

            <div className="p-3 rounded bg-white border border-[var(--border-light)] mb-3">
              <div className="grid grid-cols-3 text-center gap-2 items-center">
                <div className="p-2 rounded bg-[var(--bg-subtle)]">
                  <span className="mono-label text-[0.62rem] text-[var(--text-tertiary)] block">FRONTEND</span>
                  <span className="text-xs font-bold text-[var(--text-primary)]">Next.js App</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[0.65rem] font-mono font-bold text-[var(--accent-blue)]">GraphQL</span>
                  <span className="text-xs text-[var(--text-tertiary)]">⇄</span>
                </div>
                <div className="p-2 rounded bg-[var(--bg-subtle)]">
                  <span className="mono-label text-[0.62rem] text-[var(--text-tertiary)] block">CONTENT</span>
                  <span className="text-xs font-bold text-[var(--text-primary)]">WordPress</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded bg-white border border-[var(--border-light)]">
              <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-primary)] mb-2">
                <span>Enterprise RBAC Permissions</span>
                <span className="text-[var(--accent-blue)] font-mono text-[0.7rem]">Active</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[0.68rem]">
                <div className="p-1.5 rounded bg-[var(--bg-subtle)] text-[var(--text-secondary)]">Org Admins</div>
                <div className="p-1.5 rounded bg-[var(--bg-subtle)] text-[var(--text-secondary)]">PM Leads</div>
                <div className="p-1.5 rounded bg-[var(--bg-subtle)] text-[var(--text-secondary)]">Contributors</div>
              </div>
            </div>
          </div>
        );

      case 'seedling':
        return (
          <div className="h-full rounded-md bg-[#FAF9F5] border border-[var(--border-medium)] p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-2.5 mb-3">
              <span className="mono-label text-[0.7rem] text-[var(--text-primary)] font-semibold">
                LIVE IOT TELEMETRY STREAM
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-[0.68rem] text-[var(--accent-green)] font-medium">
                <Radio size={11} className="animate-pulse" />
                WEBSOCKET POLLING 50ms
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="p-2.5 rounded bg-white border border-[var(--border-light)] text-center">
                <span className="mono-label text-[0.62rem] text-[var(--text-tertiary)] block">TEMP</span>
                <span className="font-mono text-base font-bold text-[var(--text-primary)]">24.4°C</span>
                <span className="text-[0.62rem] text-[var(--accent-green)] block">Optimal</span>
              </div>
              <div className="p-2.5 rounded bg-white border border-[var(--border-light)] text-center">
                <span className="mono-label text-[0.62rem] text-[var(--text-tertiary)] block">HUMIDITY</span>
                <span className="font-mono text-base font-bold text-[var(--text-primary)]">58.2%</span>
                <span className="text-[0.62rem] text-[var(--accent-green)] block">Stable</span>
              </div>
              <div className="p-2.5 rounded bg-white border border-[var(--border-light)] text-center">
                <span className="mono-label text-[0.62rem] text-[var(--text-tertiary)] block">SOIL MOISTURE</span>
                <span className="font-mono text-base font-bold text-[var(--text-primary)]">64.1%</span>
                <span className="text-[0.62rem] text-[var(--accent-green)] block">Hydrated</span>
              </div>
            </div>

            <div className="p-3 rounded bg-white border border-[var(--border-light)] flex items-center justify-between">
              <div>
                <span className="mono-label text-[var(--accent-green)] text-[0.65rem] block">
                  ANOMALY DISPATCHER:
                </span>
                <span className="text-xs font-semibold text-[var(--text-primary)]">
                  Firebase Cloud Messaging (FCM) Priority Push
                </span>
              </div>
              <span className="mono-tag text-[0.65rem] bg-green-700/10 text-[var(--accent-green)]">ONLINE</span>
            </div>
          </div>
        );

      case 'mpos':
        return (
          <div className="h-full rounded-md bg-[#FAF9F5] border border-[var(--border-medium)] p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-2.5 mb-3">
              <span className="mono-label text-[0.7rem] text-[var(--text-primary)] font-semibold">
                OPERATIONAL RETAIL WORKSPACE
              </span>
              <span className="mono-tag text-[0.65rem] bg-amber-500/10 text-[var(--accent-amber)] border-amber-500/20">
                6 MODULES INTEGRATED
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="p-2 rounded bg-white border border-[var(--border-light)] flex items-center gap-1.5">
                <Package size={13} className="text-[var(--accent-amber)] shrink-0" />
                <span className="text-xs font-semibold text-[var(--text-primary)] truncate">Catalog</span>
              </div>
              <div className="p-2 rounded bg-white border border-[var(--border-light)] flex items-center gap-1.5">
                <FileCheck size={13} className="text-[var(--accent-amber)] shrink-0" />
                <span className="text-xs font-semibold text-[var(--text-primary)] truncate">GRN Inbound</span>
              </div>
              <div className="p-2 rounded bg-white border border-[var(--border-light)] flex items-center gap-1.5">
                <Store size={13} className="text-[var(--accent-amber)] shrink-0" />
                <span className="text-xs font-semibold text-[var(--text-primary)] truncate">Multi-Store</span>
              </div>
            </div>

            <div className="p-3 rounded bg-white border border-[var(--border-light)]">
              <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-primary)] mb-1">
                <span>SKU Stock & Reconciliation</span>
                <span className="mono-label text-[0.68rem] text-[var(--accent-green)]">Sync 3 Outlets</span>
              </div>
              <div className="flex items-center justify-between text-[0.7rem] font-mono text-[var(--text-tertiary)] pt-1 border-t border-[var(--border-light)]">
                <span>Promocode Discount Matrix</span>
                <span className="text-[var(--text-primary)] font-semibold">Deterministic RBAC</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <article
      id={project.id}
      className="bg-white border border-[var(--border-medium)] rounded-md shadow-[var(--shadow-card)] h-full flex flex-col justify-between overflow-hidden relative"
    >
      {/* ================= EDITORIAL TOP STRIP ================= */}
      <div className="flex items-center justify-between px-5 sm:px-8 py-3.5 sm:py-4 border-b border-[var(--border-light)] bg-[var(--bg-subtle)] shrink-0 gap-3">
        <div className="flex items-center gap-3.5">
          <span
            className="font-display text-2xl sm:text-3xl font-bold leading-none"
            style={{ color: project.accentColor || 'var(--accent-vermilion)' }}
          >
            {project.number}
          </span>
          <span className="w-px h-4 bg-[var(--border-strong)] inline-block" />
          <span className="mono-label text-[var(--text-primary)] font-semibold text-xs tracking-wider">
            {project.category.toUpperCase()}
          </span>
        </div>

        {/* Live link if available */}
        {project.links.length > 0 && (
          <div className="flex items-center gap-2">
            {project.links.slice(0, 1).map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-xs py-1 px-3 gap-1.5 rounded"
                title={`Visit ${project.title}`}
              >
                <span className="hidden sm:inline">{link.label}</span>
                <span className="sm:hidden">Live</span>
                <ExternalLink size={12} />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* ================= MAIN HIGHLIGHTED STAGE (NO SCROLL REQUIRED) ================= */}
      <div className="p-5 sm:p-7 md:p-8 flex-1 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-8 items-center min-h-0">
        
        {/* Left Column: Short, High-Impact Content */}
        <div className="flex flex-col justify-center min-h-0">
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2.5 tracking-tight font-display">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-4">
            {project.shortDescription || project.description}
          </p>

          {/* Outcome Metric Callout */}
          {project.resumeOutcome && (
            <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded bg-[var(--bg-subtle)] border border-[var(--border-light)] mb-4">
              <span
                className="font-display text-xl sm:text-2xl font-bold leading-none shrink-0"
                style={{ color: project.accentColor || 'var(--accent-vermilion)' }}
              >
                {project.resumeOutcome.metric}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] leading-tight">
                {project.resumeOutcome.label}
              </span>
            </div>
          )}

          {/* Key Bullet Highlights (Max 3 concise points) */}
          <ul className="space-y-1.5 mb-4">
            {(project.highlights || project.contributions.slice(0, 3)).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-snug">
                <span
                  className="mt-0.5 flex items-center justify-center w-3.5 h-3.5 rounded-full bg-white border border-[var(--border-medium)] shrink-0"
                  style={{ color: project.accentColor || 'var(--accent-vermilion)' }}
                >
                  <Check size={9} />
                </span>
                <span className="line-clamp-2">{item}</span>
              </li>
            ))}
          </ul>

          {/* Primary Technologies */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span key={tech} className="mono-tag text-[0.68rem] py-0.5 px-2">
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="mono-label text-[0.65rem] text-[var(--text-tertiary)] self-center ml-1">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Right Column: Visual Preview Graphic Teaser */}
        <div className="hidden lg:block h-full min-h-[220px]">
          {renderVisualTeaser()}
        </div>
      </div>

      {/* ================= BOTTOM ACTION FOOTER ================= */}
      <div className="px-5 sm:px-8 py-3 sm:py-3.5 border-t border-[var(--border-light)] bg-white flex items-center justify-between shrink-0 flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <span className="mono-label text-xs text-[var(--text-tertiary)]">
            ARCHITECTURAL CASE STUDY:
          </span>
          <span className="text-xs font-semibold text-[var(--text-primary)] hidden sm:inline">
            {project.roleTitle || 'Full Stack Engineer'}
          </span>
        </div>

        {/* PROMINENT FULL DETAILS ACTION BUTTON */}
        <Link
          href={`/projects/${project.id}`}
          className="btn btn-primary text-xs sm:text-sm py-2 px-4 rounded gap-2 group/btn"
        >
          <span>Full Details & Architecture</span>
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
