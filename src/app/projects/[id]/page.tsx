import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { ProjectDetailInteractive } from '@/components/projects/ProjectDetailInteractive';
import { projectsData } from '@/data/projects';
import {
  LuArrowLeft as ArrowLeft,
  LuArrowRight as ArrowRight,
  LuExternalLink as ExternalLink,
  LuCheck as Check,
  LuLayers as Layers,
  LuCpu as Cpu,
  LuShieldAlert as ShieldAlert,
  LuSparkles as Sparkles,
  LuArrowUpRight as ArrowUpRight,
} from 'react-icons/lu';

interface PageProps {
  params: Promise<{ id: string }>;
}


export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} — Case Study & Architecture | Nitin Parmar`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const projectIndex = projectsData.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null;

  return (
    <div className="portfolio-app min-h-screen flex flex-col bg-[var(--bg-primary)]">
      {/* Top Header */}
      <Header activeSection="projects" />

      {/* Main Container */}
      <main id="main-content" className="flex-1 pt-28 sm:pt-32 pb-20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-[var(--border-light)] flex-wrap gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-tertiary)]">
              <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/projects" className="hover:text-[var(--text-primary)] transition-colors">
                Projects
              </Link>
              <span>/</span>
              <span className="text-[var(--text-primary)] font-semibold">{project.title}</span>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-vermilion)] hover:underline font-semibold"
            >
              <ArrowLeft size={12} />
              <span>Back to All Projects</span>
            </Link>
          </div>

          {/* ================= HERO CASE STUDY HEADER ================= */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span
                className="font-display text-2xl sm:text-3xl font-bold leading-none"
                style={{ color: project.accentColor || 'var(--accent-vermilion)' }}
              >
                {project.number}
              </span>
              <span className="w-px h-5 bg-[var(--border-strong)] inline-block" />
              <span className="mono-label text-xs tracking-wider text-[var(--text-primary)] font-semibold">
                {project.category.toUpperCase()}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-[var(--text-primary)] mb-4 tracking-tight leading-[1.1]">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mb-6 font-sans">
              {project.description}
            </p>

            {/* Live External Links & Github */}
            {project.links.length > 0 && (
              <div className="flex items-center gap-3 flex-wrap mb-8">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      link.isPrimary
                        ? 'btn btn-primary text-xs sm:text-sm py-2 px-4 rounded gap-2'
                        : 'btn btn-secondary text-xs sm:text-sm py-2 px-4 rounded gap-2'
                    }
                  >
                    <span>{link.label}</span>
                    <ExternalLink size={13} />
                  </a>
                ))}
              </div>
            )}

            {/* Meta Grid Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-lg bg-white border border-[var(--border-medium)] shadow-xs">
              <div>
                <span className="mono-label text-[0.68rem] text-[var(--text-tertiary)] block mb-1">
                  ROLE & CAPACITY
                </span>
                <span className="text-sm font-bold text-[var(--text-primary)] block">
                  {project.roleTitle || 'Full Stack Engineer'}
                </span>
              </div>

              <div>
                <span className="mono-label text-[0.68rem] text-[var(--text-tertiary)] block mb-1">
                  TIMELINE & STATUS
                </span>
                <span className="text-sm font-bold text-[var(--text-primary)] block">
                  {project.timeline || 'Production Platform'}
                </span>
              </div>

              <div>
                <span className="mono-label text-[0.68rem] text-[var(--text-tertiary)] block mb-1">
                  CORE SPECIALIZATION
                </span>
                <span className="text-sm font-bold text-[var(--text-primary)] block">
                  Systems & Scalability
                </span>
              </div>

              <div>
                <span className="mono-label text-[0.68rem] text-[var(--text-tertiary)] block mb-1">
                  MEASURED IMPACT
                </span>
                <span
                  className="text-sm font-bold block"
                  style={{ color: project.accentColor || 'var(--accent-vermilion)' }}
                >
                  {project.resumeOutcome?.metric || 'Production Grade'}
                </span>
              </div>
            </div>
          </div>

          {/* ================= INTERACTIVE ARCHITECTURE SIMULATOR ================= */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="mono-label text-xs text-[var(--accent-vermilion)]">
                SPECIFICATION // 01
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6">
              System Architecture & Interactive Blueprint
            </h2>

            <ProjectDetailInteractive project={project} />
          </div>

          {/* ================= KEY TECHNICAL ACHIEVEMENTS & CONTRIBUTIONS ================= */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-3">
              <span className="mono-label text-xs text-[var(--accent-vermilion)]">
                ENGINEERING // 02
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6">
              Technical Contributions & Engineering Highlights
            </h2>

            <div className="space-y-3.5">
              {project.contributions.map((contribution, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-lg bg-white border border-[var(--border-medium)] flex items-start gap-4 shadow-xs"
                >
                  <span
                    className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-strong)] shrink-0"
                    style={{ color: project.accentColor || 'var(--accent-vermilion)' }}
                  >
                    <Check size={12} />
                  </span>
                  <div>
                    <span className="font-sans text-sm sm:text-base text-[var(--text-primary)] leading-relaxed block">
                      {contribution}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= ARCHITECTURAL CHALLENGES & SOLUTIONS ================= */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="mb-14">
              <div className="flex items-center gap-2 mb-3">
                <span className="mono-label text-xs text-[var(--accent-vermilion)]">
                  PROBLEM SOLVING // 03
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6">
                Architectural Challenges & Engineered Solutions
              </h2>

              <div className="space-y-4">
                {project.challenges.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-lg bg-white border border-[var(--border-medium)] shadow-xs"
                  >
                    <div className="mb-4">
                      <span className="mono-label text-xs text-[var(--accent-vermilion)] font-bold block mb-1">
                        CHALLENGE {idx + 1}:
                      </span>
                      <p className="text-sm sm:text-base text-[var(--text-primary)] font-medium leading-relaxed">
                        {item.challenge}
                      </p>
                    </div>

                    <div className="p-4 rounded-md bg-[var(--bg-subtle)] border-l-4 border-l-[var(--accent-green)] border border-[var(--border-light)]">
                      <span className="mono-label text-xs text-[var(--accent-green)] font-bold block mb-1">
                        ENGINEERED SOLUTION:
                      </span>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= KEY APPLICATION FEATURES ================= */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="mb-14">
              <div className="flex items-center gap-2 mb-3">
                <span className="mono-label text-xs text-[var(--accent-vermilion)]">
                  CAPABILITIES // 04
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6">
                Key System Capabilities
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-lg bg-white border border-[var(--border-medium)] shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <span className="mono-label text-[0.68rem] text-[var(--text-tertiary)] block mb-1">
                        CAPABILITY 0{idx + 1}
                      </span>
                      <h4 className="font-display text-lg font-bold text-[var(--text-primary)] mb-2">
                        {feat.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= FULL TECHNOLOGY STACK ================= */}
          <div className="mb-14 p-6 sm:p-8 rounded-lg bg-white border border-[var(--border-medium)] shadow-xs">
            <span className="mono-label text-xs text-[var(--accent-vermilion)] block mb-2">
              STACK TAXONOMY
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">
              Technologies & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="mono-tag text-xs py-1.5 px-3">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ================= CASE STUDY PAGINATION ================= */}
          <div className="pt-8 border-t border-[var(--border-medium)] flex items-center justify-between flex-wrap gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.id}`}
                className="group flex flex-col text-left no-underline p-4 rounded-md border border-[var(--border-light)] bg-white hover:border-[var(--border-strong)] transition-all min-w-[220px]"
              >
                <span className="mono-label text-xs text-[var(--text-tertiary)] flex items-center gap-1 mb-1">
                  <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                  PREVIOUS CASE STUDY
                </span>
                <span className="font-display text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-vermilion)] transition-colors">
                  {prevProject.number} {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/projects"
              className="btn btn-secondary text-xs py-2 px-4 rounded"
            >
              <span>All Projects Catalog</span>
            </Link>

            {nextProject ? (
              <Link
                href={`/projects/${nextProject.id}`}
                className="group flex flex-col text-right no-underline p-4 rounded-md border border-[var(--border-light)] bg-white hover:border-[var(--border-strong)] transition-all min-w-[220px]"
              >
                <span className="mono-label text-xs text-[var(--text-tertiary)] flex items-center justify-end gap-1 mb-1">
                  NEXT CASE STUDY
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="font-display text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-vermilion)] transition-colors">
                  {nextProject.number} {nextProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
