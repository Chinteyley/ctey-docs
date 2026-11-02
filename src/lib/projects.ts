import type { Folder, Node } from 'fumadocs-core/page-tree';
import { source } from '@/lib/source';

// Home page project data, read from the docs source so counts and the index
// stay in sync with content/docs/projects. Group order follows projects/meta.json.

export interface ProjectEntry {
  name: string;
  description: string;
  url: string;
}

export interface ProjectGroup {
  id: string;
  label: string;
  projects: ProjectEntry[];
}

export interface FeaturedProject extends ProjectEntry {
  slug: string;
  category: string;
  stack: string[];
  liveUrl?: string;
}

const GROUP_LABELS: Record<string, string> = {
  'web-app': 'Web apps',
  'mobile-app': 'Mobile apps',
  'mac-app': 'macOS',
  'ML-projects': 'Machine learning',
};

const FEATURED: Omit<FeaturedProject, keyof ProjectEntry>[] = [
  {
    slug: 'pocket-no',
    category: 'Mobile app',
    stack: ['Expo', 'React Native', 'Skia'],
    liveUrl: 'https://pocket-no.ctey.dev',
  },
  {
    slug: 'jomnouy',
    category: 'Web app',
    stack: ['Next.js', 'React 19', 'TypeScript'],
  },
  {
    slug: 'snapposts',
    category: 'Mobile app',
    stack: ['Expo', 'React Native', 'Gemini'],
    liveUrl: 'https://snapposts.ctey.dev',
  },
  {
    slug: 'bacii-countdown',
    category: 'Web app',
    stack: ['Next.js'],
    liveUrl: 'https://bacii.ctey.dev',
  },
];

/** "Pocket No - Witty Ways to Say No" -> "Pocket No" */
function projectName(title: string): string {
  return title.split(' - ')[0].trim();
}

function toEntry(page: { url: string; data: { title: string; description?: string } }): ProjectEntry {
  return {
    name: projectName(page.data.title),
    description: page.data.description ?? '',
    url: page.url,
  };
}

function isFolder(node: Node): node is Folder {
  return node.type === 'folder';
}

export function getProjectGroups(): ProjectGroup[] {
  const projectsFolder = source
    .getPageTree()
    .children.filter(isFolder)
    .find((folder) => source.getNodeMeta(folder)?.path === 'projects/meta.json');
  if (!projectsFolder) throw new Error('Projects folder missing from the page tree');

  return projectsFolder.children.filter(isFolder).map((folder) => {
    const metaPath = source.getNodeMeta(folder)?.path ?? '';
    const id = /\(([^)]+)\)\/meta\.json$/.exec(metaPath)?.[1];
    if (!id || !(id in GROUP_LABELS)) {
      throw new Error(`Unknown project group: ${metaPath || String(folder.name)}`);
    }

    const projects = folder.children.flatMap((node) => {
      if (node.type !== 'page') return [];
      const page = source.getNodePage(node);
      return page ? [toEntry(page)] : [];
    });

    return { id, label: GROUP_LABELS[id], projects };
  });
}

export function getFeaturedProjects(): FeaturedProject[] {
  return FEATURED.map((featured) => {
    const page = source.getPage(['projects', featured.slug]);
    if (!page) throw new Error(`Featured project page missing: ${featured.slug}`);
    return { ...toEntry(page), ...featured };
  });
}
