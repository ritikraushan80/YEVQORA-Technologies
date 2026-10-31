import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact Us',
  description:
    'Have an idea for an AI-powered website or mobile app? Contact Yevqora Technologies in Noida, India for a free consultation and a customized quote.',
  path: '/contact',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
