import type { Metadata } from "next";

export const siteConfig = {
  name: "Xcentra",
  tagline: "The Borderless Digital Finance Platform",
  url: "https://xcentra.com",
  description:
    "Spend stablecoins like everyday money with Xcentra virtual & physical cards. Global spending today, global payouts & USD IBAN coming soon.",
};

export const homeMetadata: Metadata = {
  title: "Xcentra Global Cards — Spend USDC & USDT Anywhere Worldwide",
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
    "freelancer crypto card",
    "remote worker finance",
  ],
  openGraph: {
    title: "Xcentra — The Borderless Digital Finance Platform for Global Citizens",
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
    title: "Xcentra Global Cards — Spend USDC & USDT Anywhere Worldwide",
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
