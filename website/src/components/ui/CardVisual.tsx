"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type CardVariant = "black" | "gold" | "platinum" | "virtual";

interface CardVisualProps {
  variant?: CardVariant;
  className?: string;
  animate?: boolean;
  size?: "sm" | "md" | "lg";
}

const cardStyles: Record<
  CardVariant,
  {
    bg: string;
    text: string;
    accent: string;
    label: string;
    logo: string;
    numColor: string;
    blobColor: string;
    stripeColor: string;
    networkCircle1: string;
    networkCircle2: string;
  }
> = {
  black: {
    bg: "bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23]",
    text: "text-white/90",
    accent: "text-white/40",
    label: "PHYSICAL",
    logo: "/images/logos/xcentra-logo-white.png",
    numColor: "text-white/60",
    blobColor: "rgba(245,166,35,0.08)",
    stripeColor: "#F5A623",
    networkCircle1: "rgba(245,166,35,0.5)",
    networkCircle2: "rgba(245,166,35,0.35)",
  },
  gold: {
    bg: "bg-gradient-to-br from-[#c9a24d] via-[#e8c868] to-[#a87e2a]",
    text: "text-[#2a1f06]",
    accent: "text-[#5a4520]/60",
    label: "GOLD",
    logo: "/images/logos/xcentra-logo-transparent.png",
    numColor: "text-[#5a4520]/50",
    blobColor: "rgba(255,255,255,0.1)",
    stripeColor: "#7a5c1e",
    networkCircle1: "rgba(90,69,32,0.4)",
    networkCircle2: "rgba(90,69,32,0.25)",
  },
  platinum: {
    bg: "bg-gradient-to-br from-[#b8b8b8] via-[#e0e0e0] to-[#9a9a9a]",
    text: "text-gray-800",
    accent: "text-gray-500/70",
    label: "PLATINUM",
    logo: "/images/logos/xcentra-logo-transparent.png",
    numColor: "text-gray-500/60",
    blobColor: "rgba(0,0,0,0.04)",
    stripeColor: "#888",
    networkCircle1: "rgba(100,100,100,0.35)",
    networkCircle2: "rgba(100,100,100,0.2)",
  },
  virtual: {
    bg: "bg-gradient-to-br from-[#0f1118] via-[#151921] to-[#0d0f15]",
    text: "text-white/85",
    accent: "text-white/30",
    label: "VIRTUAL",
    logo: "/images/logos/xcentra-logo-white.png",
    numColor: "text-white/45",
    blobColor: "rgba(245,166,35,0.05)",
    stripeColor: "#F5A623",
    networkCircle1: "rgba(245,166,35,0.4)",
    networkCircle2: "rgba(245,166,35,0.25)",
  },
};

const sizeStyles: Record<
  string,
  { w: string; h: string; labelSize: string; logoH: string; logoW: number; pad: string; numSize: string; nameSize: string }
> = {
  sm: { w: "w-[280px]", h: "h-[176px]", labelSize: "text-[7px]", logoH: "h-7", logoW: 120, pad: "p-4", numSize: "text-[13px]", nameSize: "text-[9px]" },
  md: { w: "w-[360px]", h: "h-[226px]", labelSize: "text-[8px]", logoH: "h-9", logoW: 150, pad: "p-5", numSize: "text-[16px]", nameSize: "text-[10px]" },
  lg: { w: "w-[430px]", h: "h-[270px]", labelSize: "text-[9px]", logoH: "h-10", logoW: 170, pad: "p-6", numSize: "text-lg", nameSize: "text-xs" },
};

const cardNumbers: Record<CardVariant, string> = {
  black: "5412  7890  1234  5678",
  gold: "4821  6390  0052  7741",
  platinum: "5500  3412  8899  1062",
  virtual: "4900  1188  7723  4056",
};

