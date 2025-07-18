import React from 'react';

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
    '@id': 'https://ctey.dev#website',
    name: 'CTEY',
    url: 'https://ctey.dev', // Replace with your actual domain
    description: 'A documentation site showcasing projects, skills, and expertise.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://ctey.dev/search?q={search_term_string}' // Replace with your actual search URL
      },
      'query-input': 'required name=search_term_string'
    },
    sameAs: [
      'https://github.com/chinteyley',
      'https://twitter.com/kimteyley'
    ]
  };

  return <JsonLd data={data} />;
}

export function PersonJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://ctey.dev#chinteyley',
    name: 'Chintey Ley', // Replace with your actual name
    url: 'https://ctey.dev', // Replace with your actual domain
    sameAs: [
      'https://github.com/chinteyley', // Replace with your actual GitHub URL
      'https://linkedin.com/in/chinteyley', // Replace with your actual LinkedIn URL
      'https://twitter.com/kimteyley' // Replace with your actual Twitter URL
    ],
    jobTitle: 'Software Developer', // Replace with your actual job title
    worksFor: {
      '@type': 'Organization',
      name: 'CTEY',
      url: 'https://ctey.dev'
    },
    knowsAbout: [
      "TypeScript", "React", "Next.js", "React Native",
      "Node.js", "Python", "Prisma", "Expo",
        "Supabase", "PostgreSQL", "Tailwind CSS", "Flutter",
    ],
    image: 'https://ctey.dev/ctey.png', // Replace with your actual profile image
    description: 'Software developer specializing in web development and machine learning.'
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
      item: item.url
    }))
  };

  return <JsonLd data={data} />;
}

export function ProjectJsonLd({
  name,
  description,
  url,
  image,
  datePublished,
  author
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
      name: author
    },
    programmingLanguage: {
      '@type': 'ComputerLanguage',
      name: 'Multiple'
    },
    runtimePlatform: 'Web'
  };

  return <JsonLd data={data} />;
}