'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { ProjectListItem } from '@/components/projects/ProjectListItem';
import { projectsData } from '@/data/projects';
import {
  LuArrowLeft as ArrowLeft,
  LuLayers as Layers,
  LuFilter as Filter,
  LuArrowUpRight as ArrowUpRight,
} from 'react-icons/lu';

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects (4)' },
    { id: 'wide-commerce', label: 'Microservices & Commerce' },
    { id: 'split-cms', label: 'Next.js & Headless CMS' },
    { id: 'sensor-telemetry', label: 'IoT & Telemetry' },
    { id: 'admin-workflows', label: 'Retail & POS' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.layoutType === selectedFilter);

  return (
    <div className="portfolio-app min-h-screen flex flex-col bg-transparent">
      {/* Top Header */}
      <Header activeSection="projects" />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 pt-28 sm:pt-32 pb-20">
        <div className="container">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-tertiary)] mb-6">
            <Link href="/" className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1">
              <ArrowLeft size={12} />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-[var(--accent-vermilion)] font-semibold">Projects Catalog</span>
          </div>

          {/* Page Hero Header */}
          <div className="pb-8 mb-8 border-b border-[var(--border-medium)]">
            <div className="flex items-center gap-3 mb-3">
              <span className="mono-label text-xs tracking-wider text-[var(--accent-vermilion)]">
                INDEX 01 // DIRECTORY
              </span>
              <span className="mono-tag text-xs bg-[var(--bg-subtle)]">
                4 PRODUCTION CASE STUDIES
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[var(--text-primary)] mb-4 tracking-tight">
              Selected Works & Case Studies
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl mb-6">
              A comprehensive technical catalog of production platforms, distributed microservices, headless content pipelines, and real-time operational applications engineered by Nitin Parmar.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 px-5 rounded-lg bg-white border border-[var(--border-medium)] shadow-xs">
              <div>
                <span className="font-display text-2xl font-bold text-[var(--text-primary)] block">4</span>
                <span className="mono-label text-[0.68rem] text-[var(--text-tertiary)]">Case Studies</span>
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-[var(--accent-vermilion)] block">50k+</span>
                <span className="mono-label text-[0.68rem] text-[var(--text-tertiary)]">Users Supported</span>
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-[var(--accent-blue)] block">40%</span>
                <span className="mono-label text-[0.68rem] text-[var(--text-tertiary)]">SSR Perf Gain</span>
              </div>
              <div>
                <span className="font-display text-2xl font-bold text-[var(--accent-green)] block">100%</span>
                <span className="mono-label text-[0.68rem] text-[var(--text-tertiary)]">Full Stack Coverage</span>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center justify-between pb-6 flex-wrap gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="mono-label text-xs text-[var(--text-tertiary)] mr-1 flex items-center gap-1">
                <Filter size={12} />
                FILTER:
              </span>
              {filterOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedFilter(opt.id)}
                  className={`text-xs px-3 py-1.5 rounded font-mono transition-all cursor-pointer ${
                    selectedFilter === opt.id
                      ? 'bg-[var(--text-primary)] text-white font-semibold shadow-xs'
                      : 'bg-white text-[var(--text-secondary)] border border-[var(--border-light)] hover:border-[var(--border-strong)]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <span className="font-mono text-xs text-[var(--text-tertiary)]">
              Showing {filteredProjects.length} of {projectsData.length} projects
            </span>
          </div>

          {/* The Project List */}
          <div className="space-y-8">
            {filteredProjects.map((project) => (
              <ProjectListItem key={project.id} project={project} />
            ))}
          </div>

          {/* Bottom Collaboration CTA */}
          <div className="mt-16 p-8 sm:p-12 rounded-lg bg-white border border-[var(--border-medium)] shadow-[var(--shadow-card)] text-center max-w-2xl mx-auto">
            <span className="mono-label text-[var(--accent-vermilion)] mb-2 block">
              COLLABORATION & ENGINEERING
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
              Have a project or system to build?
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
              Available for full stack engineering roles, modern React/Next.js architectures, and scalable API backend systems.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/#contact" className="btn btn-primary text-sm py-2.5 px-5 rounded">
                <span>Start a Conversation</span>
                <ArrowUpRight size={14} />
              </Link>
              <Link href="/" className="btn btn-secondary text-sm py-2.5 px-5 rounded">
                <span>Back to Home</span>
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
