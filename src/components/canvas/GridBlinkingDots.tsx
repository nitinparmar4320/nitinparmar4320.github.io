'use client';

import React, { useEffect, useRef } from 'react';

interface BlinkingNode {
  baseX: number;
  baseY: number;
  phase: number;
  speed: number;
  color: { r: number; g: number; b: number };
  maxRadius: number;
  glowRadius: number;
  maxAlpha: number;
}

const GRID_SIZE = 64; // Exact spacing matching the 64px blueprint grid lines
const MAGNETIC_RADIUS = 135; // Interaction influence field
const MAX_PULL = 7.5; // Minor magnetic attraction displacement (max ~7.5px)

// Harmonized editorial palette for blinking connection nodes
const PALETTE = [
  { r: 229, g: 83, b: 61 },  // Signature Editorial Vermilion
  { r: 217, g: 119, b: 6 },  // Warm Amber / Gold Telemetry
  { r: 82, g: 103, b: 216 }, // Architectural System Blue
  { r: 46, g: 125, b: 50 },  // Technical Green Status
  { r: 120, g: 122, b: 114 }, // Refined Graphite / Steel
];

/**
 * GridBlinkingDots
 * Renders connection dots precisely at every grid line intersection (where lines cross/collapse),
 * with subtle, organic asynchronous blinking and minor magnetic attraction toward the cursor.
 */
