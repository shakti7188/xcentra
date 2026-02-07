"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GravityGrid from "@/components/animations/GravityGrid";
import MagneticElement from "@/components/animations/MagneticElement";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="relative py-32 lg:py-40 bg-bg-primary overflow-hidden">
      {/* Interactive dot grid background — antigravity style */}
      <GravityGrid
        dotColor="rgba(245, 166, 35, 0.1)"
        dotSize={1.5}
        gap={30}
        interactiveRadius={150}
        repelStrength={20}
      />

      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-accent/3 rounded-full blur-[100px]" />
      </div>

      {/* Floating card visuals in background */}
      <motion.div
        animate={{ y: [-15, 15, -15], rotate: [-3, 3, -3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -left-20 lg:left-10 w-[220px] h-[140px] opacity-[0.08] lg:opacity-[0.12] pointer-events-none"
      >
        <Image
          src="/images/stock/xcentra-card-gold.png"
          alt=""
          fill
          className="object-contain"
        />
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [5, -2, 5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 -right-10 lg:right-16 w-[240px] h-[150px] opacity-[0.08] lg:opacity-[0.12] pointer-events-none"
      >
        <Image
          src="/images/stock/xcentra-card-black.png"
          alt=""
          fill
          className="object-contain"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 leading-[1.1]">
              Make Stablecoins{" "}
              <span className="gradient-text">Practical</span>
              <br />
              — Not Just Digital
            </h2>

            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              Join thousands of global citizens already using Xcentra to bridge
              the gap between crypto and everyday life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticElement strength={0.2} radius={200}>
                <Button variant="secondary" size="lg" href="/cards" className="group">
                  Get Xcentra Card
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Button>
              </MagneticElement>
              <MagneticElement strength={0.2} radius={200}>
                <Button variant="outline-light" size="lg" href="/contact">
                  Join Waitlist
                </Button>
              </MagneticElement>
            </div>

            <p className="mt-10 text-sm text-text-muted">
              Borderless spending. Real-world utility. Built for global citizens.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
