"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GravityGrid from "@/components/animations/GravityGrid";
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
} from "lucide-react";

const cardTypes = [
  {
    name: "Virtual Card",
    description:
      "Instant digital card for online purchases, subscriptions, and digital payments. Ready in seconds.",
    image: "/images/stock/xcentra-card-gold.png",
    features: [
      "Instant issuance",
      "Online & app purchases",
      "Subscription management",
      "Apple Pay & Google Pay",
    ],
    badge: "Popular",
    badgeVariant: "accent" as const,
  },
  {
    name: "Physical Card",
    description:
      "Premium physical debit card for in-store, ATM, and contactless payments worldwide.",
    image: "/images/stock/xcentra-card-black.png",
    features: [
      "Contactless NFC payments",
      "ATM withdrawals",
      "In-store purchases",
      "Global merchant acceptance",
    ],
    badge: "Premium",
    badgeVariant: "coming" as const,
  },
  {
    name: "Premium Card",
    description:
      "Exclusive card with higher limits, priority support, and premium benefits for power users.",
    image: "/images/stock/xcentra-card-platinum.png",
    features: [
      "Higher spending limits",
      "Priority 24/7 support",
      "Exclusive cashback rewards",
      "Airport lounge access",
    ],
    badge: "Coming Soon",
    badgeVariant: "future" as const,
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
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center bg-bg-primary overflow-hidden pt-32 pb-20">
        <GravityGrid dotColor="rgba(245,166,35,0.3)" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <Badge variant="live" className="mb-6">
                  Live Today
                </Badge>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
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
                  <Button variant="secondary" size="lg" href="/contact">
                    Order Physical Card
                  </Button>
                  <Button variant="outline-light" size="lg" href="/contact">
                    Get Virtual Card
                  </Button>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="relative h-[350px] sm:h-[400px]" style={{ perspective: "800px" }}>
                <div
                  className="relative w-full h-full"
                  style={{
                    transform: "rotateX(10deg) rotateY(-10deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Image
                    src="/images/stock/xcentra-card-black.png"
                    alt="Xcentra Card"
                    fill
                    className="object-contain rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Card Types */}
      <SectionWrapper theme="light">
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge variant="accent" className="mb-4">
              Choose Your Card
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-6">
              A Card for Every <span className="text-accent">Lifestyle</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cardTypes.map((card, i) => (
            <ScrollReveal key={card.name} delay={i * 0.15}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-black/5 border border-black/5 h-full flex flex-col">
                <div className="relative h-[220px]">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={card.badgeVariant}>{card.badge}</Badge>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-text-dark mb-2">
                    {card.name}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    {card.description}
                  </p>
                  <ul className="space-y-3 mb-6 flex-1">
                    {card.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-text-muted">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    href="/contact"
                  >
                    Get This Card
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Features Grid */}
      <SectionWrapper theme="dark">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
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
                <h3 className="text-xl font-bold text-text-primary mb-3">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-6">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
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
            <Button variant="secondary" size="lg" href="/contact">
              Get Xcentra Card
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
