'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeaderHero, HeroChip } from '@/components/common/PageHeaderHero';
import { ServicesPracticesSection } from '@/components/sections/ServicesPracticesSection';
import { ServicesCapabilitiesSection } from '@/components/sections/ServicesCapabilitiesSection';
import { ServicesIndustriesSection } from '@/components/sections/ServicesIndustriesSection';
import { ServicesCtaSection } from '@/components/sections/ServicesCtaSection';

const serviceChips: HeroChip[] = [
  {
    label: 'Smart AI Solutions',
    accent: '#f59e0b',
    slug: 'smart-ai-solutions',
  },
  {
    label: 'Android Development',
    accent: '#3ddc84',
    slug: 'android-app-development',
  },
  {
    label: 'iOS Development',
    accent: '#007aff',
    slug: 'ios-app-development',
  },
  {
    label: 'Website Development',
    accent: '#06b6d4',
    slug: 'website-development',
  },
  {
    label: 'UI/UX Designing',
    accent: '#7c3aed',
    slug: 'app-ui-ux-designing',
  },
  {
    label: 'App Testing Services',
    accent: '#10b981',
    slug: 'app-testing-services',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-transparent font-['Onest',sans-serif]">
      {/* 1. Quantum4U Glass Floating Navigation */}
      <Navbar />

      {/* 2. Quantum4U Header Hero matching https://quantum4u.in/services */}
      <PageHeaderHero
        badgeText="Services"
        title="Engineering and design services for modern teams."
        description="From Android and iOS development to AI integrations, full-stack website engineering, and high-performance cloud orchestration, we help founders and brands ship reliable software that performs at scale."
        imageSrc="/images/hero-services.png"
        imageAlt="Quantum4U Engineering & Services"
        chips={serviceChips}
      />

      {/* 3. "What We Build" - "One team. Many practices." (Alternating 12-Column Editorial Rows) */}
      <ServicesPracticesSection />

      {/* 4. "Capabilities" - "We are perfect in" 4-Column Technical Grid */}
      <ServicesCapabilitiesSection />

      {/* 5. "Industries" - "Services that help you grow." Dark Obsidian 5-Column Grid */}
      <ServicesIndustriesSection />

      {/* 6. "Ready to get started?" High-Impact Conversion CTA */}
      <ServicesCtaSection />

      {/* 7. Quantum4U Signature Obsidian Footer */}
      <Footer />
    </main>
  );
}
