'use client';

import React, { useState, useEffect } from 'react';
import type { Project } from '@/types';
import {
  LuCheck as Check,
  LuRadio as Radio,
  LuBell as Bell,
  LuDroplets as Droplets,
  LuThermometer as Thermometer,
  LuWind as Wind,
} from 'react-icons/lu';

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
      className="bg-white border border-[var(--border-medium)] rounded-md overflow-hidden shadow-[var(--shadow-card)] mb-12 lg:mb-16 relative"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between p-5 sm:px-8 border-b border-[var(--border-light)] bg-[var(--bg-subtle)] flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <span className="font-display text-2xl sm:text-3xl font-bold text-[var(--accent-green)] leading-none">
            {project.number}
          </span>
          <span className="w-px h-4.5 bg-[var(--border-strong)] inline-block" />
          <span className="mono-label text-[var(--text-primary)] font-semibold text-xs tracking-wider">
            {project.category.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--accent-green)] bg-green-800/10 px-2.5 py-1 rounded border border-green-700/20">
            <Radio size={12} className="animate-pulse" />
            WEBSOCKET STREAM ACTIVE
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,1.15fr)_minmax(320px,1fr)]">
        {/* Left Column: Context, Role, and Technical Details */}
        <div className="p-6 sm:p-10 lg:border-r border-[var(--border-light)] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 text-[var(--text-primary)]">
              {project.title}
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] mb-6">
              {project.description}
            </p>

            {/* Architecture Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-[var(--border-light)] mb-6">
              <div>
                <span className="mono-label text-xs block mb-1">
                  CORE PROTOCOL:
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {' Bidirectional WebSocket + Firebase Alerts'}
                </span>
              </div>
              <div>
                <span className="mono-label text-xs block mb-1">
                  ADMIN STRUCTURE:
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {' Super-Admin Multiple Panel Consoles'}
                </span>
              </div>
            </div>

            {/* Contributions List */}
            <div className="mb-6">
              <span className="mono-label block text-[var(--text-primary)] mb-3 font-semibold text-xs tracking-wider">
                KEY TECHNICAL CONTRIBUTIONS
              </span>
              <ul className="space-y-3">
                {project.contributions.map((contribution, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[var(--text-secondary)]"
                  >
                    <span className="mt-1 flex items-center justify-center w-4 h-4 rounded-full bg-[var(--bg-subtle)] border border-[var(--border-medium)] text-[var(--accent-green)] shrink-0">
                      <Check size={10} />
                    </span>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Badges & Metric */}
          <div className="pt-4">
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.technologies.map((tech) => (
                <span key={tech} className="mono-tag text-xs">
                  {tech}
                </span>
              ))}
            </div>

            {project.resumeOutcome && (
              <div className="p-3.5 sm:p-4 bg-[var(--bg-subtle)] rounded border border-[var(--border-medium)] border-l-4 border-l-[var(--accent-green)]">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-display text-xl sm:text-2xl font-bold text-[var(--accent-green)]">
                    {project.resumeOutcome.metric}
                  </span>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                    {project.resumeOutcome.label}
                  </span>
                </div>
                <p className="font-mono text-xs text-[var(--text-tertiary)] mt-1">
                  * {project.resumeOutcome.disclaimer}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Live Telemetry Simulator & Sensor Placement Visualizer */}
        <div className="bg-[#FAF9F5] p-6 sm:p-10 flex flex-col justify-center border-t lg:border-t-0 border-[var(--border-light)]">
          <div className="bg-white border border-[var(--border-medium)] rounded-md p-5 sm:p-6 shadow-[var(--shadow-subtle)]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-3 mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
                <span className="mono-label text-xs text-[var(--text-primary)] font-semibold">
                  SENSOR GRID // PLOT #04 TELEMETRY
                </span>
              </div>
              <span className="mono-label text-[0.68rem]">
                POLL: LIVE 50ms
              </span>
            </div>

            {/* Live Telemetry Display Gauges */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {/* Temperature */}
              <div className="bg-[var(--bg-subtle)] border border-[var(--border-light)] rounded p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <Thermometer size={14} className="text-[var(--accent-vermilion)]" />
                  <span className="mono-label text-[0.65rem]">TEMP</span>
                </div>
                <div className="font-mono text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                  {temperature}°C
                </div>
                <span className="text-[0.65rem] text-[var(--text-tertiary)] block mt-0.5">Normal (18–30)</span>
              </div>

              {/* Relative Humidity */}
              <div className="bg-[var(--bg-subtle)] border border-[var(--border-light)] rounded p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <Wind size={14} className="text-[var(--accent-blue)]" />
                  <span className="mono-label text-[0.65rem]">HUMIDITY</span>
                </div>
                <div className="font-mono text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                  {humidity}%
                </div>
                <span className="text-[0.65rem] text-[var(--text-tertiary)] block mt-0.5">Optimal (45–70)</span>
              </div>

              {/* Soil Moisture */}
              <div className="bg-[var(--bg-subtle)] border border-[var(--border-light)] rounded p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <Droplets size={14} className="text-[var(--accent-green)]" />
                  <span className="mono-label text-[0.65rem]">SOIL</span>
                </div>
                <div className="font-mono text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                  {soilMoisture}%
                </div>
                <span className="text-[0.65rem] text-[var(--text-tertiary)] block mt-0.5">Moist Layer A</span>
              </div>
            </div>

            {/* Simulated Notification Pipeline */}
            <div
              className={`border border-[var(--border-medium)] rounded p-3.5 sm:p-4 transition-colors flex items-center justify-between mb-4 ${isAlertActive ? 'bg-red-50/90 border-red-300' : 'bg-white'
                }`}
            >
              <div className="flex items-center gap-3">
                <Bell
                  size={16}
                  className={`shrink-0 ${isAlertActive ? 'text-[var(--accent-vermilion)] animate-bounce' : 'text-[var(--accent-green)]'
                    }`}
                />
                <div>
                  <span className="text-xs font-semibold block text-[var(--text-primary)]">
                    {isAlertActive ? 'TEST TRIGGER: Threshold Exceeded' : 'Firebase Cloud Messaging Ready'}
                  </span>
                  <span className="mono-label text-[0.65rem] text-[var(--text-tertiary)]">
                    {isAlertActive
                      ? 'Alert push dispatched to 50+ operators'
                      : 'Background worker listening on MySQL logs'}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsAlertActive(!isAlertActive)}
                className="btn btn-secondary text-xs py-1 px-2.5 rounded cursor-pointer"
              >
                {isAlertActive ? 'Reset' : 'Simulate Alert'}
              </button>
            </div>

            {/* Farm Grid Placement Map Preview */}
            <div className="p-3.5 rounded bg-[var(--bg-subtle)] border border-[var(--border-light)]">
              <div className="flex items-center justify-between mb-2 text-xs font-mono">
                <span>SENSOR PLACEMENT MATRIX</span>
                <span className="text-[var(--accent-green)] font-semibold">5 NODES ONLINE</span>
              </div>
              <div className="grid grid-cols-5 gap-1.5 h-8">
                {['N-01', 'N-02', 'N-03', 'N-04', 'N-05'].map((node, i) => (
                  <div
                    key={node}
                    className={`bg-white border border-[var(--border-medium)] rounded flex items-center justify-center font-mono text-[0.65rem] font-semibold ${i === 3 ? 'text-[var(--accent-vermilion)]' : 'text-[var(--accent-green)]'
                      }`}
                  >
                    {node}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
