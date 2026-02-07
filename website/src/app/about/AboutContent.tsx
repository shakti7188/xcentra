"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GravityGrid from "@/components/animations/GravityGrid";
import { Target, Users, Globe, Shield, Rocket, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We exist to make stablecoins as usable as traditional money — no complexity, no barriers.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Users,
    title: "User-First",
    description:
      "Every feature we build starts with a real problem faced by freelancers, travelers, and global earners.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "Enterprise-grade security with full regulatory compliance across every region we serve.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Globe,
    title: "Truly Global",
    description:
      "From Dubai to London to Bali — Xcentra works wherever you are, in your local currency.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Rocket,
    title: "Always Building",
    description:
      "Cards today, payouts tomorrow, full financial ecosystem next. We never stop shipping.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: Heart,
    title: "Community",
    description:
      "We are building for a community of global citizens who believe in financial freedom without borders.",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
];

const stats = [
  { value: "150M+", label: "Merchants Worldwide" },
  { value: "100+", label: "Countries Supported" },
  { value: "0.5%", label: "Transaction Fee" },
  { value: "24/7", label: "Platform Availability" },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-bg-primary overflow-hidden pt-32 pb-20">
        <GravityGrid dotColor="rgba(245,166,35,0.3)" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <ScrollReveal>
              <Badge variant="accent" className="mb-6">About Xcentra</Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
                Building the{" "}
                <span className="gradient-text">Borderless</span> Financial
                Future
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Xcentra is a borderless digital finance platform that transforms
                stablecoins like USDC and USDT into everyday spending power.
                We are building the bridge between digital assets and real-world
                commerce.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="lg" href="/cards">
                  Get Started
                </Button>
                <Button variant="outline-light" size="lg" href="/roadmap">
                  View Roadmap
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-bg-primary border-y border-border-dark">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-medium gradient-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-text-secondary">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <SectionWrapper theme="light">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/stock/global-map.jpg"
                alt="Global coverage"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-xl">Global Coverage</p>
                <p className="text-white/70 text-sm mt-1">
                  Serving users in over 100 countries
                </p>
              </div>
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal>
              <Badge variant="accent" className="mb-4">
                Our Mission
              </Badge>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-6">
                Making Stablecoins Work Like{" "}
                <span className="text-accent">Everyday Money</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Today, millions of people around the world earn in stablecoins
                  but struggle to spend them. Traditional banking systems are
                  slow, expensive, and often inaccessible.
                </p>
                <p>
                  Xcentra bridges this gap with debit cards that convert your
                  stablecoins to local currency at the point of sale. No manual
                  conversions. No delays. No borders.
                </p>
                <p>
                  We are building more than just a card — we are building a
                  complete financial infrastructure for the stablecoin economy.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper theme="dark">
        <div className="text-center mb-16">
          <ScrollReveal>
            <Badge variant="accent" className="mb-4">
              Our Values
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              What Drives Us
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-8 h-full card-hover-glow border border-border-dark">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${value.bg} mb-5`}
                >
                  <value.icon className={`h-7 w-7 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
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
              Ready to Go <span className="gradient-text">Borderless</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-lg mb-8">
              Join thousands of global citizens already using Xcentra to spend
              stablecoins like everyday money.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/cards">
                Get Xcentra Card
              </Button>
              <Button variant="outline-light" size="lg" href="/contact">
                Talk to Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
