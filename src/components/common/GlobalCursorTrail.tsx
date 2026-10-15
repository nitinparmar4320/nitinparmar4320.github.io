'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  glowColor: string;
  alpha: number;
  life: number;
  maxLife: number;
  isAtom: boolean;
  orbitRadius: number;
  orbitAngle: number;
  orbitSpeed: number;
  tiltAngle: number;
}

// Curated palette harmonized with portfolio's editorial design system
const PALETTE = [
  { color: '229, 83, 61', glow: 'rgba(229, 83, 61, 0.4)' }, // Signature Vermilion
  { color: '82, 103, 216', glow: 'rgba(82, 103, 216, 0.35)' }, // Electric Blue
  { color: '32, 33, 31', glow: 'rgba(32, 33, 31, 0.25)' }, // Charcoal
  { color: '217, 119, 6', glow: 'rgba(217, 119, 6, 0.35)' }, // Amber
  { color: '99, 101, 94', glow: 'rgba(99, 101, 94, 0.2)' }, // Graphite
];

export function GlobalCursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameIdRef = useRef<number | null>(null);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const isRunningRef = useRef<boolean>(false);

  useEffect(() => {
    // Only run on desktop/devices with fine pointer and no reduced-motion preference
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Check if pointer is coarse (touchscreens)
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    if (isCoarse) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    /**
     * Checks if target element defines a specific cursor event or specialized custom cursor.
     * When hovering over such elements (e.g. Hero portrait reveal, custom crosshairs, custom zones),
     * global atom/dot dispersal is suppressed.
     */
    const isSpecificCursorZone = (el: HTMLElement | null): boolean => {
      if (!el) return false;

      // Check explicit data attributes or IDs
      const explicitZone = el.closest(
        '#hero-portrait-frame, [data-cursor-event], [data-cursor], [data-no-particles], [data-no-cursor-dots], .custom-cursor, [class*="cursor-crosshair"], [class*="cursor-none"]'
      );
      if (explicitZone) return true;

      // Check computed CSS cursor for non-standard specialized cursors
      try {
        const computed = window.getComputedStyle(el).cursor;
        if (
          computed === 'crosshair' ||
          computed === 'none' ||
          computed === 'grab' ||
          computed === 'grabbing' ||
          computed === 'zoom-in' ||
          computed === 'zoom-out' ||
          computed === 'wait'
        ) {
          return true;
        }
      } catch {
        // Fallback safely
      }

      return false;
    };

    // Helper to spawn an atom or dot particle
    const createParticle = (x: number, y: number, isBurst = false): Particle => {
      const paletteItem = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      const angle = Math.random() * Math.PI * 2;
      const speed = isBurst
        ? 1.5 + Math.random() * 3.5
        : 0.6 + Math.random() * 2.2;

      // ~30% chance to be an "atom" with an orbital electron ring/satellite
      const isAtom = Math.random() < 0.32;

      return {
        x: x + (Math.random() - 0.5) * 6,
        y: y + (Math.random() - 0.5) * 6,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: isAtom ? 2.2 + Math.random() * 1.6 : 1.4 + Math.random() * 2.2,
        color: paletteItem.color,
        glowColor: paletteItem.glow,
        alpha: 0.9,
        life: 0,
        maxLife: 32 + Math.floor(Math.random() * 28), // 32 to 60 frames (~0.5s - 1s)
        isAtom,
        orbitRadius: 6 + Math.random() * 7,
        orbitAngle: Math.random() * Math.PI * 2,
        orbitSpeed: (Math.random() > 0.5 ? 1 : -1) * (0.09 + Math.random() * 0.12),
        tiltAngle: Math.random() * Math.PI,
      };
    };

    // Animation render loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += 1;

        // Smooth physics: decay velocity and fade alpha
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.94;
        p.vy *= 0.94;

        // Gentle upward drift for natural atomic dispersal
        p.vy -= 0.015;

        const progress = p.life / p.maxLife;
        p.alpha = Math.max(0, (1 - progress) * 0.85);

        if (p.life >= p.maxLife || p.alpha <= 0.01) {
          particles.splice(i, 1);
          continue;
        }

        // Draw the main nucleus/dot
        ctx.save();
        ctx.shadowBlur = 4;
        ctx.shadowColor = p.glowColor;

        ctx.beginPath();
        const currentRadius = p.size * (1 - progress * 0.3);
        ctx.arc(p.x, p.y, Math.max(0.6, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();

        // If particle is an "atom", draw orbital ring and revolving electron
        if (p.isAtom && p.alpha > 0.15) {
          p.orbitAngle += p.orbitSpeed;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.tiltAngle);

          // Orbit ellipse ring
          ctx.beginPath();
          ctx.ellipse(0, 0, p.orbitRadius, p.orbitRadius * 0.42, 0, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${p.color}, ${p.alpha * 0.35})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();

          // Orbiting electron dot
          const electronX = Math.cos(p.orbitAngle) * p.orbitRadius;
          const electronY = Math.sin(p.orbitAngle) * (p.orbitRadius * 0.42);

          ctx.beginPath();
          ctx.arc(electronX, electronY, Math.max(0.6, p.size * 0.5), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${p.alpha * 0.85})`;
          ctx.fill();

          ctx.restore();
        }

        ctx.restore();
      }

      if (particles.length > 0) {
        animFrameIdRef.current = requestAnimationFrame(animate);
      } else {
        isRunningRef.current = false;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
    };

    const startAnimation = () => {
      if (!isRunningRef.current) {
        isRunningRef.current = true;
        animFrameIdRef.current = requestAnimationFrame(animate);
      }
    };

    // Handle mouse/pointer movement across the window
    const handlePointerMove = (e: MouseEvent | PointerEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      let target = e.target as HTMLElement | null;
      if (!target || target === document.body || target === document.documentElement) {
        target = document.elementFromPoint(currentX, currentY) as HTMLElement | null;
      }

      // If cursor is within a specifically defined cursor event or zone, do NOT spawn particles
      if (isSpecificCursorZone(target)) {
        lastPosRef.current = null;
        return;
      }

      if (!lastPosRef.current) {
        lastPosRef.current = { x: currentX, y: currentY };
        return;
      }

      const dx = currentX - lastPosRef.current.x;
      const dy = currentY - lastPosRef.current.y;
      const dist = Math.hypot(dx, dy);

      // Only spawn when moved sufficiently to prevent overload while idling
      if (dist > 3) {
        const count = dist > 20 ? 3 : 2;
        for (let i = 0; i < count; i++) {
          if (particlesRef.current.length < 90) {
            particlesRef.current.push(createParticle(currentX, currentY, false));
          }
        }
        lastPosRef.current = { x: currentX, y: currentY };
        startAnimation();
      }
    };

    // Burst of atomic dots on click/tap
    const handlePointerDown = (e: MouseEvent | PointerEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      let target = e.target as HTMLElement | null;
      if (!target || target === document.body || target === document.documentElement) {
        target = document.elementFromPoint(currentX, currentY) as HTMLElement | null;
      }

      if (isSpecificCursorZone(target)) return;

      const burstCount = 8;
      for (let i = 0; i < burstCount; i++) {
        if (particlesRef.current.length < 100) {
          particlesRef.current.push(createParticle(currentX, currentY, true));
        }
      }
      startAnimation();
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mousedown', handlePointerDown, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('pointerdown', handlePointerDown);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9998] select-none"
      style={{
        width: '100vw',
        height: '100vh',
      }}
    />
  );
}
