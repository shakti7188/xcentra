"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Wallet, CreditCard, RefreshCw, Globe } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    number: "01",
    title: "Add Stablecoins",
    description:
      "Load your Xcentra balance with USDC or USDT from any wallet or exchange.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    accentColor: "bg-blue-500",
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Pay Anywhere",
    description:
      "Use your Xcentra virtual or physical card online or at any point-of-sale terminal.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    accentColor: "bg-emerald-500",
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "Instant Conversion",
    description:
      "Xcentra converts your stablecoins to local currency in real-time at checkout.",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    accentColor: "bg-amber-500",
  },
  {
    icon: Globe,
    number: "04",
    title: "Spend Globally",
    description:
      "Keep spending worldwide just like a traditional debit card — no friction, no delays.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-text-dark">
            How Xcentra <span className="text-accent">Works</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            From stablecoins to spending money in four simple steps. No manual
            conversions, no complicated processes.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative">
        {/* Connection Line (desktop only) — now positioned through the center of step number area */}
        <div className="hidden lg:block absolute top-[42px] left-[calc(12.5%+40px)] right-[calc(12.5%+40px)]">
          <div className="h-[2px] bg-gradient-to-r from-blue-300/40 via-amber-300/60 to-purple-300/40 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={0.15 * index}>
              <div className="relative text-center group">
                {/* Step Number — centered above icon, inline with the design */}
                <div className="flex flex-col items-center mb-5">
                  {/* Number pill — centered, balanced */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`h-[3px] w-6 ${step.accentColor} rounded-full opacity-30`} />
                    <span className="text-xs font-bold tracking-wider text-text-muted/60 uppercase">
                      Step {step.number}
                    </span>
                    <div className={`h-[3px] w-6 ${step.accentColor} rounded-full opacity-30`} />
                  </div>

                  {/* Icon */}
                  <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ${step.iconBg} shadow-lg shadow-black/5 border border-black/5 group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}>
                    <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
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
