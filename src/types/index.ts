export type ThemeMode = 'dark' | 'light';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  features: string[];
  longDescription?: string;
  pricingStarting?: string;
  tags: string[];
}

export interface SolutionItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  iconName: string;
  specs: string[];
  badgeColor: string;
}

export interface FounderItem {
  id: string;
  name: string;
  role: string;
  bio: string;
  phone?: string;
  email?: string;
  avatar: string;
  linkedin?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
