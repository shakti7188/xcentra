"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GravityGrid from "@/components/animations/GravityGrid";
import { CheckCircle, XCircle, Minus } from "lucide-react";

const feeCategories = [
  {
    category: "Card Fees",
    items: [
      { name: "Virtual Card Issuance", value: "Free", highlight: true },
      { name: "Physical Card Issuance", value: "$10 one-time", highlight: false },
      { name: "Physical Card Replacement", value: "$10", highlight: false },
      { name: "Monthly Maintenance Fee", value: "Free", highlight: true },
      { name: "Card Activation Fee", value: "Free", highlight: true },
    ],
  },
  {
    category: "Transaction Fees",
    items: [
      { name: "Stablecoin to Fiat Conversion", value: "0.5% flat", highlight: true },
      { name: "Online Purchases", value: "No extra fee", highlight: true },
      { name: "In-Store / POS Payments", value: "No extra fee", highlight: true },
      { name: "Foreign Transaction Fee", value: "None — included in 0.5%", highlight: true },
      { name: "Contactless / NFC Payments", value: "No extra fee", highlight: true },
    ],
  },
  {
    category: "ATM & Cash",
    items: [
      { name: "ATM Withdrawal (Monthly)", value: "First $200/mo free", highlight: true },
      { name: "ATM Withdrawal (Over Limit)", value: "2% per withdrawal", highlight: false },
      { name: "International ATM Withdrawal", value: "Same as above", highlight: false },
      { name: "ATM Balance Inquiry", value: "Free", highlight: true },
    ],
  },
  {
    category: "Account & Wallet",
    items: [
      { name: "Stablecoin Deposit (USDC/USDT)", value: "Free", highlight: true },
      { name: "Wallet-to-Wallet Transfer", value: "Free", highlight: true },
      { name: "Account Inactivity Fee", value: "None", highlight: true },
      { name: "Account Closure", value: "Free", highlight: true },
    ],
  },
];

const comparisonData = [
  { feature: "Conversion / FX Fee", xcentra: "0.5% flat", banks: "2-3% + markup", cryptoCards: "1-2.5%" },
  { feature: "Monthly Fee", xcentra: "Free", banks: "$5-15/mo", cryptoCards: "Free-$15/mo" },
  { feature: "ATM Withdrawal", xcentra: "First $200 free", banks: "$2-5 per use", cryptoCards: "$2-3.5 per use" },
  { feature: "Foreign Transaction", xcentra: "Included in 0.5%", banks: "1-3% extra", cryptoCards: "0-2% extra" },
  { feature: "Card Issuance (Virtual)", xcentra: "Free", banks: "Free", cryptoCards: "Free-$5" },
  { feature: "Card Issuance (Physical)", xcentra: "$10 one-time", banks: "Free-$25", cryptoCards: "$10-50" },
  { feature: "Hidden Spreads", xcentra: "None", banks: "Yes (FX markup)", cryptoCards: "Often yes" },
];

export default function FeesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center bg-bg-primary overflow-hidden pt-32 pb-16">
        <GravityGrid dotColor="rgba(245,166,35,0.06)" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Badge variant="accent" className="mb-6">
              Transparent Pricing
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              Simple, Honest{" "}
              <span className="gradient-text">Pricing</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              No hidden fees. No surprise charges. Just a flat 0.5% conversion rate
              and transparent pricing across the board.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Fee Breakdown */}
      <SectionWrapper theme="light">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-medium text-text-dark mb-4">
                Complete Fee <span className="text-accent">Schedule</span>
              </h2>
              <p className="text-text-muted text-lg">
                Every fee, clearly listed. No fine print.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {feeCategories.map((category, catIdx) => (
              <ScrollReveal key={category.category} delay={catIdx * 0.1}>
                <div className="bg-white rounded-2xl border border-black/5 shadow-lg shadow-black/5 overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-black/5">
                    <h3 className="text-lg font-semibold text-text-dark">
                      {category.category}
                    </h3>
                  </div>
                  <div className="divide-y divide-black/5">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between px-6 py-4 hover:bg-gray-50/50 transition-colors"
                      >
                        <span className="text-text-dark font-medium">
                          {item.name}
                        </span>
                        <span
                          className={`font-semibold ${
                            item.highlight
                              ? "text-emerald-600"
                              : "text-text-dark"
                          }`}
                        >
                          {item.highlight && (
                            <CheckCircle className="h-4 w-4 inline-block mr-1.5 -mt-0.5" />
                          )}
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Comparison Table */}
      <SectionWrapper theme="dark">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge variant="accent" className="mb-4">
              Compare
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-4">
              Xcentra vs <span className="gradient-text">The Rest</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              See how Xcentra stacks up against traditional banks and other
              crypto card providers.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-accent/20 bg-white/[0.03] shadow-[0_0_60px_-15px_rgba(245,166,35,0.15)]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white/[0.04]">
                  <th className="text-left py-5 px-6 text-text-secondary font-semibold text-sm border-b border-white/10 w-[28%]">
                    Feature
                  </th>
                  <th className="text-center py-5 px-5 border-b border-accent/30 bg-accent/[0.08] w-[24%]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-accent font-medium text-base">Xcentra</span>
                      <span className="text-[10px] text-accent/60 font-medium uppercase tracking-widest">Best Value</span>
                    </div>
                  </th>
                  <th className="text-center py-5 px-5 text-text-muted font-semibold text-sm border-b border-white/10 w-[24%]">
                    Traditional Banks
                  </th>
                  <th className="text-center py-5 px-5 text-text-muted font-semibold text-sm border-b border-white/10 w-[24%]">
                    Other Crypto Cards
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr
                    key={row.feature}
                    className="hover:bg-white/[0.03] transition-colors"
                  >
                    <td className="py-4 px-6 text-white font-semibold text-sm border-b border-white/[0.06]">
                      {row.feature}
                    </td>
                    <td className="py-4 px-5 text-center border-b border-accent/10 bg-accent/[0.05]">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-accent">
                        <CheckCircle className="h-5 w-5 shrink-0" />
                        {row.xcentra}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-center border-b border-white/[0.06]">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-red-400/80">
                        <XCircle className="h-4 w-4 shrink-0" />
                        {row.banks}
                      </span>
                    </td>
                    <td className="py-4 px-5 text-center border-b border-white/[0.06]">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-yellow-400/70">
                        <Minus className="h-4 w-4 shrink-0" />
                        {row.cryptoCards}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative bg-bg-primary py-20 overflow-hidden">
        <GravityGrid dotColor="rgba(245,166,35,0.08)" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-medium mb-4">
              No Hidden Fees. <span className="gradient-text">Ever.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-lg mb-8">
              Start spending stablecoins at the lowest fees in the industry.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/cards">
                Get Xcentra Card
              </Button>
              <Button variant="outline-light" size="lg" href="/contact">
                Have Questions?
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
