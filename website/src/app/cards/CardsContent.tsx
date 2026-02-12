"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GravityGrid from "@/components/animations/GravityGrid";
import CardVisual from "@/components/ui/CardVisual";
import { useOrderForm } from "@/components/providers/OrderFormProvider";
import {
  CreditCard,
  Smartphone,
  Globe,
  Zap,
  Shield,
  DollarSign,
  Wallet,
  RefreshCw,
  ShoppingCart,
  Plane,
  Coffee,
  Tv,
  CheckCircle,
  Crown,
  ArrowRight,
} from "lucide-react";

const cardTypes = [
  {
    variant: "gold" as const,
    formType: "virtual" as const,
    name: "Virtual Card",
    tagline: "Instant & Digital",
    description:
      "Get a digital card in seconds. Perfect for online purchases, subscriptions, and mobile payments via Apple Pay & Google Pay.",
    features: [
      "Instant issuance — ready in 30 seconds",
      "Online & in-app purchases",
      "Subscription management",
      "Apple Pay & Google Pay compatible",
    ],
    badge: "Most Popular",
    badgeColor: "bg-accent text-black",
    icon: Smartphone,
  },
  {
    variant: "black" as const,
    formType: "physical" as const,
    name: "Physical Card",
    tagline: "Tap. Pay. Done.",
    description:
      "Premium contactless debit card for in-store, ATM, and worldwide payments. Shipped directly to your door.",
    features: [
      "Contactless NFC tap-to-pay",
      "ATM withdrawals worldwide",
      "In-store & POS payments",
      "150M+ merchant acceptance",
    ],
    badge: "Recommended",
    badgeColor: "bg-white text-black",
    icon: CreditCard,
  },
  {
    variant: "platinum" as const,
    formType: "premium" as const,
    name: "Premium Card",
    tagline: "Exclusive & Elevated",
    description:
      "Unlock higher limits, priority 24/7 support, exclusive cashback, and premium lifestyle benefits.",
    features: [
      "Higher spending & ATM limits",
      "Priority 24/7 concierge support",
      "Exclusive cashback rewards",
      "Airport lounge access",
    ],
    badge: "Launching Soon",
    badgeColor: "bg-white/10 text-white/80 border border-white/20",
    icon: Crown,
  },
];

const features = [
  {
    icon: Globe,
    title: "150M+ Merchants",
    description: "Accepted everywhere card payments work — online and in-store globally.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Zap,
    title: "Instant Conversion",
    description: "Stablecoins convert to local currency in real-time at point of sale.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Enterprise-grade encryption, fraud detection, and compliance built in.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: DollarSign,
    title: "Ultra-Low Fees",
    description: "Just 0.5% conversion fee. No hidden charges, no monthly fees.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Wallet,
    title: "Multi-Stablecoin",
    description: "Load USDC or USDT from any wallet or exchange seamlessly.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: RefreshCw,
    title: "Real-Time Tracking",
    description: "Track every transaction, manage spending limits, and view analytics.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

const useCases = [
  { icon: ShoppingCart, label: "Groceries" },
  { icon: Plane, label: "Travel" },
  { icon: Coffee, label: "Dining" },
  { icon: Tv, label: "Subscriptions" },
  { icon: Smartphone, label: "Online Shopping" },
  { icon: Globe, label: "International" },
];

export default function CardsContent() {
  const { openOrderForm } = useOrderForm();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-bg-primary overflow-hidden pt-32 pb-16">
        <GravityGrid dotColor="rgba(245,166,35,0.3)" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <Badge variant="accent" className="mb-6">
                  Xcentra Cards
                </Badge>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
                  Spend Stablecoins{" "}
                  <span className="gradient-text">Anywhere</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-xl text-text-secondary leading-relaxed mb-8">
                  Virtual and physical debit cards that convert your USDC and
                  USDT to local currency at the point of sale. No manual
                  conversions needed.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary" size="lg" onClick={() => openOrderForm("physical")}>
                    Order Physical Card
                  </Button>
                  <Button variant="outline-light" size="lg" onClick={() => openOrderForm("virtual")}>
                    Get Virtual Card
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="flex justify-center md:justify-end">
                <div className="relative" style={{ perspective: "1000px" }}>
                  {/* Back card — Gold */}
                  <div
                    className="absolute -top-5 -left-5 opacity-50 blur-[0.3px]"
                    style={{
                      transform: "rotateX(6deg) rotateY(-4deg) rotateZ(-4deg)",
                    }}
                  >
                    <CardVisual variant="gold" size="sm" />
                  </div>
                  {/* Front card — Black */}
                  <div
                    style={{
                      transform: "rotateX(5deg) rotateY(-6deg)",
                    }}
                  >
                    <CardVisual variant="black" size="md" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Card Types — Premium Redesign */}
      <SectionWrapper theme="light">
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge variant="accent" className="mb-4">
              Choose Your Card
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-text-dark mb-4">
              A Card for Every <span className="text-accent">Lifestyle</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              From instant digital cards to premium physical cards with exclusive benefits.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cardTypes.map((card, i) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.name} delay={i * 0.12}>
                <div className="relative bg-white rounded-3xl overflow-hidden border border-black/[0.06] h-full flex flex-col shadow-xl shadow-black/[0.03] hover:shadow-2xl hover:shadow-black/[0.08] transition-shadow duration-300">
                  {/* Card Visual Section — Dark BG */}
                  <div className="relative bg-gradient-to-br from-[#0f1015] to-[#1a1d24] px-6 pt-8 pb-6 flex flex-col items-center">
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide shadow-lg ${card.badgeColor}`}
                      >
                        {card.badge}
                      </span>
                    </div>

                    {/* Card Visual */}
                    <div className="mt-4" style={{ perspective: "800px" }}>
                      <div
                        style={{
                          transform: "rotateX(8deg) rotateY(-3deg)",
                        }}
                      >
                        <CardVisual variant={card.variant} size="sm" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-text-dark">
                          {card.name}
                        </h3>
                        <p className="text-xs text-text-muted font-medium">
                          {card.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-text-muted text-sm leading-relaxed mb-5">
                      {card.description}
                    </p>

                    <ul className="space-y-2.5 mb-6 flex-1">
                      {card.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-text-muted"
                        >
                          <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="pt-4 border-t border-black/[0.06]">
                      <Button
                        variant="primary"
                        size="md"
                        className="w-full group"
                        onClick={() => openOrderForm(card.formType)}
                      >
                        {card.formType === "premium" ? "Join Waitlist" : "Get This Card"}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Features Grid */}
      <SectionWrapper theme="dark">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
              Built for <span className="gradient-text">Real Life</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Every feature designed to make stablecoins work as seamlessly as
              traditional money.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Use Cases */}
      <SectionWrapper theme="light">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-text-dark mb-6">
              Use Xcentra <span className="text-accent">Everywhere</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 max-w-3xl mx-auto">
          {useCases.map((uc, i) => (
            <ScrollReveal key={uc.label} delay={i * 0.08}>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                  <uc.icon className="h-7 w-7 text-accent" />
                </div>
                <p className="text-xs font-medium text-text-muted">
                  {uc.label}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
              Get Your Card <span className="gradient-text">Today</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-lg mb-8">
              Join the borderless finance revolution. Start spending your
              stablecoins at millions of merchants worldwide.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Button variant="secondary" size="lg" onClick={() => openOrderForm("physical")}>
              Get Xcentra Card
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