export function GridBlinkingDots() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const activeNodesRef = useRef<BlinkingNode[]>([]);
  const lastInteractionRef = useRef<{ x: number; y: number; time: number }>({ x: -100, y: -100, time: 0 });
  const animFrameIdRef = useRef<number | null>(null);

  // Smooth mouse coordinates for fluid physical elasticity
  const mousePosRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });
  const smoothMouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const magneticStrengthRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Spawn a blinking node at a given intersection
    const spawnBlinkNode = (baseX: number, baseY: number, customColor?: { r: number; g: number; b: number }) => {
      // Don't spawn if already blinking at this exact location
      const exists = activeNodesRef.current.some(
        (n) => Math.hypot(n.baseX - baseX, n.baseY - baseY) < 8
      );
      if (exists) return;

      const color = customColor || PALETTE[Math.floor(Math.random() * PALETTE.length)];

      activeNodesRef.current.push({
        baseX,
        baseY,
        phase: 0,
        speed: 0.022 + Math.random() * 0.032, // ~1.3s to 2.3s blink cycle
        color,
        maxRadius: 2.2 + Math.random() * 1.2,
        glowRadius: 7 + Math.random() * 6,
        maxAlpha: 0.75 + Math.random() * 0.25,
      });
    };

    // Pre-populate with initial random blinking intersection nodes
    const cols = Math.floor(width / GRID_SIZE);
    const rows = Math.floor(height / GRID_SIZE);
    const initialCount = Math.min(Math.max(16, Math.floor((cols * rows) * 0.045)), 36);

    for (let i = 0; i < initialCount; i++) {
      const rx = (Math.floor(Math.random() * (cols + 1))) * GRID_SIZE;
      const ry = (Math.floor(Math.random() * (rows + 1))) * GRID_SIZE;
      spawnBlinkNode(rx, ry);
      if (activeNodesRef.current[activeNodesRef.current.length - 1]) {
        // Randomize initial phase so they don't blink in sync
        activeNodesRef.current[activeNodesRef.current.length - 1].phase = Math.random() * Math.PI;
      }
    }

    // Pointer events: track cursor and pulse connection dots nearby
    const handlePointerMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY, active: true };

      const now = performance.now();
      if (now - lastInteractionRef.current.time < 80) return; // Rate limit check

      const nearestX = Math.round(e.clientX / GRID_SIZE) * GRID_SIZE;
      const nearestY = Math.round(e.clientY / GRID_SIZE) * GRID_SIZE;
      const dist = Math.hypot(e.clientX - nearestX, e.clientY - nearestY);

      if (dist < 36) {
        lastInteractionRef.current = { x: nearestX, y: nearestY, time: now };
        // Trigger with signature vermilion or warm gold
        const pickColor = Math.random() > 0.4 ? PALETTE[0] : PALETTE[1];
        spawnBlinkNode(nearestX, nearestY, pickColor);
      }
    };

    const handleMouseLeave = () => {
      mousePosRef.current.active = false;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Compute magnetic displacement for any dot (smooth, minor attraction)
    const getDisplacedCoord = (bx: number, by: number, mx: number, my: number, strength: number) => {
      if (strength <= 0.001) return { x: bx, y: by };

      const dx = mx - bx;
      const dy = my - by;

      // Fast bounding box rejection for performance
      if (Math.abs(dx) >= MAGNETIC_RADIUS || Math.abs(dy) >= MAGNETIC_RADIUS) {
        return { x: bx, y: by };
      }

      const dist = Math.hypot(dx, dy);
      if (dist >= MAGNETIC_RADIUS || dist <= 0.5) {
        return { x: bx, y: by };
      }

      // Smooth bell curve: 0 pull at dist=0 (prevents collapsing to cursor),
      // peaks at dist = MAGNETIC_RADIUS / 2 (~67px), smoothly falls to 0 at edge.
      const pull = Math.sin((dist / MAGNETIC_RADIUS) * Math.PI) * MAX_PULL * strength;
      const angle = Math.atan2(dy, dx);

      return {
        x: bx + Math.cos(angle) * pull,
        y: by + Math.sin(angle) * pull,
      };
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth lerp mouse coordinates for organic elastic response
      smoothMouseRef.current.x += (mousePosRef.current.x - smoothMouseRef.current.x) * 0.14;
      smoothMouseRef.current.y += (mousePosRef.current.y - smoothMouseRef.current.y) * 0.14;

      const targetStrength = mousePosRef.current.active ? 1 : 0;
      magneticStrengthRef.current += (targetStrength - magneticStrengthRef.current) * 0.08;

      const smX = smoothMouseRef.current.x;
      const smY = smoothMouseRef.current.y;
      const strength = magneticStrengthRef.current;

      const totalCols = Math.ceil(width / GRID_SIZE) + 1;
      const totalRows = Math.ceil(height / GRID_SIZE) + 1;

      // 1. Draw base connection dots at EVERY intersection with minor magnetic attraction
      ctx.fillStyle = 'rgba(175, 178, 168, 0.4)';
      for (let c = 0; c <= totalCols; c++) {
        const bx = c * GRID_SIZE;
        for (let r = 0; r <= totalRows; r++) {
          const by = r * GRID_SIZE;
          const { x, y } = getDisplacedCoord(bx, by, smX, smY, strength);

          ctx.beginPath();
          ctx.arc(x, y, 1.25, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Render and animate actively blinking intersection nodes with magnetic attraction
      const nodes = activeNodesRef.current;
      for (let i = nodes.length - 1; i >= 0; i--) {
        const node = nodes[i];
        node.phase += node.speed;

        if (node.phase >= Math.PI) {
          nodes.splice(i, 1);
          // Spawn a new random blinking dot somewhere on the grid to keep organic activity
          if (nodes.length < initialCount) {
            const rx = (Math.floor(Math.random() * totalCols)) * GRID_SIZE;
            const ry = (Math.floor(Math.random() * totalRows)) * GRID_SIZE;
            spawnBlinkNode(rx, ry);
          }
          continue;
        }

        // Calculate magnetically displaced position for blinking node
        const { x: drawX, y: drawY } = getDisplacedCoord(node.baseX, node.baseY, smX, smY, strength);

        // Smooth sine ease-in-out blink intensity (0 -> 1 -> 0)
        const intensity = Math.sin(node.phase);
        const col = node.color;
        const currentRadius = 1.25 + (node.maxRadius - 1.25) * intensity;

        // Outer diffused light halo
        const grad = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, node.glowRadius);
        grad.addColorStop(0, `rgba(${col.r}, ${col.g}, ${col.b}, ${intensity * 0.48})`);
        grad.addColorStop(0.5, `rgba(${col.r}, ${col.g}, ${col.b}, ${intensity * 0.16})`);
        grad.addColorStop(1, `rgba(${col.r}, ${col.g}, ${col.b}, 0)`);

        ctx.beginPath();
        ctx.arc(drawX, drawY, node.glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Inner glowing core connection dot
        ctx.beginPath();
        ctx.arc(drawX, drawY, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${0.35 + intensity * (node.maxAlpha - 0.35)})`;
        ctx.fill();

        // Optional tiny crosshair accent when at peak brightness
        if (intensity > 0.8) {
          ctx.strokeStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${(intensity - 0.8) * 2.5})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(drawX - 4, drawY);
          ctx.lineTo(drawX + 4, drawY);
          ctx.moveTo(drawX, drawY - 4);
          ctx.lineTo(drawX, drawY + 4);
          ctx.stroke();
        }
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
    />
  );
}

export default GridBlinkingDots;
