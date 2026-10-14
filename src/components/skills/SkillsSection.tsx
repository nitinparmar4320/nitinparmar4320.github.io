'use client';

import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { skillsData } from '@/data/skills';
import { Code2, Server, Database, Network, Radio, Cloud } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'apis', label: 'APIs & CMS' },
    { id: 'realtime', label: 'Real-time' },
    { id: 'devops', label: 'Cloud & Tools' }
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

  return (
    <section id="skills" className="section-spacing" aria-label="Technical Skills">
      <div className="container">
        <SectionHeader
          index="04"
          tag="TECHNICAL TAXONOMY"
          title="Tools I use to turn ideas into working systems."
          subtitle="A structured taxonomy of verified languages, libraries, databases, and architectural patterns applied in production web environments."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 flex-wrap mb-8 pb-4 border-b border-[var(--border-light)]">
          {filterOptions.map((opt) => {
            const isActive = selectedFilter === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                className={`px-3.5 py-1.5 rounded text-xs sm:text-sm font-sans font-medium cursor-pointer transition-all ${
                  isActive
                    ? 'bg-[var(--text-primary)] text-white border border-[var(--text-primary)] font-semibold shadow-xs'
                    : 'bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-medium)] hover:text-[var(--text-primary)]'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-[var(--border-medium)] rounded-md p-6 sm:p-7 shadow-[var(--shadow-subtle)] flex flex-col justify-between hover:shadow-md hover:border-[var(--border-strong)] transition-all duration-200"
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
                  <span className="mono-label text-[0.68rem] text-[var(--text-tertiary)]">
                    {category.badge}
                  </span>
                </div>

                {/* Capability Summary */}
                <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)] mb-5">
                  {category.summary}
                </p>
              </div>

              {/* Verified Technology Badges */}
              <div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="mono-tag text-xs px-2.5 py-1 bg-[var(--bg-subtle)] border-[var(--border-medium)] text-[var(--text-primary)] font-medium inline-flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--accent-vermilion)]" />
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-5 pt-3 border-t border-dashed border-[var(--border-light)] flex items-center justify-between text-xs font-mono text-[var(--text-tertiary)]">
                  <span>{category.skills.length} VERIFIED STACK TOOLS</span>
                  <span>PRODUCTION READY</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
