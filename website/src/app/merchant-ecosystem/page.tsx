import type { Metadata } from "next";
import MerchantContent from "./MerchantContent";

export const metadata: Metadata = {
  title: "Merchant Ecosystem | Xcentra — Direct Stablecoin Payments",
  description:
    "Xcentra PoS — pay merchants directly with ultra-low fees. A proprietary closed-loop payment network for the stablecoin economy.",
};

export default function MerchantPage() {
  return <MerchantContent />;
}
