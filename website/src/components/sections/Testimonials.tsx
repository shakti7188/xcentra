"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Badge from "@/components/ui/Badge";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "David R.",
    role: "Freelance Developer",
    location: "Remote",
    quote:
      "Easy integration, transparent pricing, and lightning-fast payouts! I highly recommend Xcentra for any global freelancer.",
    image: "/images/stock/testimonial-man-casual.jpg",
    rating: 5,
  },
  {
    name: "Sarah J.",
    role: "E-Commerce Owner",
    location: "Dubai, UAE",
    quote:
      "As an e-commerce store, I needed a seamless checkout experience. Xcentra made it happen! Our cart abandonment rate dropped significantly.",
    image: "/images/stock/testimonial-woman-office.jpg",
    rating: 5,
  },
  {
    name: "Ethan S.",
    role: "Digital Nomad",
    location: "Bali, Indonesia",
    quote:
      "Recurring payments have never been smoother. Xcentra automated my billing and saved me hours of manual conversion work!",
    image: "/images/stock/testimonial-man-suit.jpg",
    rating: 5,
  },
  {
    name: "Maria L.",
    role: "Content Creator",
    location: "São Paulo, Brazil",
    quote:
      "Living in a high-inflation country, keeping my earnings in USDT and spending only what I need has been a game changer.",
    image: "/images/stock/testimonial-woman-smile.jpg",
    rating: 5,
  },
  {
    name: "Alex K.",
    role: "Software Engineer",
    location: "London, UK",
    quote:
      "Finally a crypto card that just works. No complicated staking, no volatile tokens. Just load USDC and spend anywhere.",
    image: "/images/stock/testimonial-team.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 800 : -800, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -800 : 800, opacity: 0 }),
  };

  return (
    <section className="relative py-24 lg:py-32 bg-bg-primary overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal>
          <div className="text-center">
            <Badge variant="accent" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Loved by Users{" "}
              <span className="gradient-text">Worldwide</span>
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* Full-width image + text overlay carousel */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative h-[500px] sm:h-[550px] lg:h-[600px] rounded-3xl overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
            >
              {/* Full background image */}
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover"
                priority
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

              {/* Text content over image */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 lg:p-16">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 max-w-3xl">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-lg">{t.name}</p>
                    <p className="text-white/60 text-sm">
                      {t.role} · {t.location}
                    </p>
                  </div>

                  {/* Slide indicator dots */}
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setDirection(i > current ? 1 : -1);
                          setCurrent(i);
                        }}
                        className={`transition-all duration-300 rounded-full ${
                          i === current
                            ? "w-8 h-2 bg-accent"
                            : "w-2 h-2 bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-6 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
