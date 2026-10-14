import React from 'react';
import type { Project } from '../../types';
import { ExternalLink, Check, Network, Users, LayoutDashboard, Zap, GitBranch } from 'lucide-react';

interface ProjectCardSplitProps {
  project: Project;
}

export const ProjectCardSplit: React.FC<ProjectCardSplitProps> = ({ project }) => {
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
      className="project-card-split"
    >
      {/* Top Bar */}
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
              color: 'var(--accent-blue)',
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

        {/* Multi-link Action Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={link.isPrimary ? 'btn btn-primary' : 'btn btn-secondary'}
              style={{
                fontSize: '0.78rem',
                padding: '0.45rem 0.85rem',
                gap: '0.45rem'
              }}
            >
              <span>{link.label}</span>
              <ExternalLink size={12} />
            </a>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 1fr) minmax(320px, 1.15fr)',
          gap: 0
        }}
        className="split-grid"
      >
        {/* Left Column: Conceptual Architecture & Interface Mockup */}
        <div
          style={{
            backgroundColor: '#FAF9F5',
            padding: '2.5rem',
            borderRight: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
          className="split-visual-pane"
        >
          {/* Headless Decoupled Architecture Graphic */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-medium)',
              borderRadius: '6px',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-subtle)',
              marginBottom: '1.5rem'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-light)',
                paddingBottom: '0.75rem',
                marginBottom: '1rem'
              }}
            >
              <span className="mono-label" style={{ color: 'var(--text-primary)' }}>
                HEADLESS CMS DATA PIPELINE
              </span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--accent-blue)'
                }}
              >
                <Zap size={12} />
                SSR & STATIC GENERATION
              </span>
            </div>

            {/* Architecture Node Diagram */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem',
                backgroundColor: 'var(--bg-subtle)',
                borderRadius: '4px',
                border: '1px solid var(--border-light)',
                marginBottom: '1rem',
                gap: '0.5rem'
              }}
            >
              <div style={{ textAlign: 'center', flex: 1 }}>
                <span className="mono-label" style={{ fontSize: '0.65rem', display: 'block' }}>
                  FRONTEND
                </span>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Next.js App
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <GitBranch size={14} color="var(--accent-blue)" />
                <span className="mono-label" style={{ fontSize: '0.6rem', color: 'var(--accent-blue)' }}>
                  GraphQL
                </span>
              </div>

              <div style={{ textAlign: 'center', flex: 1 }}>
                <span className="mono-label" style={{ fontSize: '0.65rem', display: 'block' }}>
                  CONTENT
                </span>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  WordPress CMS
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Network size={14} color="var(--accent-vermilion)" />
                <span className="mono-label" style={{ fontSize: '0.6rem', color: 'var(--accent-vermilion)' }}>
                  REST
                </span>
              </div>

              <div style={{ textAlign: 'center', flex: 1 }}>
                <span className="mono-label" style={{ fontSize: '0.65rem', display: 'block' }}>
                  SERVICE
                </span>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Node.js API
                </span>
              </div>
            </div>

            {/* Admin Console Representation */}
            <div
              style={{
                border: '1px solid var(--border-light)',
                borderRadius: '4px',
                padding: '0.85rem',
                backgroundColor: '#FFFFFF'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <LayoutDashboard size={14} color="var(--accent-blue)" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                    Role-Based Project Administration
                  </span>
                </div>
                <Users size={14} color="var(--text-tertiary)" />
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.5rem',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '0.4rem', borderRadius: '3px' }}>
                  Projects: Active
                </div>
                <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '0.4rem', borderRadius: '3px' }}>
                  Teams: Synced
                </div>
                <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '0.4rem', borderRadius: '3px' }}>
                  Members: RBAC
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Context, Role, and Technical Details */}
        <div
          style={{
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          className="split-content-pane"
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

            {/* Architecture Details */}
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
                  STACK STRATEGY
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Decoupled Headless CMS (Next.js + WP)
                </span>
              </div>
              <div>
                <span className="mono-label" style={{ fontSize: '0.68rem', display: 'block' }}>
                  DATA INTERFACE
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  GraphQL Schemas & REST Webhooks
                </span>
              </div>
            </div>

            {/* Contributions List */}
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
                        color: 'var(--accent-blue)',
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

          {/* Tech Badges & Metric */}
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
                  borderLeft: '3px solid var(--accent-blue)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--accent-blue)'
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
      </div>

      <style>{`
        @media (max-width: 900px) {
          .split-grid {
            grid-template-columns: 1fr !important;
          }
          .split-visual-pane {
            border-right: none !important;
            border-bottom: 1px solid var(--border-light) !important;
            padding: 1.5rem !important;
          }
          .split-content-pane {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </article>
  );
};
