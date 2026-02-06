"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { roadmapPhases } from "@/lib/constants/roadmap";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CursorGlow from "@/components/animations/CursorGlow";
import { CheckCircle, Clock, Rocket, Sparkles } from "lucide-react";

const statusConfig = {
  live: {
    icon: CheckCircle,
    badge: "accent" as const,
    glow: "shadow-accent/20",
    border: "border-accent/30",
    line: "bg-accent",
  },
  coming: {
    icon: Clock,
    badge: "coming" as const,
    glow: "shadow-accent/10",
    border: "border-accent/20",
    line: "bg-accent/40",
  },
  future: {
    icon: Rocket,
    badge: "future" as const,
    glow: "shadow-white/5",
    border: "border-border-dark",
    line: "bg-border-dark",
  },
};

function PhaseCard({
  phase,
  index,
}: {
  phase: (typeof roadmapPhases)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const config = statusConfig[phase.status];
  const Icon = config.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      <div className="flex items-start gap-6 lg:gap-8">
        {/* Timeline dot */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${config.border} border-2 bg-bg-primary ${config.glow} shadow-lg`}
          >
            <Icon className="h-5 w-5 text-accent" />
          </div>
          {index < roadmapPhases.length - 1 && (
            <div className={`w-0.5 h-full min-h-[120px] ${config.line} mt-2`} />
          )}
        </div>

        {/* Content */}
        <div
          className={`glass rounded-2xl p-6 lg:p-8 flex-1 card-hover-glow ${config.border} border`}
        >
          <div className="flex items-center gap-3 mb-3">
            <Badge
              variant={config.badge}
            >
              {phase.subtitle}
            </Badge>
            <span className="text-xs text-text-muted font-mono">
              Phase {phase.phase}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-text-primary mb-2">
            {phase.title}
          </h3>
          <p className="text-text-secondary mb-4 leading-relaxed">
            {phase.description}
          </p>

          <ul className="space-y-2 mb-4">
            {phase.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <Sparkles className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary">{feature}</span>
              </li>
            ))}
          </ul>

          {phase.status !== "live" && (
            <Button variant="outline-light" size="sm" href="#">
              Join Waitlist
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Roadmap() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-primary overflow-hidden">
      <CursorGlow size={400} opacity={0.04} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">
              Product Roadmap
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Xcentra Roadmap —{" "}
              <span className="gradient-text">Global Payments</span>{" "}
              Infrastructure
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              From stablecoin cards to a full financial ecosystem. Here&apos;s
              what we&apos;re building.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-2">
          {roadmapPhases.map((phase, index) => (
            <PhaseCard key={phase.title} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
