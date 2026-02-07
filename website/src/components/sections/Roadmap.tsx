"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CursorGlow from "@/components/animations/CursorGlow";
import { useOrderForm } from "@/components/providers/OrderFormProvider";
import {
  Check,
  Circle,
  ArrowRight,
  CreditCard,
  Send,
  Landmark,
  Store,
} from "lucide-react";

/* ─── Phase data with milestone-level granularity ─── */
const phases = [
  {
    id: "01",
    title: "Global Spending Cards",
    status: "live" as const,
    quarter: "Q4 2025",
    tagline: "Spend stablecoins like real money — anywhere in the world.",
    icon: CreditCard,
    color: { accent: "text-accent", bg: "bg-accent", ring: "ring-accent/30", gradient: "from-accent/20 via-accent/5 to-transparent" },
    milestones: [
      { label: "Virtual card issuance", done: true },
      { label: "Physical Mastercard debit cards", done: true },
      { label: "Real-time USDC / USDT conversion", done: true },
      { label: "Apple Pay & Google Pay", done: true },
      { label: "Multi-currency spend (150+ currencies)", done: false },
    ],
  },
  {
    id: "02",
    title: "Global Payouts",
    status: "coming" as const,
    quarter: "Q2 2026",
    tagline: "Move money from stablecoins to bank accounts in 100+ countries.",
    icon: Send,
    color: { accent: "text-blue-400", bg: "bg-blue-400", ring: "ring-blue-400/20", gradient: "from-blue-500/15 via-blue-500/5 to-transparent" },
    milestones: [
      { label: "Stablecoin-to-bank rails", done: false },
      { label: "Local currency settlement (EUR, GBP, etc.)", done: false },
      { label: "Batch payout API for businesses", done: false },
      { label: "Faster than SWIFT — T+0 target", done: false },
    ],
  },
  {
    id: "03",
    title: "Global USD Accounts",
    status: "coming" as const,
    quarter: "Q4 2026",
    tagline: "A USD IBAN facility to receive salaries, invoices, and B2B payments.",
    icon: Landmark,
    color: { accent: "text-emerald-400", bg: "bg-emerald-400", ring: "ring-emerald-400/20", gradient: "from-emerald-500/15 via-emerald-500/5 to-transparent" },
    milestones: [
      { label: "USD account number (IBAN)", done: false },
      { label: "Direct deposit for salary & invoices", done: false },
      { label: "Multi-currency receive support", done: false },
      { label: "Built for freelancers & remote teams", done: false },
    ],
  },
  {
    id: "04",
    title: "Merchant Ecosystem",
    status: "future" as const,
    quarter: "2027+",
    tagline: "Proprietary PoS network with ultra-low fees and better rewards.",
    icon: Store,
    color: { accent: "text-purple-400", bg: "bg-purple-400", ring: "ring-purple-400/20", gradient: "from-purple-500/15 via-purple-500/5 to-transparent" },
    milestones: [
      { label: "Direct merchant acceptance", done: false },
      { label: "Ultra-low fees for vendors", done: false },
      { label: "Shopper rewards program", done: false },
      { label: "Integrated checkout credit", done: false },
    ],
  },
];

const statusMeta = {
  live: { label: "Live", dotClass: "bg-accent", labelClass: "text-accent" },
  coming: { label: "In Progress", dotClass: "bg-blue-400", labelClass: "text-blue-400" },
  future: { label: "Planned", dotClass: "bg-purple-400/60", labelClass: "text-purple-400" },
};

