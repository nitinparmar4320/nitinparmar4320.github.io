'use client';

import React, { useEffect, useRef } from 'react';

interface FogPuff {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  growthRate: number;
  r: number;
  g: number;
  b: number;
  baseAlpha: number;
  alpha: number;
  life: number;
  maxLife: number;
}

// Ultra-light, airy luminous pastel RGB spectrum (high-channel values >= 230 for sheer delicacy)
const VERY_LIGHT_RGB_PALETTE = [
  { r: 254, g: 232, b: 236 }, // Ultra-Light Soft Petal Rose
  { r: 230, g: 250, b: 242 }, // Ultra-Light Spring Breeze Mint
  { r: 232, g: 242, b: 255 }, // Ultra-Light Celestial Sky / Powder Blue
  { r: 230, g: 252, b: 252 }, // Ultra-Light Crisp Pale Aqua
  { r: 246, g: 236, b: 254 }, // Ultra-Light Sheer Lilac
  { r: 255, g: 244, b: 232 }, // Ultra-Light Warm Cream Peach
  { r: 240, g: 238, b: 255 }, // Ultra-Light Soft Whispering Lavender
];

export function RgbFogCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const puffsRef = useRef<FogPuff[]>([]);
  const animFrameIdRef = useRef<number | null>(null);
  const lastPosRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const colorIndexRef = useRef<number>(0);
  const isRunningRef = useRef<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Spawn a directional, whisper-sheer, ultra-light RGB fog puff
    const spawnPuff = (
      x: number,
      y: number,
      dirX: number,
      dirY: number,
      speed: number
    ) => {
      // Pick next color from very light palette
      const col = VERY_LIGHT_RGB_PALETTE[colorIndexRef.current % VERY_LIGHT_RGB_PALETTE.length];
      colorIndexRef.current += 1;

      // Calculate directional trajectory angle
      const baseAngle = Math.atan2(dirY, dirX);

      // Forward cone spread (~45 degrees forward in movement direction)
      const spreadAngle = (Math.random() - 0.5) * 0.85;
      const finalAngle = baseAngle + spreadAngle;

      // Forward velocity in direction of cursor motion
      const forwardVelocity = Math.min(speed * 0.28 + 1.2, 8.0);
      const vx = Math.cos(finalAngle) * forwardVelocity + (Math.random() - 0.5) * 0.4;
      const vy = Math.sin(finalAngle) * forwardVelocity + (Math.random() - 0.5) * 0.4;

      // Very low intensity: 0.020 to 0.038 max (sheer, translucent atmospheric haze)
      const baseAlpha = 0.02 + Math.random() * 0.018;

      puffsRef.current.push({
        x: x + (Math.random() - 0.5) * 16,
        y: y + (Math.random() - 0.5) * 16,
        vx,
        vy,
        radius: 48 + Math.random() * 36, // Large, airy diffuse puff
        growthRate: 1.6 + Math.random() * 2.0, // Expands softly into delicate misty aura
        r: col.r,
        g: col.g,
        b: col.b,
        baseAlpha,
        alpha: baseAlpha,
        life: 0,
        maxLife: 50 + Math.floor(Math.random() * 35), // ~1.0s to 1.5s duration
      });
    };

    // Animation render loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const puffs = puffsRef.current;

      for (let i = puffs.length - 1; i >= 0; i--) {
        const p = puffs[i];
        p.life += 1;

        // Fluid smoke physics: forward drift with soft deceleration
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.958;
        p.vy *= 0.958;

        // Gentle thermal buoyancy
        p.vy -= 0.02;

        // Expansive gaseous diffusion
        p.radius += p.growthRate;
        p.growthRate *= 0.985;

        const progress = p.life / p.maxLife;

        // Smooth cubic fade out curve
        p.alpha = p.baseAlpha * Math.pow(1 - progress, 1.3);

        if (p.life >= p.maxLife || p.alpha <= 0.002) {
          puffs.splice(i, 1);
          continue;
        }

        // Render soft, feathered, ultra-low-intensity Gaussian radial fog cloud
        const rad = p.radius;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad);
        grad.addColorStop(0, `rgba(${p.r}, ${p.g}, ${p.b}, ${p.alpha * 0.45})`);
        grad.addColorStop(0.35, `rgba(${p.r}, ${p.g}, ${p.b}, ${p.alpha * 0.22})`);
        grad.addColorStop(0.7, `rgba(${p.r}, ${p.g}, ${p.b}, ${p.alpha * 0.05})`);
        grad.addColorStop(1, `rgba(${p.r}, ${p.g}, ${p.b}, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      if (puffs.length > 0) {
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

    // Handle cursor movement with velocity and direction computation
    const handlePointerMove = (clientX: number, clientY: number) => {
      const now = performance.now();

      if (!lastPosRef.current) {
        lastPosRef.current = { x: clientX, y: clientY, time: now };
        return;
      }

      const dx = clientX - lastPosRef.current.x;
      const dy = clientY - lastPosRef.current.y;
      const dist = Math.hypot(dx, dy);

      // Only spawn when actively moving
      if (dist > 4) {
        const dt = Math.max(now - lastPosRef.current.time, 10);
        const speed = (dist / dt) * 16;

        // Controlled puff emission to maintain ultra-light, non-accumulating mist
        const puffCount = Math.min(Math.max(1, Math.floor(dist / 22)), 2);

        for (let s = 1; s <= puffCount; s++) {
          const t = s / puffCount;
          const interpX = lastPosRef.current.x + dx * t;
          const interpY = lastPosRef.current.y + dy * t;

          if (puffsRef.current.length < 80) {
            spawnPuff(interpX, interpY, dx, dy, speed);
          }
        }

        lastPosRef.current = { x: clientX, y: clientY, time: now };
        startAnimation();
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handlePointerMove(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none select-none -z-10"
      style={{
        width: '100vw',
        height: '100vh',
      }}
    />
  );
}

export default RgbFogCanvas;
