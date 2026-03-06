import type { Metadata } from "next";
import SecurityContent from "./SecurityContent";

export const metadata: Metadata = {
  title: "Security | Xcentra — Enterprise-Grade Protection for Your Assets",
  description:
    "Bank-grade encryption, 2FA, biometric auth, instant card freeze, and real-time fraud monitoring to protect your assets.",
  alternates: { canonical: "/security/" },
};

export default function SecurityPage() {
  return <SecurityContent />;
}
