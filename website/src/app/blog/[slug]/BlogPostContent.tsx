"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Badge from "@/components/ui/Badge";
import { type BlogPost } from "@/lib/constants/blog";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bg-primary overflow-hidden pt-32 pb-12">
        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Back to Blog</span>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center gap-1.5 text-text-secondary text-xs">
                <Calendar className="h-3 w-3" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-text-secondary text-xs">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-text-primary mb-6 leading-tight">
              {post.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-text-secondary leading-relaxed">
              {post.excerpt}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-bg-primary pb-12">
        <div className="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
          <ScrollReveal delay={0.25}>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-bg-light py-16">
        <div className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-16">
          <article className="prose-custom">
            {post.content.map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <ScrollReveal key={i} delay={0.05}>
                    <h2 className="text-2xl font-semibold text-text-dark mt-10 mb-4">
                      {block.replace("## ", "")}
                    </h2>
                  </ScrollReveal>
                );
              }
              return (
                <ScrollReveal key={i} delay={0.05}>
                  <p className="text-text-muted text-[17px] leading-[1.8] mb-5">
                    {block}
                  </p>
                </ScrollReveal>
              );
            })}
          </article>

          {/* Back to Blog CTA */}
          <ScrollReveal delay={0.1}>
            <div className="mt-16 pt-8 border-t border-black/10">
              <Link
                href="/blog/"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-semibold"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to All Articles
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
