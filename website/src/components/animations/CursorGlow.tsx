"use client";

import { useEffect, useRef } from "react";

interface CursorGlowProps {
  className?: string;
  color?: string;
  size?: number;
  opacity?: number;
}

/**
 * A soft radial glow that follows the cursor —
 * creates a spotlight/flashlight effect on dark sections.
 */
export default function CursorGlow({
  className = "",
  color = "245, 166, 35",
  size = 400,
  opacity = 0.08,
}: CursorGlowProps) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = glow.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.background = `radial-gradient(${size}px circle at ${x}px ${y}px, rgba(${color}, ${opacity}), transparent)`;
    };

    const parent = glow.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      return () => parent.removeEventListener("mousemove", handleMouseMove);
    }
  }, [color, size, opacity]);

  return (
    <div
      ref={glowRef}
      className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${className}`}
    />
  );
}
