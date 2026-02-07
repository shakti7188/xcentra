"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Badge from "@/components/ui/Badge";
import { Globe, Briefcase, Zap, Layers, Shield } from "lucide-react";

const whyFeatures = [
  {
    icon: Globe,
    title: "Borderless Spending",
    description:
      "Use stablecoins like everyday money across countries and currencies. No borders, no barriers, no FX markups.",
    size: "large" as const,
  },
  {
    icon: Briefcase,
    title: "Built for Global Citizens",
    description:
      "Whether you're a traveler, expat, freelancer, or crypto earner — Xcentra works for your lifestyle.",
    size: "medium" as const,
  },
  {
    icon: Zap,
    title: "Real-World Utility",
    description:
      "Spend crypto without manually converting before every purchase. It just works at checkout.",
    size: "medium" as const,
  },
  {
    icon: Shield,
    title: "Transparent & Secure",
    description:
      "0.5% flat fee, no hidden charges. Bank-grade security with 2FA, biometric auth, and instant card freeze.",
    size: "medium" as const,
  },
  {
    icon: Layers,
    title: "One Platform, Everything Coming",
    description:
      "Cards live today. Global payouts, USD IBAN, and merchant ecosystem — all coming to one place.",
    size: "medium" as const,
  },
];

export default function WhyChoose() {
  return (
    <SectionWrapper theme="dark" className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge variant="accent" className="mb-4">
              Why Xcentra
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
              Why Choose Xcentra for{" "}
              <span className="gradient-text">Stablecoin Spending?</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Bento Grid — 5 cards in asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = feature.size === "large";

            return (
              <ScrollReveal
                key={feature.title}
                delay={0.1 * index}
                className={isLarge ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <div
                  className={`glass rounded-2xl p-8 h-full group hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 ${
                    isLarge ? "lg:flex lg:items-center lg:gap-8" : ""
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors mb-6 ${
                      isLarge ? "lg:mb-0 lg:h-20 lg:w-20" : ""
                    }`}
                  >
                    <Icon
                      className={`text-accent ${isLarge ? "h-8 w-8 lg:h-10 lg:w-10" : "h-7 w-7"}`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold text-text-primary mb-3 ${
                        isLarge ? "text-2xl lg:text-3xl" : "text-xl"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-text-secondary leading-relaxed ${
                        isLarge ? "text-lg" : "text-base"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
