'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CaseStudySection } from '@/components/sections/CaseStudySection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-transparent text-[#111113] font-['Onest',sans-serif]">
      {/* 1. Glass Floating Navigation */}
      <Navbar />

      {/* 2. Signature Interactive Auto-Cycling 80svh Hero */}
      <HeroSection />

      {/* 4. Services for Growth with Mouse-Following Spotlight Cards */}
      <CapabilitiesSection />

      {/* 5. Asymmetric Curved Container & Interactive Glass Accordion */}
      <WhyChooseUsSection />

      {/* 7. Obsidian Client Reviews & Testimonials Carousel */}
      <TestimonialsSection />

      {/* 8. Latest Blog & Engineering Insights */}
      {/* <CaseStudySection /> */}

      {/* 9. Split Contact Section ("Let's Build Something Great") */}
      <ContactSection />

      {/* 10. Obsidian Footer with Brand Insights */}
      <Footer />
    </main>
  );
}
