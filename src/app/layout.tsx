import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { WebsiteJsonLd, PersonJsonLd } from '@/components/JsonLd';

const inter = Inter({
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff'
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ctey.dev'), // Replace with your actual domain
  title: {
    template: '%s | CTEY',
    default: 'CTEY - Project Documentation and Portfolio',
  },
  description: 'A documentation site showcasing projects, skills, and expertise.',
  keywords: ['documentation', 'portfolio', 'projects', 'skills', 'expertise'],
  authors: [
    {
      name: 'chintey', // Replace with your actual name
      url: 'https://ctey.dev', // Replace with your actual URL
    },
  ],
  creator: 'chintey', // Replace with your actual name
  publisher: 'chintey', // Replace with your actual name
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
    url: 'https://ctey.dev', // Replace with your actual URL
    title: 'CTEY - Project Documentation and Portfolio',
    description: 'A documentation site showcasing projects, skills, and expertise.',
    siteName: 'CTEY',
    images: [
      {
        url: 'https://ctey.dev/og', // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: 'CTEY',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CTEY - Project Documentation and Portfolio',
    description: 'A documentation site showcasing projects, skills, and expertise.',
    creator: '@kimteyley', // Replace with your actual Twitter handle
    images: [
      {
        url: 'https://ctey.dev/og', // Replace with your actual Twitter image
        width: 1200,
        height: 630,
        alt: 'CTEY',
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
    canonical: 'https://ctey.dev', // Replace with your actual URL
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <WebsiteJsonLd />
        <PersonJsonLd />
      </body>
    </html>
  );
}
