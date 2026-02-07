import type { Metadata } from "next";
import FAQContent from "./FAQContent";

export const metadata: Metadata = {
  title: "FAQ | Xcentra — Frequently Asked Questions",
  description:
    "Find answers to common questions about Xcentra stablecoin cards, global payouts, USD accounts, fees, security, and more.",
};

export default function FAQPage() {
  return <FAQContent />;
}
