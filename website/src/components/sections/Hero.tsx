"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import FloatingElement from "@/components/animations/FloatingElement";
import GravityGrid from "@/components/animations/GravityGrid";
import TypewriterText from "@/components/animations/TypewriterText";
import MagneticElement from "@/components/animations/MagneticElement";

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
              Spend stablecoins like USDC and USDT{" "}
              <strong className="text-white">anywhere cards are accepted</strong>{" "}
              with Xcentra virtual and physical debit cards. Built for global travelers,
              expats, and the modern digital economy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticElement strength={0.15} radius={150}>
                <Button variant="secondary" size="lg" href="/cards" className="group">
                  Get Xcentra Card
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </MagneticElement>
              <MagneticElement strength={0.15} radius={150}>
                <Button variant="outline-light" size="lg" href="/contact">
                  Join Waitlist
                </Button>
              </MagneticElement>
            </motion.div>

            {/* Card network logos only — clean and minimal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-10 pt-8 border-t border-border-dark"
            >
              <p className="text-[11px] text-text-muted uppercase tracking-widest mb-4">Powered by</p>
              <div className="flex items-center gap-6">
                {/* Mastercard — Official overlapping circles */}
                <div className="opacity-50 hover:opacity-90 transition-opacity">
                  <svg className="h-8 w-auto" viewBox="0 0 131.39 86.9" fill="none">
                    <circle cx="48.37" cy="43.45" r="27.5" fill="#EB001B"/>
                    <circle cx="83.02" cy="43.45" r="27.5" fill="#F79E1B"/>
                    <path d="M65.7 20.79a27.42 27.42 0 0 1 10.13 21.26v2.8A27.42 27.42 0 0 1 65.7 66.11a27.42 27.42 0 0 1-10.14-21.26v-2.8A27.42 27.42 0 0 1 65.7 20.79Z" fill="#FF5F00"/>
                  </svg>
                </div>

                {/* Apple Pay — Apple logo + text */}
                <div className="opacity-50 hover:opacity-90 transition-opacity">
                  <svg className="h-8 w-auto" viewBox="0 0 165 70" fill="white">
                    {/* Apple */}
                    <path d="M30.1 18.3a7.7 7.7 0 0 0 1.76-5.5 7.83 7.83 0 0 0-5.2 2.69 7.33 7.33 0 0 0-1.81 5.32 6.49 6.49 0 0 0 5.25-2.51Z"/>
                    <path d="M31.84 21c-2.9-.17-5.37 1.65-6.75 1.65s-3.5-1.56-5.78-1.52a8.54 8.54 0 0 0-7.25 4.39c-3.1 5.37-.8 13.31 2.22 17.67 1.47 2.15 3.23 4.53 5.55 4.45 2.22-.09 3.06-1.44 5.74-1.44s3.44 1.44 5.78 1.39c2.4-.04 3.9-2.17 5.37-4.32a19 19 0 0 0 2.43-5 7.86 7.86 0 0 1-4.75-7.17 7.98 7.98 0 0 1 3.8-6.7 8.17 8.17 0 0 0-6.36-3.4Z"/>
                    {/* Pay */}
                    <path d="M56.45 14.4h12.8c7.45 0 12.64 5.14 12.64 12.62S76.75 39.7 69.04 39.7H62.4v13.12H56.45ZM62.4 34.72h6.85c5.19 0 8.15-2.8 8.15-7.69s-2.96-7.67-8.12-7.67H62.4Z"/>
                    <path d="M83.6 44.25c0-5.28 4.04-8.51 11.21-8.86l8.26-.46v-2.34c0-3.36-2.26-5.37-6.03-5.37-3.57 0-5.83 1.71-6.37 4.33h-5.46c.33-5.14 4.63-8.93 12.01-8.93 7.06 0 11.58 3.75 11.58 9.58v20.07h-5.53v-4.79h-.13a10 10 0 0 1-8.93 5.19c-5.55 0-10.61-3.31-10.61-8.42Zm19.47-2.55v-2.38l-7.43.44c-3.71.25-5.81 1.82-5.81 4.33s2.22 4.15 5.59 4.15c4.41 0 7.65-3 7.65-6.54Z"/>
                    <path d="M115.21 60.81l-1.04-4.41a8.95 8.95 0 0 0 3.67.9c2.68 0 4.16-1.12 5.3-4.5l.57-1.73-10.97-30.21h6.24l7.95 25.07h.12l7.95-25.07h6.09l-11.39 31.95c-2.59 7.33-5.59 9.68-11.88 9.68a14.04 14.04 0 0 1-2.61-.68Z"/>
                  </svg>
                </div>

                {/* Google Pay — G icon + text */}
                <div className="opacity-50 hover:opacity-90 transition-opacity">
                  <svg className="h-8 w-auto" viewBox="0 0 150 60" fill="none">
                    {/* Colorful G */}
                    <path d="M25.95 30.65c0-1.89-.15-3.28-.48-4.72H13.25v8.57h7.28a6.29 6.29 0 0 1-2.73 4.13l4.41 3.42c2.56-2.37 4.04-5.86 4.04-11.4h-.3Z" fill="#4285F4"/>
                    <path d="M13.25 43c3.57 0 6.56-1.18 8.75-3.2l-4.41-3.42a8.06 8.06 0 0 1-12.01-4.24l-4.57 3.54A13.25 13.25 0 0 0 13.25 43Z" fill="#34A853"/>
                    <path d="M5.58 32.14a8 8 0 0 1 0-5.13L1.01 23.47a13.25 13.25 0 0 0 0 11.9l4.57-3.23Z" fill="#FBBC04"/>
                    <path d="M13.25 21.74a7.2 7.2 0 0 1 5.1 1.99l3.82-3.82A12.8 12.8 0 0 0 13.25 16a13.25 13.25 0 0 0-12.24 7.47l4.57 3.54a7.9 7.9 0 0 1 7.67-5.27Z" fill="#EA4335"/>
                    {/* Pay text */}
                    <text x="35" y="38" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="22" fontWeight="500" fill="white">Pay</text>
                  </svg>
                </div>

                {/* Samsung Pay — text wordmark */}
                <div className="opacity-50 hover:opacity-90 transition-opacity">
                  <svg className="h-7 w-auto" viewBox="0 0 180 40" fill="white">
                    <text x="0" y="27" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="18" fontWeight="300" letterSpacing="2.5">SAMSUNG</text>
                    <text x="118" y="27" fontFamily="'Helvetica Neue', Arial, sans-serif" fontSize="18" fontWeight="600" letterSpacing="1">Pay</text>
                  </svg>
                </div>
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
