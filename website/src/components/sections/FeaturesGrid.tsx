"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CursorGlow from "@/components/animations/CursorGlow";
import Badge from "@/components/ui/Badge";
import { coreCapabilities } from "@/lib/constants/features";
import {
  CreditCard,
  ShieldCheck,
  RefreshCw,
  BarChart3,
  Globe,
  DollarSign,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CreditCard,
  ShieldCheck,
  RefreshCw,
  BarChart3,
  Globe,
  DollarSign,
};

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof coreCapabilities)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = iconMap[feature.icon] || CreditCard;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass rounded-2xl p-6 lg:p-8 border border-border-dark card-hover-glow transition-all duration-300 hover:border-accent/20"
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
        <Icon className="h-6 w-6 text-accent" />
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-2">
        {feature.title}
      </h3>
      <p className="text-text-secondary leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function FeaturesGrid() {
  return (
    <section className="relative py-24 lg:py-32 bg-bg-primary overflow-hidden">
      <CursorGlow size={400} opacity={0.04} />

      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px]" />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">
              Core Capabilities
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Everything You Need,{" "}
              <span className="gradient-text">Nothing You Don&apos;t</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A single platform for spending stablecoins in real life — with
              security, transparency, and zero complexity.
            </p>
          </div>
        </ScrollReveal>

        {/* First row: 3 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {coreCapabilities.slice(0, 3).map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Middle: Lifestyle visual banner with card payment image */}
        <ScrollReveal delay={0.2}>
          <div className="relative w-full h-[160px] sm:h-[200px] rounded-2xl overflow-hidden mb-6 group">
            <Image
              src="/images/stock/card-payment.jpg"
              alt="Using Xcentra card for payment"
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 sm:px-12">
              <div>
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">Real-World Spending</p>
                <p className="text-white text-xl sm:text-2xl lg:text-3xl font-extrabold max-w-md">
                  Tap. Pay. Done. <span className="text-white/60">Anywhere in the world.</span>
                </p>
              </div>
            </div>
            {/* Floating Xcentra card over the image */}
            <motion.div
              animate={{ y: [-5, 5, -5], rotate: [-2, 2, -2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-8 sm:right-16 top-1/2 -translate-y-1/2 w-[140px] sm:w-[180px] h-[88px] sm:h-[113px] hidden md:block"
            >
              <Image
                src="/images/stock/xcentra-card-black.png"
                alt="Xcentra Card"
                fill
                className="object-contain drop-shadow-[0_10px_30px_rgba(245,166,35,0.25)]"
              />
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Second row: 3 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCapabilities.slice(3).map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
