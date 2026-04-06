"use client";

import { useState, useRef } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GravityGrid from "@/components/animations/GravityGrid";
import { submitToSheet } from "@/lib/submitForm";
import {
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  Send,
  Phone,
  Building,
} from "lucide-react";

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Get instant help from our support team via in-app chat.",
    detail: "Available 24/7",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a detailed message and we will respond within 24 hours.",
    detail: "support [at] xcentra.com",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Building,
    title: "Partnerships",
    description: "Interested in partnering with Xcentra? Let us talk.",
    detail: "partners [at] xcentra.com",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: Phone,
    title: "Priority Support",
    description: "Premium cardholders get dedicated phone support.",
    detail: "Premium Only",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

export default function ContactContent() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">(
    "idle"
  );
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    const form = formRef.current;
    if (!form) return;
    const fd = new FormData(form);
    await submitToSheet({
      type: "Contact",
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      telegram: fd.get("telegram") as string || "",
      subject: fd.get("subject") as string,
      message: fd.get("message") as string,
    });
    setFormStatus("sent");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center bg-bg-primary overflow-hidden pt-32 pb-16">
        <GravityGrid dotColor="rgba(245,166,35,0.3)" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Badge variant="accent" className="mb-6">
              Get in Touch
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              We&apos;d Love to{" "}
              <span className="gradient-text">Hear from You</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Whether you have a question, need support, or want to explore
              partnerships — our team is here to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Methods */}
      <SectionWrapper theme="dark">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, i) => (
            <ScrollReveal key={method.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 h-full border border-border-dark card-hover-glow text-center">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${method.bg} mx-auto mb-4`}
                >
                  <method.icon className={`h-7 w-7 ${method.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {method.title}
                </h3>
                <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                  {method.description}
                </p>
                <p className="text-accent text-sm font-semibold">
                  {method.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-medium mb-3">Send a Message</h2>
              <p className="text-text-secondary">
                Fill out the form below and we will get back to you as soon as
                possible.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 border border-border-dark space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl bg-white/5 border border-border-dark px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl bg-white/5 border border-border-dark px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Telegram ID <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  name="telegram"
                  required
                  placeholder="@yourusername"
                  className="w-full rounded-xl bg-white/5 border border-border-dark px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Subject
                </label>
                <select name="subject" className="w-full rounded-xl bg-white/5 border border-border-dark px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-colors">
                  <option value="support" className="bg-neutral-900 text-white">General Support</option>
                  <option value="cards" className="bg-neutral-900 text-white">Card Issue</option>
                  <option value="partnership" className="bg-neutral-900 text-white">Partnership Inquiry</option>
                  <option value="media" className="bg-neutral-900 text-white">Media / Press</option>
                  <option value="other" className="bg-neutral-900 text-white">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full rounded-xl bg-white/5 border border-border-dark px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-colors resize-none"
                />
              </div>

              <Button
                variant="secondary"
                size="lg"
                type="submit"
                className="w-full"
                disabled={formStatus === "sending"}
              >
                {formStatus === "idle" && (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
                {formStatus === "sending" && "Sending..."}
                {formStatus === "sent" && "Message Sent!"}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Office Location */}
      <SectionWrapper theme="light">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-semibold text-text-dark">
                Our Presence
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-text-muted leading-relaxed mb-6">
              Xcentra operates globally with teams across multiple regions.
            </p>
            <div className="inline-flex items-start gap-3 px-6 py-4 rounded-2xl bg-black/5 text-left">
              <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-text-dark">Headquarters</p>
                <p className="text-sm text-text-muted mt-0.5">Bay Square, Business Bay</p>
                <p className="text-sm text-text-muted">Dubai, UAE</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </>
  );
}
