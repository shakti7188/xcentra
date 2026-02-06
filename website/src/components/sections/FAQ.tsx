"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import Badge from "@/components/ui/Badge";
import Accordion from "@/components/ui/Accordion";
import { faqItems } from "@/lib/constants/faq";

export default function FAQ() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-light overflow-hidden">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-dark mb-4">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Everything you need to know about Xcentra and stablecoin spending.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion items={faqItems} />
        </ScrollReveal>
      </div>
    </section>
  );
}
