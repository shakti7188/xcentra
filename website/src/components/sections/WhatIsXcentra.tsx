"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { ArrowUpRight, ArrowDownLeft, CreditCard, Wifi } from "lucide-react";

const walletItems = [
  { symbol: "XHAVIC", name: "Xhavic", amount: "12,500.00", fiat: "$3,125.00", color: "#0E85FD", letter: "", icon: "/images/logos/xhavic-icon.svg" },
  { symbol: "USDC", name: "USD Coin", amount: "2,450.00", fiat: "$2,450.00", color: "#2775CA", letter: "U" },
  { symbol: "USDT", name: "Tether", amount: "1,820.50", fiat: "$1,820.50", color: "#26A17B", letter: "T" },
  { symbol: "DAI", name: "Dai", amount: "680.25", fiat: "$680.25", color: "#F5AC37", letter: "D" },
];

const transactions = [
  { merchant: "Starbucks London", amount: "-£4.85", time: "Just now", icon: "☕", type: "debit" },
  { merchant: "Amazon Prime", amount: "-$14.99", time: "2h ago", icon: "📦", type: "debit" },
  { merchant: "USDC Deposit", amount: "+$500.00", time: "5h ago", icon: "💰", type: "credit" },
  { merchant: "Uber Eats Tokyo", amount: "-¥1,280", time: "Yesterday", icon: "🍜", type: "debit" },
  { merchant: "Spotify", amount: "-$9.99", time: "Yesterday", icon: "🎵", type: "debit" },
  { merchant: "Airbnb Lisbon", amount: "-€89.00", time: "2 days ago", icon: "🏠", type: "debit" },
];

// Phone screens that auto-cycle
const screens = ["wallet", "card", "activity"] as const;
type Screen = typeof screens[number];

