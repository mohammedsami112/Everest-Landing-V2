"use client";

import { useRef } from "react";
import { useReveal } from "./use-reveal";
import { Nav } from "./sections/nav";
import { Hero } from "./sections/hero";
import { WhyHekma } from "./sections/why-hekma";
import { ResultsSection } from "./sections/results";
import { VisionSection } from "./sections/vision";
import { LifestyleSection } from "./sections/lifestyle";
import { GallerySection } from "./sections/gallery";
import { UnitsSection } from "./sections/units";
import { InvestmentSection } from "./sections/investment";
import { FinalCTA } from "./sections/final-cta";
import { Footer } from "./sections/footer";

export function Landing() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  return (
    <div ref={ref} className="reh">
      <Nav />
      <Hero />
      <WhyHekma />
      <ResultsSection />
      <VisionSection />
      <LifestyleSection />
      <GallerySection />
      <UnitsSection />
      <InvestmentSection />
      <div data-lead-form>
        <FinalCTA />
      </div>
      <Footer />
    </div>
  );
}
