"use client";

import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Badge from "@/components/ui/Badge";
import GravityGrid from "@/components/animations/GravityGrid";
import { blogPosts } from "@/lib/constants/blog";
import { ArrowRight, Clock } from "lucide-react";

export default function BlogContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center bg-bg-primary overflow-hidden pt-32 pb-16">
        <GravityGrid dotColor="rgba(245,166,35,0.3)" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Badge variant="accent" className="mb-6">
              Blog
            </Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
              Insights & <span className="gradient-text">Updates</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              The latest news, product updates, and educational content on
              stablecoins and borderless finance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Grid */}
      <SectionWrapper theme="light">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => {
            const inner = (
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-black/5 h-full flex flex-col group cursor-pointer">
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-dark mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-accent text-sm font-semibold">
                    {post.published ? "Read Article" : "Coming Soon"}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </article>
            );

            return (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                {post.published ? (
                  <Link href={`/blog/${post.slug}/`} className="block h-full">
                    {inner}
                  </Link>
                ) : (
                  <div className="h-full">{inner}</div>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </SectionWrapper>
    </>
  );
}
