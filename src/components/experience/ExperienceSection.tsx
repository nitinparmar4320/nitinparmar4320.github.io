import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { experienceData } from '../../data/experience';
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

        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {/* Experience Timeline Rows */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative'
            }}
          >
            {experienceData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: item.isCurrent ? '1px solid var(--accent-vermilion)' : '1px solid var(--border-medium)',
                    borderRadius: '6px',
                    padding: '2rem 2.25rem',
                    boxShadow: item.isCurrent ? 'var(--shadow-card)' : 'var(--shadow-subtle)',
                    position: 'relative',
                    transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
                  }}
                  className="experience-card"
                >
                  {/* Top Row: Period & Role Status */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                      flexWrap: 'wrap',
                      gap: '0.75rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span className="mono-label" style={{ fontSize: '0.7rem' }}>
                        [{String(index + 1).padStart(2, '0')}]
                      </span>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8rem',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        <Calendar size={13} color="var(--accent-vermilion)" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {item.isCurrent ? (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          fontWeight: 600,
                          color: 'var(--accent-vermilion)',
                          backgroundColor: 'rgba(229, 83, 61, 0.08)',
                          border: '1px solid rgba(229, 83, 61, 0.25)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px'
                        }}
                      >
                        <Sparkles size={12} />
                        CURRENT POSITION
                      </span>
                    ) : (
                      <span className="mono-label" style={{ fontSize: '0.7rem' }}>
                        PREVIOUS ENGAGEMENT
                      </span>
                    )}
                  </div>

                  {/* Main Grid: Company & Role */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(250px, 1.2fr) minmax(200px, 1fr)',
                      gap: '1.5rem',
                      alignItems: 'baseline'
                    }}
                    className="experience-details-grid"
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: 'clamp(1.35rem, 1.9vw, 1.75rem)',
                          color: 'var(--text-primary)',
                          marginBottom: '0.35rem'
                        }}
                      >
                        {item.company}
                      </h3>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '1rem',
                          fontWeight: 600,
                          color: item.isCurrent ? 'var(--accent-vermilion)' : 'var(--accent-blue)',
                          fontFamily: 'var(--font-sans)'
                        }}
                      >
                        <Briefcase size={15} />
                        <span>{item.role}</span>
                      </div>
                    </div>

                    <div style={{ textAlign: 'left' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: 'var(--text-tertiary)',
                          marginBottom: '0.5rem'
                        }}
                      >
                        <MapPin size={12} />
                        <span>{item.location || 'Ahmedabad, India'}</span>
                      </div>

                      <p
                        style={{
                          fontSize: '0.86rem',
                          lineHeight: 1.55,
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {item.verifiedDetailsNote}
                      </p>
                    </div>
                  </div>

                  {/* Verified Details Space note per guidelines */}
                  <div
                    style={{
                      marginTop: '1.25rem',
                      paddingTop: '0.85rem',
                      borderTop: '1px dashed var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--text-tertiary)'
                    }}
                  >
                    <span>VERIFIED RECORD // FORMAL CANDIDACY</span>
                    <span>ENGINEERING ROLES</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .experience-details-grid {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
};
