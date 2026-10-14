import React from 'react';

interface SectionHeaderProps {
  index: string;
  tag: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'split';
  extraContent?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  tag,
  title,
  subtitle,
  alignment = 'split',
  extraContent
}) => {
  return (
    <div className="mb-12 md:mb-16 border-b border-[var(--border-medium)] pb-8">
      {/* Top Tag & SYS.SPEC */}
      <div className="flex items-center justify-between mb-3">
        <span className="mono-label">
          <span className="text-[var(--accent-vermilion)]">[{index}]</span> // {tag}
        </span>
        <span className="mono-label opacity-75">
          SYS.SPEC // 2026
        </span>
      </div>

      {/* Main Heading & Subtitle Grid */}
      <div
        className={`grid gap-6 md:gap-8 items-end ${
          alignment === 'split' ? 'grid-cols-1 md:grid-cols-[minmax(300px,1.4fr)_minmax(240px,1fr)]' : 'grid-cols-1'
        }`}
      >
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-[-0.02em] font-medium text-[var(--text-primary)]">
            {title}
          </h2>
        </div>

        {(subtitle || extraContent) && (
          <div className="pb-1">
            {subtitle && (
              <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
                {subtitle}
              </p>
            )}
            {extraContent && <div className="mt-3">{extraContent}</div>}
          </div>
        )}
      </div>
    </div>
  );
};
