'use client';

import React, { useState } from 'react';
import { architectureLayers } from '@/data/architecture';
import {
  LuLayers as Layers,
  LuTerminal as Terminal,
  LuArrowRight as ArrowRight,
  LuCpu as Cpu,
  LuDatabase as Database,
  LuRadio as Radio,
  LuServer as Server,
} from 'react-icons/lu';

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
    <div className="bg-white border border-[var(--border-medium)] rounded-md p-6 shadow-[var(--shadow-card)] relative overflow-hidden">
      {/* Top Spec Bar */}
      <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-3.5 mb-5">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-vermilion)] animate-pulse" />
          <span className="mono-label text-[var(--text-primary)] font-semibold text-xs tracking-wider">
            SYSTEM TOPOLOGY // FULL STACK CONTRACT
          </span>
        </div>
        <span className="mono-label text-[0.7rem] px-2 py-0.5 bg-[var(--bg-subtle)] border border-[var(--border-light)] rounded">
          INTERACTIVE ARCHITECTURE
        </span>
      </div>

      {/* Visual Pipeline Flow Header */}
      <div className="flex items-center justify-between mb-6 px-4 py-3 bg-[var(--bg-subtle)] rounded border border-[var(--border-light)] overflow-x-auto gap-2">
        <span className="mono-label text-[var(--accent-vermilion)] font-semibold">UI</span>
        <ArrowRight size={13} className="text-[var(--border-strong)] shrink-0" />
        <span className="mono-label text-[var(--accent-blue)] font-semibold">API GATEWAY</span>
        <ArrowRight size={13} className="text-[var(--border-strong)] shrink-0" />
        <span className="mono-label text-[var(--text-primary)] font-semibold">SERVICES</span>
        <ArrowRight size={13} className="text-[var(--border-strong)] shrink-0" />
        <span className="mono-label text-[var(--accent-amber)] font-semibold">DATA ACID</span>
        <ArrowRight size={13} className="text-[var(--border-strong)] shrink-0" />
        <span className="mono-label text-[var(--accent-green)] font-semibold">TELEMETRY</span>
      </div>

      {/* Interactive Layer Nodes */}
      <div className="flex flex-col gap-2.5">
        {architectureLayers.map((layer, index) => {
          const isSelected = layer.id === selectedLayerId;
          return (
            <button
              key={layer.id}
              onClick={() => setSelectedLayerId(layer.id)}
              className={`w-full flex items-center justify-between p-3.5 rounded border transition-all text-left cursor-pointer ${
                isSelected
                  ? 'border-[var(--accent-vermilion)] bg-[var(--bg-subtle)] shadow-xs'
                  : 'border-[var(--border-light)] bg-white hover:border-[var(--border-strong)] hover:bg-[#FAF9F5]'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <span
                  className={isSelected ? 'text-[var(--accent-vermilion)]' : 'text-[var(--text-tertiary)]'}
                >
                  {getLayerIcon(layer.id)}
                </span>
                <div>
                  <div
                    className={`font-sans font-semibold text-sm ${
                      isSelected ? 'text-[var(--accent-vermilion)]' : 'text-[var(--text-primary)]'
                    }`}
                  >
                    {layer.label}
                  </div>
                  <div className="font-mono text-xs text-[var(--text-tertiary)] mt-0.5">
                    {layer.tech.slice(0, 3).join(' • ')}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`mono-tag text-xs font-mono px-2 py-0.5 rounded ${
                    isSelected
                      ? 'bg-[rgba(229,83,61,0.1)] border-[var(--accent-vermilion)] text-[var(--accent-vermilion)]'
                      : 'border-[var(--border-light)] text-[var(--text-tertiary)]'
                  }`}
                >
                  0{index + 1}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Layer Technical Inspector */}
      <div className="mt-5 p-4 rounded bg-[#20211F] text-[#F8F7F2] border border-[#333531] shadow-inner">
        <div className="flex items-center justify-between mb-2.5">
          <span className="font-mono text-[#E5533D] text-xs font-medium tracking-wider">
            LAYER INSPECTION // {selectedLayer.id.toUpperCase()}
          </span>
          <span className="font-mono text-[#8E9187] text-[0.68rem]">
            ACTIVE CONTRACT
          </span>
        </div>

        <p className="text-sm leading-relaxed text-[#DEDED6] mb-3.5">
          {selectedLayer.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {selectedLayer.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[0.7rem] px-2 py-0.5 bg-white/10 text-[#FAF4EE] rounded border border-white/15"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="border-t border-white/10 pt-2.5 flex items-center gap-2 font-mono text-xs text-[#A2A59B]">
          <span className="text-[#5267D8] font-semibold">↳ Flow:</span>
          <span>{selectedLayer.dataFlow}</span>
        </div>
      </div>
    </div>
  );
};
