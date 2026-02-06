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
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Pay Anywhere",
    description:
      "Use your Xcentra virtual or physical card online or at any point-of-sale terminal.",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "Instant Conversion",
    description:
      "Xcentra converts your stablecoins to local currency in real-time at checkout.",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Globe,
    number: "04",
    title: "Spend Globally",
    description:
      "Keep spending worldwide just like a traditional debit card — no friction, no delays.",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
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
        {/* Connection Line (desktop only) */}
        <div className="hidden lg:block absolute top-24 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-gradient-to-r from-blue-400/30 via-amber-400 to-purple-400/30" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} delay={0.15 * index}>
              <div className="relative text-center group">
                {/* Step Number + Icon */}
                <div className="relative mx-auto mb-6">
                  <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ${step.iconBg} shadow-lg shadow-black/5 border border-black/5 mx-auto group-hover:shadow-lg group-hover:scale-105 transition-all duration-300`}>
                    <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-xs font-bold shadow-md">
                    {step.number}
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