// Continuously animating balance counter
function AnimatedBalance() {
  const [balance, setBalance] = useState(4950.75);

  useEffect(() => {
    // Slowly fluctuate the balance to simulate real-time changes
    const timer = setInterval(() => {
      setBalance(prev => {
        const delta = (Math.random() - 0.4) * 5; // slight upward bias
        const next = prev + delta;
        return Math.max(4900, Math.min(5050, next)); // keep in range
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.p
      className="text-white font-medium text-2xl mb-2"
      animate={{ opacity: [1, 0.85, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      ${balance.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    </motion.p>
  );
}

// Continuously scrolling transactions (marquee-like vertical scroll)
function LiveTransactionFeed() {
  return (
    <div className="relative h-[210px] overflow-hidden">
      <motion.div
        animate={{ y: [0, -180] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        {[...transactions, ...transactions].map((tx, i) => (
          <div
            key={`${tx.merchant}-${i}`}
            className="flex items-center justify-between py-2.5 border-b border-white/[0.04] last:border-0"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center text-sm">
                {tx.icon}
              </div>
              <div>
                <p className="text-white font-semibold text-[11px]">{tx.merchant}</p>
                <p className="text-white/25 text-[9px]">{tx.time}</p>
              </div>
            </div>
            <p className={`font-bold text-[11px] ${
              tx.type === "credit" ? "text-emerald-400" : "text-white/70"
            }`}>
              {tx.amount}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function WhatIsXcentra() {
  const [activeScreen, setActiveScreen] = useState<Screen>("wallet");
  const [screenIndex, setScreenIndex] = useState(0);

  // Auto-cycle screens — 3.5s per screen, never stops
  useEffect(() => {
    const timer = setInterval(() => {
      setScreenIndex((prev) => {
        const next = (prev + 1) % screens.length;
        setActiveScreen(screens[next]);
        return next;
      });
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <SectionWrapper theme="light">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text */}
        <div>
          <ScrollReveal>
            <Badge variant="accent" className="mb-4">
              About Us
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4 text-text-dark">
              Direct Stablecoin Spending for{" "}
              <span className="gradient-text">Your Daily Life</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-[#474a52] text-[17.5px] leading-[1.7] mb-8 font-normal">
              Xcentra is a fintech platform that makes stablecoins usable as
              everyday money. Instead of holding stablecoins only as digital
              assets, users can spend them in real life through Xcentra
              cards — globally.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="primary" size="md" href="/how-it-works">
                Learn More
              </Button>
              <a
                href="https://youtu.be/SuR4Jfh0FPA?si=a6BMK1z5Ohj2VQSC"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 bg-transparent text-text-muted border border-black/15 hover:text-text-dark hover:bg-black/5 hover:border-black/30 px-7 py-3.5 text-base"
              >
                <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch App Demo
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Interactive Phone Mockup */}
        <div className="overflow-hidden">
          <ScrollReveal direction="left">
            <div className="flex justify-center">
              <div className="relative w-[300px] sm:w-[320px]">
                {/* Phone Frame — iPhone style with realistic details */}
                <div className="relative bg-[#1a1a2e] rounded-[44px] p-[10px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_30px_60px_-30px_rgba(245,166,35,0.15)] border border-white/[0.08]">
                  {/* Side button details */}
                  <div className="absolute -right-[2px] top-[100px] w-[3px] h-[30px] bg-[#2a2a3e] rounded-r-full" />
                  <div className="absolute -right-[2px] top-[145px] w-[3px] h-[30px] bg-[#2a2a3e] rounded-r-full" />
                  <div className="absolute -left-[2px] top-[120px] w-[3px] h-[50px] bg-[#2a2a3e] rounded-l-full" />

                  {/* Dynamic Island */}
                  <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[90px] h-[24px] bg-black rounded-full z-30 flex items-center justify-center gap-2">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#1a1a2e] ring-1 ring-gray-700" />
                  </div>

                  {/* Screen */}
                  <div className="bg-[#0d0d1a] rounded-[34px] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="flex items-center justify-between px-7 pt-[14px] pb-1 relative z-20">
                      <motion.span
                        className="text-white/70 text-[11px] font-semibold"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        9:41
                      </motion.span>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-[15px] h-[10px]" viewBox="0 0 15 10" fill="white" opacity="0.7">
                          <rect x="0" y="6" width="3" height="4" rx="0.5" />
                          <rect x="4" y="4" width="3" height="6" rx="0.5" />
                          <rect x="8" y="2" width="3" height="8" rx="0.5" />
                          <rect x="12" y="0" width="3" height="10" rx="0.5" />
                        </svg>
                        <svg className="w-[12px] h-[10px]" viewBox="0 0 12 10" fill="none" stroke="white" strokeWidth="1" opacity="0.7">
                          <path d="M1 7.5 C3.5 3, 8.5 3, 11 7.5" />
                          <path d="M3 8 C4.5 5.5, 7.5 5.5, 9 8" />
                          <circle cx="6" cy="8.5" r="1" fill="white" stroke="none" />
                        </svg>
                        <div className="w-[22px] h-[10px] border border-white/50 rounded-[3px] relative ml-0.5">
                          <motion.div
                            className="absolute inset-[1.5px] right-[3px] bg-white/70 rounded-[1px]"
                            animate={{ opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 6, repeat: Infinity }}
                          />
                          <div className="absolute right-[-3px] top-[2.5px] w-[1.5px] h-[5px] bg-white/50 rounded-r-full" />
                        </div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="flex items-center justify-between px-5 pt-3 pb-2">
                      <div>
                        <p className="text-white/50 text-[10px] font-medium">Welcome back</p>
                        <p className="text-white font-bold text-base">My Wallet</p>
                      </div>
                      <motion.div
                        className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center"
                        animate={{ scale: [1, 1.08, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <span className="text-accent text-xs font-bold">X</span>
                      </motion.div>
                    </div>

                    {/* Total Balance Card */}
                    <motion.div
                      className="mx-4 mb-3 bg-gradient-to-br from-accent/20 via-accent/10 to-transparent rounded-2xl p-4 border border-accent/10"
                      animate={{ borderColor: ["rgba(245,166,35,0.1)", "rgba(245,166,35,0.25)", "rgba(245,166,35,0.1)"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <p className="text-white/50 text-[10px] font-medium mb-1">Total Balance</p>
                      <AnimatedBalance />
                      <div className="flex items-center gap-1.5">
                        <motion.div
                          className="flex items-center gap-0.5 bg-emerald-500/20 px-1.5 py-0.5 rounded-full"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2.5, repeat: Infinity }}
                        >
                          <ArrowUpRight className="w-2.5 h-2.5 text-emerald-400" />
                          <span className="text-emerald-400 text-[9px] font-bold">+2.4%</span>
                        </motion.div>
                        <span className="text-white/30 text-[9px]">this month</span>
                      </div>
                    </motion.div>

                    {/* Tab Navigation — with animated indicator */}
                    <div className="flex items-center gap-0 mx-4 mb-3 bg-white/[0.04] rounded-xl p-[3px]">
                      {screens.map((screen) => (
                        <button
                          key={screen}
                          onClick={() => {
                            setActiveScreen(screen);
                            setScreenIndex(screens.indexOf(screen));
                          }}
                          className={`flex-1 py-1.5 rounded-lg text-[10px] font-semibold capitalize transition-all duration-300 ${
                            activeScreen === screen
                              ? "bg-accent text-black"
                              : "text-white/40"
                          }`}
                        >
                          {screen}
                        </button>
                      ))}
                    </div>

                    {/* Screen Content — auto-cycling, FIXED HEIGHT */}
                    <div className="h-[252px] relative overflow-hidden">
                      <AnimatePresence mode="wait">
                        {activeScreen === "wallet" && (
                          <motion.div
                            key="wallet"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3 }}
                            className="px-4 pb-5"
                          >
                            <p className="text-white/40 text-[9px] font-semibold uppercase tracking-widest mb-3">Assets</p>
                            <div className="space-y-2">
                              {walletItems.map((item, i) => (
                                <motion.div
                                  key={item.symbol}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-center justify-between bg-white/[0.04] rounded-xl p-3 hover:bg-white/[0.06] transition-colors"
                                >
                                  <div className="flex items-center gap-2.5">
                                    <motion.div
                                      className="w-9 h-9 rounded-full flex items-center justify-center"
                                      style={{ backgroundColor: `${item.color}20` }}
                                      animate={{ scale: [1, 1.06, 1] }}
                                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                                    >
                                      {"icon" in item && item.icon ? (
                                        <Image src={item.icon} alt={item.symbol} width={18} height={18} className="w-[18px] h-[18px]" />
                                      ) : (
                                        <span className="font-bold text-xs" style={{ color: item.color }}>{item.letter}</span>
                                      )}
                                    </motion.div>
                                    <div>
                                      <p className="text-white font-bold text-xs">{item.symbol}</p>
                                      <p className="text-white/30 text-[9px]">{item.name}</p>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-white font-bold text-xs">{item.amount}</p>
                                    <p className="text-white/30 text-[9px]">{item.fiat}</p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>

                            {/* Quick Actions — with subtle pulse */}
                            <div className="flex gap-2 mt-3">
                              <motion.div
                                className="flex-1 bg-accent/10 rounded-xl p-2.5 flex items-center justify-center gap-1.5"
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <ArrowUpRight className="w-3 h-3 text-accent" />
                                <span className="text-accent text-[9px] font-bold">Send</span>
                              </motion.div>
                              <div className="flex-1 bg-white/[0.04] rounded-xl p-2.5 flex items-center justify-center gap-1.5">
                                <ArrowDownLeft className="w-3 h-3 text-white/50" />
                                <span className="text-white/50 text-[9px] font-bold">Receive</span>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {activeScreen === "card" && (
                          <motion.div
                            key="card"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3 }}
                            className="px-4 pb-5"
                          >
                            {/* Card Preview — continuous tilt + shimmer instead of flip */}
                            <div className="mb-3">
                              <motion.div
                                animate={{
                                  rotateX: [2, -2, 2],
                                  rotateY: [-3, 3, -3],
                                  scale: [1, 1.02, 1],
                                }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative h-[155px] rounded-xl overflow-hidden"
                                style={{ perspective: "600px" }}
                              >
                                <Image
                                  src="/images/stock/xcentra-card-black.png"
                                  alt="Xcentra Card"
                                  fill
                                  className="object-cover rounded-xl"
                                />
                                {/* Shimmer sweep */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-xl"
                                  animate={{ x: ["-100%", "200%"] }}
                                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                                />
                              </motion.div>
                            </div>

                            {/* Card Controls — with breathing animation */}
                            <div className="grid grid-cols-3 gap-2 mb-3">
                              {[
                                { icon: <Wifi className="w-3.5 h-3.5" />, label: "Tap Pay" },
                                { icon: <CreditCard className="w-3.5 h-3.5" />, label: "Details" },
                                { icon: <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>, label: "Freeze" },
                              ].map((ctrl, i) => (
                                <motion.div
                                  key={ctrl.label}
                                  className="bg-white/[0.04] rounded-xl p-2.5 flex flex-col items-center gap-1.5"
                                  animate={{ opacity: [0.6, 1, 0.6] }}
                                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                                >
                                  <div className="text-white/40">{ctrl.icon}</div>
                                  <span className="text-white/40 text-[8px] font-semibold">{ctrl.label}</span>
                                </motion.div>
                              ))}
                            </div>

                            {/* Card Status — with pulse */}
                            <motion.div
                              className="bg-emerald-500/10 rounded-xl p-3 flex items-center gap-2"
                              animate={{ borderColor: ["rgba(16,185,129,0.1)", "rgba(16,185,129,0.3)", "rgba(16,185,129,0.1)"] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              style={{ borderWidth: 1, borderStyle: "solid" }}
                            >
                              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              <span className="text-emerald-400 text-[10px] font-semibold">Card Active — Ready to spend</span>
                            </motion.div>
                          </motion.div>
                        )}

                        {activeScreen === "activity" && (
                          <motion.div
                            key="activity"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.3 }}
                            className="px-4 pb-5"
                          >
                            <p className="text-white/40 text-[9px] font-semibold uppercase tracking-widest mb-3">Recent Transactions</p>
                            <LiveTransactionFeed />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Bottom Navigation Bar — subtle active indicator animation */}
                    <div className="flex items-center justify-around px-6 py-3 bg-white/[0.03] border-t border-white/[0.05]">
                      {["Home", "Cards", "Send", "Profile"].map((item, i) => (
                        <div key={item} className="flex flex-col items-center gap-0.5">
                          <motion.div
                            className={`w-5 h-5 rounded-md ${i === 0 ? "bg-accent/30" : "bg-white/[0.06]"}`}
                            animate={i === 0 ? { scale: [1, 1.15, 1] } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className={`text-[8px] ${i === 0 ? "text-accent font-bold" : "text-white/25"}`}>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Home indicator */}
                    <div className="flex justify-center py-2">
                      <div className="w-[100px] h-[4px] bg-white/20 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Ambient glow behind phone — continuous breathing */}
                <motion.div
                  animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-10 bg-accent/8 rounded-full blur-[80px] -z-10"
                />

                {/* Floating notification bubble — continuous cycle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    scale: [0.8, 1, 1, 0.9],
                    y: [10, 0, 0, -5],
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="absolute -right-4 top-[140px] bg-[#1a1b23] border border-accent/20 rounded-2xl px-3 py-2 shadow-xl shadow-black/50 z-40"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <span className="text-[10px]">✓</span>
                    </div>
                    <div>
                      <p className="text-white text-[9px] font-bold">Payment Successful</p>
                      <p className="text-white/40 text-[8px]">-£4.85 at Starbucks</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
