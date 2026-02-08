"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
  cursorColor?: string;
  startDelay?: number;
}

export default function TypewriterText({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 2000,
  className = "",
  cursorColor = "#F5A623",
  startDelay = 800,
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [started, setStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Start after a short delay (lets parent animations finish)
  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!started || isPaused) return;

    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            // Pause at full word before deleting
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, pauseTime);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentWord.slice(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
    started,
    isPaused,
  ]);

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span
        style={{
          background: "linear-gradient(135deg, #F5A623, #FFC857)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {currentText || "\u200B"}
      </span>
      <motion.span
        className="inline-block w-[3px] h-[0.85em] ml-0.5 rounded-full"
        style={{ backgroundColor: cursorColor }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
    </span>
  );
}
