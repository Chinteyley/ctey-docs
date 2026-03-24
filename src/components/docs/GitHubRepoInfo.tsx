import { GithubInfo } from 'fumadocs-ui/components/github-info';

type GitHubRepoInfoProps = {
  owner: string;
  repo: string;
};

function getGitHubToken() {
  return (
    process.env.GITHUB_TOKEN ??
    process.env.GH_TOKEN ??
    process.env.GITHUB_API_TOKEN
  );
}

export function GitHubRepoInfo({ owner, repo }: GitHubRepoInfoProps) {
  const token = getGitHubToken();

  if (!token) {
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
        <p className="text-xs text-fd-muted-foreground">
          Set `GITHUB_TOKEN`, `GH_TOKEN`, or `GITHUB_API_TOKEN` to show live repo
          stats.
        </p>
      </a>
    );
  }

  return <GithubInfo owner={owner} repo={repo} token={token} />;
}
