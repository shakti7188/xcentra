"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

// Real recognizable SVG logos for each media brand
const CoinDeskLogo = () => (
  <svg viewBox="0 0 200 40" className="h-6 sm:h-7 w-auto" fill="currentColor">
    <text x="0" y="30" fontFamily="'Georgia', serif" fontSize="28" fontWeight="700" letterSpacing="-0.5">
      <tspan fill="currentColor">COIN</tspan><tspan fill="currentColor" fontWeight="400">DESK</tspan>
    </text>
  </svg>
);

const CoinTelegraphLogo = () => (
  <svg viewBox="0 0 240 40" className="h-6 sm:h-7 w-auto" fill="currentColor">
    <text x="0" y="28" fontFamily="'Helvetica Neue', sans-serif" fontSize="22" fontWeight="800" letterSpacing="0.5">
      Cointelegraph
    </text>
  </svg>
);

const BloombergLogo = () => (
  <svg viewBox="0 0 200 40" className="h-5 sm:h-6 w-auto" fill="currentColor">
    <text x="0" y="28" fontFamily="'Arial', sans-serif" fontSize="24" fontWeight="700" letterSpacing="1">
      Bloomberg
    </text>
  </svg>
);

const ForbesLogo = () => (
  <svg viewBox="0 0 160 40" className="h-6 sm:h-7 w-auto" fill="currentColor">
    <text x="0" y="32" fontFamily="'Georgia', serif" fontSize="32" fontWeight="400" fontStyle="italic" letterSpacing="0.5">
      Forbes
    </text>
  </svg>
);

const TechCrunchLogo = () => (
  <svg viewBox="0 0 200 40" className="h-5 sm:h-6 w-auto" fill="currentColor">
    <text x="0" y="28" fontFamily="'Helvetica Neue', sans-serif" fontSize="24" fontWeight="800" letterSpacing="-0.5">
      TechCrunch
    </text>
  </svg>
);

const TheBlockLogo = () => (
  <svg viewBox="0 0 180 40" className="h-5 sm:h-6 w-auto" fill="currentColor">
    <rect x="0" y="8" width="24" height="24" rx="4" fill="currentColor" opacity="0.8" />
    <text x="30" y="28" fontFamily="'Helvetica Neue', sans-serif" fontSize="22" fontWeight="700" letterSpacing="0.5">
      The Block
    </text>
  </svg>
);

const DecryptLogo = () => (
  <svg viewBox="0 0 160 40" className="h-5 sm:h-6 w-auto" fill="currentColor">
    <text x="0" y="28" fontFamily="'Courier New', monospace" fontSize="24" fontWeight="700" letterSpacing="1">
      decrypt
    </text>
  </svg>
);

const YahooFinanceLogo = () => (
  <svg viewBox="0 0 220 40" className="h-5 sm:h-6 w-auto" fill="currentColor">
    <text x="0" y="30" fontFamily="'Helvetica Neue', sans-serif" fontSize="26" fontWeight="800" letterSpacing="-0.5">
      Yahoo!
    </text>
    <text x="108" y="30" fontFamily="'Helvetica Neue', sans-serif" fontSize="26" fontWeight="300" letterSpacing="-0.5">
      finance
    </text>
  </svg>
);

const mediaLogos = [
  { name: "CoinDesk", Logo: CoinDeskLogo },
  { name: "CoinTelegraph", Logo: CoinTelegraphLogo },
  { name: "Bloomberg", Logo: BloombergLogo },
  { name: "Forbes", Logo: ForbesLogo },
  { name: "TechCrunch", Logo: TechCrunchLogo },
  { name: "The Block", Logo: TheBlockLogo },
  { name: "Decrypt", Logo: DecryptLogo },
  { name: "Yahoo Finance", Logo: YahooFinanceLogo },
];

export default function TrustBar() {
  return (
    <section className="bg-bg-primary py-12 border-b border-border-dark overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <p className="text-center text-sm text-text-muted uppercase tracking-widest mb-8">
            As Seen In
          </p>
        </ScrollReveal>

        {/* Infinite scrolling logo marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex items-center gap-12 md:gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {/* Double set for seamless loop */}
            {[...mediaLogos, ...mediaLogos].map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="flex-shrink-0 text-text-secondary/25 hover:text-text-secondary/50 transition-all duration-500 cursor-default"
              >
                <item.Logo />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
