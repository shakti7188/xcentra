"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Badge from "@/components/ui/Badge";
import { Building2, Plane, Shield, Users, ShoppingCart } from "lucide-react";

const useCases = [
  {
    id: "traveler",
    icon: Plane,
    title: "Travel & Cross-Border",
    description:
      "No more airport currency exchanges or hidden FX markups. Xcentra gives you one card that works everywhere — in local currency — with a flat 0.5% fee. Spend like a local in 100+ countries.",
    steps: [
      "Land in any country with your Xcentra card",
      "Pay in local currency automatically at 0.5% — no FX markups",
      "Skip airport forex booths and bank conversion fees",
      "Track spending across currencies in one app",
    ],
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    image: "/images/stock/travel.jpg",
  },
  {
    id: "expat",
    icon: Users,
    title: "Expats & Global Families",
    description:
      "Managing money across borders shouldn't be complicated. Send stablecoins to family members who can spend them instantly with their own Xcentra card — no expensive wire transfers or waiting days.",
    steps: [
      "Load USDC/USDT from any exchange or wallet",
      "Share stablecoins with family members worldwide",
      "They spend instantly via their own Xcentra card",
      "No $30+ wire transfer fees, no 3-day delays",
    ],
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    image: "/images/stock/global-map.jpg",
  },
  {
    id: "business",
    icon: Building2,
    title: "Global Businesses & Remote Teams",
    description:
      "From global businesses to freelancers and remote teams — manage cross-border spending without bank limitations. Pay contractors, cover operational costs, and handle client payments in stablecoins with instant settlement.",
    steps: [
      "Receive client payments in USDC/USDT from anywhere",
      "Issue Xcentra cards for team members and contractors",
      "Pay global expenses without FX markups or delays",
      "Track spending across departments in real-time",
    ],
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    image: "/images/stock/freelancer.jpg",
  },
  {
    id: "shopping",
    icon: ShoppingCart,
    title: "Global Subscriptions & Shopping",
    description:
      "Pay for Netflix, Spotify, AWS, and global e-commerce without needing a US bank account. Use your Xcentra card for secure online purchases with privacy-first spending — no sharing bank details.",
    steps: [
      "Add your Xcentra virtual card to Apple Pay or Google Pay",
      "Subscribe to any global service (Netflix, AWS, Spotify)",
      "Shop on international e-commerce platforms",
      "Privacy-first — no bank details shared with merchants",
    ],
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    image: "/images/stock/shopping.jpg",
  },
  {
    id: "protection",
    icon: Shield,
    title: "Inflation Protection",
    description:
      "Hold value in USD-pegged stablecoins. Spend only when needed. For users in regions with currency volatility, Xcentra provides a practical hedge — your purchasing power stays stable.",
    steps: [
      "Hold earnings in USDC/USDT (pegged to USD)",
      "Value stays stable regardless of local inflation",
      "Spend only what you need, when you need it",
      "Protect purchasing power without trading or speculation",
    ],
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    image: "/images/stock/dubai.jpg",
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
          >
            {/* Hero image for the use case */}
            <div className="relative w-full h-[200px] sm:h-[280px] rounded-2xl overflow-hidden mb-10">
              <Image
                src={activeCase.image}
                alt={activeCase.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${activeCase.iconBg} flex items-center justify-center`}>
                    <activeCase.icon className={`h-5 w-5 ${activeCase.iconColor}`} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {activeCase.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Description */}
              <div>
                <p className="text-text-muted leading-relaxed text-lg">
                  {activeCase.description}
                </p>
              </div>

              {/* Right: Steps */}
              <div className="space-y-3">
                {activeCase.steps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-border-light"
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
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
