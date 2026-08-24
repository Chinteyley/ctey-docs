import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { WebsiteJsonLd, PersonJsonLd } from '@/components/JsonLd';
import { Analytics } from '@vercel/analytics/next';
import { BRAND_HOME_URL, SITE_KEYWORDS, SITE_URL } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff'
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Chintey Ley',
    default: 'Chintey Ley - Software Developer',
  },
  description:
    'Project docs for Chintey Ley: TypeScript, Next.js, React, and macOS work, plus live product links.',
  keywords: [...SITE_KEYWORDS],
  authors: [
    {
      name: 'Chintey Ley',
      url: BRAND_HOME_URL,
    },
  ],
  creator: 'Chintey Ley',
  publisher: 'Chintey Ley',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Chintey Ley',
    images: [
      {
        url: `${SITE_URL}/og/image.png`,
        width: 1200,
        height: 630,
        alt: 'Chintey Ley project docs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@kimteyley',
    images: [
      {
        url: `${SITE_URL}/og/image.png`,
        width: 1200,
        height: 630,
        alt: 'Chintey Ley project docs',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: SITE_URL,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <WebsiteJsonLd />
        <PersonJsonLd />
        <Analytics />
      </body>
    </html>
  );
}
