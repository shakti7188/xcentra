"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

const mediaLogos = [
  "CoinDesk",
  "CoinTelegraph",
  "Bloomberg",
  "Forbes",
  "TechCrunch",
  "The Block",
  "Decrypt",
  "Yahoo Finance",
];

export default function TrustBar() {
  return (
    <section className="bg-bg-primary py-12 border-b border-border-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-sm text-text-muted uppercase tracking-widest mb-8">
            As Seen In
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {mediaLogos.map((name) => (
              <div
                key={name}
                className="text-text-secondary/30 hover:text-text-secondary/60 transition-all duration-300 hover:scale-105 cursor-default"
              >
                <span className="text-lg font-bold tracking-tight">{name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
