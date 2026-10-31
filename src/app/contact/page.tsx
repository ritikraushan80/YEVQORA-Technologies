'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageHeaderHero } from '@/components/common/PageHeaderHero';
import { ContactSection } from '@/components/sections/ContactSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { TrustLogosSection } from '@/components/sections/TrustLogosSection';

export default function ContactPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-transparent font-['Onest',sans-serif]">
      {/* Navigation */}
      <Navbar />

      {/* Quantum4U Header Hero */}
      <PageHeaderHero
        badgeText="Contact Engineering Desk"
        title="Let's Begin Your Cloud & Mobile Evolution"
        description="Have technical questions, architectural specifications, or need a customized quote? Connect directly with our lead solution architects."
        imageSrc="/images/hero-contact.png"
        imageAlt="Global Technology Desk"
      />

      {/* Split Quantum4U Contact Card (Obsidian Left + Light Right Form) */}
      <ContactSection hideHeader={true} />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* 100M+ Global Apps Ticker Marquee */}
      <TrustLogosSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
