"use client";

import { type ReactNode } from "react";

interface MarqueeRowProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export default function MarqueeRow({
  children,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: MarqueeRowProps) {
  const animationDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
    >
      <div
        className={`flex gap-8 ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection,
          width: "max-content",
        }}
      >
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </div>
    </div>
  );
}
