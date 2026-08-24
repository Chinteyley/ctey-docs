import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/layouts/flux/page';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';
import { docsPageUrl, isSeoExcludedSlug } from '@/lib/seo';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full} tableOfContent={{ style: 'clerk' }}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();
  const image = ['/og/docs', ...slug, 'image.png'].join('/');
  const pageUrl = docsPageUrl(slug);
  const excluded = isSeoExcludedSlug(slug);

  return {
    title: page.data.title,
    description: page.data.description,
    robots: excluded
      ? {
          index: false,
          follow: true,
        }
      : undefined,
    openGraph: {
      images: image,
      siteName: page.data.title,
      url: pageUrl,
    },
    twitter: {
      card: 'summary_large_image',
      images: image,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}
