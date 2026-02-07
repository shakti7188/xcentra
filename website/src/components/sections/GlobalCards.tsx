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
    label: "Xcentra Physical Card",
    image: "/images/stock/xcentra-card-black.png",
  },
  {
    id: "virtual",
    label: "Xcentra Virtual Card",
    image: "/images/stock/xcentra-card-gold.png",
  },
  {
    id: "premium",
    label: "Xcentra Premium Card",
    image: "/images/stock/xcentra-card-platinum.png",
  },
];

export default function GlobalCards() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Bottom card (card 0): starts buried, slides down-left
  const card0Y = useTransform(scrollYProgress, [0.15, 0.35, 0.55], [0, 40, 80]);
  const card0X = useTransform(scrollYProgress, [0.15, 0.35, 0.55], [0, -20, -40]);
  const card0Rotate = useTransform(scrollYProgress, [0.15, 0.35, 0.55], [0, -4, -8]);

  // Middle card (card 1): stays mostly centered
  const card1Y = useTransform(scrollYProgress, [0.15, 0.35, 0.55], [0, 0, 0]);
  const card1X = useTransform(scrollYProgress, [0.15, 0.35, 0.55], [0, 0, 0]);
  const card1Rotate = useTransform(scrollYProgress, [0.15, 0.35, 0.55], [0, 0, 0]);

  // Top card (card 2): slides up-right
  const card2Y = useTransform(scrollYProgress, [0.15, 0.35, 0.55], [0, -40, -80]);
  const card2X = useTransform(scrollYProgress, [0.15, 0.35, 0.55], [0, 20, 40]);
  const card2Rotate = useTransform(scrollYProgress, [0.15, 0.35, 0.55], [0, 4, 8]);

  // Overall scene 3D rotation on scroll
  const sceneRotateX = useTransform(scrollYProgress, [0.1, 0.4], [55, 35]);
  const sceneRotateZ = useTransform(scrollYProgress, [0.1, 0.4], [-25, -15]);
  const sceneScale = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0.85, 1, 1.05]);

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
              groceries, travel, subscriptions, and daily expenses.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: 3D Tilted Card Stack */}
          <div className="relative flex justify-center items-center min-h-[400px] sm:min-h-[480px] lg:min-h-[540px]" style={{ perspective: "1200px" }}>
            <motion.div
              style={{
                rotateX: sceneRotateX,
                rotateZ: sceneRotateZ,
                scale: sceneScale,
                transformStyle: "preserve-3d",
              }}
              className="relative w-[320px] sm:w-[380px] h-[200px] sm:h-[240px]"
            >
              {/* Card 0 — Bottom (back) */}
              <motion.div
                style={{
                  y: card0Y,
                  x: card0X,
                  rotate: card0Rotate,
                }}
                className="absolute inset-0 z-10"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                  <Image
                    src={cards[0].image}
                    alt={cards[0].label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40" />
                </div>
              </motion.div>

              {/* Card 1 — Middle */}
              <motion.div
                style={{
                  y: card1Y,
                  x: card1X,
                  rotate: card1Rotate,
                }}
                className="absolute inset-0 z-20"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
                  <Image
                    src={cards[1].image}
                    alt={cards[1].label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-transparent to-black/30" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
                </div>
              </motion.div>

              {/* Card 2 — Top (front) */}
              <motion.div
                style={{
                  y: card2Y,
                  x: card2X,
                  rotate: card2Rotate,
                }}
                className="absolute inset-0 z-30"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_35px_80px_rgba(245,166,35,0.15)]">
                  <Image
                    src={cards[2].image}
                    alt={cards[2].label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/25" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-accent/20" />
                </div>
              </motion.div>

              {/* Ambient glow beneath the stack */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[80%] h-16 bg-accent/15 rounded-full blur-2xl" />
            </motion.div>
          </div>

          {/* Right: Benefits with colorful icons */}
          <div className="space-y-6 pt-8 md:pt-0">
            {globalCardBenefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon] || Globe;
              const colors = iconColors[benefit.icon] || {
                bg: "bg-accent/10",
                text: "text-accent",
              };
              return (
                <ScrollReveal key={benefit.title} delay={0.1 * index}>
                  <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.bg} group-hover:scale-110 transition-transform`}
                    >
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
              <Button variant="secondary" size="lg" className="mt-4" href="/cards">
                Get Xcentra Card
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
