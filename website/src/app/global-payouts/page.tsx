import type { Metadata } from "next";
import GlobalPayoutsContent from "./GlobalPayoutsContent";

export const metadata: Metadata = {
  title: "Global Payouts | Xcentra — Stablecoin to Bank Transfers",
  description:
    "Send stablecoins to bank accounts in 100+ countries with Xcentra Global Payouts. Faster and cheaper than international wire transfers.",
  alternates: { canonical: "/global-payouts/" },
};

export default function GlobalPayoutsPage() {
  return <GlobalPayoutsContent />;
}
