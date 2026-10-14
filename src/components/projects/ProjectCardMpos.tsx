'use client';

import React, { useState } from 'react';
import type { Project } from '@/types';
import { Check, ReceiptText, FileCheck, Tag, ShoppingCart, SlidersHorizontal } from 'lucide-react';

interface ProjectCardMposProps {
  project: Project;
}

export const ProjectCardMpos: React.FC<ProjectCardMposProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<'grn' | 'products'>('grn');

  return (
    <article
      id={project.id}
      className="bg-white border border-[var(--border-medium)] rounded-md overflow-hidden shadow-[var(--shadow-card)] mb-12 lg:mb-16 relative"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between p-5 sm:px-8 border-b border-[var(--border-light)] bg-[var(--bg-subtle)] flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl sm:text-3xl font-bold text-[var(--accent-amber)] leading-none">
            {project.number}
          </span>
          <span className="w-px h-4.5 bg-[var(--border-strong)] inline-block" />
          <span className="mono-label text-[var(--text-primary)] font-semibold text-xs tracking-wider">
            {project.category.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--accent-amber)] bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/25">
            <ReceiptText size={12} />
            GRN WORKFLOW AUTOMATION
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,1.15fr)_minmax(320px,1fr)]">
        {/* Left Column: Context, Role, and Technical Details */}
        <div className="p-6 sm:p-10 lg:border-r border-[var(--border-light)] flex flex-col justify-between">
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
                  CORE FOCUS
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  GRN Generation & Inventory Logistics
                </span>
              </div>
              <div>
                <span className="mono-label text-xs block mb-1">
                  ADMIN CAPACITY
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  20+ Active Admin Consoles
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
                    <span className="mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-medium)] text-[var(--accent-amber)] shrink-0">
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
              <div className="p-3.5 sm:p-4 bg-[var(--bg-subtle)] rounded border border-[var(--border-medium)] border-l-4 border-l-[var(--accent-amber)]">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-display text-xl sm:text-2xl font-bold text-[var(--accent-amber)]">
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

        {/* Right Column: Goods Received Note (GRN) & Catalog Workspace Mockup */}
        <div className="bg-[#FAF9F5] p-6 sm:p-10 flex flex-col justify-center border-t lg:border-t-0 border-[var(--border-light)]">
          <div className="bg-white border border-[var(--border-medium)] rounded-md p-5 sm:p-6 shadow-[var(--shadow-subtle)]">
            {/* Top Interactive Tabs */}
            <div className="flex gap-2 border-b border-[var(--border-light)] pb-3 mb-4">
              <button
                onClick={() => setActiveTab('grn')}
                className={`px-3 py-1.5 rounded text-xs font-mono font-medium flex items-center gap-1.5 cursor-pointer transition-colors ${
                  activeTab === 'grn'
                    ? 'bg-[var(--bg-subtle)] text-[var(--text-primary)] font-semibold border border-[var(--border-medium)]'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <FileCheck size={13} className={activeTab === 'grn' ? 'text-[var(--accent-amber)]' : 'inherit'} />
                GRN AUDIT FLOW
              </button>

              <button
                onClick={() => setActiveTab('products')}
                className={`px-3 py-1.5 rounded text-xs font-mono font-medium flex items-center gap-1.5 cursor-pointer transition-colors ${
                  activeTab === 'products'
                    ? 'bg-[var(--bg-subtle)] text-[var(--text-primary)] font-semibold border border-[var(--border-medium)]'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Tag size={13} className={activeTab === 'products' ? 'text-[var(--accent-amber)]' : 'inherit'} />
                PROMOTION MATRIX
              </button>
            </div>

            {activeTab === 'grn' ? (
              <div>
                <div className="bg-[var(--bg-subtle)] p-4 rounded border border-[var(--border-light)] mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="mono-label text-xs text-[var(--text-primary)]">
                      DOC ID: GRN-2026-0894
                    </span>
                    <span className="font-mono text-xs text-[var(--accent-green)] font-semibold">
                      STATUS: VERIFIED
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                    <div>
                      <span className="mono-label text-[0.62rem] block">PO REF</span>
                      <div className="font-semibold text-[var(--text-primary)]">PO-99412</div>
                    </div>
                    <div>
                      <span className="mono-label text-[0.62rem] block">SUPPLIER</span>
                      <div className="font-semibold text-[var(--text-primary)]">Apex Retail Dist.</div>
                    </div>
                    <div>
                      <span className="mono-label text-[0.62rem] block">ITEMS</span>
                      <div className="font-semibold text-[var(--text-primary)]">142 Units Checked</div>
                    </div>
                  </div>

                  {/* Item Rows */}
                  <div className="bg-white border border-[var(--border-light)] rounded p-2.5 font-mono text-xs space-y-1.5">
                    <div className="flex justify-between pb-1.5 border-b border-[var(--border-light)]">
                      <span>SKU #4092 Barcode Scanner</span>
                      <span className="text-[var(--accent-green)] font-medium">+20 Rcvd</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SKU #8812 Thermal Paper 80mm</span>
                      <span className="text-[var(--accent-green)] font-medium">+100 Rcvd</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-tertiary)]">
                  <span>Inventory auto-synced across outlets</span>
                  <span className="text-[var(--accent-amber)] font-medium">Discrepancy: 0</span>
                </div>
              </div>
            ) : (
              <div>
                <div className="bg-[var(--bg-subtle)] p-4 rounded border border-[var(--border-light)] mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="mono-label text-xs text-[var(--text-primary)]">
                      ACTIVE PROMOTION ENGINE
                    </span>
                    <SlidersHorizontal size={13} className="text-[var(--accent-amber)]" />
                  </div>

                  <div className="flex flex-col gap-2 text-xs font-mono">
                    <div className="bg-white p-2.5 rounded border border-[var(--border-light)]">
                      <strong className="text-[var(--text-primary)]">Seasonal Discount Tier 1</strong>: 15% off cart value &gt; $100
                    </div>
                    <div className="bg-white p-2.5 rounded border border-[var(--border-light)]">
                      <strong className="text-[var(--text-primary)]">Member Flash Special</strong>: Instant cashback via GRN audit link
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
                  <ShoppingCart size={13} className="text-[var(--accent-amber)]" />
                  <span>Configured by POS Administrator Group</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
