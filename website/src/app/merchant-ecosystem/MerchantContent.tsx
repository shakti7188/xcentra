"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GravityGrid from "@/components/animations/GravityGrid";
import {
  ArrowRight,
  Store,
  Zap,
  Gift,
  Shield,
  CreditCard,
  TrendingUp,
  Users,
  CheckCircle,
} from "lucide-react";

const merchantBenefits = [
  {
    icon: Zap,
    title: "Ultra-Low Fees",
    description: "Significantly lower processing fees compared to traditional card networks.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Gift,
    title: "Better Rewards",
    description: "Higher cashback and rewards for shoppers using Xcentra PoS.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Shield,
    title: "Instant Settlement",
    description: "No waiting 3-5 business days. Funds settle to merchants instantly.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: CreditCard,
    title: "Checkout Credit",
    description: "Integrated checkout credit facility for trusted, repeat customers.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

export default function MerchantContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center bg-bg-primary overflow-hidden pt-32 pb-20">
        <GravityGrid dotColor="rgba(245,166,35,0.3)" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Badge variant="future" className="mb-6">
              Future
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              The <span className="gradient-text">Merchant Ecosystem</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
              Xcentra PoS — a proprietary closed-loop payment network where
              merchants get ultra-low fees and shoppers earn better rewards.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Button variant="secondary" size="lg" href="/contact">
              Express Interest
              <ArrowRight className="h-4 w-4" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <SectionWrapper theme="light">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-medium text-text-dark mb-4">
              Better for <span className="text-accent">Everyone</span>
            </h2>
          </ScrollReveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {merchantBenefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.1}>
              <div className="text-center">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${b.bg} mx-auto mb-5`}
                >
                  <b.icon className={`h-8 w-8 ${b.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-2">{b.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{b.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* How it works */}
      <SectionWrapper theme="dark">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-medium mb-6">
              How <span className="gradient-text">Xcentra PoS</span> Works
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-lg mb-12 leading-relaxed">
              Instead of routing payments through legacy card networks, Xcentra
              PoS creates a direct payment channel between shoppers and
              merchants. This eliminates intermediary fees and enables instant
              settlement.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, label: "Shopper pays with Xcentra" },
              { icon: Store, label: "Direct merchant settlement" },
              { icon: TrendingUp, label: "Both save on fees" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.15}>
                <div className="glass rounded-2xl p-6 border border-border-dark">
                  <item.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                  <p className="text-text-primary font-semibold">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative bg-bg-primary py-24 overflow-hidden">
        <GravityGrid dotColor="rgba(245,166,35,0.2)" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-medium mb-6">
              Become a <span className="gradient-text">Partner Merchant</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-lg mb-8">
              Be among the first merchants to join the Xcentra ecosystem and
              start accepting stablecoin payments with ultra-low fees.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Button variant="secondary" size="lg" href="/contact">
              Express Interest
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
