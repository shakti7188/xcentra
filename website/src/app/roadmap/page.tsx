import type { Metadata } from "next";
import RoadmapContent from "./RoadmapContent";

export const metadata: Metadata = {
  title: "Roadmap | Xcentra — Building Global Payment Infrastructure",
  description:
    "Explore the Xcentra product roadmap: from global spending cards to payouts, USD accounts, and a direct merchant ecosystem.",
};

export default function RoadmapPage() {
  return <RoadmapContent />;
}
