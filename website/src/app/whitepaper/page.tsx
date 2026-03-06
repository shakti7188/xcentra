import type { Metadata } from "next";
import WhitepaperContent from "./WhitepaperContent";

export const metadata: Metadata = {
  title: "Whitepaper | Xcentra — The Borderless Digital Finance Platform",
  description:
    "Xcentra Whitepaper v1.0 — how Xcentra bridges digital assets and real-world commerce via global cards, payouts, and USD accounts.",
  openGraph: {
    title: "Xcentra Whitepaper v1.0",
    description:
      "The Borderless Digital Finance Platform — bridging stablecoins and global commerce.",
  },
};

export default function WhitepaperPage() {
  return <WhitepaperContent />;
}
