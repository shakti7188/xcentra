"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GravityGrid from "@/components/animations/GravityGrid";
import { roadmapPhases } from "@/lib/constants/roadmap";
import {
  CheckCircle,
  Clock,
  Rocket,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const statusConfig = {
  live: {
    icon: CheckCircle,
    color: "text-green-400",
    border: "border-green-500/30",
    bg: "bg-green-500/10",
    glow: "shadow-green-500/10",
    lineColor: "bg-green-400",
  },
  coming: {
    icon: Clock,
    color: "text-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    glow: "shadow-blue-500/10",
    lineColor: "bg-blue-400/40",
  },
  future: {
    icon: Rocket,
    color: "text-purple-400",
    border: "border-purple-500/30",
    bg: "bg-purple-500/10",
    glow: "shadow-purple-500/10",
    lineColor: "bg-purple-400/30",
  },
};

export default function RoadmapContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-bg-primary overflow-hidden pt-32 pb-16">
        <GravityGrid dotColor="rgba(245,166,35,0.3)" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Badge variant="accent" className="mb-6">
              Product Roadmap
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              From Cards to Complete{" "}
              <span className="gradient-text">Financial Ecosystem</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Our journey to build the world&apos;s most accessible stablecoin
              financial infrastructure — phase by phase.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <SectionWrapper theme="dark">
        <div className="max-w-4xl mx-auto">
          {roadmapPhases.map((phase, index) => {
            const config = statusConfig[phase.status];
            const Icon = config.icon;
            return (
              <ScrollReveal key={phase.title} delay={index * 0.15}>
                <div className="relative flex gap-6 lg:gap-8 mb-4">
                  {/* Timeline indicator */}
                  <div className="flex flex-col items-center shrink-0">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center ${config.bg} ${config.border} border-2 shadow-lg ${config.glow}`}
                    >
                      <Icon className={`h-6 w-6 ${config.color}`} />
                    </div>
                    {index < roadmapPhases.length - 1 && (
                      <div
                        className={`w-0.5 flex-1 min-h-[40px] ${config.lineColor} mt-3`}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`glass rounded-2xl p-8 flex-1 border ${config.border} card-hover-glow mb-8`}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge
                        variant={
                          phase.status === "live"
                            ? "live"
                            : phase.status === "coming"
                              ? "coming"
                              : "future"
                        }
                      >
                        {phase.subtitle}
                      </Badge>
                      <span className="text-xs text-text-muted font-mono">
                        Phase {phase.phase}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {phase.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {phase.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2 text-sm"
                        >
                          <Sparkles className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {phase.status === "live" && (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="mt-6"
                        href="/cards"
                      >
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    )}
                    {phase.status !== "live" && (
                      <Button
                        variant="outline-light"
                        size="sm"
                        className="mt-6"
                        href="/contact"
                      >
                        Join Waitlist
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative bg-bg-primary py-24 overflow-hidden">
        <GravityGrid dotColor="rgba(245,166,35,0.2)" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
              Be Part of the <span className="gradient-text">Journey</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-lg mb-8">
              Get early access to new features and help shape the future of
              borderless finance.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" href="/cards">
                Get Xcentra Card
              </Button>
              <Button variant="outline-light" size="lg" href="/contact">
                Stay Updated
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
