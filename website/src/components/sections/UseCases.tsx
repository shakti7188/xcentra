"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Badge from "@/components/ui/Badge";
import {
  Building2,
  Plane,
  Shield,
  Users,
  ShoppingCart,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const useCases = [
  {
    id: "business",
    icon: Building2,
    tabLabel: "Business",
    title: "Global Businesses & Remote Teams",
    headline: "Run Global Operations Without Bank Limits",
    description:
      "From global businesses to freelancers and remote teams — manage cross-border spending without bank limitations. Pay contractors, cover operational costs, and handle client payments in stablecoins with instant settlement.",
    steps: [
      "Receive client payments in USDC/USDT from anywhere",
      "Issue Xcentra cards for team members and contractors",
      "Pay global expenses without FX markups or delays",
      "Track spending across departments in real-time",
    ],
    stat: { value: "0%", label: "FX Markup" },
    accentColor: "from-blue-600 to-blue-800",
    dotColor: "bg-blue-500",
    image: "/images/stock/usecase-business.jpg",
    imagePosition: "center 30%",
  },
  {
    id: "traveler",
    icon: Plane,
    tabLabel: "Travel",
    title: "Travel & Cross-Border",
    headline: "One Card, Every Country, Zero Hassle",
    description:
      "No more airport currency exchanges or hidden FX markups. Xcentra gives you one card that works everywhere — in local currency — with a flat 0.5% fee. Spend like a local in 100+ countries.",
    steps: [
      "Land in any country with your Xcentra card",
      "Pay in local currency automatically at 0.5%",
      "Skip airport forex booths and bank fees",
      "Track spending across currencies in one app",
    ],
    stat: { value: "100+", label: "Countries" },
    accentColor: "from-amber-500 to-orange-600",
    dotColor: "bg-amber-500",
    image: "/images/stock/usecase-travel.jpg",
    imagePosition: "center 40%",
  },
  {
    id: "expat",
    icon: Users,
    tabLabel: "Families",
    title: "Expats & Global Families",
    headline: "Send Money Home Without the Fees",
    description:
      "Managing money across borders shouldn't be complicated. Send stablecoins to family members who can spend them instantly with their own Xcentra card — no expensive wire transfers or waiting days.",
    steps: [
      "Load USDC/USDT from any exchange or wallet",
      "Share stablecoins with family members worldwide",
      "They spend instantly via their own Xcentra card",
      "No $30+ wire transfer fees, no 3-day delays",
    ],
    stat: { value: "$0", label: "Transfer Fee" },
    accentColor: "from-purple-600 to-violet-700",
    dotColor: "bg-purple-500",
    image: "/images/stock/usecase-family.jpg",
    imagePosition: "center 35%",
  },
  {
    id: "shopping",
    icon: ShoppingCart,
    tabLabel: "Shopping",
    title: "Global Subscriptions & Shopping",
    headline: "Subscribe & Shop Without Borders",
    description:
      "Pay for Netflix, Spotify, AWS, and global e-commerce without needing a US bank account. Use your Xcentra card for secure online purchases with privacy-first spending — no sharing bank details.",
    steps: [
      "Add Xcentra virtual card to Apple Pay or Google Pay",
      "Subscribe to any global service instantly",
      "Shop on international e-commerce platforms",
      "Privacy-first — no bank details shared",
    ],
    stat: { value: "150M+", label: "Merchants" },
    accentColor: "from-pink-500 to-rose-600",
    dotColor: "bg-pink-500",
    image: "/images/stock/usecase-shopping.jpg",
    imagePosition: "center 50%",
  },
  {
    id: "protection",
    icon: Shield,
    tabLabel: "Protection",
    title: "Inflation Protection",
    headline: "Shield Your Wealth from Volatility",
    description:
      "Hold value in USD-pegged stablecoins. Spend only when needed. For users in regions with currency volatility, Xcentra provides a practical hedge — your purchasing power stays stable.",
    steps: [
      "Hold earnings in USDC/USDT (pegged to USD)",
      "Value stays stable regardless of local inflation",
      "Spend only what you need, when you need it",
      "Protect purchasing power without speculation",
    ],
    stat: { value: "1:1", label: "USD Peg" },
    accentColor: "from-emerald-500 to-teal-600",
    dotColor: "bg-emerald-500",
    image: "/images/stock/usecase-finance.jpg",
    imagePosition: "center 60%",
  },
];

export default function UseCases() {
  const [activeTab, setActiveTab] = useState("business");
  const activeCase = useCases.find((uc) => uc.id === activeTab)!;

  return (
    <section className="relative py-24 lg:py-32 bg-bg-light overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">
              Use Cases
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-text-dark mb-4">
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
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {useCases.map((uc) => {
              const Icon = uc.icon;
              return (
                <button
                  key={uc.id}
                  onClick={() => setActiveTab(uc.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    activeTab === uc.id
                      ? "bg-black text-white shadow-lg shadow-black/20"
                      : "bg-white text-text-dark border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {uc.tabLabel}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Use Case Content — Premium Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-black/[0.06] border border-black/[0.04]"
          >
            <div className="grid lg:grid-cols-[1fr_1fr] min-h-[480px]">
              {/* Left — HD Image with overlay */}
              <div className="relative h-[280px] sm:h-[340px] lg:h-auto overflow-hidden">
                <Image
                  src={activeCase.image}
                  alt={activeCase.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  style={{ objectPosition: activeCase.imagePosition }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:hidden" />

                {/* Floating stat badge on image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3.5 shadow-lg shadow-black/10"
                >
                  <p className={`text-2xl font-bold bg-gradient-to-r ${activeCase.accentColor} bg-clip-text text-transparent`}>
                    {activeCase.stat.value}
                  </p>
                  <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                    {activeCase.stat.label}
                  </p>
                </motion.div>

                {/* Title overlay on mobile */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
                  <h3 className="text-2xl font-medium text-white leading-tight">
                    {activeCase.headline}
                  </h3>
                </div>
              </div>

              {/* Right — Content */}
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                {/* Title — desktop only */}
                <div className="hidden lg:block mb-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className={`w-2 h-2 rounded-full ${activeCase.dotColor}`} />
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                      {activeCase.title}
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-[2.1rem] font-medium text-text-dark leading-tight">
                    {activeCase.headline}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#474a52] text-[15.5px] leading-[1.75] mb-8">
                  {activeCase.description}
                </p>

                {/* Steps — clean modern cards */}
                <div className="space-y-3">
                  {activeCase.steps.map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.15 + index * 0.08 }}
                      className="flex items-start gap-3.5 group"
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-5 w-5 text-accent" />
                      </div>
                      <p className="text-[14.5px] text-gray-700 leading-relaxed font-medium">
                        {step}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="mt-8 pt-6 border-t border-gray-100"
                >
                  <a
                    href="/cards"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-text-dark hover:text-accent transition-colors group"
                  >
                    Get started with Xcentra
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
