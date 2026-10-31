'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeaderHero } from '@/components/common/PageHeaderHero';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function SolutionsPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-transparent font-['Onest',sans-serif]">
      {/* Navigation */}
      <Navbar />

      {/* Quantum4U Header Hero */}
      <PageHeaderHero
        badgeText="Our Apps & Packaged Solutions"
        title="Packaged Technology Platforms Built to Accelerate Growth"
        description="Yevqora Technologies provisions pre-architected modules and award-winning mobile & web applications tailored for global scale on day one."
        imageSrc="/images/hero-solutions.png"
        imageAlt="Packaged Industry Frameworks"
      />

      {/* Industry Enterprise Frameworks & Matrix */}
      <SolutionsSection hideHeader={false} />

      {/* Let's Build Something Great Contact Section */}
      <ContactSection hideHeader={false} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
