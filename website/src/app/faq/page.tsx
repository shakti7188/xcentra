import type { Metadata } from "next";
import FAQContent from "./FAQContent";
import { faqSchema } from "@/lib/seo/schemas";

export const metadata: Metadata = {
  title: "FAQ | Xcentra — Frequently Asked Questions",
  description:
    "Answers about Xcentra stablecoin cards, global payouts, USD accounts, fees, security, and more.",
};

const allFaqItems = [
  { question: "How do I sign up for Xcentra?", answer: "Visit our website and click 'Get Xcentra Card'. Complete the KYC verification process, and you can have a virtual card ready in minutes." },
  { question: "Who is Xcentra for?", answer: "Xcentra is built for global citizens — international travelers, expats, freelancers paid in crypto, and users in high-inflation regions preserving purchasing power in USD-pegged stablecoins." },
  { question: "What stablecoins does Xcentra support?", answer: "Xcentra currently supports USDC and USDT — the two most widely held stablecoins." },
  { question: "Can I spend USDC or USDT directly with Xcentra?", answer: "Yes. Xcentra cards allow you to spend stablecoins at merchants worldwide by converting to fiat instantly at checkout." },
  { question: "Where can I use the Xcentra card?", answer: "At over 150 million merchants worldwide wherever card payments are accepted — online and in-store, across 100+ countries." },
  { question: "What fees does Xcentra charge?", answer: "A flat 0.5% conversion fee per transaction. No monthly fees, no hidden FX markups, no foreign transaction surcharges." },
  { question: "How does Xcentra protect my funds?", answer: "Enterprise-grade security including AES-256 encryption, 2FA, biometric login, instant card freeze, and real-time AI-powered fraud monitoring with full KYC/AML compliance." },
  { question: "What is Global Payouts?", answer: "An upcoming feature to send funds from stablecoin balances directly to bank accounts in 100+ countries — faster and cheaper than wire transfers." },
  { question: "What is a Global USD Account?", answer: "An upcoming USD-denominated account (USD IBAN) that lets global citizens receive salary deposits, client payments, or B2B transfers directly." },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(allFaqItems)),
        }}
      />
      <FAQContent />
    </>
  );
}
