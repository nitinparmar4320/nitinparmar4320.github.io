import React from 'react';
import { educationData } from '../../data/education';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="section-spacing" aria-label="Academic Background">
      <div className="container">
        {/* Compact Editorial Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-medium)',
            paddingBottom: '0.75rem',
            marginBottom: 'var(--space-xl)'
          }}
        >
          <span className="mono-label">
            <span style={{ color: 'var(--accent-vermilion)' }}>[05]</span> // ACADEMIC FOUNDATION
          </span>
          <span className="mono-label">ACCREDITED DEGREE</span>
        </div>

        {/* Compact Balanced Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-medium)',
            borderRadius: '6px',
            padding: '2rem 2.25rem',
            boxShadow: 'var(--shadow-subtle)',
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 1.4fr) minmax(200px, 0.8fr)',
            gap: '2rem',
            alignItems: 'center'
          }}
          className="education-grid"
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent-blue)',
                backgroundColor: 'rgba(82, 103, 216, 0.08)',
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                border: '1px solid rgba(82, 103, 216, 0.2)',
                marginBottom: '0.75rem'
              }}
            >
              <GraduationCap size={13} />
              <span>UNDERGRADUATE DEGREE</span>
            </div>

            <h3
              style={{
                fontSize: 'clamp(1.25rem, 1.7vw, 1.6rem)',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem'
              }}
            >
              {educationData.degree}
            </h3>

            <div
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                fontWeight: 600,
                marginBottom: '0.75rem'
              }}
            >
              {educationData.institution}
            </div>

            <p style={{ fontSize: '0.86rem', lineHeight: 1.55, color: 'var(--text-tertiary)' }}>
              {educationData.credentialNote}
            </p>
          </div>

          {/* Academic Metric Box */}
          <div
            style={{
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border-medium)',
              borderRadius: '6px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="mono-label" style={{ fontSize: '0.7rem' }}>
                CUMULATIVE GPA
              </span>
              <Award size={16} color="var(--accent-vermilion)" />
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--accent-vermilion)',
                  lineHeight: 1
                }}
              >
                {educationData.cgpa}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  color: 'var(--text-tertiary)'
                }}
              >
                / {educationData.scale}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderTop: '1px dashed var(--border-medium)',
                paddingTop: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)'
              }}
            >
              <Calendar size={13} color="var(--accent-blue)" />
              <span>{educationData.period}</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .education-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};
