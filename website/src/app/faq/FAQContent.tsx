"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GravityGrid from "@/components/animations/GravityGrid";
import { useOrderForm } from "@/components/providers/OrderFormProvider";
import Accordion from "@/components/ui/Accordion";

const categories = [
  {
    title: "Getting Started",
    items: [
      {
        question: "How do I sign up for Xcentra?",
        answer:
          "Visit our website and click 'Get Xcentra Card'. Complete the KYC verification process, and you can have a virtual card ready in minutes. Physical cards ship to your address after verification.",
      },
      {
        question: "Who is Xcentra for?",
        answer:
          "Xcentra is built for global citizens — international travelers who want zero-FX spending, expats and families managing money across borders, freelancers paid in crypto, tech-savvy shoppers who want privacy-first payments, and users in high-inflation regions preserving purchasing power in USD-pegged stablecoins.",
      },
      {
        question: "What stablecoins does Xcentra support?",
        answer:
          "Xcentra currently supports USDC and USDT — the two most widely held stablecoins. We are working on adding support for additional stablecoins in the future.",
      },
      {
        question: "Which blockchains are supported for deposits?",
        answer:
          "We support deposits from Ethereum, Polygon, Solana, Tron, Arbitrum, and Optimism networks with more chains coming soon.",
      },
    ],
  },
  {
    title: "Cards & Spending",
    items: [
      {
        question: "Can I spend USDC or USDT directly with Xcentra?",
        answer:
          "Yes. Xcentra cards allow you to spend stablecoins like USDC and USDT at merchants worldwide by converting to fiat instantly at checkout. No manual off-ramping needed.",
      },
      {
        question: "Where can I use the Xcentra card?",
        answer:
          "At over 150 million merchants worldwide wherever card payments are accepted — online and in-store, across 100+ countries. You can also use your card with Apple Pay and Google Pay.",
      },
      {
        question: "Can I use Xcentra for subscriptions like Netflix, Spotify, or AWS?",
        answer:
          "Yes. Your Xcentra virtual card works for all online subscriptions and recurring payments. You can pay for global services without needing a US bank account — perfect for international users.",
      },
      {
        question: "Is Xcentra a crypto debit card or a stablecoin card?",
        answer:
          "It's a stablecoin-powered debit card experience — designed to make stablecoins function like everyday money, not for speculation.",
      },
    ],
  },
  {
    title: "Fees & Pricing",
    items: [
      {
        question: "What fees does Xcentra charge?",
        answer:
          "Xcentra charges a flat 0.5% conversion fee per transaction — that's it. No monthly fees, no hidden FX markups, no foreign transaction surcharges. Virtual cards are free, physical cards cost a one-time $10. ATM withdrawals are free up to $200/month.",
      },
      {
        question: "How does Xcentra compare to traditional banks and other crypto cards?",
        answer:
          "Traditional banks charge 2-3% in FX markups plus foreign transaction fees. Other crypto cards charge 1-2.5% with hidden spreads. Xcentra offers a transparent flat 0.5% fee with no hidden charges — the most cost-effective option for global stablecoin spending.",
      },
      {
        question: "Are there spending limits?",
        answer:
          "Virtual cards have a daily limit of $10,000 and monthly limit of $50,000. Physical cards have higher limits. Premium cardholders enjoy even higher thresholds.",
      },
      {
        question: "Can I withdraw cash from ATMs?",
        answer:
          "Yes. Physical card holders get $200/month in free ATM withdrawals. After that, a 2% fee applies. Works at ATMs worldwide.",
      },
    ],
  },
  {
    title: "Security & Trust",
    items: [
      {
        question: "How does Xcentra protect my funds and account?",
        answer:
          "Xcentra uses enterprise-grade security including AES-256 encryption, 2FA, biometric login, instant card freeze from the app, and real-time AI-powered fraud monitoring. We maintain full KYC/AML compliance and undergo regular third-party security audits.",
      },
      {
        question: "What happens if I lose my card?",
        answer:
          "Freeze it instantly in the app — no wait times. Virtual cards can be reissued immediately. Physical replacements ship within 3-5 business days for $10.",
      },
      {
        question: "How do I contact support?",
        answer:
          "Reach our support team 24/7 via in-app chat, email at support [at] xcentra.com, or through our contact page. Premium users get priority phone support.",
      },
    ],
  },
  {
    title: "Upcoming Products",
    items: [
      {
        question: "What is Global Payouts?",
        answer:
          "An upcoming feature that lets you send funds from stablecoin balances directly to traditional bank accounts in 100+ countries — faster and cheaper than international wire transfers. No $30+ wire fees, no 3-day delays.",
      },
      {
        question: "What is a Global USD Account?",
        answer:
          "An upcoming USD-denominated account (USD IBAN facility) that lets global citizens receive salary deposits, client payments, or B2B transfers directly into Xcentra — solving banking access issues worldwide.",
      },
    ],
  },
];

export default function FAQContent() {
  const { openOrderForm } = useOrderForm();
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center bg-bg-primary overflow-hidden pt-32 pb-16">
        <GravityGrid dotColor="rgba(245,166,35,0.15)" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Badge variant="accent" className="mb-6">
              Help Center
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about Xcentra, stablecoin spending,
              fees, security, and our upcoming products.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Categories */}
      <SectionWrapper theme="light">
        <div className="max-w-3xl mx-auto space-y-12">
          {categories.map((category, i) => (
            <ScrollReveal key={category.title} delay={i * 0.1}>
              <div>
                <h2 className="text-2xl font-semibold text-text-dark mb-6 flex items-center gap-3">
                  <span className="h-8 w-1 bg-accent rounded-full" />
                  {category.title}
                </h2>
                <Accordion items={category.items} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Still Have Questions CTA */}
      <SectionWrapper theme="dark">
        <div className="text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-medium mb-6">
              Still Have Questions?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-lg mb-8">
              Can&apos;t find what you&apos;re looking for? Our support team is
              available 24/7 to help you.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/contact">
                Contact Support
              </Button>
              <Button variant="outline-light" size="lg" onClick={() => openOrderForm("physical")}>
                Get Xcentra Card
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </>
  );
}
