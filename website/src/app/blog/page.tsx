import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog | Xcentra — Insights on Stablecoins & Digital Finance",
  description:
    "Stay up to date with the latest news, insights, and updates from the Xcentra team on stablecoins, digital finance, and borderless payments.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return <BlogContent />;
}
