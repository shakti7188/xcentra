"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FloatingElement from "@/components/animations/FloatingElement";
import GravityGrid from "@/components/animations/GravityGrid";
import TypewriterText from "@/components/animations/TypewriterText";
import MagneticElement from "@/components/animations/MagneticElement";
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react";

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl px-6 py-4"
      >
        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-5 h-5 text-emerald-400" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">You&apos;re on the list!</p>
          <p className="text-text-secondary text-xs">We&apos;ll notify you when your card is ready.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
      <div className="flex-1 relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 bg-accent text-black font-bold px-7 py-3.5 rounded-xl hover:bg-accent-light transition-all duration-300 text-sm disabled:opacity-70 cursor-pointer"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <>
            Join Waitlist
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary pt-20">
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

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
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
              Spend stablecoins like USDC and USDT{" "}
              <strong className="text-white">anywhere cards are accepted</strong>{" "}
              with Xcentra virtual and physical debit cards. Built for global travelers,
              expats, and the modern digital economy.
            </motion.p>

            {/* CTA Row: Get Card + Waitlist Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="space-y-5"
            >
              <MagneticElement strength={0.15} radius={150}>
                <Button variant="secondary" size="lg" href="/cards" className="group">
                  Get Xcentra Card
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </MagneticElement>

              <div>
                <p className="text-text-muted text-xs mb-2.5 uppercase tracking-widest font-medium">Or join the waitlist</p>
                <WaitlistForm />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: 3D Flipping Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <FloatingElement amplitude={8} duration={4}>
              <div className="perspective">
                <motion.div
                  className="preserve-3d relative w-[360px] h-[226px] sm:w-[430px] sm:h-[270px]"
                  animate={{ rotateY: [0, 180, 360] }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  {/* Front — Black card */}
                  <div className="absolute inset-0 backface-hidden">
                    <Image
                      src="/images/stock/xcentra-card-black.png"
                      alt="Xcentra Physical Card"
                      fill
                      className="object-contain drop-shadow-[0_20px_40px_rgba(245,166,35,0.15)]"
                      priority
                    />
                  </div>
                  {/* Back — Gold card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <Image
                      src="/images/stock/xcentra-card-gold.png"
                      alt="Xcentra Virtual Card"
                      fill
                      className="object-contain drop-shadow-[0_20px_40px_rgba(245,166,35,0.15)]"
                    />
                  </div>
                </motion.div>
              </div>
            </FloatingElement>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
