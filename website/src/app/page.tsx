import Hero from "@/components/sections/Hero";
import CryptoTicker from "@/components/sections/CryptoTicker";
import TrustBar from "@/components/sections/TrustBar";
import WhatIsXcentra from "@/components/sections/WhatIsXcentra";
import GlobalCards from "@/components/sections/GlobalCards";
import WhiteLabel from "@/components/sections/WhiteLabel";
import HowItWorks from "@/components/sections/HowItWorks";
import Roadmap from "@/components/sections/Roadmap";
import UseCases from "@/components/sections/UseCases";
import Testimonials from "@/components/sections/Testimonials";
import GeoSection from "@/components/sections/GeoSection";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      {/* Section 1: Hero — Dark BG with 3D Card Flip + Particles */}
      <Hero />

      {/* Section 2: Live Crypto Ticker — Client-side fetched */}
      <CryptoTicker />

      {/* Section 3: As Seen In / Trust Bar */}
      <TrustBar />

      {/* Section 4: What is Xcentra — Light BG */}
      <WhatIsXcentra />

      {/* Section 5: Global Cards — Dark BG */}
      <GlobalCards />

      {/* Section 5b: Partners / White Label Cards — Dark BG */}
      <WhiteLabel />

      {/* Section 7: How It Works — Light BG */}
      <HowItWorks />

      {/* Section 8: Roadmap — Dark BG Timeline */}
      <Roadmap />

      {/* Section 9: Use Cases — Light BG Tabs */}
      <UseCases />

      {/* Section 10: Testimonials — Light BG Carousel */}
      <Testimonials />

      {/* Section 12: Geo CTA Section — Dark BG */}
      <GeoSection />

      {/* Section 13: FAQ — Light BG */}
      <FAQ />

      {/* Section 14: Final CTA — Dark BG with Gravity Grid */}
      <FinalCTA />
    </>
  );
}
