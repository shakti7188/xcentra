"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GravityGrid from "@/components/animations/GravityGrid";
import {
  ArrowRight,
  Globe,
  Zap,
  Shield,
  DollarSign,
  Building,
  Clock,
  CheckCircle,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "100+ Countries",
    description: "Send funds to bank accounts in over 100 countries worldwide.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Settle in hours, not days. Much faster than traditional wires.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: DollarSign,
    title: "Lower Costs",
    description: "No legacy banking markups. Transparent, competitive rates.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Shield,
    title: "Fully Compliant",
    description: "Regulated transfers with full KYC/AML compliance.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

const currencies = [
  "USD", "EUR", "GBP", "AED", "IDR", "BRL", "INR", "MYR",
  "PHP", "THB", "KES", "NGN", "ZAR", "PKR", "BDT", "VND",
];

export default function GlobalPayoutsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center bg-bg-primary overflow-hidden pt-32 pb-20">
        <GravityGrid dotColor="rgba(245,166,35,0.3)" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Badge variant="coming" className="mb-6">
              Coming Soon
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              Stablecoin to Bank{" "}
              <span className="gradient-text">Anywhere</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
              Move capital from your stablecoin balance directly to bank
              accounts in 100+ countries. Faster and cheaper than international
              wire transfers.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Button variant="secondary" size="lg" href="/contact">
              Join Waitlist
              <ArrowRight className="h-4 w-4" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <SectionWrapper theme="light">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.1}>
              <div className="text-center">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${b.bg} mx-auto mb-5`}
                >
                  <b.icon className={`h-8 w-8 ${b.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-2">
                  {b.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* How it works */}
      <SectionWrapper theme="dark">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-medium mb-6">
              How Global Payouts <span className="gradient-text">Work</span>
            </h2>
          </ScrollReveal>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              step: "01",
              title: "Select Recipient",
              description:
                "Enter the recipient bank details and country. We support local bank formats globally.",
            },
            {
              step: "02",
              title: "Send Stablecoins",
              description:
                "Transfer USDC or USDT from your Xcentra balance. See the exact amount they will receive in local currency.",
            },
            {
              step: "03",
              title: "Funds Arrive",
              description:
                "The recipient receives local currency directly in their bank account within hours.",
            },
          ].map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 0.15}>
              <div className="glass rounded-2xl p-8 border border-border-dark text-center h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-black font-bold text-lg mx-auto mb-5">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Supported Currencies */}
      <SectionWrapper theme="light">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="text-3xl font-medium text-text-dark mb-4">
              Supported Currencies
            </h2>
            <p className="text-text-muted max-w-xl mx-auto">
              Send to local currency bank accounts across the world.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {currencies.map((cur) => (
              <span
                key={cur}
                className="px-4 py-2 rounded-full bg-black/5 text-sm font-semibold text-text-muted hover:bg-accent/10 hover:text-accent transition-colors"
              >
                {cur}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative bg-bg-primary py-24 overflow-hidden">
        <GravityGrid dotColor="rgba(245,166,35,0.2)" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-medium mb-6">
              Be First in <span className="gradient-text">Line</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-lg mb-8">
              Join the waitlist and be among the first to send stablecoins to
              bank accounts worldwide.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Button variant="secondary" size="lg" href="/contact">
              Join Waitlist
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
