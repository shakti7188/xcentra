import type { Metadata } from "next";
import WhiteLabelContent from "./WhiteLabelContent";

export const metadata: Metadata = {
  title: "White Label Cards — Launch Your Branded Debit Card | Xcentra",
  description:
    "Launch branded virtual and physical debit cards powered by the Xhavic blockchain. Custom branding, program management, 150M+ merchants.",
  openGraph: {
    title: "White Label Cards — Launch Your Branded Debit Card | Xcentra",
    description:
      "Launch your own branded virtual and physical debit cards powered by the Xhavic blockchain. Custom branding, full program management, and global acceptance.",
    url: "/white-label",
  },
};

export default function WhiteLabelPage() {
  return <WhiteLabelContent />;
}
