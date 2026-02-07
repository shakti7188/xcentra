"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GravityGrid from "@/components/animations/GravityGrid";
import {
  Wallet,
  CreditCard,
  RefreshCw,
  Globe,
  ArrowDown,
  Shield,
  Zap,
  DollarSign,
  Check,
} from "lucide-react";

const steps = [
  {
    icon: Wallet,
    number: "01",
    title: "Load Your Balance",
    description:
      "Transfer USDC or USDT from any wallet or exchange to your Xcentra account. Supports major chains and instant deposits.",
    details: [
      "Send from any crypto wallet",
      "Support for Ethereum, Polygon, Solana, and more",
      "Instant balance updates",
    ],
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Use Your Card",
    description:
      "Choose your Xcentra virtual or physical card and pay online or in-store at any merchant worldwide.",
    details: [
      "Virtual card ready in seconds",
      "Physical card with contactless NFC",
      "Apple Pay & Google Pay support",
    ],
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "Automatic Conversion",
    description:
      "Xcentra converts your stablecoins to the local currency in real-time at the point of sale. You just tap and go.",
    details: [
      "Real-time market rates",
      "Only 0.5% conversion fee",
      "100+ currencies supported",
    ],
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Globe,
    number: "04",
    title: "Spend Globally",
    description:
      "From groceries to travel to subscriptions — use your Xcentra card like any traditional debit card. No borders.",
    details: [
      "150M+ merchants worldwide",
      "Online and in-store",
      "Track every transaction in real-time",
    ],
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Instant Transactions",
    description: "No waiting. Your stablecoins convert and pay in real-time.",
  },
  {
    icon: Shield,
    title: "Fully Secure",
    description: "Bank-grade encryption, fraud monitoring, and compliance.",
  },
  {
    icon: DollarSign,
    title: "Ultra-Low Fees",
    description: "Just 0.5% per transaction. No hidden fees or monthly charges.",
  },
];

export default function HowItWorksContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-bg-primary overflow-hidden pt-32 pb-16">
        <GravityGrid dotColor="rgba(245,166,35,0.3)" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Badge variant="accent" className="mb-6">
              How It Works
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              Stablecoins to{" "}
              <span className="gradient-text">Spending Power</span> in
              Seconds
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Four simple steps. No manual conversions. No complicated
              processes. Just load, tap, and spend.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps */}
      <SectionWrapper theme="light">
        <div className="max-w-4xl mx-auto space-y-16">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.1}>
              <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
                {/* Left: number and icon */}
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-2xl ${step.iconBg} shadow-lg shadow-black/5 border border-black/5`}
                  >
                    <step.icon className={`h-9 w-9 ${step.iconColor}`} />
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white text-sm font-bold mt-3">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex flex-col items-center mt-3">
                      <div className="w-0.5 h-8 bg-black/10" />
                      <ArrowDown className="h-4 w-4 text-black/20" />
                    </div>
                  )}
                </div>

                {/* Right: content */}
                <div className="pt-2">
                  <h3 className="text-2xl lg:text-3xl font-bold text-text-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-sm text-text-muted"
                      >
                        <Check className="h-4 w-4 text-accent shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Benefits */}
      <SectionWrapper theme="dark">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why <span className="gradient-text">Xcentra</span>?
            </h2>
          </ScrollReveal>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 0.1}>
              <div className="text-center glass rounded-2xl p-8 border border-border-dark">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 mx-auto mb-5">
                  <benefit.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative bg-bg-primary py-24 overflow-hidden">
        <GravityGrid dotColor="rgba(245,166,35,0.2)" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6">
              Start Spending <span className="gradient-text">Today</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-lg mb-8">
              Get your Xcentra card and experience borderless spending in
              minutes.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Button variant="secondary" size="lg" href="/cards">
              Get Xcentra Card
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
