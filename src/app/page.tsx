import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { BackToTop } from "@/components/common/BackToTop";
import { MobileCTA } from "@/components/common/MobileCTA";

import { Hero } from "@/app/sections/Hero";
import { PlatformIntro } from "@/app/sections/PlatformIntro";
import { SocialProof } from "@/app/sections/SocialProof";
import { MotusIntelligence } from "@/app/sections/MotusIntelligence";
import { Contact } from "@/app/sections/Contact";
import { News } from "@/app/sections/News";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <div className="page-surface relative overflow-hidden">
          <div className="page-overlay pointer-events-none absolute inset-0 -z-10" />
          <div className="page-tint pointer-events-none absolute inset-0 -z-10" />
          <div className="page-glow-left pointer-events-none absolute -left-24 top-10 h-64 w-64 -z-10" />
          <div className="page-glow-right pointer-events-none absolute right-[-140px] bottom-0 h-72 w-72 -z-10" />

          <PlatformIntro />
          <div className="transition-strip reveal reveal-delay-1">
            Da operação diária para inteligência preditiva com decisões mais seguras.
          </div>
          <MotusIntelligence />
          <Contact />
          <SocialProof />
          <News />
        </div>
      </main>

      <MobileCTA />
      <BackToTop />
      <Footer />
    </>
  );
}
