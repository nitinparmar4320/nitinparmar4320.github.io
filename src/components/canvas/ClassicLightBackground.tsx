'use client';

import React, { useEffect, useRef } from 'react';
import { GridBlinkingDots } from './GridBlinkingDots';

/**
 * ClassicLightBackground
 * 
 * A very light, classic, and professional architectural background environment:
 * - Editorial warm ivory canvas foundation (#F8F7F2)
 * - Whisper-soft floating ambient light auras that slowly drift and breathe
 * - Precision architectural drafting grid with subtle coordinate crosshairs (+)
 * - Delicate technical compass ring rotating at an ultra-slow, peaceful cadence
 * - Gentle ambient desk-lamp sheen that smoothly responds to pointer focus
 * - 100% non-intrusive (pointer-events-none, strictly background z-index)
 */
export function ClassicLightBackground() {
  const currentPosRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const targetPosRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const animFrameRef = useRef<number | null>(null);
  const isMovingRef = useRef<boolean>(false);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Set initial soft ambient light position in upper third of viewport
    targetPosRef.current = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.35,
    };
    currentPosRef.current = { ...targetPosRef.current };

    if (spotlightRef.current) {
      spotlightRef.current.style.transform = `translate3d(${currentPosRef.current.x}px, ${currentPosRef.current.y}px, 0) translate(-50%, -50%)`;
    }

    const handlePointerMove = (e: MouseEvent) => {
      targetPosRef.current = { x: e.clientX, y: e.clientY };
      if (!isMovingRef.current) {
        isMovingRef.current = true;
        startLoop();
      }
    };

    const startLoop = () => {
      const update = () => {
        const dx = targetPosRef.current.x - currentPosRef.current.x;
        const dy = targetPosRef.current.y - currentPosRef.current.y;

        // Smooth physical dampening (lerp) for serene, organic glide
        currentPosRef.current.x += dx * 0.05;
        currentPosRef.current.y += dy * 0.05;

        if (spotlightRef.current) {
          spotlightRef.current.style.transform = `translate3d(${currentPosRef.current.x}px, ${currentPosRef.current.y}px, 0) translate(-50%, -50%)`;
        }

        // Rest animation loop when close to target to conserve battery and CPU
        if (Math.hypot(dx, dy) > 0.4) {
          animFrameRef.current = requestAnimationFrame(update);
        } else {
          isMovingRef.current = false;
        }
      };

      animFrameRef.current = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none select-none overflow-hidden -z-10"
    >
      {/* 1. Ultra-Soft Ambient Floating Light Orbs */}
      {/* Orb 1: Warm Sunlit Pearl (Upper Left) */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[750px] h-[750px] rounded-full will-change-transform opacity-70"
        style={{
          background: 'radial-gradient(circle, rgba(255, 252, 244, 0.95) 0%, rgba(248, 242, 230, 0.45) 50%, transparent 75%)',
          filter: 'blur(95px)',
          animation: 'driftOrb1 26s ease-in-out infinite alternate',
        }}
      />

      {/* Orb 2: Pale Platinum Mist (Right Center) */}
      <div
        className="absolute top-[25%] -right-[12%] w-[680px] h-[680px] rounded-full will-change-transform opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(240, 246, 254, 0.8) 0%, rgba(244, 242, 235, 0.35) 55%, transparent 75%)',
          filter: 'blur(105px)',
          animation: 'driftOrb2 32s ease-in-out infinite alternate',
        }}
      />

      {/* Orb 3: Soft Alabaster Linen (Bottom Left) */}
      <div
        className="absolute -bottom-[15%] left-[18%] w-[620px] h-[620px] rounded-full will-change-transform opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(254, 248, 240, 0.75) 0%, rgba(245, 242, 234, 0.3) 50%, transparent 70%)',
          filter: 'blur(90px)',
          animation: 'driftOrb3 22s ease-in-out infinite alternate',
        }}
      />

      {/* 2. Classical Precision Architectural Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(188, 190, 178, 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(188, 190, 178, 0.35) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* 3. Coordinate Crosshairs Pattern (+) at 128px Intersections */}
      <div
        className="absolute inset-0 opacity-40 animate-pulse-gentle"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='128' height='128' viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M64 59V69M59 64H69' stroke='%239E9F94' stroke-width='0.8' stroke-linecap='square'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      {/* 4. Blinking Connection Dots at Grid Intersections (Where Lines Cross/Collapse) */}
      <GridBlinkingDots />

      {/* 4. Elegant Technical Radial Compass Gauge (Ultra-Slow Peaceful Rotation) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[840px] h-[840px] rounded-full pointer-events-none opacity-[0.16] will-change-transform"
        style={{
          animation: 'slowCompassRotate 180s linear infinite',
        }}
      >
        <svg
          viewBox="0 0 840 840"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer dashed architectural ring */}
          <circle
            cx="420"
            cy="420"
            r="410"
            stroke="var(--border-strong, #BCBEB2)"
            strokeWidth="0.75"
            strokeDasharray="4 8"
          />
          {/* Middle continuous hairline */}
          <circle
            cx="420"
            cy="420"
            r="320"
            stroke="var(--border-strong, #BCBEB2)"
            strokeWidth="0.5"
            strokeOpacity="0.6"
          />
          {/* Inner fine segmented ring */}
          <circle
            cx="420"
            cy="420"
            r="210"
            stroke="var(--border-strong, #BCBEB2)"
            strokeWidth="0.75"
            strokeDasharray="16 12 4 12"
          />
          {/* Cardinal coordinate tick marks */}
          <line x1="420" y1="0" x2="420" y2="24" stroke="var(--border-strong, #BCBEB2)" strokeWidth="1" />
          <line x1="420" y1="816" x2="420" y2="840" stroke="var(--border-strong, #BCBEB2)" strokeWidth="1" />
          <line x1="0" y1="420" x2="24" y2="420" stroke="var(--border-strong, #BCBEB2)" strokeWidth="1" />
          <line x1="816" y1="420" x2="840" y2="420" stroke="var(--border-strong, #BCBEB2)" strokeWidth="1" />
        </svg>
      </div>

      {/* 5. Smooth Ambient Focus Sheen (Subtle Studio Desk Lamp following mouse) */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[720px] h-[720px] rounded-full pointer-events-none will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.25) 35%, transparent 70%)',
          filter: 'blur(50px)',
          opacity: 0.55,
        }}
      />

      {/* Embedded CSS Keyframes for GPU-accelerated ambient motion */}
      <style jsx>{`
        @keyframes driftOrb1 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(80px, 45px, 0) scale(1.08);
          }
          100% {
            transform: translate3d(-40px, 90px, 0) scale(0.96);
          }
        }

        @keyframes driftOrb2 {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-90px, -60px, 0) scale(1.05);
          }
          100% {
            transform: translate3d(-35px, 70px, 0) scale(0.94);
          }
        }

        @keyframes driftOrb3 {
          0% {
            transform: translate3d(0, 0, 0) scale(0.95);
          }
          50% {
            transform: translate3d(60px, -50px, 0) scale(1.1);
          }
          100% {
            transform: translate3d(-50px, -25px, 0) scale(1.02);
          }
        }

        @keyframes slowCompassRotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .animate-pulse-gentle {
          animation: pulseGentle 10s ease-in-out infinite alternate;
        }

        @keyframes pulseGentle {
          0% {
            opacity: 0.28;
          }
          100% {
            opacity: 0.44;
          }
        }
      `}</style>
    </div>
  );
}

export default ClassicLightBackground;
