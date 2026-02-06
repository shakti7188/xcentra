"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Badge from "@/components/ui/Badge";
import { Briefcase, Plane, Shield } from "lucide-react";

const useCases = [
  {
    id: "freelancer",
    icon: Briefcase,
    title: "Global Freelancer & Remote Worker",
    description:
      "Get paid in USDC/USDT from international clients. Use your Xcentra card for daily expenses. No bank rejections. No conversion delays. Work from anywhere, spend anywhere.",
    steps: [
      "Receive payment in USDC from your client",
      "Load stablecoins to your Xcentra wallet",
      "Tap your card at any merchant worldwide",
      "Funds convert instantly at checkout",
    ],
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: "traveler",
    icon: Plane,
    title: "Travel & Cross-Border Lifestyle",
    description:
      "No more airport currency exchanges or multi-currency wallet apps. Xcentra gives you one card that works everywhere — in local currency — with near-zero conversion friction.",
    steps: [
      "Land in any country with your Xcentra card",
      "Pay in local currency automatically",
      "Skip airport forex booths and hidden fees",
      "Track spending across currencies in one app",
    ],
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: "protection",
    icon: Shield,
    title: "Inflation Protection & Working Capital",
    description:
      "Hold value in USD-pegged stablecoins. Spend only when needed. For users in regions with currency volatility, Xcentra provides a practical hedge without speculation.",
    steps: [
      "Hold earnings in USDC/USDT (pegged to USD)",
      "Value stays stable regardless of local inflation",
      "Spend only what you need, when you need it",
      "Protect purchasing power without trading",
    ],
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];

export default function UseCases() {
  const [activeTab, setActiveTab] = useState("freelancer");
  const activeCase = useCases.find((uc) => uc.id === activeTab)!;

  return (
    <section className="relative py-24 lg:py-32 bg-bg-light overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">
              Use Cases
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-dark mb-4">
              Real Use Cases for{" "}
              <span className="gradient-text">Xcentra</span>
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              See how people around the world use Xcentra to simplify their
              financial lives.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Switcher */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <button
                  key={uc.id}
                  onClick={() => setActiveTab(uc.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === uc.id
                      ? "bg-black text-white shadow-lg shadow-black/20"
                      : "bg-white text-text-dark border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {uc.title.split(" & ")[0]}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Use Case */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl ${activeCase.iconBg} flex items-center justify-center`}>
                  <activeCase.icon className={`h-6 w-6 ${activeCase.iconColor}`} />
                </div>
                <h3 className="text-2xl font-bold text-text-dark">
                  {activeCase.title}
                </h3>
              </div>
              <p className="text-text-muted leading-relaxed mb-8 text-lg">
                {activeCase.description}
              </p>
            </div>

            {/* Right: Steps */}
            <div className="space-y-4">
              {activeCase.steps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-border-light"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-accent">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-text-dark font-medium">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
