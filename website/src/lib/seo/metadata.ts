import type { Metadata } from "next";

export const siteConfig = {
  name: "Xcentra",
  tagline: "The Borderless Digital Finance Platform",
  url: "https://xcentra.com",
  description:
    "Spend stablecoins like everyday money with Xcentra virtual & physical cards. 0.5% flat fee, 150M+ merchants, 100+ countries. Built for travelers, expats, freelancers, and global citizens.",
};

export const homeMetadata: Metadata = {
  title: "Xcentra — Spend USDC & USDT Anywhere | 0.5% Fee, 150M+ Merchants",
  description: siteConfig.description,
  keywords: [
    "stablecoin card",
    "USDC debit card",
    "USDT card",
    "crypto debit card",
    "stablecoin spending",
    "borderless payments",
    "digital finance",
    "global payments",
    "travel crypto card",
    "expat finance",
    "digital nomad card",
    "crypto card low fees",
    "spend stablecoins",
    "USDC spending card",
    "international debit card",
  ],
  openGraph: {
    title: "Xcentra — Spend Stablecoins Like Real Money at 150M+ Merchants",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "Xcentra - Spend stablecoins like everyday money",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xcentra — Spend USDC & USDT Anywhere | 0.5% Fee, 150M+ Merchants",
    description: siteConfig.description,
    images: ["/images/og/home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
