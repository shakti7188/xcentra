"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CursorGlow from "@/components/animations/CursorGlow";
import Badge from "@/components/ui/Badge";
import { paymentFeatures } from "@/lib/constants/features";
import {
  CreditCard,
  ShieldCheck,
  RefreshCw,
  MousePointerClick,
  BarChart3,
  Link,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CreditCard,
  ShieldCheck,
  RefreshCw,
  MousePointerClick,
  BarChart3,
  Link,
};

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof paymentFeatures)[0];
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge variant="accent" className="mb-4">
              Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Accept Payments{" "}
              <span className="gradient-text">Anytime, Anywhere</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Everything you need for modern digital payments, built into one
              platform.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paymentFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
