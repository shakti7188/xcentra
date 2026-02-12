"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CursorGlow from "@/components/animations/CursorGlow";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const regions = [
  {
    id: "mena",
    name: "MENA",
    flag: "🌍",
    currency: "AED / SAR / EGP",
    headline: "Xcentra for MENA",
    description:
      "From Dubai to Riyadh to Cairo — Xcentra empowers freelancers, entrepreneurs, and the growing digital economy across the Middle East & North Africa with borderless spending.",
    useCases: [
      "UAE freelancers receiving USDC from global clients",
      "Saudi entrepreneurs moving funds across borders",
      "Digital nomads and remote workers across the region",
    ],
    href: "/regions/uae",
  },
  {
    id: "europe",
    name: "Europe & UK",
    flag: "🇪🇺",
    currency: "EUR / GBP",
    headline: "Xcentra for Europe & UK",
    description:
      "No more waiting days for international transfers to clear. Spend your stablecoin earnings instantly at any merchant across Europe and the United Kingdom.",
    useCases: [
      "Remote workers and contractors paid in crypto",
      "Cross-border freelancers across EU nations",
      "Travelers and digital nomads across the continent",
    ],
    href: "/regions/uk",
  },
  {
    id: "latam",
    name: "LATAM",
    flag: "🌎",
    currency: "BRL / MXN / ARS",
    headline: "Xcentra for Latin America",
    description:
      "Protect your earnings from currency volatility across Brazil, Mexico, Argentina, and beyond. Hold stablecoins and spend when you need to — Xcentra makes practical sense in high-inflation markets.",
    useCases: [
      "Inflation hedge for earned income across LATAM",
      "Content creators and developers earning in USD",
      "Cross-border e-commerce sellers and merchants",
    ],
    href: "/regions/brazil",
  },
  {
    id: "apac",
    name: "Asia Pacific",
    flag: "🌏",
    currency: "IDR / PHP / THB",
    headline: "Xcentra for Asia Pacific",
    description:
      "Access the global economy from Indonesia, Philippines, Thailand, and across Southeast Asia. Convert stablecoins at the point of sale — no middleman banks, no unfair exchange rates.",
    useCases: [
      "Bali-based digital nomads and remote workers",
      "Southeast Asian freelancers on global platforms",
      "Cross-border sellers and gig economy workers",
    ],
    href: "/regions/indonesia",
  },
  {
    id: "africa",
    name: "Africa",
    flag: "🌍",
    currency: "NGN / KES / ZAR",
    headline: "Xcentra for Africa",
    description:
      "Empowering the unbanked and underbanked across Nigeria, Kenya, South Africa, and beyond. Xcentra bridges the gap between crypto earnings and everyday spending.",
    useCases: [
      "Freelancers and remote workers earning in crypto",
      "Cross-border payments without expensive remittance fees",
      "Tech professionals with international contracts",
    ],
    href: "/regions/uae",
  },
];

export default function GeoSection() {
  const [activeRegion, setActiveRegion] = useState("mena");
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4">
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
