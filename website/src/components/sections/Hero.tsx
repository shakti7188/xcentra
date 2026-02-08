"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FloatingElement from "@/components/animations/FloatingElement";
import GravityGrid from "@/components/animations/GravityGrid";
import TypewriterText from "@/components/animations/TypewriterText";
import MagneticElement from "@/components/animations/MagneticElement";
import CardVisual from "@/components/ui/CardVisual";
import { useOrderForm } from "@/components/providers/OrderFormProvider";

export default function Hero() {
  const { openOrderForm } = useOrderForm();

  // Manual rotation control for cross-fade card flip
  const rotateY = useMotionValue(0);

  // Front card: visible 0-90° and 270-360°, hidden 90-270°
  const frontOpacity = useTransform(rotateY, [0, 80, 90, 270, 280, 360], [1, 1, 0, 0, 1, 1]);
  // Back card: visible 90-270°, hidden 0-90° and 270-360°
  const backOpacity = useTransform(rotateY, [0, 80, 90, 270, 280, 360], [0, 0, 1, 1, 0, 0]);

  useEffect(() => {
    const runAnimation = () => {
      const controls = animate(rotateY, 360, {
        duration: 4,
        ease: "easeInOut",
        onComplete: () => {
          rotateY.set(0);
          setTimeout(runAnimation, 3000); // repeatDelay
        },
      });
      return controls;
    };

    const timeout = setTimeout(() => {
      runAnimation();
    }, 100);

    return () => clearTimeout(timeout);
  }, [rotateY]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-bg-primary pt-20">
      {/* Subtle dot grid that reacts to cursor — antigravity style */}
      <GravityGrid
        dotColor="rgba(245, 166, 35, 0.08)"
        dotSize={1}
        gap={32}
        interactiveRadius={140}
        repelStrength={18}
      />

      {/* Gradient Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge variant="accent" className="mb-6">
                Spend Stablecoins Like Real Money
              </Badge>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.05] tracking-tighter mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block"
              >
                Xcentra — The
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="block"
              >
                <TypewriterText
                  words={["Borderless", "Limitless", "Seamless", "Global"]}
                  typingSpeed={100}
                  deletingSpeed={50}
                  pauseTime={2500}
                />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="block"
              >
                Digital Finance
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl"
            >
              Spend stablecoins like USDC and USDT{" "}
              <strong className="text-white">anywhere cards are accepted</strong>{" "}
              with Xcentra virtual and physical debit cards. Built for global travelers,
              expats, and the modern digital economy.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              <MagneticElement strength={0.15} radius={150}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="group"
                  onClick={() => openOrderForm("physical")}
                >
                  Get Xcentra Card
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </MagneticElement>
            </motion.div>
          </motion.div>

          {/* Right: 3D Flipping Card — original animation restored */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <FloatingElement amplitude={8} duration={4}>
              <div style={{ perspective: "1200px" }}>
                <motion.div
                  className="relative w-[360px] h-[226px] sm:w-[430px] sm:h-[270px]"
                  style={{ rotateY, transformStyle: "preserve-3d" }}
                >
                  {/* Front — Black card (opacity-based hide on back) */}
                  <motion.div className="absolute inset-0" style={{ opacity: frontOpacity }}>
                    <CardVisual variant="black" size="lg" className="w-full h-full" />
                  </motion.div>
                  {/* Back — Virtual card (opacity-based show on back) */}
                  <motion.div
                    className="absolute inset-0"
                    style={{ opacity: backOpacity, transform: "rotateY(180deg)" }}
                  >
                    <CardVisual variant="virtual" size="lg" className="w-full h-full" />
                  </motion.div>
                </motion.div>
              </div>
            </FloatingElement>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
