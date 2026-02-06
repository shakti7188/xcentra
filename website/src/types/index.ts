export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  size?: "small" | "medium" | "large";
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface CryptoPrice {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  icon: string;
}

export interface RoadmapPhase {
  phase: number;
  title: string;
  subtitle: string;
  description: string;
  status: "live" | "coming" | "future";
  features: string[];
}

export interface UseCase {
  title: string;
  icon: string;
  steps: {
    label: string;
    description: string;
    timeline: string;
  }[];
}

export interface RegionData {
  slug: string;
  name: string;
  currency: string;
  headline: string;
  description: string;
  useCases: string[];
}
