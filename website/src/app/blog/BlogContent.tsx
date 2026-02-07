"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Badge from "@/components/ui/Badge";
import GravityGrid from "@/components/animations/GravityGrid";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "Why Stablecoins Are the Future of Cross-Border Payments",
    excerpt:
      "Explore how stablecoins are disrupting traditional remittance and international wire transfers, offering faster, cheaper alternatives.",
    image: "/images/stock/global-map.jpg",
    category: "Industry",
    date: "Coming Soon",
    readTime: "5 min read",
  },
  {
    title: "How to Spend Crypto Without the Volatility Risk",
    excerpt:
      "Learn why stablecoin-backed debit cards eliminate the volatility problem that has plagued crypto payments for years.",
    image: "/images/stock/card-payment.jpg",
    category: "Education",
    date: "Coming Soon",
    readTime: "4 min read",
  },
  {
    title: "Digital Nomad Finance: Managing Money Across Borders",
    excerpt:
      "Tips and strategies for digital nomads to manage their finances, receive payments, and spend globally without expensive bank fees.",
    image: "/images/stock/travel.jpg",
    category: "Lifestyle",
    date: "Coming Soon",
    readTime: "6 min read",
  },
  {
    title: "Xcentra Roadmap Update: Global Payouts Launch Timeline",
    excerpt:
      "A deep dive into our upcoming Global Payouts feature — stablecoin-to-bank transfers in 100+ countries.",
    image: "/images/stock/freelancer.jpg",
    category: "Product",
    date: "Coming Soon",
    readTime: "3 min read",
  },
  {
    title: "The Rise of Stablecoin Debit Cards in the Middle East",
    excerpt:
      "How UAE and Dubai are becoming hotspots for stablecoin adoption and what this means for the future of payments.",
    image: "/images/stock/dubai.jpg",
    category: "Regional",
    date: "Coming Soon",
    readTime: "5 min read",
  },
  {
    title: "Understanding USDC vs USDT: Which Stablecoin Is Right for You?",
    excerpt:
      "A comparison of the two most popular stablecoins and how they work with Xcentra for everyday spending.",
    image: "/images/stock/phone-app.jpg",
    category: "Education",
    date: "Coming Soon",
    readTime: "4 min read",
  },
];

const categoryColors: Record<string, string> = {
  Industry: "bg-blue-500/10 text-blue-600",
  Education: "bg-emerald-500/10 text-emerald-600",
  Lifestyle: "bg-purple-500/10 text-purple-600",
  Product: "bg-amber-500/10 text-amber-600",
  Regional: "bg-pink-500/10 text-pink-600",
};

export default function BlogContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center bg-bg-primary overflow-hidden pt-32 pb-16">
        <GravityGrid dotColor="rgba(245,166,35,0.3)" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Badge variant="accent" className="mb-6">
              Blog
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Insights & <span className="gradient-text">Updates</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              The latest news, product updates, and educational content on
              stablecoins and borderless finance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <SectionWrapper theme="light">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <ScrollReveal key={post.title} delay={i * 0.1}>
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-black/5 h-full flex flex-col group cursor-pointer">
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || "bg-gray-100 text-gray-600"}`}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-accent text-sm font-semibold">
                    Coming Soon
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
