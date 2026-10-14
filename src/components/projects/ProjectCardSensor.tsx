import React, { useState, useEffect } from 'react';
import type { Project } from '../../types';
import { Check, Radio, Bell, Droplets, Thermometer, Wind } from 'lucide-react';

interface ProjectCardSensorProps {
  project: Project;
}

export const ProjectCardSensor: React.FC<ProjectCardSensorProps> = ({ project }) => {
  // Interactive simulated sensor state
  const [temperature, setTemperature] = useState(24.4);
  const [humidity, setHumidity] = useState(58.2);
  const [soilMoisture, setSoilMoisture] = useState(64.1);
  const [isAlertActive, setIsAlertActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate subtle environmental sensor fluctuation
      setTemperature((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1));
      setHumidity((prev) => +(prev + (Math.random() * 0.6 - 0.3)).toFixed(1));
      setSoilMoisture((prev) => +(prev + (Math.random() * 0.5 - 0.25)).toFixed(1));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

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
      className="project-card-sensor"
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
              color: 'var(--accent-green)',
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
              color: 'var(--accent-green)',
              backgroundColor: 'rgba(46, 125, 50, 0.08)',
              padding: '0.25rem 0.65rem',
              borderRadius: '4px',
              border: '1px solid rgba(46, 125, 50, 0.2)'
            }}
          >
            <Radio size={12} className="pulse-icon" />
            WEBSOCKET STREAM ACTIVE
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
        className="sensor-grid"
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
          className="sensor-content-pane"
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
                  CORE PROTOCOL
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Bidirectional WebSocket + Firebase Alerts
                </span>
              </div>
              <div>
                <span className="mono-label" style={{ fontSize: '0.68rem', display: 'block' }}>
                  ADMIN STRUCTURE
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Super-Admin Multiple Panel Consoles
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
                        color: 'var(--accent-green)',
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
                  borderLeft: '3px solid var(--accent-green)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--accent-green)'
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

        {/* Right Column: Live Telemetry Simulator & Sensor Placement Visualizer */}
        <div
          style={{
            backgroundColor: '#FAF9F5',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
          className="sensor-visual-pane"
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
            {/* Header */}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-green)'
                  }}
                />
                <span className="mono-label" style={{ color: 'var(--text-primary)', fontSize: '0.72rem' }}>
                  SENSOR GRID // PLOT #04 TELEMETRY
                </span>
              </div>
              <span className="mono-label" style={{ fontSize: '0.68rem' }}>
                POLL: LIVE 50ms
              </span>
            </div>

            {/* Live Telemetry Display Gauges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.75rem',
                marginBottom: '1.25rem'
              }}
            >
              {/* Temperature */}
              <div
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  padding: '0.85rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
                  <Thermometer size={14} color="var(--accent-vermilion)" />
                  <span className="mono-label" style={{ fontSize: '0.65rem' }}>
                    TEMP
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)'
                  }}
                >
                  {temperature}°C
                </div>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>Normal Range (18–30)</span>
              </div>

              {/* Relative Humidity */}
              <div
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  padding: '0.85rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
                  <Wind size={14} color="var(--accent-blue)" />
                  <span className="mono-label" style={{ fontSize: '0.65rem' }}>
                    HUMIDITY
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)'
                  }}
                >
                  {humidity}%
                </div>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>Optimal (45–70)</span>
              </div>

              {/* Soil Moisture */}
              <div
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '4px',
                  padding: '0.85rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
                  <Droplets size={14} color="var(--accent-green)" />
                  <span className="mono-label" style={{ fontSize: '0.65rem' }}>
                    SOIL
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)'
                  }}
                >
                  {soilMoisture}%
                </div>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)' }}>Moist Layer A</span>
              </div>
            </div>

            {/* Simulated Notification Pipeline */}
            <div
              style={{
                border: '1px solid var(--border-medium)',
                borderRadius: '4px',
                padding: '0.85rem 1rem',
                backgroundColor: isAlertActive ? '#FEF2F2' : '#FFFFFF',
                transition: 'background-color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Bell size={16} color={isAlertActive ? 'var(--accent-vermilion)' : 'var(--accent-green)'} />
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block' }}>
                    {isAlertActive ? 'TEST TRIGGER: Threshold Exceeded' : 'Firebase Cloud Messaging Ready'}
                  </span>
                  <span className="mono-label" style={{ fontSize: '0.65rem' }}>
                    {isAlertActive ? 'Alert push dispatched to 50+ operators' : 'Background worker listening on MySQL logs'}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsAlertActive(!isAlertActive)}
                className="btn btn-secondary"
                style={{
                  fontSize: '0.72rem',
                  padding: '0.3rem 0.65rem'
                }}
              >
                {isAlertActive ? 'Reset' : 'Simulate Alert'}
              </button>
            </div>

            {/* Farm Grid Placement Map Preview */}
            <div
              style={{
                padding: '0.85rem',
                borderRadius: '4px',
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--border-light)'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                <span>SENSOR PLACEMENT MATRIX</span>
                <span style={{ color: 'var(--accent-green)' }}>5 NODES ONLINE</span>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: '0.4rem',
                  height: '32px'
                }}
              >
                {['N-01', 'N-02', 'N-03', 'N-04', 'N-05'].map((node, i) => (
                  <div
                    key={node}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid var(--border-medium)',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      fontWeight: 600,
                      color: i === 3 ? 'var(--accent-vermilion)' : 'var(--accent-green)'
                    }}
                  >
                    {node}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .pulse-icon {
          animation: pulse 2s infinite ease-in-out;
        }
        @media (max-width: 900px) {
          .sensor-grid {
            grid-template-columns: 1fr !important;
          }
          .sensor-content-pane {
            border-right: none !important;
            border-bottom: 1px solid var(--border-light) !important;
            padding: 1.5rem !important;
          }
          .sensor-visual-pane {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </article>
  );
};
