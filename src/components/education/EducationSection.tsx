import React from 'react';
import { educationData } from '@/data/education';
import { LuGraduationCap as GraduationCap, LuAward as Award, LuCalendar as Calendar } from 'react-icons/lu';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section-spacing" aria-label="Academic Background">
      <div className="container">
        {/* Compact Editorial Header */}
        <div className="flex items-center justify-between border-b border-[var(--border-medium)] pb-3 mb-8">
          <span className="mono-label">
            <span className="text-[var(--accent-vermilion)]">[05]</span> // ACADEMIC FOUNDATION
          </span>
          <span className="mono-label">ACCREDITED DEGREE</span>
        </div>

        {/* Compact Balanced Card */}
        <div className="bg-white border border-[var(--border-medium)] rounded-md p-6 sm:p-8 shadow-[var(--shadow-subtle)] grid grid-cols-1 md:grid-cols-[minmax(280px,1.4fr)_minmax(200px,0.8fr)] gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--accent-blue)] bg-blue-600/10 px-2.5 py-1 rounded border border-blue-600/20 mb-3">
              <GraduationCap size={13} />
              <span>UNDERGRADUATE DEGREE</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-medium text-[var(--text-primary)] mb-2">
              {educationData.degree}
            </h3>

            <div className="text-base font-semibold text-[var(--text-secondary)] mb-3">
              {educationData.institution}
            </div>

            <p className="text-sm leading-relaxed text-[var(--text-tertiary)]">
              {educationData.credentialNote}
            </p>
          </div>

          {/* Academic Metric Box */}
          <div className="bg-[var(--bg-subtle)] border border-[var(--border-medium)] rounded-md p-5 sm:p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="mono-label text-xs">
                CUMULATIVE GPA
              </span>
              <Award size={16} className="text-[var(--accent-vermilion)]" />
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-4xl sm:text-5xl font-bold text-[var(--accent-vermilion)] leading-none">
                {educationData.cgpa}
              </span>
              <span className="font-mono text-base text-[var(--text-tertiary)]">
                / {educationData.scale}
              </span>
            </div>

            <div className="flex items-center gap-2 border-t border-dashed border-[var(--border-medium)] pt-3 font-mono text-xs text-[var(--text-secondary)]">
              <Calendar size={13} className="text-[var(--accent-blue)]" />
              <span>{educationData.period}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
