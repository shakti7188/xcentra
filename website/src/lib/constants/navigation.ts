import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "#",
    children: [
      { label: "Global Cards", href: "/cards" },
      { label: "Global Payouts", href: "/global-payouts" },
      { label: "USD Account", href: "/global-usd-account" },
      { label: "Merchant Ecosystem", href: "/merchant-ecosystem" },
    ],
  },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const footerNav = {
  products: [
    { label: "Global Cards", href: "/cards" },
    { label: "Global Payouts", href: "/global-payouts" },
    { label: "USD Account", href: "/global-usd-account" },
    { label: "Merchant Ecosystem", href: "/merchant-ecosystem" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  regions: [
    { label: "UAE & Dubai", href: "/regions/uae" },
    { label: "UK & Europe", href: "/regions/uk" },
    { label: "EU", href: "/regions/eu" },
    { label: "Indonesia", href: "/regions/indonesia" },
    { label: "Brazil", href: "/regions/brazil" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms of Service", href: "/legal/terms" },
  ],
};
