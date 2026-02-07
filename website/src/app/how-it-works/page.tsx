import type { Metadata } from "next";
import HowItWorksContent from "./HowItWorksContent";

export const metadata: Metadata = {
  title: "How It Works | Xcentra — Simple Stablecoin Spending",
  description:
    "Learn how Xcentra converts your USDC and USDT to local currency at the point of sale in four simple steps.",
};

export default function HowItWorksPage() {
  return <HowItWorksContent />;
}
