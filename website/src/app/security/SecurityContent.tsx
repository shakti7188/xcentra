"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GravityGrid from "@/components/animations/GravityGrid";
import { useOrderForm } from "@/components/providers/OrderFormProvider";
import {
  Shield,
  Lock,
  Fingerprint,
  Eye,
  Server,
  AlertTriangle,
  Smartphone,
  CheckCircle,
  Globe,
  FileCheck,
} from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All data in transit and at rest is encrypted using AES-256 and TLS 1.3. Your financial information never travels unprotected.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    description:
      "Unlock the Xcentra app with Face ID, Touch ID, or fingerprint. Your biometric data never leaves your device.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Shield,
    title: "Two-Factor Authentication (2FA)",
    description:
      "Mandatory 2FA for account login, card actions, and fund transfers. Choose from TOTP authenticator apps or SMS verification.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Smartphone,
    title: "Instant Card Freeze",
    description:
      "Lost your card? Freeze it instantly from the app. Unfreeze anytime when you find it. No call center wait times.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: Eye,
    title: "Real-Time Fraud Monitoring",
    description:
      "AI-powered transaction monitoring analyzes every purchase in real-time. Suspicious activity triggers instant alerts and automatic blocks.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description:
      "Hosted on enterprise-grade cloud infrastructure with DDoS protection, WAF, and continuous security audits by third-party firms.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

const complianceItems = [
  {
    icon: FileCheck,
    title: "KYC/AML Compliance",
    description:
      "Full Know Your Customer and Anti-Money Laundering compliance across all jurisdictions. Every user is verified before card issuance.",
  },
  {
    icon: Globe,
    title: "Global Regulatory Standards",
    description:
      "Xcentra operates within regulatory frameworks across all supported regions, adhering to local financial service regulations.",
  },
  {
    icon: AlertTriangle,
    title: "Sanctions Screening",
    description:
      "Real-time screening against global sanctions lists (OFAC, EU, UN) for all transactions to prevent prohibited use.",
  },
];

const userTips = [
  "Enable 2FA on your Xcentra account immediately after sign-up",
  "Never share your login credentials, OTP, or recovery phrases with anyone",
  "Use a strong, unique password — at least 12 characters with mixed case and symbols",
  "Keep your Xcentra app updated to the latest version for security patches",
  "Enable push notifications to receive instant alerts for every transaction",
  "Contact support immediately if you suspect unauthorized activity",
];

export default function SecurityContent() {
  const { openOrderForm } = useOrderForm();
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center bg-bg-primary overflow-hidden pt-32 pb-16">
        <GravityGrid dotColor="rgba(245,166,35,0.06)" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Badge variant="accent" className="mb-6">
              Security First
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              Your Assets,{" "}
              <span className="gradient-text">Fully Protected</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Enterprise-grade security built into every layer of Xcentra — from
              encryption to fraud detection to regulatory compliance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Security Features Grid */}
      <SectionWrapper theme="dark">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-medium mb-4">
              Multi-Layer <span className="gradient-text">Protection</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Every transaction, every login, every action is protected by
              multiple security layers working together.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {securityFeatures.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-8 h-full card-hover-glow border border-border-dark">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${feature.bg} mb-5`}
                >
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Compliance & Regulation */}
      <SectionWrapper theme="light">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge variant="accent" className="mb-4">
                Compliance
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-medium text-text-dark mb-4">
                Regulatory <span className="text-accent">Compliance</span>
              </h2>
              <p className="text-text-muted text-lg">
                Xcentra operates within established financial regulations to
                protect you and the broader financial ecosystem.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {complianceItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-black/5 shadow-lg shadow-black/5 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 mb-5">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* User Best Practices */}
      <SectionWrapper theme="dark">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Badge variant="accent" className="mb-4">
                Stay Safe
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-medium mb-4">
                Security <span className="gradient-text">Best Practices</span>
              </h2>
              <p className="text-text-secondary text-lg">
                Follow these guidelines to keep your Xcentra account secure.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass rounded-2xl p-8 border border-border-dark">
              <div className="space-y-4">
                {userTips.map((tip, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-text-secondary leading-relaxed">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative bg-bg-primary py-20 overflow-hidden">
        <GravityGrid dotColor="rgba(245,166,35,0.08)" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-medium mb-4">
              Security You Can <span className="gradient-text">Trust</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-lg mb-8">
              Your assets deserve the highest level of protection. Xcentra
              delivers it as standard.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={() => openOrderForm("physical")}>
                Get Xcentra Card
              </Button>
              <Button variant="outline-light" size="lg" href="/how-it-works">
                How It Works
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
