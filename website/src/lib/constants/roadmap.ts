import type { RoadmapPhase } from "@/types";

export const roadmapPhases: RoadmapPhase[] = [
  {
    phase: 0,
    title: "Global Spending",
    subtitle: "Live Today",
    description:
      "Virtual and physical debit cards that let you spend stablecoins at 150M+ merchants worldwide with real-time conversion.",
    status: "live",
    features: [
      "Virtual & physical stablecoin debit cards",
      "Global merchant acceptance",
      "Real-time crypto-to-fiat conversion",
      "Daily use for coffee, groceries, travel, subscriptions",
    ],
  },
  {
    phase: 1,
    title: "Global Payouts",
    subtitle: "Coming Soon",
    description:
      "Send stablecoins to bank accounts in 100+ countries. Move capital from your stablecoin balance directly to traditional bank accounts in local currencies.",
    status: "coming",
    features: [
      "Stablecoin-to-bank transfers in 100+ countries",
      "Local currency settlement (EUR, GBP, IDR, BRL, etc.)",
      "Faster than international wire transfers",
      "No legacy banking markups",
    ],
  },
  {
    phase: 2,
    title: "Global USD Accounts",
    subtitle: "Coming Soon",
    description:
      "Get a USD-denominated account number (USD IBAN facility). Receive salary deposits, client payments, or B2B transfers directly into Xcentra.",
    status: "coming",
    features: [
      "USD IBAN facility for receiving payments",
      "Direct deposit for salaries & invoices",
      "Built for freelancers, agencies, and contractors",
      "Solves banking access limits for global citizens",
    ],
  },
  {
    phase: 3,
    title: "Direct Merchant Ecosystem",
    subtitle: "Future",
    description:
      "Xcentra PoS — pay merchants directly with ultra-low fees and better rewards. A proprietary closed-loop payment network.",
    status: "future",
    features: [
      "Proprietary point-of-sale network",
      "Ultra-low fees for vendors",
      "Higher rewards for shoppers",
      "Integrated checkout credit for trusted users",
    ],
  },
];
