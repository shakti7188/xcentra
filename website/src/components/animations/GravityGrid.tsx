"use client";

import { useEffect, useRef, useCallback } from "react";

interface GravityGridProps {
  className?: string;
  dotColor?: string;
  dotSize?: number;
  gap?: number;
  interactiveRadius?: number;
  repelStrength?: number;
}

/**
 * A grid of dots that react to cursor position —
 * dots near the cursor get pushed away and glow, creating an antigravity-like field.
 */
export default function GravityGrid({
  className = "",
  dotColor = "rgba(245, 166, 35, 0.15)",
  dotSize = 1.5,
  gap = 28,
  interactiveRadius = 120,
  repelStrength = 15,
}: GravityGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);

  interface GridDot {
    originX: number;
    originY: number;
    x: number;
    y: number;
  }

  const dotsRef = useRef<GridDot[]>([]);

  const initDots = useCallback(
    (width: number, height: number) => {
      const dots: GridDot[] = [];
      for (let x = gap; x < width; x += gap) {
        for (let y = gap; y < height; y += gap) {
          dots.push({ originX: x, originY: y, x, y });
        }
      }
      dotsRef.current = dots;
    },
    [gap]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);
      initDots(rect.width, rect.height);
      return { width: rect.width, height: rect.height };
    };

    let { width, height } = resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleResize = () => {
      const dims = resizeCanvas();
      width = dims.width;
      height = dims.height;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      dotsRef.current.forEach((dot) => {
        const dx = dot.originX - mouseRef.current.x;
        const dy = dot.originY - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < interactiveRadius) {
          const force = (1 - dist / interactiveRadius) * repelStrength;
          const angle = Math.atan2(dy, dx);
          dot.x = dot.originX + Math.cos(angle) * force;
          dot.y = dot.originY + Math.sin(angle) * force;

          // Glow effect — closer dots are brighter and bigger
          const glowFactor = 1 - dist / interactiveRadius;
          const size = dotSize + glowFactor * 2;
          const alpha = Math.min(1, 0.15 + glowFactor * 0.8);

          ctx.beginPath();
          ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245, 166, 35, ${alpha})`;
          ctx.fill();

          // Additional glow ring
          if (glowFactor > 0.3) {
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, size + 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(245, 166, 35, ${glowFactor * 0.15})`;
            ctx.fill();
          }
        } else {
          // Spring back to origin
          dot.x += (dot.originX - dot.x) * 0.1;
          dot.y += (dot.originY - dot.y) * 0.1;

          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = dotColor;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [dotColor, dotSize, interactiveRadius, repelStrength, initDots]);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
    </div>
  );
}
