"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GravityGrid from "@/components/animations/GravityGrid";
import {
  ArrowRight,
  Building,
  Briefcase,
  DollarSign,
  Globe,
  Users,
  Shield,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "USD IBAN Facility",
    description:
      "Get a USD-denominated account number that works for receiving international payments, salary deposits, and B2B transfers.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Briefcase,
    title: "Freelancer Friendly",
    description:
      "Perfect for freelancers, agencies, and contractors who invoice clients globally and need a reliable USD receiving account.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Globe,
    title: "Banking Access Everywhere",
    description:
      "Solves banking access limits for global citizens — no need for a US bank account or physical presence.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Shield,
    title: "Regulated & Secure",
    description:
      "Full compliance with international banking regulations. Enterprise-grade security for your funds.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

const useCases = [
  "Receive client payments from US/EU companies",
  "Accept salary deposits from international employers",
  "Invoice clients with a professional USD account",
  "Hold and manage USD balances globally",
  "Convert to stablecoins and spend via Xcentra Card",
  "Transfer to local bank accounts worldwide",
];

export default function USDAccountContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center bg-bg-primary overflow-hidden pt-32 pb-20">
        <GravityGrid dotColor="rgba(245,166,35,0.3)" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Badge variant="coming" className="mb-6">
              Coming Soon
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              Your Global{" "}
              <span className="gradient-text">USD Account</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
              A USD-denominated account number that helps global citizens receive
              salary or business payments directly into Xcentra.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Button variant="secondary" size="lg" href="/contact">
              Join Waitlist
              <ArrowRight className="h-4 w-4" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <SectionWrapper theme="light">
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg shadow-black/5 border border-black/5 h-full">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${f.bg} mb-5`}
                >
                  <f.icon className={`h-7 w-7 ${f.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-3">
                  {f.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {f.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Use Cases */}
      <SectionWrapper theme="dark">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-medium mb-6">
                Perfect <span className="gradient-text">For</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {useCases.map((uc, i) => (
              <ScrollReveal key={uc} delay={i * 0.08}>
                <div className="flex items-start gap-3 p-4 glass rounded-xl border border-border-dark">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-sm">{uc}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative bg-bg-primary py-24 overflow-hidden">
        <GravityGrid dotColor="rgba(245,166,35,0.2)" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-medium mb-6">
              Get Early <span className="gradient-text">Access</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-lg mb-8">
              Be among the first to get a Global USD Account when we launch.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Button variant="secondary" size="lg" href="/contact">
              Join Waitlist
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
