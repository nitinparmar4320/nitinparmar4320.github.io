import React, { useState } from 'react';
import type { Project } from '../../types';
import { Check, ReceiptText, FileCheck, Tag, ShoppingCart, SlidersHorizontal } from 'lucide-react';

interface ProjectCardMposProps {
  project: Project;
}

export const ProjectCardMpos: React.FC<ProjectCardMposProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<'grn' | 'products'>('grn');

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
      className="project-card-mpos"
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
              color: 'var(--accent-amber)',
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--accent-amber)',
              backgroundColor: 'rgba(217, 119, 6, 0.08)',
              padding: '0.25rem 0.65rem',
              borderRadius: '4px',
              border: '1px solid rgba(217, 119, 6, 0.25)'
            }}
          >
            <ReceiptText size={12} />
            GRN WORKFLOW AUTOMATION
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 1.15fr) minmax(320px, 1fr)',
          gap: 0
        }}
        className="mpos-grid"
      >
        {/* Left Column: Context, Role, and Technical Details */}
        <div
          style={{
            padding: '2.5rem',
            borderRight: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          className="mpos-content-pane"
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
                  CORE FOCUS
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  GRN Generation & Inventory Logistics
                </span>
              </div>
              <div>
                <span className="mono-label" style={{ fontSize: '0.68rem', display: 'block' }}>
                  ADMIN CAPACITY
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  20+ Active Admin Consoles
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
                        color: 'var(--accent-amber)',
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
                  borderLeft: '3px solid var(--accent-amber)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--accent-amber)'
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

        {/* Right Column: Goods Received Note (GRN) & Catalog Workspace Mockup */}
        <div
          style={{
            backgroundColor: '#FAF9F5',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
          className="mpos-visual-pane"
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-medium)',
              borderRadius: '6px',
              padding: '1.5rem',
              boxShadow: 'var(--shadow-subtle)'
            }}
          >
            {/* Top Interactive Tabs */}
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                borderBottom: '1px solid var(--border-light)',
                paddingBottom: '0.75rem',
                marginBottom: '1rem'
              }}
            >
              <button
                onClick={() => setActiveTab('grn')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '4px',
                  backgroundColor: activeTab === 'grn' ? 'var(--bg-subtle)' : 'transparent',
                  color: activeTab === 'grn' ? 'var(--text-primary)' : 'var(--text-tertiary)',
                  fontWeight: activeTab === 'grn' ? 600 : 500,
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <FileCheck size={13} color={activeTab === 'grn' ? 'var(--accent-amber)' : 'inherit'} />
                GRN AUDIT FLOW
              </button>

              <button
                onClick={() => setActiveTab('products')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '4px',
                  backgroundColor: activeTab === 'products' ? 'var(--bg-subtle)' : 'transparent',
                  color: activeTab === 'products' ? 'var(--text-primary)' : 'var(--text-tertiary)',
                  fontWeight: activeTab === 'products' ? 600 : 500,
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <Tag size={13} color={activeTab === 'products' ? 'var(--accent-amber)' : 'inherit'} />
                PROMOTION MATRIX
              </button>
            </div>

            {activeTab === 'grn' ? (
              <div>
                <div
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    padding: '1rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-light)',
                    marginBottom: '1rem'
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
                    <span className="mono-label" style={{ fontSize: '0.7rem', color: 'var(--text-primary)' }}>
                      DOC ID: GRN-2026-0894
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: 'var(--accent-green)',
                        fontWeight: 600
                      }}
                    >
                      STATUS: VERIFIED
                    </span>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '0.5rem',
                      fontSize: '0.75rem',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <div>
                      <span className="mono-label" style={{ fontSize: '0.6rem' }}>PO REF</span>
                      <div style={{ fontWeight: 600 }}>PO-99412</div>
                    </div>
                    <div>
                      <span className="mono-label" style={{ fontSize: '0.6rem' }}>SUPPLIER</span>
                      <div style={{ fontWeight: 600 }}>Apex Retail Dist.</div>
                    </div>
                    <div>
                      <span className="mono-label" style={{ fontSize: '0.6rem' }}>ITEMS</span>
                      <div style={{ fontWeight: 600 }}>142 Units Checked</div>
                    </div>
                  </div>

                  {/* Item Rows */}
                  <div
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-light)',
                      borderRadius: '3px',
                      padding: '0.5rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.2rem 0', borderBottom: '1px solid var(--border-light)' }}>
                      <span>SKU #4092 Barcode Scanner</span>
                      <span style={{ color: 'var(--accent-green)' }}>+20 Rcvd</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.2rem 0' }}>
                      <span>SKU #8812 Thermal Paper 80mm</span>
                      <span style={{ color: 'var(--accent-green)' }}>+100 Rcvd</span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-tertiary)'
                  }}
                >
                  <span>Inventory auto-synced across outlets</span>
                  <span style={{ color: 'var(--accent-amber)' }}>Discrepancy: 0</span>
                </div>
              </div>
            ) : (
              <div>
                <div
                  style={{
                    backgroundColor: 'var(--bg-subtle)',
                    padding: '1rem',
                    borderRadius: '4px',
                    border: '1px solid var(--border-light)',
                    marginBottom: '1rem'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <span className="mono-label" style={{ fontSize: '0.7rem', color: 'var(--text-primary)' }}>
                      ACTIVE PROMOTION ENGINE
                    </span>
                    <SlidersHorizontal size={13} color="var(--accent-amber)" />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
                    <div style={{ backgroundColor: '#FFFFFF', padding: '0.5rem', borderRadius: '3px', border: '1px solid var(--border-light)' }}>
                      <strong>Seasonal Discount Tier 1</strong>: 15% off cart value &gt; $100
                    </div>
                    <div style={{ backgroundColor: '#FFFFFF', padding: '0.5rem', borderRadius: '3px', border: '1px solid var(--border-light)' }}>
                      <strong>Member Flash Special</strong>: Instant cashback via GRN audit link
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <ShoppingCart size={13} color="var(--accent-amber)" />
                  <span>Configured by POS Administrator Group</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .mpos-grid {
            grid-template-columns: 1fr !important;
          }
          .mpos-content-pane {
            border-right: none !important;
            border-bottom: 1px solid var(--border-light) !important;
            padding: 1.5rem !important;
          }
          .mpos-visual-pane {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </article>
  );
};
