import type { Metadata } from "next";
import WhitepaperContent from "./WhitepaperContent";

export const metadata: Metadata = {
  title: "Whitepaper | Xcentra — The Borderless Digital Finance Platform",
  description:
    "Read the Xcentra Whitepaper v1.0. Explore how Xcentra bridges digital assets and real-world commerce through global debit cards, cross-border payouts, USD accounts, and a merchant ecosystem.",
  openGraph: {
    title: "Xcentra Whitepaper v1.0",
    description:
      "The Borderless Digital Finance Platform — bridging stablecoins and global commerce.",
  },
};

export default function WhitepaperPage() {
  return <WhitepaperContent />;
}
