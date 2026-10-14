import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { experienceData } from '@/data/experience';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="section-spacing" aria-label="Professional Experience">
      <div className="container">
        <SectionHeader
          index="03"
          tag="CAREER TIMELINE"
          title="Professional Experience"
          subtitle="A track record of engineering full stack web applications, backend APIs, and distributed architectures across technology organizations."
        />

        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline Rows */}
          <div className="flex flex-col gap-6 relative">
            {experienceData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`bg-white rounded-md p-6 sm:p-8 relative transition-all duration-200 hover:-translate-y-0.5 ${
                    item.isCurrent
                      ? 'border border-[var(--accent-vermilion)] shadow-[var(--shadow-card)]'
                      : 'border border-[var(--border-medium)] shadow-[var(--shadow-subtle)] hover:shadow-md'
                  }`}
                >
                  {/* Top Row: Period & Role Status */}
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <span className="mono-label text-xs text-[var(--text-tertiary)]">
                        [{String(index + 1).padStart(2, '0')}]
                      </span>
                      <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-[var(--text-secondary)]">
                        <Calendar size={13} className="text-[var(--accent-vermilion)]" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {item.isCurrent ? (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[var(--accent-vermilion)] bg-red-500/10 border border-red-500/25 px-2.5 py-1 rounded">
                        <Sparkles size={12} />
                        CURRENT POSITION
                      </span>
                    ) : (
                      <span className="mono-label text-xs">
                        PREVIOUS ENGAGEMENT
                      </span>
                    )}
                  </div>

                  {/* Main Grid: Company & Role */}
                  <div className="grid grid-cols-1 md:grid-cols-[minmax(250px,1.2fr)_minmax(200px,1fr)] gap-4 md:gap-6 items-baseline">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-medium text-[var(--text-primary)] mb-1.5">
                        {item.company}
                      </h3>
                      <div
                        className={`flex items-center gap-2 text-base font-semibold font-sans ${
                          item.isCurrent ? 'text-[var(--accent-vermilion)]' : 'text-[var(--accent-blue)]'
                        }`}
                      >
                        <Briefcase size={15} />
                        <span>{item.role}</span>
                      </div>
                    </div>

                    <div className="text-left">
                      <div className="flex items-center gap-1.5 font-mono text-xs text-[var(--text-tertiary)] mb-2">
                        <MapPin size={12} />
                        <span>{item.location || 'Ahmedabad, India'}</span>
                      </div>

                      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                        {item.verifiedDetailsNote}
                      </p>
                    </div>
                  </div>

                  {/* Verified Details Space note per guidelines */}
                  <div className="mt-5 pt-3.5 border-t border-dashed border-[var(--border-light)] flex items-center justify-between font-mono text-xs text-[var(--text-tertiary)]">
                    <span>VERIFIED RECORD // FORMAL CANDIDACY</span>
                    <span>ENGINEERING ROLES</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
