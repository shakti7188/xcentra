"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { globalCardBenefits } from "@/lib/constants/features";
import { Smartphone, Globe, Zap, Coffee } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Globe,
  Zap,
  Coffee,
};

const iconColors: Record<string, { bg: string; text: string }> = {
  Smartphone: { bg: "bg-blue-500/20", text: "text-blue-400" },
  Globe: { bg: "bg-emerald-500/20", text: "text-emerald-400" },
  Zap: { bg: "bg-amber-500/20", text: "text-amber-400" },
  Coffee: { bg: "bg-purple-500/20", text: "text-purple-400" },
};

const cards = [
  {
    id: "physical",
    label: "Xcentra Physical",
    type: "DEBIT",
    image: "/images/stock/debit-card-black.jpg",
  },
  {
    id: "virtual",
    label: "Xcentra Virtual",
    type: "VIRTUAL",
    image: "/images/stock/debit-card-gold.jpg",
  },
  {
    id: "premium",
    label: "Xcentra Premium",
    type: "PREMIUM",
    image: "/images/stock/debit-card-platinum.jpg",
  },
];

export default function GlobalCards() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Card 1 (left): spreads left and rotates counter-clockwise
  const card1X = useTransform(scrollYProgress, [0.1, 0.25, 0.4, 0.55], [0, -60, -160, -220]);
  const card1Y = useTransform(scrollYProgress, [0.1, 0.25, 0.4, 0.55], [0, -20, -30, -10]);
  const card1Rotate = useTransform(scrollYProgress, [0.1, 0.25, 0.4, 0.55], [0, -8, -18, -24]);
  const card1Scale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 0.95]);
  const card1Opacity = useTransform(scrollYProgress, [0.05, 0.15], [0.4, 1]);

  // Card 2 (center): stays centered, scales up slightly
  const card2Y = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [30, 0, -15]);
  const card2Scale = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0.95, 1.05, 1.08]);
  const card2Rotate = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0, 1, 0]);

  // Card 3 (right): spreads right and rotates clockwise
  const card3X = useTransform(scrollYProgress, [0.1, 0.25, 0.4, 0.55], [0, 60, 160, 220]);
  const card3Y = useTransform(scrollYProgress, [0.1, 0.25, 0.4, 0.55], [0, -15, -25, -5]);
  const card3Rotate = useTransform(scrollYProgress, [0.1, 0.25, 0.4, 0.55], [0, 8, 18, 24]);
  const card3Scale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 0.95]);
  const card3Opacity = useTransform(scrollYProgress, [0.05, 0.15], [0.4, 1]);

  // Shadow/glow intensity for center card
  const glowOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0.1, 0.4]);

  return (
    <SectionWrapper theme="dark">
      <div ref={sectionRef}>
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge variant="live" className="mb-4">
              Live Today
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Xcentra Global Cards
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Virtual and physical debit cards that let you pay for coffee,
              groceries, travel, subscriptions, and daily expenses. Your stablecoin
              balance converts to local currency instantly.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Stacked cards that fan out on scroll */}
          <div className="relative flex justify-center items-center min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]">
            {/* Card 1 — Back left */}
            <motion.div
              style={{
                x: card1X,
                y: card1Y,
                rotate: card1Rotate,
                scale: card1Scale,
                opacity: card1Opacity,
              }}
              className="absolute z-10"
            >
              <div className="relative w-[280px] sm:w-[340px] h-[176px] sm:h-[214px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                <Image
                  src={cards[0].image}
                  alt={cards[0].label}
                  fill
                  className="object-cover"
                />
                {/* Card overlay with branding */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="h-5 w-5 rounded-md bg-accent flex items-center justify-center">
                    <span className="text-bg-primary font-bold text-[8px]">X</span>
                  </div>
                  <span className="text-white/80 text-xs font-semibold">{cards[0].label}</span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="text-white/50 text-[10px] font-semibold tracking-wider">{cards[0].type}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/40 text-xs font-mono">•••• •••• •••• 7291</span>
                </div>
              </div>
            </motion.div>

            {/* Card 2 — Center (main, on top) */}
            <motion.div
              style={{
                y: card2Y,
                scale: card2Scale,
                rotate: card2Rotate,
              }}
              className="absolute z-20"
            >
              <div className="relative w-[300px] sm:w-[360px] h-[189px] sm:h-[227px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={cards[1].image}
                  alt={cards[1].label}
                  fill
                  className="object-cover"
                />
                {/* Accent glow border effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-accent/30"
                  style={{ opacity: glowOpacity }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50" />
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-accent flex items-center justify-center">
                    <span className="text-bg-primary font-bold text-[10px]">X</span>
                  </div>
                  <span className="text-white text-sm font-semibold">{cards[1].label}</span>
                </div>
                <div className="absolute top-5 right-5">
                  <Badge variant="accent" className="text-[10px] py-0.5 px-2">{cards[1].type}</Badge>
                </div>
                <div className="absolute bottom-5 left-5">
                  <p className="text-white/50 text-xs tracking-[0.25em] font-mono">•••• •••• •••• 3184</p>
                  <p className="text-white text-sm font-medium mt-1">Global Citizen</p>
                </div>
                <div className="absolute bottom-5 right-5">
                  <p className="text-accent text-sm font-semibold">$12,450.00</p>
                </div>
              </div>
              {/* Glow shadow under center card */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-accent/20 rounded-full blur-xl"
                style={{ opacity: glowOpacity }}
              />
            </motion.div>

            {/* Card 3 — Front right */}
            <motion.div
              style={{
                x: card3X,
                y: card3Y,
                rotate: card3Rotate,
                scale: card3Scale,
                opacity: card3Opacity,
              }}
              className="absolute z-10"
            >
              <div className="relative w-[280px] sm:w-[340px] h-[176px] sm:h-[214px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                <Image
                  src={cards[2].image}
                  alt={cards[2].label}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="h-5 w-5 rounded-md bg-accent/80 flex items-center justify-center">
                    <span className="text-bg-primary font-bold text-[8px]">X</span>
                  </div>
                  <span className="text-white/80 text-xs font-semibold">{cards[2].label}</span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="text-accent/60 text-[10px] font-semibold tracking-wider">{cards[2].type}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/40 text-xs font-mono">•••• •••• •••• 5637</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Benefits with colorful icons */}
          <div className="space-y-6 pt-8 md:pt-0">
            {globalCardBenefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon] || Globe;
              const colors = iconColors[benefit.icon] || { bg: "bg-accent/10", text: "text-accent" };
              return (
                <ScrollReveal key={benefit.title} delay={0.1 * index}>
                  <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.bg} group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
            <ScrollReveal delay={0.5}>
              <Button variant="secondary" size="lg" className="mt-4" href="#">
                Get Xcentra Card
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
