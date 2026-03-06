import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Xcentra | Borderless Digital Finance Platform",
  description:
    "Learn about Xcentra — the borderless digital finance platform built to make stablecoins work like everyday money for global citizens.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return <AboutContent />;
}
