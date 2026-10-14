import React from 'react';
import type { Project } from '../../types';
import { ExternalLink, Check, ShoppingBag, Plane, Hotel, Smartphone, CreditCard, ShieldCheck } from 'lucide-react';

interface ProjectCardWideProps {
  project: Project;
}

export const ProjectCardWide: React.FC<ProjectCardWideProps> = ({ project }) => {
  return (
    <article
      id={project.id}
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--border-medium)',
        borderRadius: '6px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-card)',
        marginBottom: 'var(--space-3xl)',
        position: 'relative'
      }}
      className="project-card-wide"
    >
      {/* Editorial Header Strip */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 2rem',
          borderBottom: '1px solid var(--border-light)',
          backgroundColor: 'var(--bg-subtle)',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'var(--accent-vermilion)',
              lineHeight: 1
            }}
          >
            {project.number}
          </span>
          <span
            style={{
              width: '1px',
              height: '18px',
              backgroundColor: 'var(--border-strong)',
              display: 'inline-block'
            }}
          />
          <span className="mono-label" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
            {project.category.toUpperCase()}
          </span>
        </div>

        {project.links.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  fontSize: '0.78rem',
                  padding: '0.45rem 0.95rem',
                  gap: '0.45rem'
                }}
              >
                <span>{link.label}</span>
                <ExternalLink size={13} />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Main Content Asymmetric Split */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 1.15fr) minmax(320px, 1fr)',
          gap: 0
        }}
        className="wide-grid"
      >
        {/* Left Column: Context, Role, and Technical Contributions */}
        <div
          style={{
            padding: '2.5rem',
            borderRight: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          className="wide-content-pane"
        >
          <div>
            <h3
              style={{
                fontSize: 'clamp(1.85rem, 2.6vw, 2.4rem)',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                marginBottom: '1.75rem'
              }}
            >
              {project.description}
            </p>

            {/* Role & Context Meta */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                padding: '1rem 0',
                borderTop: '1px solid var(--border-light)',
                borderBottom: '1px solid var(--border-light)',
                marginBottom: '1.75rem'
              }}
            >
              <div>
                <span className="mono-label" style={{ fontSize: '0.68rem', display: 'block' }}>
                  DEVELOPMENT ROLE
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Full Stack Engineer (MERN & PostgreSQL)
                </span>
              </div>
              <div>
                <span className="mono-label" style={{ fontSize: '0.68rem', display: 'block' }}>
                  CORE ARCHITECTURE
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Microservices & API Integrations
                </span>
              </div>
            </div>

            {/* Key Technical Contributions */}
            <div style={{ marginBottom: '1.75rem' }}>
              <span
                className="mono-label"
                style={{
                  display: 'block',
                  color: 'var(--text-primary)',
                  marginBottom: '0.85rem',
                  fontWeight: 600
                }}
              >
                KEY TECHNICAL CONTRIBUTIONS
              </span>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                {project.contributions.map((contribution, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.9rem',
                      lineHeight: 1.55,
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <span
                      style={{
                        marginTop: '0.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--bg-subtle)',
                        border: '1px solid var(--border-medium)',
                        color: 'var(--accent-vermilion)',
                        flexShrink: 0
                      }}
                    >
                      <Check size={10} />
                    </span>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technology Badges & Resume Callout */}
          <div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.4rem',
                marginBottom: '1.5rem'
              }}
            >
              {project.technologies.map((tech) => (
                <span key={tech} className="mono-tag">
                  {tech}
                </span>
              ))}
            </div>

            {project.resumeOutcome && (
              <div
                style={{
                  padding: '0.85rem 1.15rem',
                  backgroundColor: 'var(--bg-subtle)',
                  borderRadius: '4px',
                  border: '1px solid var(--border-medium)',
                  borderLeft: '3px solid var(--accent-vermilion)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--accent-vermilion)'
                    }}
                  >
                    {project.resumeOutcome.metric}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)'
                    }}
                  >
                    {project.resumeOutcome.label}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-tertiary)',
                    marginTop: '0.25rem'
                  }}
                >
                  * {project.resumeOutcome.disclaimer}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Custom Conceptual Microservices Ecosystem Blueprint */}
        <div
          style={{
            backgroundColor: '#FAF9F5',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative'
          }}
          className="wide-visual-pane"
        >
          <div
            style={{
              border: '1px solid var(--border-medium)',
              borderRadius: '6px',
              backgroundColor: '#FFFFFF',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-light)',
                paddingBottom: '0.75rem',
                marginBottom: '1.25rem'
              }}
            >
              <span className="mono-label" style={{ fontSize: '0.7rem', color: 'var(--text-primary)' }}>
                ARCHITECTURE // MICROSERVICES TOPOLOGY
              </span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--accent-green)'
                }}
              >
                <ShieldCheck size={12} />
                JWT AUTH VERIFIED
              </span>
            </div>

            {/* Microservice Node Matrix */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
                marginBottom: '1.25rem'
              }}
            >
              <div
                style={{
                  padding: '0.85rem',
                  borderRadius: '4px',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <ShoppingBag size={14} color="var(--accent-vermilion)" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>E-Commerce Catalog</span>
                </div>
                <span className="mono-label" style={{ fontSize: '0.65rem' }}>Product & Inventory Service</span>
              </div>

              <div
                style={{
                  padding: '0.85rem',
                  borderRadius: '4px',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <Plane size={14} color="var(--accent-blue)" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Flight & Travel Bookings</span>
                </div>
                <span className="mono-label" style={{ fontSize: '0.65rem' }}>External API Orchestration</span>
              </div>

              <div
                style={{
                  padding: '0.85rem',
                  borderRadius: '4px',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <Hotel size={14} color="var(--accent-amber)" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Hotel Reservations</span>
                </div>
                <span className="mono-label" style={{ fontSize: '0.65rem' }}>Room Availability Engine</span>
              </div>

              <div
                style={{
                  padding: '0.85rem',
                  borderRadius: '4px',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <Smartphone size={14} color="var(--accent-green)" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>eSIM & Gift Cards</span>
                </div>
                <span className="mono-label" style={{ fontSize: '0.65rem' }}>Automated Provisioning API</span>
              </div>
            </div>

            {/* Central Persistence & Payment Hub */}
            <div
              style={{
                padding: '1rem',
                borderRadius: '4px',
                backgroundColor: '#20211F',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid #363833'
              }}
            >
              <div>
                <span className="mono-label" style={{ color: '#E5533D', fontSize: '0.68rem', display: 'block' }}>
                  SHARED TRANSACTION DATA BUS
                </span>
                <span style={{ fontSize: '0.86rem', fontWeight: 600 }}>
                  PostgreSQL Relational Storage + Express.js API Gateway
                </span>
              </div>
              <CreditCard size={18} color="#DEDED6" />
            </div>

            {/* Admin Console Annotation */}
            <div
              style={{
                marginTop: '1rem',
                paddingTop: '0.75rem',
                borderTop: '1px dashed var(--border-medium)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-tertiary)'
              }}
            >
              <span>OPERATOR CONSOLE: Multi-Vendor Auditing</span>
              <span style={{ color: 'var(--accent-vermilion)' }}>ROLE-BASED RBAC</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .wide-grid {
            grid-template-columns: 1fr !important;
          }
          .wide-content-pane {
            border-right: none !important;
            border-bottom: 1px solid var(--border-light) !important;
            padding: 1.5rem !important;
          }
          .wide-visual-pane {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </article>
  );
};
