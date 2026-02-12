"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CardVisual from "@/components/ui/CardVisual";
import { useOrderForm } from "@/components/providers/OrderFormProvider";
import { Palette, Cpu, Settings, Globe } from "lucide-react";

const benefits = [
  {
    icon: Palette,
    title: "Custom Branding",
    description:
      "Your logo, your colors, your brand identity on every card — physical and virtual.",
    color: "text-pink-400",
    bg: "bg-pink-500/15",
  },
  {
    icon: Cpu,
    title: "Xhavic Blockchain Powered",
    description:
      "Built on the Xhavic blockchain for secure, transparent, and fast transactions.",
    color: "text-blue-400",
    bg: "bg-blue-500/15",
  },
  {
    icon: Settings,
    title: "Full Program Management",
    description:
      "We handle compliance, issuance, and infrastructure — you focus on your customers.",
    color: "text-amber-400",
    bg: "bg-amber-500/15",
  },
  {
    icon: Globe,
    title: "Global Acceptance",
    description:
      "Cards accepted at 150M+ merchants worldwide with real-time conversion.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/15",
  },
];

export default function WhiteLabel() {
  const { openWhiteLabelForm } = useOrderForm();

  return (
    <SectionWrapper theme="dark">
      <div className="text-center mb-16">
        <ScrollReveal>
          <Badge variant="accent" className="mb-4">
            Partner Solutions
          </Badge>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
            Launch Your Own{" "}
            <span className="gradient-text">Branded Card</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Launch your own branded virtual and physical debit cards powered by
            the Xhavic blockchain. Your brand, our infrastructure.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
        {/* Left: White Label Card Preview */}
        <ScrollReveal>
          <div className="flex justify-center">
            <div className="relative">
              <CardVisual variant="whitelabel" size="lg" />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-12 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Benefits Grid */}
        <div className="space-y-5">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={0.1 * i}>
              <div className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${benefit.bg} group-hover:scale-110 transition-transform`}
                >
                  <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
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
          ))}
          <ScrollReveal delay={0.5}>
            <div className="flex flex-wrap gap-3 mt-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => openWhiteLabelForm()}
              >
                Partner With Us
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
              <Button
                variant="outline-light"
                size="lg"
                href="/white-label"
              >
                Learn More
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
