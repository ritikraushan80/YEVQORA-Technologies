'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeaderHero } from '@/components/common/PageHeaderHero';
import { AboutCultureSection } from '@/components/sections/AboutCultureSection';
import { AboutValuesSection } from '@/components/sections/AboutValuesSection';
import { AboutJourneySection } from '@/components/sections/AboutJourneySection';
import { AboutTeamSection } from '@/components/sections/AboutTeamSection';
import { AboutLinkedInSection } from '@/components/sections/AboutLinkedInSection';
import { AboutBuildCtaSection } from '@/components/sections/AboutBuildCtaSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-transparent font-['Onest',sans-serif]">
      {/* 1. Glass Floating Navigation */}
      <Navbar />

      {/* 2. About Header Hero */}
      <PageHeaderHero
        badgeText=""
        title="A young startup building AI-powered websites and mobile apps."
        description="Yevqora Technologies is an agile product engineering startup building intelligent digital experiences. From on-device AI and scalable web platforms to high-performance mobile apps, we turn bold ideas into market-ready products for healthcare, e-commerce, fintech, education, sports and every industry in between."
        imageSrc="/images/hero-about-brainstorm.jpg"
        imageAlt="About Yevqora Technologies"
      />

      {/* 4. Work Culture: Welcome to Yevqora — where ideas turn into innovation! */}
      <AboutCultureSection />

      {/* 5. Our Values: Guided by Excellence */}
      <AboutValuesSection />

      {/* 6. Our Journey: Milestones That Define Us (Vertical Timeline) */}
      <AboutJourneySection />

      {/* 7. Our Team: The People Behind Yevqora (Circular Avatars) */}
      <AboutTeamSection />

      {/* 8. Stay in the loop: Follow us on LinkedIn (Studio Preview Card) */}
      <AboutLinkedInSection />

      {/* 9. Ready to Build Something Great? High-Impact Dual CTA */}
      <AboutBuildCtaSection />

      {/* 10. Signature Obsidian Footer */}
      <Footer />
    </main>
  );
}
