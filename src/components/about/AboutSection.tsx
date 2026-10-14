import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { MapPin, Clock, Code2, Server, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  // Live India Standard Time (IST - UTC+5:30) display
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date());
        setLocalTime(timeStr);
      } catch {
        setLocalTime('IST (UTC+5:30)');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section-spacing" aria-label="About Nitin Parmar">
      <div className="container">
        <SectionHeader
          index="02"
          tag="PHILOSOPHY & PROFILE"
          title="A little about how I build."
          subtitle="Full-stack engineering grounded in architectural modularity, predictable data contracts, and deliberate user experience."
        />

        {/* Editorial Profile Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 1.25fr) minmax(320px, 1fr)',
            gap: 'var(--space-3xl)',
            alignItems: 'start'
          }}
          className="about-grid"
        >
          {/* Left Column: Editorial Manifesto & Content */}
          <div>
            {/* Large Editorial Pull Quote */}
            <blockquote
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 2.2vw, 2.05rem)',
                lineHeight: 1.35,
                color: 'var(--text-primary)',
                fontStyle: 'italic',
                fontWeight: 400,
                marginBottom: '2rem',
                borderLeft: '3px solid var(--accent-vermilion)',
                paddingLeft: '1.5rem'
              }}
            >
              “I enjoy solving practical engineering problems, organizing complex functionality into maintainable modules, and building interfaces that make sophisticated systems easier to use.”
            </blockquote>

            {/* Narrative Body Copy (Exact supplied text) */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem'
              }}
            >
              <p>
                I'm a Full Stack Developer with over three years of experience developing web applications across frontend interfaces, backend APIs, database systems, and third-party integrations.
              </p>
              <p>
                My work spans multi-service platforms, project management tools, real-time monitoring applications, and administrative systems. I focus on reducing architectural complexity, preventing race conditions, and delivering robust software that teams can operate with confidence.
              </p>
            </div>

            {/* Core Architectural Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                borderTop: '1px solid var(--border-medium)',
                paddingTop: '1.5rem'
              }}
            >
              <div>
                <span className="mono-label" style={{ color: 'var(--accent-vermilion)', marginBottom: '0.35rem', display: 'flex' }}>
                  <Code2 size={13} />
                  01. FRONTEND CRAFT
                </span>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
                  Deterministic client state, strict TypeScript interfaces, responsive layouts, and accessible interaction states.
                </p>
              </div>

              <div>
                <span className="mono-label" style={{ color: 'var(--accent-blue)', marginBottom: '0.35rem', display: 'flex' }}>
                  <Server size={13} />
                  02. BACKEND RESILIENCE
                </span>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
                  Decoupled microservice boundaries, ACID-compliant schema design, structured logging, and verified API contracts.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Location & Technical Identity Card */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-medium)',
              borderRadius: '6px',
              padding: '2rem',
              boxShadow: 'var(--shadow-card)',
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-light)',
                paddingBottom: '1rem',
                marginBottom: '1.5rem'
              }}
            >
              <span className="mono-label" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                OPERATIONAL BASE // METRICS
              </span>
              <span className="mono-label" style={{ color: 'var(--accent-vermilion)' }}>
                DEV PROFILE
              </span>
            </div>

            {/* Location & Time Stamp */}
            <div
              style={{
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                padding: '1.25rem',
                marginBottom: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
                <MapPin size={18} color="var(--accent-vermilion)" />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                    Ahmedabad, Gujarat, India
                  </div>
                  <span className="mono-label" style={{ fontSize: '0.68rem' }}>
                    COORDINATES: 23.0225° N, 72.5714° E
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px dashed var(--border-medium)',
                  paddingTop: '0.75rem',
                  marginTop: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                  <Clock size={13} color="var(--accent-blue)" />
                  <span>LOCAL TIME (IST):</span>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    color: 'var(--accent-vermilion)'
                  }}
                >
                  {localTime || 'Calculating...'}
                </span>
              </div>
            </div>

            {/* Scope of Engineering */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="mono-label" style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                DOMAINS OF EXPERIENCE
              </span>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  'Multi-Service E-Commerce & Booking Platforms',
                  'Headless CMS Websites with Next.js & GraphQL',
                  'Real-Time Farm Sensor Telemetry & Push Alerts',
                  'Retail Point-of-Sale (POS) & GRN Inventory Systems',
                  'Relational & Document Database Schema Design'
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      fontSize: '0.84rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <CheckCircle size={14} color="var(--accent-vermilion)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intent Badge */}
            <div
              style={{
                borderTop: '1px solid var(--border-light)',
                paddingTop: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-tertiary)'
              }}
            >
              <span>ENGINEERED WITH INTENT</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>v3.4 PRODUCTION</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-2xl) !important;
          }
        }
      `}</style>
    </section>
  );
};
