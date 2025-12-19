"use client";

import { motion } from "motion/react";
import { ArrowRight, Laptop, Smartphone, Brain } from "lucide-react";
import Link from "next/link";

const categoryIcons = {
  web: Laptop,
  mobile: Smartphone,
  ml: Brain,
};

const categoryColors = {
  web: "bg-blue-500/10 text-blue-500",
  mobile: "bg-green-500/10 text-green-500",
  ml: "bg-purple-500/10 text-purple-500",
};

const featuredProjects = [
  {
    title: "Jomnouy",
    description: "AI-powered Baccalaureate prep platform",
    category: "web" as const,
    href: "/docs/projects/jomnouy",
  },
  {
    title: "SnapPost",
    description: "AI-powered social media poster creator",
    category: "mobile" as const,
    href: "/docs/projects/snappost",
  },
  {
    title: "Anime Face GAN",
    description: "Generative AI for anime characters",
    category: "ml" as const,
    href: "/docs/projects/anime-face-gan",
  },
];

export function ProjectsCard() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Featured Projects</h2>
        <Link
          href="/docs/projects"
          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
        >
          View all <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1">
        {featuredProjects.map((project, i) => {
          const CategoryIcon = categoryIcons[project.category];
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
            >
              <Link
                href={project.href}
                className="flex flex-col h-full p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`p-1.5 rounded-lg ${categoryColors[project.category]}`}>
                    <CategoryIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-xs font-medium text-muted-foreground capitalize">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