/* Mastercard-style double circle SVG with DEBIT text */
function CardNetworkLogo({
  c1,
  c2,
  accent,
  size,
}: {
  c1: string;
  c2: string;
  accent: string;
  size: string;
}) {
  const s = size === "sm" ? 28 : size === "md" ? 34 : 40;
  return (
    <div className="flex flex-col items-center">
      <svg width={s} height={s * 0.62} viewBox="0 0 48 30" fill="none">
        <circle cx="17" cy="15" r="13" fill={c1} />
        <circle cx="31" cy="15" r="13" fill={c2} />
      </svg>
      <span
        className={`${accent} font-bold tracking-[0.15em] ${
          size === "sm" ? "text-[5px]" : size === "md" ? "text-[6px]" : "text-[7px]"
        } mt-0.5`}
      >
        DEBIT
      </span>
    </div>
  );
}

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
      className={`${dims.w} ${dims.h} ${style.bg} rounded-2xl ${dims.pad} relative overflow-hidden shadow-2xl flex flex-col ${className}`}
      style={{
        boxShadow:
          variant === "black" || variant === "virtual"
            ? "0 25px 50px -12px rgba(0,0,0,0.6), 0 0 40px rgba(245,166,35,0.08), inset 0 1px 0 rgba(255,255,255,0.1)"
            : variant === "gold"
            ? "0 25px 50px -12px rgba(180,130,30,0.4), 0 0 40px rgba(245,206,110,0.15), inset 0 1px 0 rgba(255,255,255,0.4)"
            : "0 25px 50px -12px rgba(0,0,0,0.3), 0 0 40px rgba(200,200,200,0.1), inset 0 1px 0 rgba(255,255,255,0.5)",
      }}
    >
      {/* Decorative blob shape — top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          right: "-8%",
          width: "55%",
          height: "75%",
          borderRadius: "0 16px 0 50%",
          background: style.blobColor,
        }}
      />

      {/* Metallic shine sweep */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background:
              "linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.4) 44%, rgba(255,255,255,0.15) 50%, transparent 56%)",
          }}
        />
      </div>

      {/* Bottom accent stripe */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: size === "sm" ? "2px" : "3px",
          background: `linear-gradient(90deg, ${style.stripeColor}, ${style.stripeColor}aa, ${style.stripeColor})`,
        }}
      />

      {/* Top row: Xcentra logo + tier label */}
      <div className="relative z-10 flex items-start justify-between">
        <Image
          src={style.logo}
          alt="Xcentra"
          width={dims.logoW}
          height={50}
          className={`object-contain ${dims.logoH} w-auto`}
        />
        <span
          className={`${style.accent} ${dims.labelSize} tracking-[0.2em] font-bold`}
        >
          {style.label}
        </span>
      </div>

      {/* Spacer to push chip toward vertical center */}
      <div className="flex-1 min-h-1" />

      {/* EMV Chip + Contactless icon */}
      <div className="relative z-10 flex items-center gap-2">
        <div
          className={`${
            size === "sm" ? "w-8 h-6" : size === "md" ? "w-10 h-7" : "w-11 h-8"
          } rounded-md overflow-hidden relative`}
          style={{
            background: "linear-gradient(135deg, #d4a853, #f5ce6e, #d4a853)",
            boxShadow:
              "inset 0 0 2px rgba(0,0,0,0.2), 0 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          {/* Chip cross pattern */}
          <div className="absolute inset-[20%] border border-black/10 rounded-[1px]" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-black/8" />
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-black/8" />
        </div>
        <svg
          className={`${
            size === "sm" ? "w-4 h-4" : size === "md" ? "w-5 h-5" : "w-5 h-5"
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

      {/* Card number — real digits */}
      <p
        className={`relative z-10 ${
          size === "sm" ? "mt-1.5" : size === "md" ? "mt-2" : "mt-2.5"
        } ${dims.numSize} ${style.numColor} font-semibold tracking-[0.12em] font-mono`}
      >
        {cardNumbers[variant]}
      </p>

      {/* Small fixed spacer — tighter above bottom row */}
      <div className={size === "sm" ? "mt-2" : size === "md" ? "mt-2.5" : "mt-3"} />

      {/* Bottom row: valid thru + cardholder + network logo */}
      <div className="relative z-10 flex items-end justify-between mt-auto">
        <div className="flex gap-4 sm:gap-5 items-end">
          <div>
            <p className={`${style.accent} ${dims.labelSize} tracking-wider leading-none`}>
              VALID THRU
            </p>
            <p
              className={`${style.text} ${dims.nameSize} font-semibold tracking-wider mt-0.5 leading-none`}
            >
              12/28
            </p>
          </div>
          <div>
            <p className={`${style.accent} ${dims.labelSize} tracking-wider leading-none`}>
              CARDHOLDER
            </p>
            <p
              className={`${style.text} ${dims.nameSize} font-semibold tracking-wider mt-0.5 leading-none`}
            >
              GLOBAL CITIZEN
            </p>
          </div>
        </div>
        <CardNetworkLogo
          c1={style.networkCircle1}
          c2={style.networkCircle2}
          accent={style.accent}
          size={size}
        />
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