/* ─── Animated horizontal progress rail (desktop) ─── */
function ProgressRail() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="hidden lg:block mb-20 relative">
      <div className="max-w-4xl mx-auto">
        {/* Background rail */}
        <div className="h-[2px] bg-white/[0.06] rounded-full relative">
          {/* Animated filled portion — ~25% for "Phase 1 done" */}
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent via-accent/80 to-accent/0 rounded-full"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "28%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
          {/* Glow on the leading edge */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent blur-[6px]"
            initial={{ left: "0%" }}
            animate={isInView ? { left: "28%" } : {}}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          />
        </div>

        {/* Phase markers on the rail */}
        <div className="flex justify-between mt-0 relative" style={{ top: "-5px" }}>
          {phases.map((p, i) => {
            const meta = statusMeta[p.status];
            const Icon = p.icon;
            return (
              <div key={p.id} className="flex flex-col items-center" style={{ width: "25%" }}>
                {/* Diamond marker */}
                <div className={`w-[10px] h-[10px] rotate-45 rounded-[2px] ${
                  p.status === "live" ? "bg-accent shadow-[0_0_8px_rgba(245,166,35,0.5)]"
                    : p.status === "coming" ? "bg-white/20 ring-1 ring-white/10"
                      : "bg-white/10"
                }`} />
                <div className="mt-3 flex flex-col items-center gap-1">
                  <span className={`text-[11px] font-mono tracking-wide ${meta.labelClass}`}>{p.quarter}</span>
                  <span className="text-[12px] font-semibold text-text-secondary">{p.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Phase card — bento-inspired with milestone checklist ─── */
function PhaseCard({ phase, index }: { phase: typeof phases[0]; index: number }) {
  const { openOrderForm } = useOrderForm();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const meta = statusMeta[phase.status];
  const Icon = phase.icon;
  const doneCount = phase.milestones.filter((m) => m.done).length;
  const totalCount = phase.milestones.length;
  const progressPct = Math.round((doneCount / totalCount) * 100);

  // First card (live) spans full width on desktop — bento hero card
  const isHero = index === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={isHero ? "lg:col-span-2" : ""}
    >
      <div className={`group relative h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] ${
        isHero ? "lg:flex lg:items-stretch" : ""
      }`}>
        {/* Gradient wash in top-left corner */}
        <div className={`absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-br ${phase.color.gradient} rounded-full blur-[100px] pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700`} />

        {/* Left accent strip */}
        <div className={`absolute top-0 left-0 w-[3px] h-full ${phase.color.bg} opacity-40 group-hover:opacity-70 transition-opacity`} />

        {/* Hero card: left stat panel */}
        {isHero && (
          <div className="hidden lg:flex flex-col items-center justify-center px-10 border-r border-white/[0.05] relative z-10 min-w-[200px]">
            <div className="text-center">
              {/* Large progress ring */}
              <div className="relative w-28 h-28 mx-auto mb-4">
                <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="5" />
                  <motion.circle
                    cx="50" cy="50" r="42"
                    fill="none"
                    stroke="url(#progressGradient)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 42}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                    animate={isInView ? { strokeDashoffset: 2 * Math.PI * 42 * (1 - progressPct / 100) } : {}}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F5A623" />
                      <stop offset="100%" stopColor="#F5A623" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-white">{progressPct}%</span>
                  <span className="text-[9px] text-text-muted uppercase tracking-widest">Complete</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 justify-center">
                <motion.span
                  className="w-2 h-2 rounded-full bg-accent"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-accent text-xs font-semibold">{meta.label}</span>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        <div className={`relative z-10 p-6 lg:p-8 ${isHero ? "flex-1" : ""}`}>
          {/* Top row: icon + title + status */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl ${phase.color.bg}/10 ring-1 ${phase.color.ring} flex items-center justify-center`}>
                <Icon className={`h-5 w-5 ${phase.color.accent}`} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-text-muted tracking-wider">{phase.quarter}</span>
                  {!isHero && (
                    <div className="flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${meta.dotClass}`} />
                      <span className={`text-[10px] font-medium ${meta.labelClass}`}>{meta.label}</span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-text-primary">{phase.title}</h3>
              </div>
            </div>

            {/* Oversized watermark phase number */}
            <span className="text-5xl lg:text-6xl font-black text-white/[0.03] leading-none select-none">
              {phase.id}
            </span>
          </div>

          {/* Tagline */}
          <p className="text-text-secondary text-sm leading-relaxed mb-5 max-w-xl">
            {phase.tagline}
          </p>

          {/* Mini progress bar (non-hero cards) */}
          {!isHero && (
            <div className="mb-5">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] text-text-muted uppercase tracking-widest font-medium">Progress</span>
                <span className="text-[10px] text-text-muted font-mono">{doneCount}/{totalCount}</span>
              </div>
              <div className="h-[3px] bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${phase.color.bg} rounded-full`}
                  initial={{ width: "0%" }}
                  animate={isInView ? { width: `${progressPct}%` } : {}}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 + index * 0.1 }}
                />
              </div>
            </div>
          )}

          {/* Milestone checklist */}
          <div className={`space-y-2 ${isHero ? "grid sm:grid-cols-2 gap-x-6 gap-y-2 space-y-0" : ""}`}>
            {phase.milestones.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, x: -8 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 + i * 0.05 }}
                className="flex items-start gap-2.5"
              >
                {m.done ? (
                  <div className="w-4 h-4 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-accent" strokeWidth={3} />
                  </div>
                ) : (
                  <Circle className="w-4 h-4 text-white/15 flex-shrink-0 mt-0.5" strokeWidth={2} />
                )}
                <span className={`text-[13px] ${m.done ? "text-text-secondary" : "text-text-muted"}`}>
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6">
            {phase.status === "live" ? (
              <Button variant="secondary" size="sm" onClick={() => openOrderForm("physical")} className="group/btn">
                Get Xcentra Card
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </Button>
            ) : (
              <Button variant="outline-light" size="sm" href="/contact" className="group/btn">
                Notify Me
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Roadmap Section ─── */
export default function Roadmap() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-primary overflow-hidden">
      <CursorGlow size={400} opacity={0.04} />

      {/* Decorative background washes */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-accent/[0.015] rounded-full blur-[150px]" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-purple-500/[0.015] rounded-full blur-[120px]" />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-6">
            <Badge variant="accent" className="mb-4">
              Roadmap
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
              Building the Future of{" "}
              <span className="gradient-text">Global Payments</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-3">
              From stablecoin cards to a full financial ecosystem.
              Track our progress in real time.
            </p>
            <p className="text-[11px] text-text-muted font-mono uppercase tracking-widest">
              Last updated — February 2026
            </p>
          </div>
        </ScrollReveal>

        {/* Horizontal Progress Rail */}
        <ProgressRail />

        {/* Phase 1 — hero card, full width */}
        <div className="mb-5">
          <PhaseCard phase={phases[0]} index={0} />
        </div>

        {/* Phases 2, 3, 4 — balanced 3-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {phases.slice(1).map((phase, index) => (
            <PhaseCard key={phase.id} phase={phase} index={index + 1} />
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-14">
            <p className="text-text-muted text-sm mb-4">
              Want early access to upcoming features?
            </p>
            <Button variant="outline-light" size="md" href="/contact">
              Join Early Access
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
