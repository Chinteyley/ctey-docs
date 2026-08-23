import type { ReactNode } from 'react';
import { GitFork, Star } from 'lucide-react';

type GitHubRepoInfoProps = {
  owner: string;
  repo: string;
};

type RepositoryStats = {
  stars: number;
  forks: number;
};

const compactNumber = new Intl.NumberFormat('en', {
  notation: 'compact',
  maximumFractionDigits: 1,
});

function getGitHubToken() {
  const token =
    process.env.GITHUB_TOKEN ??
    process.env.GH_TOKEN ??
    process.env.GITHUB_API_TOKEN;

  if (!token || token.trim() === '') {
    return undefined;
  }

  return token;
}

function RepoLink({
  owner,
  repo,
  children,
}: GitHubRepoInfoProps & {
  children?: ReactNode;
}) {
  return (
    <a
      href={`https://github.com/${owner}/${repo}`}
      target="_blank"
      rel="noreferrer noopener"
      className="flex flex-col gap-1.5 rounded-lg p-2 text-sm text-fd-foreground/80 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
    >
      <p className="truncate">
        {owner}/{repo}
      </p>
      {children}
    </a>
  );
}

async function getRepositoryStats(
  owner: string,
  repo: string,
): Promise<RepositoryStats | null> {
  try {
    const headers = new Headers({
      Accept: 'application/vnd.github+json',
    });
    const token = getGitHubToken();

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        headers,
        next: { revalidate: 60 },
        signal: AbortSignal.timeout(8000),
      },
    );

    if (!response.ok) {
      return null;
    }

    const data: unknown = await response.json();

    if (
      typeof data !== 'object' ||
      data === null ||
      !('stargazers_count' in data) ||
      !('forks_count' in data) ||
      typeof data.stargazers_count !== 'number' ||
      typeof data.forks_count !== 'number'
    ) {
      return null;
    }

    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
    };
  } catch {
    return null;
  }
}

export async function GitHubRepoInfo({ owner, repo }: GitHubRepoInfoProps) {
  const stats = await getRepositoryStats(owner, repo);

  if (!stats) {
    return <RepoLink owner={owner} repo={repo} />;
  }

  return (
    <RepoLink owner={owner} repo={repo}>
      <div className="flex items-center gap-1 text-xs text-fd-muted-foreground">
        <Star className="size-3" />
        <span>{compactNumber.format(stats.stars)}</span>
        <GitFork className="ms-2 size-3" />
        <span>{compactNumber.format(stats.forks)}</span>
      </div>
    </RepoLink>
  );
}
