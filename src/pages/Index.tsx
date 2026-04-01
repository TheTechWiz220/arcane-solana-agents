import ParticleField from "@/components/ParticleField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import WhyBraveSection from "@/components/WhyBraveSection";
import LiveStatsSection from "@/components/LiveStatsSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => (
  <div className="relative min-h-screen bg-background overflow-x-hidden">
    <ParticleField />
    <Navbar />
    <main className="relative z-10">
      <HeroSection />
      <WhatIsSection />
      <FeaturesSection />
      <TokenomicsSection />
      <WhyBraveSection />
      <LiveStatsSection />
      <FooterCTA />
    </main>
  </div>
);

export default Index;
