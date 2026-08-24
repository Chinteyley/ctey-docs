import { ArrowRight, Laptop, Smartphone, Brain, Monitor } from "lucide-react";
import Link from "next/link";
import { BACII_LIVE_URL } from "@/lib/seo";

const categoryIcons = {
  web: Laptop,
  mobile: Smartphone,
  ml: Brain,
  mac: Monitor,
};

const featuredProjects = [
  {
    title: "Bac II Countdown",
    description: "Live countdown for Cambodia's Bac II exam",
    category: "web" as const,
    href: "/docs/projects/bacii-countdown",
    liveUrl: BACII_LIVE_URL,
  },
  {
    title: "Jomnouy",
    description: "AI-powered Baccalaureate prep platform",
    category: "web" as const,
    href: "/docs/projects/jomnouy",
    liveUrl: "https://jomnouy.me",
  },
  {
    title: "Pocket No",
    description: "iOS-first refusal app with browse, favorites, and quick-copy shortcuts",
    category: "mobile" as const,
    href: "/docs/projects/pocket-no",
    liveUrl: "https://pocket-no.ctey.dev",
  },
  {
    title: "Neko",
    description: "Free menu bar kitten that follows your mouse on macOS",
    category: "mac" as const,
    href: "/docs/projects/neko",
    liveUrl: "https://neko.ctey.dev",
  },
];

export function ProjectsCard() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold">Featured Projects</h2>
        <Link
          href="/docs/projects"
          className="inline-flex min-h-10 items-center gap-1 rounded-full px-3 font-mono text-xs uppercase text-muted-foreground transition-[color,background-color,transform] duration-200 ease-[var(--ease-out)] hover:bg-foreground/5 hover:text-foreground active:scale-[0.96]"
        >
          View all <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
        {featuredProjects.map((project) => {
          const CategoryIcon = categoryIcons[project.category];
          return (
            <article
              key={project.title}
              className="nothing-project group/project"
            >
              <Link href={project.href} className="flex flex-1 flex-col">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background">
                    <CategoryIcon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <h3 className="mb-2 font-semibold transition-colors duration-200 ease-[var(--ease-out)] group-hover/project:text-[var(--nothing-red)]">
                  {project.title}
                </h3>
                <p className="line-clamp-3 text-pretty text-xs leading-5 text-muted-foreground">
                  {project.description}
                </p>
              </Link>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 w-fit font-mono text-[0.65rem] uppercase text-muted-foreground underline decoration-foreground/20 underline-offset-4 transition-colors hover:text-foreground"
              >
                Live
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}
