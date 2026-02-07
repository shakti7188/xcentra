"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";

/* Premium 3D-gradient SVG icons */
const PremiumWalletIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
    <defs>
      <linearGradient id="wallet-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <filter id="wallet-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#3B82F6" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect x="6" y="12" width="36" height="26" rx="5" fill="url(#wallet-grad)" filter="url(#wallet-shadow)" />
    <rect x="6" y="12" width="36" height="8" rx="5" fill="white" fillOpacity="0.15" />
    <rect x="28" y="22" width="14" height="10" rx="3" fill="white" fillOpacity="0.2" />
    <circle cx="33" cy="27" r="2.5" fill="white" fillOpacity="0.6" />
    <path d="M10 12V10a4 4 0 014-4h20a4 4 0 014 4v2" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
  </svg>
);

const PremiumCardIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
    <defs>
      <linearGradient id="card-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <filter id="card-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#10B981" floodOpacity="0.3" />
      </filter>
    </defs>
    <rect x="4" y="10" width="40" height="28" rx="5" fill="url(#card-grad)" filter="url(#card-shadow)" />
    <rect x="4" y="18" width="40" height="6" fill="white" fillOpacity="0.15" />
    <rect x="10" y="30" width="16" height="3" rx="1.5" fill="white" fillOpacity="0.4" />
    <rect x="32" y="30" width="6" height="3" rx="1.5" fill="white" fillOpacity="0.25" />
    <circle cx="35" cy="14" r="3" fill="white" fillOpacity="0.2" />
    <circle cx="39" cy="14" r="3" fill="white" fillOpacity="0.15" />
  </svg>
);

const PremiumConvertIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
    <defs>
      <linearGradient id="convert-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <filter id="convert-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#F59E0B" floodOpacity="0.3" />
      </filter>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#convert-grad)" filter="url(#convert-shadow)" />
    <circle cx="24" cy="24" r="18" fill="white" fillOpacity="0.08" />
    <path d="M16 20h12l-4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M32 28H20l4 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PremiumGlobeIcon = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
    <defs>
      <linearGradient id="globe-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
      <filter id="globe-shadow">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#8B5CF6" floodOpacity="0.3" />
      </filter>
    </defs>
    <circle cx="24" cy="24" r="18" fill="url(#globe-grad)" filter="url(#globe-shadow)" />
    <ellipse cx="24" cy="24" rx="8" ry="18" stroke="white" strokeWidth="1.5" strokeOpacity="0.3" />
    <line x1="6" y1="24" x2="42" y2="24" stroke="white" strokeWidth="1.5" strokeOpacity="0.2" />
    <line x1="24" y1="6" x2="24" y2="42" stroke="white" strokeWidth="1.5" strokeOpacity="0.15" />
    <path d="M8 16h32" stroke="white" strokeWidth="1" strokeOpacity="0.15" />
    <path d="M8 32h32" stroke="white" strokeWidth="1" strokeOpacity="0.15" />
    {/* Glow highlight */}
    <circle cx="18" cy="18" r="6" fill="white" fillOpacity="0.1" />
  </svg>
);

const steps = [
  {
    icon: PremiumWalletIcon,
    number: "01",
    title: "Add Stablecoins",
    description:
      "Load your Xcentra balance with USDC or USDT from any wallet or exchange.",
    accentColor: "bg-blue-500",
  },
  {
    icon: PremiumCardIcon,
    number: "02",
    title: "Pay Anywhere",
    description:
      "Use your Xcentra virtual or physical card online or at any point-of-sale terminal.",
    accentColor: "bg-emerald-500",
  },
  {
    icon: PremiumConvertIcon,
    number: "03",
    title: "Instant Conversion",
    description:
      "Xcentra converts your stablecoins to local currency in real-time at checkout.",
    accentColor: "bg-amber-500",
  },
  {
    icon: PremiumGlobeIcon,
    number: "04",
    title: "Spend Globally",
    description:
      "Keep spending worldwide just like a traditional debit card — no friction, no delays.",
    accentColor: "bg-purple-500",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper theme="light">
      <div className="text-center mb-16">
        <ScrollReveal>
          <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
            Simple Process
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-medium mb-6 text-text-dark">
            How Xcentra <span className="text-accent">Works</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-[#474a52] text-[17.5px] leading-[1.7] max-w-2xl mx-auto">
            From stablecoins to spending money in four simple steps. No manual
            conversions, no complicated processes.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative">
        {/* Connection Line (desktop only) */}
        <div className="hidden lg:block absolute top-[42px] left-[calc(12.5%+40px)] right-[calc(12.5%+40px)]">
          <div className="h-[2px] bg-gradient-to-r from-blue-300/40 via-amber-300/60 to-purple-300/40 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={0.15 * index}>
              <div className="relative text-center group">
                <div className="flex flex-col items-center mb-5">
                  {/* Number pill */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`h-[3px] w-6 ${step.accentColor} rounded-full opacity-30`} />
                    <span className="text-xs font-bold tracking-wider text-text-muted/60 uppercase">
                      Step {step.number}
                    </span>
                    <div className={`h-[3px] w-6 ${step.accentColor} rounded-full opacity-30`} />
                  </div>

                  {/* Premium 3D Icon */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-xl shadow-black/8 border border-black/[0.04] group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                    <step.icon />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-text-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-[#474a52] text-[15px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
