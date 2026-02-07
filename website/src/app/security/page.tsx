import type { Metadata } from "next";
import SecurityContent from "./SecurityContent";

export const metadata: Metadata = {
  title: "Security | Xcentra — Enterprise-Grade Protection for Your Assets",
  description:
    "Xcentra uses bank-grade encryption, 2FA, biometric authentication, instant card freeze, and real-time fraud monitoring to protect your stablecoins and transactions.",
};

export default function SecurityPage() {
  return <SecurityContent />;
}
