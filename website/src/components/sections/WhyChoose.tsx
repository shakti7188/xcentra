"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { whyChooseFeatures } from "@/lib/constants/features";
import { Globe, Briefcase, Zap, Layers } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Briefcase,
  Zap,
  Layers,
};

export default function WhyChoose() {
  return (
    <SectionWrapper theme="dark" className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <p className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
              Why Xcentra
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose Xcentra for{" "}
              <span className="gradient-text">Stablecoin Spending?</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Globe;
            const isLarge = feature.size === "large";

            return (
              <ScrollReveal
                key={feature.title}
                delay={0.1 * index}
                className={isLarge ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <div
                  className={`glass rounded-2xl p-8 h-full group hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 ${
                    isLarge ? "lg:flex lg:items-center lg:gap-8" : ""
                  }`}
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors mb-6 ${
                      isLarge ? "lg:mb-0 lg:h-20 lg:w-20" : ""
                    }`}
                  >
                    <Icon
                      className={`text-accent ${isLarge ? "h-8 w-8 lg:h-10 lg:w-10" : "h-7 w-7"}`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-text-primary mb-3 ${
                        isLarge ? "text-2xl lg:text-3xl" : "text-xl"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-text-secondary leading-relaxed ${
                        isLarge ? "text-lg" : "text-base"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
