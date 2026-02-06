"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FloatingElement from "@/components/animations/FloatingElement";
import GravityGrid from "@/components/animations/GravityGrid";
import TypewriterText from "@/components/animations/TypewriterText";
import MagneticElement from "@/components/animations/MagneticElement";

function XcentraCard({ side }: { side: "front" | "back" }) {
  if (side === "front") {
    return (
      <div className="w-[340px] h-[215px] sm:w-[400px] sm:h-[250px] rounded-2xl bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] p-6 flex flex-col justify-between shadow-2xl shadow-accent/10 border border-accent/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-accent flex items-center justify-center">
              <span className="text-bg-primary font-bold text-xs">X</span>
            </div>
            <span className="text-white text-sm font-semibold tracking-wide">Xcentra</span>
          </div>
          <div className="flex gap-1">
            <div className="h-5 w-8 rounded bg-white/10" />
            <div className="h-5 w-5 rounded bg-accent/30" />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-10 rounded bg-yellow-400/80" />
            <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-accent/60" />
            </div>
          </div>
          <p className="text-white/60 text-xs tracking-[0.3em] font-mono">
            •••• •••• •••• 4829
          </p>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-white/40 text-[10px] uppercase tracking-wider">Card Holder</p>
            <p className="text-white text-sm font-medium">Global Citizen</p>
          </div>
          <div className="text-right">
            <p className="text-white/40 text-[10px] uppercase tracking-wider">Balance</p>
            <p className="text-accent text-sm font-semibold">$12,450.00</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[340px] h-[215px] sm:w-[400px] sm:h-[250px] rounded-2xl bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#2a2a2a] p-6 flex flex-col justify-between shadow-2xl shadow-accent/10 border border-accent/20">
      <div className="w-full h-10 bg-black/40 rounded -mx-6 mt-2" style={{ width: "calc(100% + 48px)", marginLeft: "-24px" }} />
      <div className="flex flex-col items-end gap-2 mt-4">
        <div className="h-8 w-48 rounded bg-white/5 border border-white/10 flex items-center justify-end px-3">
          <span className="text-white/30 text-xs font-mono">CVV: •••</span>
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div className="flex gap-1 items-center">
          <span className="text-white/30 text-[10px]">USDC</span>
          <span className="text-white/20">•</span>
          <span className="text-white/30 text-[10px]">USDT</span>
          <span className="text-white/20">•</span>
          <span className="text-white/30 text-[10px]">150M+ merchants</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-6 w-6 rounded-full bg-red-500/60" />
          <div className="h-6 w-6 rounded-full bg-yellow-500/60 -ml-2" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary pt-20">
      {/* Subtle dot grid that reacts to cursor — antigravity style, NOT dusty particles */}
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                Automation in Modern Finance
              </Badge>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tighter mb-6">
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
                <span className="gradient-text">
                  <TypewriterText
                    words={["Borderless", "Limitless", "Seamless", "Global"]}
                    typingSpeed={100}
                    deletingSpeed={50}
                    pauseTime={2500}
                  />
                </span>
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
              Spend stablecoins like USDC and USDT at{" "}
              <strong className="text-white">150M+ merchants worldwide</strong>{" "}
              with Xcentra virtual and physical debit cards. Built for freelancers,
              remote workers, and crypto-native users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticElement strength={0.15} radius={150}>
                <Button variant="secondary" size="lg" href="#" className="group">
                  Get Xcentra Card
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </MagneticElement>
              <MagneticElement strength={0.15} radius={150}>
                <Button variant="outline-light" size="lg" href="#">
                  Join Waitlist
                </Button>
              </MagneticElement>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex gap-8 mt-10 pt-8 border-t border-border-dark"
            >
              {[
                { value: "150M+", label: "Merchants" },
                { value: "100+", label: "Countries" },
                { value: "0.5%", label: "Conversion Fee" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-accent">{stat.value}</p>
                  <p className="text-sm text-text-secondary">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Card Flip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <FloatingElement amplitude={8} duration={4}>
              <div className="perspective">
                <motion.div
                  className="preserve-3d relative w-[340px] h-[215px] sm:w-[400px] sm:h-[250px]"
                  animate={{ rotateY: [0, 180, 360] }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <div className="absolute inset-0 backface-hidden">
                    <XcentraCard side="front" />
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <XcentraCard side="back" />
                  </div>
                </motion.div>
              </div>
            </FloatingElement>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 rounded-full bg-accent"
            animate={{ opacity: [1, 0.3, 1], y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
