import React from 'react';
import { ServiceDetailPageClient } from './ServiceDetailPageClient';
import { servicesData } from '@/data/servicesData';

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    id: service.id,
  }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ServiceDetailPageClient params={resolvedParams} />;
}
