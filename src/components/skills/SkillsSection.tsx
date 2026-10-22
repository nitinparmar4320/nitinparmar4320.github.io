'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from '../common/SectionHeader';
import { skillsData } from '@/data/skills';
import type { SkillCategory } from '@/types';
import {
  LuCodeXml as Code2,
  LuServer as Server,
  LuDatabase as Database,
  LuNetwork as Network,
  LuRadio as Radio,
  LuCloud as Cloud,
  LuBoxes,
  LuPlug,
  LuSparkles as Sparkles,
} from 'react-icons/lu';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiRedux,
  SiFormik,
  SiNodedotjs,
  SiExpress,
  SiSequelize,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGraphql,
  SiWordpress,
  SiStrapi,
  SiSocketdotio,
  SiFirebase,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

interface SkillMeta {
  name: string;
  icon: React.ElementType;
  color: string;
}

const skillMetaMap: Record<string, SkillMeta> = {
  // Frontend Architecture
  'React.js': { name: 'React.js', icon: SiReact, color: '#087ea4' },
  'Next.js': { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  'JavaScript (ES6+)': { name: 'JavaScript (ES6+)', icon: SiJavascript, color: '#d97706' },
  'TypeScript': { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  'Tailwind CSS': { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  'Bootstrap': { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
  'Material UI': { name: 'Material UI', icon: SiMui, color: '#007FFF' },
  'Redux': { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  'Formik': { name: 'Formik', icon: SiFormik, color: '#0052CC' },

  // Backend & Microservices
  'Node.js': { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  'Express.js': { name: 'Express.js', icon: SiExpress, color: '#20211F' },
  'Microservices': { name: 'Microservices', icon: LuBoxes, color: '#5267D8' },
  'Sequelize': { name: 'Sequelize', icon: SiSequelize, color: '#52B0E7' },
  'Mongoose': { name: 'Mongoose', icon: SiMongodb, color: '#47A248' },

  // Database Management
  'MySQL': { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  'PostgreSQL': { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  'MongoDB': { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },

  // APIs & Headless CMS
  'REST APIs': { name: 'REST APIs', icon: SiPostman, color: '#FF6C37' },
  'GraphQL': { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
  'WordPress': { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
  'Headless CMS': { name: 'Headless CMS', icon: SiStrapi, color: '#4945FF' },
  'Third-party API Integrations': { name: 'API Integrations', icon: LuPlug, color: '#E5533D' },

  // Real-time & Telemetry
  'WebSocket': { name: 'WebSocket', icon: SiSocketdotio, color: '#010101' },
  'Firebase Notifications': { name: 'Firebase Push', icon: SiFirebase, color: '#FFA000' },

  // Cloud & Tooling
  'AWS (basic)': { name: 'AWS Cloud', icon: FaAws, color: '#FF9900' },
  'Docker': { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  'Git': { name: 'Git', icon: SiGit, color: '#F05032' },
  'GitHub': { name: 'GitHub', icon: SiGithub, color: '#181717' },
};

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const filterOptions = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'apis', label: 'APIs & CMS' },
    { id: 'realtime', label: 'Real-time' },
    { id: 'devops', label: 'Cloud & Tools' },
  ];

  const filteredCategories =
    selectedFilter === 'all'
      ? skillsData
      : skillsData.filter((cat) => cat.id === selectedFilter);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Code2 size={16} className="text-[var(--accent-vermilion)]" />;
      case 'backend':
        return <Server size={16} className="text-[var(--accent-blue)]" />;
      case 'databases':
        return <Database size={16} className="text-[var(--accent-amber)]" />;
      case 'apis':
        return <Network size={16} className="text-[var(--accent-vermilion)]" />;
      case 'realtime':
        return <Radio size={16} className="text-[var(--accent-green)]" />;
      case 'devops':
        return <Cloud size={16} className="text-[var(--accent-blue)]" />;
      default:
        return <Code2 size={16} />;
    }
  };

  const handleMouseEnter = (id: string) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setHoveredCardId(id);
  };

  const handleMouseLeave = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredCardId(null);
    }, 80);
  };

  // Check if a category has more skills than comfortably fits in a standard single box
  const cannotFitInSingleBox = (cat: SkillCategory) => {
    return cat.skills.length > 4 || cat.skills.some((s) => s.length > 20);
  };

  return (
    <section id="skills" className="section-spacing" aria-label="Technical Skills">
      <div className="container">
        <SectionHeader
          index="04"
          tag="TECHNICAL TAXONOMY"
          title="Tools I use to turn ideas into working systems."
          subtitle="A structured taxonomy of verified languages, libraries, databases, and architectural patterns applied in production web environments."
        />

        {/* Category Filter Tabs with Motion layoutId */}
        <div className="flex items-center gap-2 flex-wrap mb-8 pb-4 border-b border-[var(--border-light)]">
          {filterOptions.map((opt) => {
            const isActive = selectedFilter === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                className={`relative px-3.5 py-1.5 rounded text-xs sm:text-sm font-sans font-medium cursor-pointer transition-colors ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-[var(--text-primary)] rounded shadow-xs -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                {!isActive && (
                  <div className="absolute inset-0 bg-[var(--bg-subtle)] border border-[var(--border-medium)] rounded -z-10" />
                )}
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid with Dynamic Grid Expansion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
          {filteredCategories.map((category) => {
            const isHovered = hoveredCardId === category.id;
            const needsDoubleSpan =
              selectedFilter === 'all' && cannotFitInSingleBox(category);
            const isExpanded = isHovered && needsDoubleSpan;

            return (
              <div
                key={category.id}
                onMouseEnter={() => handleMouseEnter(category.id)}
                onMouseLeave={handleMouseLeave}
                className={`bg-white border rounded-md p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ease-out cursor-pointer relative ${
                  isExpanded
                    ? 'md:col-span-2 lg:col-span-2 border-[var(--accent-vermilion)] shadow-[var(--shadow-card)] ring-2 ring-[var(--accent-vermilion)]/15 z-10'
                    : isHovered
                    ? 'border-[var(--accent-vermilion)] shadow-[var(--shadow-card)] ring-2 ring-[var(--accent-vermilion)]/15 -translate-y-0.5 z-10'
                    : 'border-[var(--border-medium)] shadow-[var(--shadow-subtle)] hover:shadow-md'
                }`}
              >
                <div>
                  {/* Category Top Banner */}
                  <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(category.id)}
                      <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] font-sans">
                        {category.title}
                      </h3>
                    </div>
                    <span
                      className={`mono-label text-[0.68rem] transition-colors ${
                        isHovered
                          ? 'text-[var(--accent-vermilion)] font-semibold'
                          : 'text-[var(--text-tertiary)]'
                      }`}
                    >
                      {isExpanded ? 'EXTENDED STACK' : category.badge}
                    </span>
                  </div>

                  {/* Capability Summary */}
                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)] mb-5">
                    {category.summary}
                  </p>
                </div>

                {/* Tech Stack Area: Smoothly transitions into uniform icon tiles on hover */}
                <div>
                  <div className="relative min-h-[90px]">
                    {/* Hovered State: Tech Stack with Brand Icons & Equal Space */}
                    <div
                      className={`transition-all duration-300 ease-out ${
                        isHovered
                          ? 'opacity-100 scale-100 pointer-events-auto relative visible'
                          : 'opacity-0 scale-95 pointer-events-none absolute inset-x-0 top-0 invisible'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="mono-label text-[0.68rem] text-[var(--accent-vermilion)] font-semibold flex items-center gap-1.5">
                          <Sparkles size={11} />
                          INTERACTIVE TECH STACK
                        </span>
                        <span className="mono-label text-[0.65rem] text-[var(--text-tertiary)]">
                          {category.skills.length} VERIFIED TOOLS
                        </span>
                      </div>

                      <div
                        className={`grid gap-2 sm:gap-2.5 ${
                          isExpanded
                            ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-3'
                            : 'grid-cols-2'
                        }`}
                      >
                        {category.skills.map((skillName) => {
                          const meta = skillMetaMap[skillName] || {
                            name: skillName,
                            icon: Code2,
                            color: 'var(--accent-vermilion)',
                          };
                          const IconComp = meta.icon;

                          return (
                            <motion.div
                              key={skillName}
                              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300 } }}
                              className="flex items-center gap-2.5 px-3 py-2 rounded-md bg-[var(--bg-subtle)] border border-[var(--border-light)] hover:border-[var(--accent-vermilion)]/40 hover:bg-white transition-colors duration-150 h-11 min-w-0 shadow-2xs group/tile cursor-pointer"
                              title={skillName}
                            >
                              <span
                                className="w-6 h-6 rounded flex items-center justify-center shrink-0 bg-white border border-[var(--border-light)] group-hover/tile:scale-110 transition-transform shadow-2xs"
                                style={{ color: meta.color }}
                              >
                                <IconComp size={15} />
                              </span>
                              <span className="text-xs font-semibold text-[var(--text-primary)] font-sans truncate">
                                {meta.name}
                              </span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Default Unhovered State: Badges */}
                    <div
                      className={`transition-all duration-300 ease-out ${
                        !isHovered
                          ? 'opacity-100 scale-100 pointer-events-auto relative visible'
                          : 'opacity-0 scale-95 pointer-events-none absolute inset-x-0 top-0 invisible'
                      }`}
                    >
                      <div className="flex flex-wrap gap-1.5">
                        {category.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            whileHover={{ y: -3, transition: { type: 'spring', stiffness: 300 } }}
                            className="mono-tag text-xs px-2.5 py-1 bg-[var(--bg-subtle)] border-[var(--border-medium)] text-[var(--text-primary)] font-medium inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <span className="w-1 h-1 rounded-full bg-[var(--accent-vermilion)]" />
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Strip */}
                  <div className="mt-5 pt-3 border-t border-dashed border-[var(--border-light)] flex items-center justify-between text-xs font-mono text-[var(--text-tertiary)]">
                    <span>{category.skills.length} VERIFIED STACK TOOLS</span>
                    <span className={isHovered ? 'text-[var(--accent-vermilion)] font-semibold' : ''}>
                      {isHovered ? 'HOVER ACTIVE' : 'PRODUCTION READY'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
