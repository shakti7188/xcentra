import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/constants/blog";
import BlogPostContent from "./BlogPostContent";

export function generateStaticParams() {
  return blogPosts
    .filter((post) => post.published)
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Xcentra Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug && p.published);

  if (!post) {
    notFound();
  }

  return <BlogPostContent post={post} />;
}
