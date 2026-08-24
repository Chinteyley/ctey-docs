import { SITE_URL } from '@/lib/site';

export const BACII_LIVE_URL = 'https://bacii.ctey.dev';
export const BACII_CANONICAL = 'https://bacii.ctey.dev/';
export const BACII_DOCS_SLUG = 'projects/bacii-countdown';

const SEO_EXCLUDED_PROJECT_SLUGS = ['personality-quiz', 'clockedin'] as const;

type SeoExcludedProjectSlug = (typeof SEO_EXCLUDED_PROJECT_SLUGS)[number];

function isSeoExcludedProjectSlug(
  value: string,
): value is SeoExcludedProjectSlug {
  return (SEO_EXCLUDED_PROJECT_SLUGS as readonly string[]).includes(value);
}

export function isSeoExcludedSlug(slug: string[] | undefined): boolean {
  if (!slug || slug.length === 0) {
    return false;
  }

  return slug.some((segment) => isSeoExcludedProjectSlug(segment));
}

export function isSeoExcludedDocsUrl(url: string): boolean {
  return SEO_EXCLUDED_PROJECT_SLUGS.some(
    (projectSlug) => url === `/docs/projects/${projectSlug}`,
  );
}

export function docsPageUrl(slug: string[]): string {
  if (slug.length === 0) {
    return `${SITE_URL}/docs`;
  }

  return `${SITE_URL}/docs/${slug.join('/')}`;
}

export function readFrontmatterCanonical(data: unknown): string | undefined {
  if (typeof data !== 'object' || data === null || !('canonical' in data)) {
    return undefined;
  }

  const canonical = data.canonical;
  if (typeof canonical !== 'string' || canonical.length === 0) {
    return undefined;
  }

  return canonical;
}

export function resolveDocsCanonical({
  slug,
  frontmatterCanonical,
}: {
  slug: string[];
  frontmatterCanonical?: string;
}): string {
  if (frontmatterCanonical && frontmatterCanonical.length > 0) {
    return frontmatterCanonical;
  }

  if (slug.join('/') === BACII_DOCS_SLUG) {
    return BACII_CANONICAL;
  }

  return docsPageUrl(slug);
}
