'use client';

import React from 'react';
import { LegalDocument, LegalSection } from '@/components/common/LegalDocument';

const sections: LegalSection[] = [
  {
    title: 'Acceptance of Terms',
    paragraphs: [
      'By accessing or using the Yevqora Technologies Pvt. Ltd. website ("Yevqora", "we", "us", "our"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the website.',
    ],
  },
  {
    title: 'Our Services',
    paragraphs: [
      'Yevqora Technologies provides AI solutions, website development, Android and iOS app development, UI/UX design, app testing and related technology services. The scope, timeline, fees and deliverables of each project are set out in a separate written proposal or agreement between you and Yevqora.',
    ],
  },
  {
    title: 'Use of the Website',
    bullets: [
      'You agree to use the website only for lawful purposes.',
      'You must not attempt to gain unauthorized access to our systems, disrupt the website, or introduce malicious code.',
      'You must provide accurate information when you contact us or submit a form.',
    ],
  },
  {
    title: 'Intellectual Property',
    paragraphs: [
      'All content on this website, including text, graphics, logos, designs and software, is the property of Yevqora Technologies Pvt. Ltd. or its licensors and is protected by applicable intellectual property laws. You may not copy, reproduce or distribute it without our prior written permission.',
      'Ownership of work delivered to a client is governed by the project agreement signed between Yevqora and that client.',
    ],
  },
  {
    title: 'Payments and Project Terms',
    paragraphs: [
      'Fees, payment schedules, revisions and delivery timelines are agreed in writing before a project begins. Unless otherwise stated in the project agreement, invoices are payable within the period mentioned on the invoice.',
    ],
  },
  {
    title: 'Confidentiality',
    paragraphs: [
      'We treat the business information, ideas and data you share with us as confidential and use them only to deliver the agreed services, unless disclosure is required by law.',
    ],
  },
  {
    title: 'Disclaimer of Warranties',
    paragraphs: [
      'The website and its content are provided on an "as is" and "as available" basis. We make reasonable efforts to keep information accurate and up to date but do not warrant that the website will be uninterrupted, error-free or free of harmful components.',
    ],
  },
  {
    title: 'Limitation of Liability',
    paragraphs: [
      'To the fullest extent permitted by law, Yevqora Technologies shall not be liable for any indirect, incidental or consequential damages arising from your use of the website. Our liability for any project is limited as set out in the applicable project agreement.',
    ],
  },
  {
    title: 'Third-Party Links',
    paragraphs: [
      'The website may link to third-party websites such as LinkedIn. We are not responsible for the content or privacy practices of those websites.',
    ],
  },
  {
    title: 'Changes to These Terms',
    paragraphs: [
      'We may update these Terms from time to time. The updated version will be posted on this page with a revised "Last updated" date. Continued use of the website means you accept the updated Terms.',
    ],
  },
  {
    title: 'Governing Law',
    paragraphs: [
      'These Terms are governed by the laws of India. Any dispute shall be subject to the exclusive jurisdiction of the courts at Noida, Uttar Pradesh.',
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalDocument
      badgeText=""
      title="Terms & Conditions"
      description="Please read these terms carefully before using the Yevqora Technologies website and services."
      intro="These Terms and Conditions govern your use of the Yevqora Technologies website and the services we offer."
      lastUpdated="October 31, 2026"
      sections={sections}
      related={{ href: '/privacy', label: 'Read our Privacy Policy' }}
    />
  );
}
