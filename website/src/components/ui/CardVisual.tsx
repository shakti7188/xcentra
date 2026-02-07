"use client";

import { motion } from "framer-motion";

type CardVariant = "black" | "gold" | "platinum";

interface CardVisualProps {
  variant?: CardVariant;
  className?: string;
  animate?: boolean;
  size?: "sm" | "md" | "lg";
}

const cardStyles: Record<
  CardVariant,
  { bg: string; chip: string; text: string; accent: string; label: string }
> = {
  black: {
    bg: "bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]",
    chip: "from-amber-300 to-amber-500",
    text: "text-white",
    accent: "text-white/60",
    label: "CLASSIC",
  },
  gold: {
    bg: "bg-gradient-to-br from-[#d4a853] via-[#f5ce6e] to-[#b8902e]",
    chip: "from-amber-200 to-white",
    text: "text-black/90",
    accent: "text-black/50",
    label: "GOLD",
  },
  platinum: {
    bg: "bg-gradient-to-br from-[#c0c0c0] via-[#e8e8e8] to-[#a8a8a8]",
    chip: "from-gray-300 to-white",
    text: "text-gray-900",
    accent: "text-gray-500",
    label: "PLATINUM",
  },
};

const sizeStyles: Record<string, { w: string; h: string; scale: string }> = {
  sm: { w: "w-[280px]", h: "h-[176px]", scale: "text-[10px]" },
  md: { w: "w-[360px]", h: "h-[226px]", scale: "text-xs" },
  lg: { w: "w-[430px]", h: "h-[270px]", scale: "text-sm" },
};

export default function CardVisual({
  variant = "black",
  className = "",
  animate = false,
  size = "md",
}: CardVisualProps) {
  const style = cardStyles[variant];
  const dims = sizeStyles[size];

  const card = (
    <div
      className={`${dims.w} ${dims.h} ${style.bg} rounded-2xl p-6 relative overflow-hidden shadow-2xl ${className}`}
      style={{
        boxShadow:
          variant === "black"
            ? "0 25px 50px -12px rgba(0,0,0,0.6), 0 0 40px rgba(245,166,35,0.08), inset 0 1px 0 rgba(255,255,255,0.1)"
            : variant === "gold"
            ? "0 25px 50px -12px rgba(180,130,30,0.4), 0 0 40px rgba(245,206,110,0.15), inset 0 1px 0 rgba(255,255,255,0.4)"
            : "0 25px 50px -12px rgba(0,0,0,0.3), 0 0 40px rgba(200,200,200,0.1), inset 0 1px 0 rgba(255,255,255,0.5)",
      }}
    >
      {/* Metallic shine overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 45%, rgba(255,255,255,0.1) 50%, transparent 55%)",
          }}
        />
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Top row: Xcentra logo + NFC icon */}
      <div className="relative z-10 flex items-start justify-between">
        <div className="flex flex-col">
          <span
            className={`${style.text} font-bold tracking-wider ${
              size === "sm" ? "text-sm" : size === "md" ? "text-base" : "text-lg"
            }`}
          >
            XCENTRA
          </span>
          <span
            className={`${style.accent} ${dims.scale} tracking-[0.2em] mt-0.5 font-medium`}
          >
            {style.label}
          </span>
        </div>
        {/* Contactless icon */}
        <svg
          className={`${
            size === "sm" ? "w-5 h-5" : size === "md" ? "w-6 h-6" : "w-7 h-7"
          } ${style.accent}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            d="M8.5 16.5a5 5 0 010-9M5 19a9 9 0 010-14M12 16.5a5 5 0 000-9M15.5 19a9 9 0 000-14"
          />
        </svg>
      </div>

      {/* EMV Chip */}
      <div
        className={`relative z-10 ${
          size === "sm" ? "mt-4 w-9 h-7" : size === "md" ? "mt-5 w-11 h-8" : "mt-6 w-12 h-9"
        } rounded-md overflow-hidden`}
        style={{
          background: `linear-gradient(135deg, #d4a853, #f5ce6e, #d4a853)`,
          boxShadow: "inset 0 0 2px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        {/* Chip lines */}
        <div className="absolute inset-0 flex flex-col justify-center gap-[2px] px-[3px]">
          <div className="h-[1px] bg-black/10" />
          <div className="h-[1px] bg-black/10" />
          <div className="h-[1px] bg-black/10" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1px] h-full bg-black/10" />
        </div>
      </div>

      {/* Card number area */}
      <div
        className={`relative z-10 ${
          size === "sm" ? "mt-3" : size === "md" ? "mt-4" : "mt-5"
        } flex gap-3`}
      >
        {[1, 2, 3, 4].map((group) => (
          <div key={group} className="flex gap-[3px]">
            {[1, 2, 3, 4].map((dot) => (
              <div
                key={dot}
                className={`${
                  size === "sm" ? "w-1.5 h-1.5" : "w-2 h-2"
                } rounded-full ${
                  variant === "black" ? "bg-white/30" : "bg-black/20"
                }`}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Bottom row: cardholder + expiry */}
      <div
        className={`relative z-10 flex items-end justify-between ${
          size === "sm" ? "mt-2" : size === "md" ? "mt-3" : "mt-4"
        }`}
      >
        <div>
          <p className={`${style.accent} ${dims.scale} tracking-wider`}>
            CARDHOLDER
          </p>
          <p
            className={`${style.text} ${
              size === "sm" ? "text-[10px]" : "text-xs"
            } font-semibold tracking-wider mt-0.5`}
          >
            YOUR NAME
          </p>
        </div>
        <div className="text-right">
          <p className={`${style.accent} ${dims.scale} tracking-wider`}>
            VALID THRU
          </p>
          <p
            className={`${style.text} ${
              size === "sm" ? "text-[10px]" : "text-xs"
            } font-semibold tracking-wider mt-0.5`}
          >
            12/28
          </p>
        </div>
      </div>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        whileHover={{ scale: 1.02, rotateY: 5 }}
        transition={{ duration: 0.3 }}
        style={{ perspective: "1000px" }}
      >
        {card}
      </motion.div>
    );
  }

  return card;
}
