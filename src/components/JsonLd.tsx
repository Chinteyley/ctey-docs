import React from 'react';
import { BRAND_HOME_URL, SITE_URL } from '@/lib/site';

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    name: 'Chintey Ley project docs',
    url: SITE_URL,
    description:
      'Project documentation for Chintey Ley, covering TypeScript, Next.js, React, and macOS work.',
    sameAs: [
      BRAND_HOME_URL,
      'https://github.com/chinteyley',
      'https://x.com/kimteyley',
    ],
  };

  return <JsonLd data={data} />;
}

export function PersonJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}#chinteyley`,
    name: 'Chintey Ley',
    url: BRAND_HOME_URL,
    sameAs: [
      BRAND_HOME_URL,
      SITE_URL,
      'https://github.com/chinteyley',
      'https://www.linkedin.com/in/chinteyley',
      'https://x.com/kimteyley',
    ],
    jobTitle: 'Software Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Chintey',
      url: BRAND_HOME_URL,
    },
    knowsAbout: [
      'TypeScript',
      'React',
      'Next.js',
      'React Native',
      'macOS',
      'Node.js',
      'Python',
    ],
    image: `${SITE_URL}/ctey.png`,
    description:
      'Software developer writing project docs for TypeScript, Next.js, React, and macOS work.',
  };

  return <JsonLd data={data} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={data} />;
}

export function ProjectJsonLd({
  name,
  description,
  url,
  image,
  datePublished,
  author,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  author: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name,
    description,
    url,
    image,
    datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    programmingLanguage: {
      '@type': 'ComputerLanguage',
      name: 'Multiple',
    },
    runtimePlatform: 'Web',
  };

  return <JsonLd data={data} />;
}
