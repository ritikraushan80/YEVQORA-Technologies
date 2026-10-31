'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeaderHero } from '@/components/common/PageHeaderHero';
import { AboutStatsSection } from '@/components/sections/AboutStatsSection';
import { AboutCultureSection } from '@/components/sections/AboutCultureSection';
import { AboutValuesSection } from '@/components/sections/AboutValuesSection';
import { AboutJourneySection } from '@/components/sections/AboutJourneySection';
import { AboutTeamSection } from '@/components/sections/AboutTeamSection';
import { AboutLinkedInSection } from '@/components/sections/AboutLinkedInSection';
import { AboutBuildCtaSection } from '@/components/sections/AboutBuildCtaSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-transparent font-['Onest',sans-serif]">
      {/* 1. Quantum4U Glass Floating Navigation */}
      <Navbar />

      {/* 2. Quantum4U About Header Hero matching https://quantum4u.in/about */}
      <PageHeaderHero
        badgeText="About Us"
        title="Building mobile and AI products since 2016."
        description="Yevqora Technologies is a product engineering studio behind apps trusted by over 100 million users worldwide. We design, build, and scale intelligent mobile experiences with a 4.5-star average rating across global app stores."
        imageSrc="/images/hero-about.png"
        imageAlt="About Yevqora Technologies"
      />

      {/* 3. Stats Metric Bar (100M+ Active Users, 50+ Apps, 4.5+ Rating, 8+ Years) */}
      <AboutStatsSection />

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

      {/* 10. Quantum4U Signature Obsidian Footer */}
      <Footer />
    </main>
  );
}
