import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { BackToTop } from "@/components/common/BackToTop";
import { MobileCTA } from "@/components/common/MobileCTA";

import { Hero } from "@/app/sections/Hero";
import { PlatformIntro } from "@/app/sections/PlatformIntro";
import { SocialProof } from "@/app/sections/SocialProof";
import { PlatformDeepDive } from "@/app/sections/PlatformDeepDive";
import { MotusAI } from "@/app/sections/MotusAI";
import { Contact } from "@/app/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <PlatformIntro />
        <PlatformDeepDive />
        <MotusAI />
        <Contact />
        <SocialProof />
      </main>

      <MobileCTA />
      <BackToTop />
      <Footer />
    </>
  );
}
