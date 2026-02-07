"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CursorGlow from "@/components/animations/CursorGlow";
import Badge from "@/components/ui/Badge";
import { coreCapabilities } from "@/lib/constants/features";

/* Premium gradient SVG icons */
const premiumIcons: Record<string, () => React.JSX.Element> = {
  CreditCard: () => (
    <svg viewBox="0 0 44 44" className="w-8 h-8" fill="none">
      <defs>
        <linearGradient id="fg-card" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5A623" /><stop offset="100%" stopColor="#D48E1A" />
        </linearGradient>
      </defs>
      <rect x="3" y="9" width="38" height="26" rx="5" fill="url(#fg-card)" />
      <rect x="3" y="16" width="38" height="5" fill="white" fillOpacity="0.15" />
      <rect x="8" y="27" width="14" height="3" rx="1.5" fill="white" fillOpacity="0.4" />
      <circle cx="33" cy="13" r="2.5" fill="white" fillOpacity="0.2" />
      <circle cx="36.5" cy="13" r="2.5" fill="white" fillOpacity="0.15" />
    </svg>
  ),
  ShieldCheck: () => (
    <svg viewBox="0 0 44 44" className="w-8 h-8" fill="none">
      <defs>
        <linearGradient id="fg-shield" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" /><stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <path d="M22 4L6 12v10c0 9.55 6.82 18.48 16 20.5 9.18-2.02 16-10.95 16-20.5V12L22 4z" fill="url(#fg-shield)" />
      <path d="M22 4L6 12v10c0 9.55 6.82 18.48 16 20.5V4z" fill="white" fillOpacity="0.08" />
      <path d="M16 22l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  RefreshCw: () => (
    <svg viewBox="0 0 44 44" className="w-8 h-8" fill="none">
      <defs>
        <linearGradient id="fg-refresh" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" /><stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <circle cx="22" cy="22" r="17" fill="url(#fg-refresh)" />
      <path d="M15 18h6v-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29 26h-6v6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28.5 18A9 9 0 0015 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M15.5 26A9 9 0 0029 26" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  BarChart3: () => (
    <svg viewBox="0 0 44 44" className="w-8 h-8" fill="none">
      <defs>
        <linearGradient id="fg-chart" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" /><stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="38" height="38" rx="8" fill="url(#fg-chart)" />
      <rect x="10" y="22" width="5" height="12" rx="2" fill="white" fillOpacity="0.5" />
      <rect x="19.5" y="14" width="5" height="20" rx="2" fill="white" fillOpacity="0.6" />
      <rect x="29" y="18" width="5" height="16" rx="2" fill="white" fillOpacity="0.4" />
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 44 44" className="w-8 h-8" fill="none">
      <defs>
        <linearGradient id="fg-globe" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" /><stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <circle cx="22" cy="22" r="17" fill="url(#fg-globe)" />
      <ellipse cx="22" cy="22" rx="7" ry="17" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
      <line x1="5" y1="22" x2="39" y2="22" stroke="white" strokeWidth="1.5" strokeOpacity="0.2" />
      <path d="M7 15h30" stroke="white" strokeWidth="1" strokeOpacity="0.15" />
      <path d="M7 29h30" stroke="white" strokeWidth="1" strokeOpacity="0.15" />
    </svg>
  ),
  DollarSign: () => (
    <svg viewBox="0 0 44 44" className="w-8 h-8" fill="none">
      <defs>
        <linearGradient id="fg-dollar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" /><stop offset="100%" stopColor="#BE185D" />
        </linearGradient>
      </defs>
      <circle cx="22" cy="22" r="17" fill="url(#fg-dollar)" />
      <text x="22" y="29" textAnchor="middle" fill="white" fontSize="20" fontWeight="600" fontFamily="system-ui">$</text>
    </svg>
  ),
};

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof coreCapabilities)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const IconComponent = premiumIcons[feature.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass rounded-2xl p-6 lg:p-8 border border-border-dark card-hover-glow transition-all duration-300 hover:border-accent/20"
    >
      <div className="w-14 h-14 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5 group-hover:bg-white/[0.1] group-hover:scale-105 transition-all duration-300 ring-1 ring-white/[0.06]">
        {IconComponent ? <IconComponent /> : null}
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-2">
        {feature.title}
      </h3>
      <p className="text-text-secondary leading-relaxed text-[15px]">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function FeaturesGrid() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-primary overflow-hidden">
      <CursorGlow size={400} opacity={0.04} />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px]" />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">
              Core Capabilities
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-medium tracking-tight mb-4">
              Everything You Need,{" "}
              <span className="gradient-text">Nothing You Don&apos;t</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A single platform for spending stablecoins in real life — with
              security, transparency, and zero complexity.
            </p>
          </div>
        </ScrollReveal>

        {/* First row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {coreCapabilities.slice(0, 3).map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Lifestyle banner — image positioned to show faces/hands properly */}
        <ScrollReveal delay={0.2}>
          <div className="relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden mb-6 group">
            <Image
              src="/images/stock/card-payment.jpg"
              alt="Using Xcentra card for payment"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              style={{ objectPosition: "center 40%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
            <div className="absolute inset-0 flex items-center px-8 sm:px-12">
              <div>
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Real-World Spending</p>
                <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium max-w-md leading-tight">
                  Tap. Pay. Done.
                </p>
                <p className="text-white/50 text-lg sm:text-xl font-light mt-1">Anywhere in the world.</p>
              </div>
            </div>
            <motion.div
              animate={{ y: [-5, 5, -5], rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-8 sm:right-16 top-1/2 -translate-y-1/2 w-[160px] sm:w-[200px] h-[100px] sm:h-[125px] hidden md:block"
            >
              <Image
                src="/images/stock/xcentra-card-black.png"
                alt="Xcentra Card"
                fill
                className="object-contain drop-shadow-[0_10px_30px_rgba(245,166,35,0.25)]"
              />
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Second row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCapabilities.slice(3).map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
