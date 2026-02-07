"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "David R.",
    role: "Freelance Developer",
    quote:
      "Easy integration, transparent pricing, and lightning-fast payouts! I highly recommend Xcentra for any growing business.",
    image: "/images/stock/testimonial-man-casual.jpg",
  },
  {
    name: "Sarah J.",
    role: "E-Commerce Owner",
    quote:
      "As an e-commerce store, I needed a seamless checkout experience. Xcentra made it happen!",
    image: "/images/stock/testimonial-woman-office.jpg",
  },
  {
    name: "Ethan S.",
    role: "Digital Nomad",
    quote:
      "Recurring payments have never been smoother. Xcentra automated our billing and saved us hours of manual work!",
    image: "/images/stock/testimonial-man-suit.jpg",
  },
  {
    name: "Maria L.",
    role: "Content Creator",
    quote:
      "Living in a high-inflation country, keeping my earnings in USDT and spending only what I need has been a game changer.",
    image: "/images/stock/testimonial-woman-smile.jpg",
  },
  {
    name: "Alex K.",
    role: "Software Engineer",
    quote:
      "Finally a crypto card that just works. No complicated staking, no volatile tokens. Just load USDC and spend anywhere.",
    image: "/images/stock/testimonial-team.jpg",
  },
  {
    name: "Priya M.",
    role: "Travel Blogger",
    quote:
      "I travel 8 months a year. Xcentra lets me pay in any country without worrying about conversion rates or bank fees.",
    image: "/images/stock/testimonial-woman-office.jpg",
  },
  {
    name: "James T.",
    role: "Startup Founder",
    quote:
      "We pay our global team with Xcentra. No more international wire delays — everyone gets paid the same day.",
    image: "/images/stock/testimonial-man-casual.jpg",
  },
  {
    name: "Lina W.",
    role: "Graphic Designer",
    quote:
      "Getting paid in USDC from US clients and spending it with my Xcentra card locally is incredibly smooth.",
    image: "/images/stock/testimonial-woman-smile.jpg",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="shrink-0 w-[280px] sm:w-[300px]">
      <div className="relative h-[360px] sm:h-[400px] rounded-2xl overflow-hidden group">
        <Image
          src={t.image}
          alt={t.name}
          fill
          className="object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5" />

        {/* Text overlaid on pic */}
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <h3 className="text-lg font-bold text-white mb-0.5">{t.name}</h3>
          <p className="text-white/50 text-xs mb-3">{t.role}</p>
          <p className="text-white/75 text-xs leading-relaxed">
            &ldquo;{t.quote}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);
  const scrollPos = useRef(0);
  const isPaused = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 1.2; // pixels per frame — fast smooth scroll

    const animate = () => {
      if (!isPaused.current && el) {
        scrollPos.current += speed;
        // When we've scrolled past the first set, reset seamlessly
        const halfWidth = el.scrollWidth / 2;
        if (scrollPos.current >= halfWidth) {
          scrollPos.current -= halfWidth;
        }
        el.scrollLeft = scrollPos.current;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <section className="relative py-24 lg:py-32 bg-bg-light overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 mb-12">
        {/* Header */}
        <ScrollReveal>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-bold text-gray-600 tracking-wide">
              Trustpilot
            </span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-text-dark mb-4">
            Loved by Users{" "}
            <span className="gradient-text">Worldwide</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-text-muted max-w-xl">
            Real success stories from people that trust Xcentra for seamless
            and borderless payments.
          </p>
        </ScrollReveal>
      </div>

      {/* Infinite scrolling row — duplicated for seamless loop */}
      <div
        ref={scrollRef}
        onMouseEnter={() => {
          isPaused.current = true;
        }}
        onMouseLeave={() => {
          isPaused.current = false;
        }}
        className="flex gap-5 overflow-x-hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* First set */}
        {testimonials.map((t, i) => (
          <TestimonialCard key={`a-${i}`} t={t} />
        ))}
        {/* Duplicate set for seamless infinite loop */}
        {testimonials.map((t, i) => (
          <TestimonialCard key={`b-${i}`} t={t} />
        ))}
      </div>
    </section>
  );
}
