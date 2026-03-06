import type { Metadata } from "next";
import CardsContent from "./CardsContent";

export const metadata: Metadata = {
  title: "Global Cards | Xcentra — Stablecoin Debit Cards",
  description:
    "Spend USDC and USDT at 150M+ merchants worldwide with Xcentra virtual and physical debit cards. Real-time conversion, ultra-low fees.",
  alternates: { canonical: "/cards/" },
};

export default function CardsPage() {
  return <CardsContent />;
}
