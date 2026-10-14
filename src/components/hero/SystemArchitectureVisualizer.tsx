import React, { useState } from 'react';
import { architectureLayers } from '../../data/architecture';
import { Layers, Terminal, ArrowRight, Cpu, Database, Radio, Server } from 'lucide-react';

export const SystemArchitectureVisualizer: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('client');

  const selectedLayer =
    architectureLayers.find((layer) => layer.id === selectedLayerId) || architectureLayers[0];

  const getLayerIcon = (id: string) => {
    switch (id) {
      case 'client':
        return <Layers size={16} />;
      case 'gateway':
        return <Cpu size={16} />;
      case 'microservices':
        return <Server size={16} />;
      case 'persistence':
        return <Database size={16} />;
      case 'realtime':
        return <Radio size={16} />;
      default:
        return <Terminal size={16} />;
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--border-medium)',
        borderRadius: '6px',
        padding: '1.5rem',
        boxShadow: 'var(--shadow-card)',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="architecture-panel"
    >
      {/* Top Spec Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-light)',
          paddingBottom: '0.85rem',
          marginBottom: '1.25rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-vermilion)'
            }}
          />
          <span className="mono-label" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
            SYSTEM TOPOLOGY // FULL STACK CONTRACT
          </span>
        </div>
        <span
          className="mono-label"
          style={{
            fontSize: '0.7rem',
            padding: '0.15rem 0.45rem',
            backgroundColor: 'var(--bg-subtle)',
            border: '1px solid var(--border-light)',
            borderRadius: '3px'
          }}
        >
          INTERACTIVE ARCHITECTURE
        </span>
      </div>

      {/* Visual Pipeline Flow Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.5rem',
          padding: '0.75rem 1rem',
          backgroundColor: 'var(--bg-subtle)',
          borderRadius: '4px',
          border: '1px solid var(--border-light)',
          overflowX: 'auto'
        }}
        className="pipeline-strip"
      >
        <span className="mono-label" style={{ color: 'var(--accent-vermilion)' }}>
          UI
        </span>
        <ArrowRight size={13} color="var(--border-strong)" />
        <span className="mono-label" style={{ color: 'var(--accent-blue)' }}>
          API GATEWAY
        </span>
        <ArrowRight size={13} color="var(--border-strong)" />
        <span className="mono-label" style={{ color: 'var(--text-primary)' }}>
          SERVICES
        </span>
        <ArrowRight size={13} color="var(--border-strong)" />
        <span className="mono-label" style={{ color: 'var(--accent-amber)' }}>
          DATA ACID
        </span>
        <ArrowRight size={13} color="var(--border-strong)" />
        <span className="mono-label" style={{ color: 'var(--accent-green)' }}>
          TELEMETRY
        </span>
      </div>

      {/* Interactive Layer Nodes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {architectureLayers.map((layer, index) => {
          const isSelected = layer.id === selectedLayerId;
          return (
            <button
              key={layer.id}
              onClick={() => setSelectedLayerId(layer.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                borderRadius: '4px',
                border: isSelected ? '1px solid var(--accent-vermilion)' : '1px solid var(--border-light)',
                backgroundColor: isSelected ? 'var(--bg-subtle)' : '#FFFFFF',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all var(--transition-fast)',
                position: 'relative'
              }}
              className="layer-row-button"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <span
                  style={{
                    color: isSelected ? 'var(--accent-vermilion)' : 'var(--text-tertiary)',
                    display: 'flex'
                  }}
                >
                  {getLayerIcon(layer.id)}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      color: isSelected ? 'var(--accent-vermilion)' : 'var(--text-primary)'
                    }}
                  >
                    {layer.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-tertiary)'
                    }}
                  >
                    {layer.tech.slice(0, 3).join(' • ')}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  className="mono-tag"
                  style={{
                    fontSize: '0.68rem',
                    backgroundColor: isSelected ? 'rgba(229, 83, 61, 0.1)' : 'transparent',
                    borderColor: isSelected ? 'var(--accent-vermilion)' : 'var(--border-light)',
                    color: isSelected ? 'var(--accent-vermilion)' : 'var(--text-tertiary)'
                  }}
                >
                  0{index + 1}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Layer Technical Inspector */}
      <div
        style={{
          marginTop: '1.25rem',
          padding: '1.15rem',
          borderRadius: '4px',
          backgroundColor: '#20211F',
          color: '#F8F7F2',
          border: '1px solid #333531'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.65rem'
          }}
        >
          <span
            className="mono-label"
            style={{ color: '#E5533D', fontSize: '0.7rem', letterSpacing: '0.08em' }}
          >
            LAYER INSPECTION // {selectedLayer.id.toUpperCase()}
          </span>
          <span
            className="mono-label"
            style={{ color: '#8E9187', fontSize: '0.68rem' }}
          >
            ACTIVE CONTRACT
          </span>
        </div>

        <p
          style={{
            fontSize: '0.86rem',
            lineHeight: 1.55,
            color: '#DEDED6',
            marginBottom: '0.85rem'
          }}
        >
          {selectedLayer.description}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.35rem',
            marginBottom: '0.85rem'
          }}
        >
          {selectedLayer.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                padding: '0.18rem 0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#FAF4EE',
                borderRadius: '3px',
                border: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '0.65rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: '#A2A59B'
          }}
        >
          <span style={{ color: 'var(--accent-blue)' }}>↳ Flow:</span>
          <span>{selectedLayer.dataFlow}</span>
        </div>
      </div>
    </div>
  );
};
