"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Globe, Briefcase, Zap, Layers } from "lucide-react";

const highlights = [
  { icon: Globe, label: "Global freelancers & remote workers", iconBg: "bg-blue-100", iconColor: "text-blue-600" },
  { icon: Briefcase, label: "Crypto earners paid in USDC/USDT", iconBg: "bg-emerald-100", iconColor: "text-emerald-600" },
  { icon: Zap, label: "Travelers who want borderless spending", iconBg: "bg-amber-100", iconColor: "text-amber-600" },
  { icon: Layers, label: "Users in high-inflation regions preserving value", iconBg: "bg-purple-100", iconColor: "text-purple-600" },
];

export default function WhatIsXcentra() {
  return (
    <SectionWrapper theme="light">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text */}
        <div>
          <ScrollReveal>
            <Badge variant="accent" className="mb-4">
              About Us
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-text-dark">
              Tailored Strategies for Business{" "}
              <span className="text-accent">Growth Worldwide</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Xcentra is a fintech platform that makes stablecoins usable as
              everyday money. Instead of holding stablecoins only as digital
              assets, users can spend them in real life through Xcentra
              cards — globally.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="primary" size="md" href="#">
                Learn More
              </Button>
              <Button variant="ghost-dark" size="md" href="#">
                <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch App Demo
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Best For */}
        <div>
          <ScrollReveal direction="left">
            <div className="bg-white rounded-3xl shadow-xl shadow-black/5 p-8 border border-black/5">
              <h3 className="text-lg font-semibold text-text-dark mb-6">
                Best for:
              </h3>
              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <ScrollReveal key={item.label} delay={0.1 * (index + 1)}>
                    <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-bg-light transition-colors">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}>
                        <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                      </div>
                      <span className="text-text-dark font-medium">
                        {item.label}
                      </span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 pt-6 border-t border-black/5 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold text-accent">150M+</p>
                  <p className="text-sm text-text-muted">Merchants Worldwide</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">100+</p>
                  <p className="text-sm text-text-muted">Countries Supported</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
