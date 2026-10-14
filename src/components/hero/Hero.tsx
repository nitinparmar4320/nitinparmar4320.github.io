import React from 'react';
import { SystemArchitectureVisualizer } from './SystemArchitectureVisualizer';
import { ArrowDown, ArrowUpRight, MapPin, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction & Architecture"
      style={{
        paddingTop: 'calc(var(--space-5xl) + 1rem)',
        paddingBottom: 'var(--space-4xl)',
        borderBottom: '1px solid var(--border-medium)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Editorial Subheader Meta Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-medium)',
            paddingBottom: '0.85rem',
            marginBottom: 'var(--space-2xl)',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <span className="mono-label">
              <span style={{ color: 'var(--accent-vermilion)' }}>[00 // IDENTITY]</span> NITIN PARMAR
            </span>
            <span
              style={{
                width: '1px',
                height: '12px',
                backgroundColor: 'var(--border-strong)',
                display: 'inline-block'
              }}
            />
            <span className="mono-label" style={{ color: 'var(--text-secondary)' }}>
              FULL STACK SOFTWARE DEVELOPER
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span className="mono-label">
              <MapPin size={12} color="var(--accent-vermilion)" />
              AHMEDABAD, GUJARAT, INDIA
            </span>
            <span className="mono-label" style={{ color: 'var(--accent-blue)' }}>
              23.0225° N, 72.5714° E
            </span>
          </div>
        </div>

        {/* Asymmetric Hero Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1.25fr) minmax(320px, 1fr)',
            gap: 'var(--space-3xl)',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Bold Editorial Typography & Storytelling */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.3rem 0.75rem',
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--border-medium)',
                borderRadius: '3px',
                marginBottom: '1.5rem'
              }}
            >
              <Terminal size={13} color="var(--accent-vermilion)" />
              <span className="mono-label" style={{ color: 'var(--text-primary)', fontSize: '0.72rem' }}>
                ENGINEERED WITH INTENT // PRODUCTION-PROVEN
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.4rem, 4.4vw, 4.2rem)',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                fontWeight: 500,
                color: 'var(--text-primary)',
                marginBottom: '1.75rem'
              }}
            >
              Building thoughtful digital experiences,{' '}
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'var(--accent-vermilion)'
                }}
              >
                from interface
              </span>{' '}
              to infrastructure.
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                maxWidth: '580px'
              }}
            >
              I'm a Full Stack Developer working with <strong style={{ color: 'var(--text-primary)' }}>React.js</strong>,{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Next.js</strong>,{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Node.js</strong>, and modern backend architectures to build reliable, scalable web applications.
            </p>

            {/* Experience & Credential Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                padding: '1.25rem 0',
                borderTop: '1px solid var(--border-medium)',
                borderBottom: '1px solid var(--border-medium)',
                marginBottom: '2rem'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.85rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    lineHeight: 1
                  }}
                >
                  3+ <span style={{ fontSize: '0.95rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-vermilion)' }}>YEARS</span>
                </div>
                <div className="mono-label" style={{ marginTop: '0.35rem', fontSize: '0.72rem' }}>
                  Software development experience
                </div>
              </div>

              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.85rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    lineHeight: 1
                  }}
                >
                  Full Stack
                </div>
                <div className="mono-label" style={{ marginTop: '0.35rem', fontSize: '0.72rem' }}>
                  Frontend • APIs • Databases
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <a href="#projects" className="btn btn-primary">
                <span>Explore My Work</span>
                <ArrowDown size={15} className="btn-icon-arrow" />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <span>Get in Touch</span>
                <ArrowUpRight size={15} className="btn-icon-arrow" />
              </a>
            </div>

            {/* Technical Annotations */}
            <div
              style={{
                marginTop: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                flexWrap: 'wrap'
              }}
            >
              <span className="mono-tag">UI → API → DATA</span>
              <span className="mono-tag">React / Node.js</span>
              <span className="mono-tag">Microservices</span>
              <span className="mono-tag" style={{ borderColor: 'rgba(229, 83, 61, 0.4)', color: 'var(--accent-vermilion)' }}>
                Built with intent
              </span>
            </div>
          </div>

          {/* Right Column: Custom Abstract Architecture Visualizer */}
          <div>
            <SystemArchitectureVisualizer />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-2xl) !important;
          }
        }
      `}</style>
    </section>
  );
};
