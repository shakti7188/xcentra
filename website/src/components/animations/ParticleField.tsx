"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  shape: "circle" | "square" | "triangle" | "line";
}

interface ParticleFieldProps {
  particleCount?: number;
  colors?: string[];
  className?: string;
  variant?: "confetti" | "dots" | "stars" | "snow";
  interactive?: boolean;
  speed?: number;
}

export default function ParticleField({
  particleCount = 60,
  colors = ["#F5A623", "#FFC857", "#D48E1A", "#FFFFFF", "#9CA3AF"],
  className = "",
  variant = "confetti",
  interactive = true,
  speed = 1,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const createParticle = useCallback(
    (width: number, height: number): Particle => {
      const shapes: Particle["shape"][] =
        variant === "confetti"
          ? ["circle", "square", "triangle", "line"]
          : variant === "dots"
            ? ["circle"]
            : variant === "stars"
              ? ["circle", "triangle"]
              : ["circle"];

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5 * speed,
        vy:
          variant === "snow"
            ? Math.random() * 0.5 * speed + 0.2
            : (Math.random() - 0.5) * 0.3 * speed,
        size:
          variant === "confetti"
            ? Math.random() * 6 + 3
            : variant === "dots"
              ? Math.random() * 3 + 1.5
              : Math.random() * 4 + 2,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
      };
    },
    [colors, variant, speed]
  );

  const drawParticle = useCallback(
    (ctx: CanvasRenderingContext2D, p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      switch (p.shape) {
        case "circle":
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        case "square":
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          break;
        case "triangle":
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.lineTo(-p.size, p.size);
          ctx.lineTo(p.size, p.size);
          ctx.closePath();
          ctx.fill();
          break;
        case "line":
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1.5;
          ctx.globalAlpha = p.opacity;
          ctx.beginPath();
          ctx.moveTo(-p.size, 0);
          ctx.lineTo(p.size, 0);
          ctx.stroke();
          break;
      }

      ctx.restore();
    },
    []
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
      return { width: rect.width, height: rect.height };
    };

    let { width, height } = resizeCanvas();

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }, () =>
      createParticle(width, height)
    );

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
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

      particlesRef.current.forEach((p) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        // Interactive: repel from cursor
        if (interactive && mouseRef.current.x > 0) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 150;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 0.8;
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        // Apply friction
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Wrap around edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Subtle opacity oscillation
        p.opacity =
          Math.max(0.05, Math.min(0.6, p.opacity + (Math.random() - 0.5) * 0.005));

        drawParticle(ctx, p);
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
  }, [particleCount, createParticle, drawParticle, interactive]);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  );
}
