"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import CardVisual from "@/components/ui/CardVisual";
import GravityGrid from "@/components/animations/GravityGrid";
import { useOrderForm } from "@/components/providers/OrderFormProvider";
import {
  Palette,
  Cpu,
  Settings,
  Globe,
  BarChart3,
  Shield,
  Layers,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Custom Branding",
    description:
      "Your logo, colors, and brand identity on every card. Physical and virtual cards tailored to your brand.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: Cpu,
    title: "API Integration",
    description:
      "RESTful APIs for card issuance, balance management, and transaction monitoring in your platform.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: BarChart3,
    title: "Management Dashboard",
    description:
      "Full-featured dashboard to monitor card usage, manage users, and track program performance.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Shield,
    title: "Built-In Compliance",
    description:
      "KYC/AML, sanctions screening, and fraud monitoring handled by our infrastructure.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Layers,
    title: "Multi-Currency Support",
    description:
      "Support for stablecoins and fiat currencies with real-time conversion at point of sale.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Cards accepted at 150M+ merchants worldwide. Issue cards for customers in any supported region.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

const steps = [
  {
    number: "01",
    title: "Apply",
    description:
      "Submit your business details and card program requirements. Our team reviews and onboards you within days.",
  },
  {
    number: "02",
    title: "Customize",
    description:
      "Design your card with your brand identity. Configure spending limits, supported currencies, and user flows.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Start issuing branded cards to your users. We handle the infrastructure, compliance, and settlement.",
  },
];


export default function WhiteLabelContent() {
  const { openWhiteLabelForm } = useOrderForm();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center bg-bg-primary overflow-hidden pt-32 pb-16">
        <GravityGrid dotColor="rgba(245,166,35,0.06)" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <Badge variant="accent" className="mb-6">
                  White Label Solutions
                </Badge>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
                  Launch Your Own{" "}
                  <span className="gradient-text">Branded Card</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-xl text-text-secondary leading-relaxed mb-8">
                  Issue virtual and physical debit cards under your brand, powered
                  by Xhavic blockchain technology. We handle the infrastructure —
                  you own the customer experience.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => openWhiteLabelForm()}
                >
                  Partner With Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="flex justify-center">
                <div className="relative">
                  <CardVisual variant="whitelabel" size="lg" />
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-12 bg-accent/10 rounded-full blur-2xl" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works — 3 Steps */}
      <SectionWrapper theme="light">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge variant="accent" className="mb-4">
                Simple Process
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-medium text-text-dark mb-4">
                How It <span className="text-accent">Works</span>
              </h2>
              <p className="text-text-muted text-lg">
                From application to launch in three simple steps.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <div className="relative bg-white rounded-2xl p-8 border border-black/5 shadow-lg shadow-black/5 h-full text-center">
                  <div className="text-5xl font-bold text-accent/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-text-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Features Grid */}
      <SectionWrapper theme="dark">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-4">
              Platform Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-medium mb-4">
              Everything You Need to{" "}
              <span className="gradient-text">Launch</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              A complete card issuance platform built on the Xhavic blockchain
              with enterprise-grade tooling.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-8 h-full card-hover-glow border border-border-dark">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${feature.bg} mb-5`}
                >
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Blockchain Badge */}
      <SectionWrapper theme="dark">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="glass rounded-2xl p-10 border border-border-dark">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Cpu className="h-8 w-8 text-accent" />
                <h3 className="text-2xl font-semibold text-text-primary">
                  Powered by Xhavic Blockchain
                </h3>
              </div>
              <p className="text-text-secondary leading-relaxed mb-6">
                Every white label card is backed by the Xhavic blockchain —
                providing transparent settlement, immutable transaction records,
                and industry-leading security for your card program.
              </p>
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                {[
                  "Transparent Settlement",
                  "Immutable Records",
                  "Real-Time Processing",
                  "Enterprise Security",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-text-secondary"
                  >
                    <CheckCircle className="h-4 w-4 text-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section className="relative bg-bg-primary py-20 overflow-hidden">
        <GravityGrid dotColor="rgba(245,166,35,0.08)" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-medium mb-4">
              Ready to Launch Your{" "}
              <span className="gradient-text">Card Program?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-lg mb-8">
              Join the growing number of businesses launching branded card
              programs with Xcentra. Our partnerships team will guide you
              through every step.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => openWhiteLabelForm()}
              >
                Partner With Us
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline-light" size="lg" href="/cards">
                View Xcentra Cards
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
