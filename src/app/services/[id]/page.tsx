import React from 'react';
import type { Metadata } from 'next';
import { ServiceDetailPageClient } from './ServiceDetailPageClient';
import { servicesData } from '@/data/servicesData';
import { pageMetadata } from '@/lib/seo';

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const service = servicesData.find((s) => s.id === id);
  if (!service) return { title: 'Service not found', robots: { index: false } };
  return pageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.id}`,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ServiceDetailPageClient params={resolvedParams} />;
}
