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
    <div
      style={{
        marginBottom: 'var(--space-3xl)',
        borderBottom: '1px solid var(--border-medium)',
        paddingBottom: 'var(--space-xl)'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 'var(--space-sm)'
        }}
      >
        <span className="mono-label">
          <span style={{ color: 'var(--accent-vermilion)' }}>[{index}]</span> // {tag}
        </span>
        <span className="mono-label" style={{ opacity: 0.75 }}>
          SYS.SPEC // 2026
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: alignment === 'split' ? 'minmax(300px, 1.4fr) minmax(240px, 1fr)' : '1fr',
          gap: 'var(--space-xl)',
          alignItems: 'flex-end'
        }}
        className="section-header-grid"
      >
        <div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.25rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontWeight: 500,
              color: 'var(--text-primary)'
            }}
          >
            {title}
          </h2>
        </div>

        {(subtitle || extraContent) && (
          <div style={{ paddingBottom: '0.25rem' }}>
            {subtitle && (
              <p
                style={{
                  fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                  lineHeight: 1.65,
                  color: 'var(--text-secondary)'
                }}
              >
                {subtitle}
              </p>
            )}
            {extraContent && <div style={{ marginTop: 'var(--space-sm)' }}>{extraContent}</div>}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .section-header-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-md) !important;
          }
        }
      `}</style>
    </div>
  );
};
