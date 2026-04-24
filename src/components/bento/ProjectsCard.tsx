import { ArrowRight, Laptop, Smartphone, Brain, Monitor } from "lucide-react";
import Link from "next/link";

const categoryIcons = {
  web: Laptop,
  mobile: Smartphone,
  ml: Brain,
  mac: Monitor,
};

const featuredProjects = [
  {
    title: "Jomnouy",
    description: "AI-powered Baccalaureate prep platform",
    category: "web" as const,
    href: "/docs/projects/jomnouy",
  },
  {
    title: "Pocket No",
    description: "iOS-first refusal app with browse, favorites, and quick-copy shortcuts",
    category: "mobile" as const,
    href: "/docs/projects/pocket-no",
  },
  {
    title: "Neko",
    description: "Menu bar kitten that follows your mouse on macOS",
    category: "mac" as const,
    href: "/docs/projects/neko",
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

      <div className="grid flex-1 grid-cols-1 gap-3 md:grid-cols-3">
        {featuredProjects.map((project) => {
          const CategoryIcon = categoryIcons[project.category];
          return (
            <Link
              key={project.title}
              href={project.href}
              className="nothing-project group/project"
            >
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
          );
        })}
      </div>
    </div>
  );
}
