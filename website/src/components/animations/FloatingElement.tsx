"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  amplitude?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function FloatingElement({
  children,
  amplitude = 10,
  duration = 3,
  delay = 0,
  className = "",
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
