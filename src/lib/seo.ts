import type { Metadata } from 'next';

/** Public site URL. Set NEXT_PUBLIC_SITE_URL in production if the domain differs. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://yevqora.com').replace(/\/$/, '');
export const SITE_NAME = 'Yevqora Technologies';
export const OG_IMAGE = '/images/og-image.jpg';

/** Metadata for an inner page: canonical URL plus matching Open Graph and Twitter tags. */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const { title, description, path, noindex } = opts;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      siteName: SITE_NAME,
      type: 'website',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [OG_IMAGE],
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}
