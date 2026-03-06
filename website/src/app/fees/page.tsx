import type { Metadata } from "next";
import FeesContent from "./FeesContent";

export const metadata: Metadata = {
  title: "Fees & Pricing | Xcentra — Transparent, Ultra-Low Fees",
  description:
    "Xcentra charges just 0.5% conversion fee per transaction. No hidden charges, no monthly fees. See our complete fee schedule for cards, ATM, and more.",
  alternates: { canonical: "/fees/" },
};

export default function FeesPage() {
  return <FeesContent />;
}
