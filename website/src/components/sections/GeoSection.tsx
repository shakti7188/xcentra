"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CursorGlow from "@/components/animations/CursorGlow";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const regions = [
  {
    id: "uae",
    name: "UAE & Dubai",
    flag: "🇦🇪",
    currency: "AED",
    headline: "Xcentra for UAE & Dubai",
    description:
      "Dubai's freelancer and entrepreneur community thrives on global payments. Xcentra gives you a borderless spending card accepted across the Emirates and beyond.",
    useCases: [
      "Freelancers receiving USDC from global clients",
      "Entrepreneurs moving funds across borders",
      "Digital nomads living in Dubai",
    ],
    href: "/regions/uae",
  },
  {
    id: "uk",
    name: "UK & Europe",
    flag: "🇬🇧",
    currency: "GBP",
    headline: "Xcentra for UK Freelancers",
    description:
      "No more waiting days for international transfers to clear. Spend your stablecoin earnings instantly at any UK or European merchant.",
    useCases: [
      "Remote workers paid in crypto",
      "European contractors needing fast payouts",
      "Cross-border shoppers and travelers",
    ],
    href: "/regions/uk",
  },
  {
    id: "indonesia",
    name: "Indonesia",
    flag: "🇮🇩",
    currency: "IDR",
    headline: "Xcentra for Indonesia",
    description:
      "Access the global economy from Indonesia. Convert stablecoins to IDR at the point of sale — no middleman banks, no unfair exchange rates.",
    useCases: [
      "Bali-based digital nomads",
      "Indonesian freelancers on global platforms",
      "Cross-border e-commerce sellers",
    ],
    href: "/regions/indonesia",
  },
  {
    id: "brazil",
    name: "Brazil",
    flag: "🇧🇷",
    currency: "BRL",
    headline: "Xcentra for Brazil",
    description:
      "Protect your earnings from BRL volatility by holding stablecoins and spending only when needed. Xcentra makes practical sense in high-inflation markets.",
    useCases: [
      "Inflation hedge for earned income",
      "Content creators earning in USD",
      "Tech workers with international contracts",
    ],
    href: "/regions/brazil",
  },
];

export default function GeoSection() {
  const [activeRegion, setActiveRegion] = useState("uae");
  const active = regions.find((r) => r.id === activeRegion)!;

  return (
    <section className="relative py-24 lg:py-32 bg-bg-primary overflow-hidden">
      <CursorGlow size={400} opacity={0.04} />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">
              Global Coverage
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Xcentra for{" "}
              <span className="gradient-text">Your Region</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Tailored solutions for global citizens in every major market.
            </p>
          </div>
        </ScrollReveal>

        {/* Region Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeRegion === region.id
                    ? "bg-accent text-bg-primary shadow-lg shadow-accent/20"
                    : "glass border border-border-dark text-text-secondary hover:text-text-primary hover:border-accent/30"
                }`}
              >
                <span className="text-lg">{region.flag}</span>
                {region.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Active Region Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRegion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-2xl border border-border-dark p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{active.flag}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">
                      {active.headline}
                    </h3>
                    <p className="text-sm text-text-muted">
                      Local currency: {active.currency}
                    </p>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6 text-lg">
                  {active.description}
                </p>
                <Button variant="primary" size="md" href={active.href}>
                  Learn More
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
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-3">
                  Popular use cases
                </p>
                {active.useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3 glass rounded-xl px-5 py-4 border border-border-dark"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-text-secondary">{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
