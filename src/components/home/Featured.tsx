import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { FeaturedProject } from '@/lib/projects';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Featured({ projects }: { projects: FeaturedProject[] }) {
  return (
    <section className="py-16 md:py-24" aria-labelledby="featured-heading">
      <Reveal delay={0.3}>
        <SectionHeading label="Featured">
          <span id="featured-heading">
            Start with <span className="home-serif">these.</span>
          </span>
        </SectionHeading>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={0.36 + i * 0.06} className="h-full">
            <article className="home-card h-full" data-tint={project.slug}>
              <p className="font-label text-[0.7rem] tracking-wide text-muted-foreground uppercase">
                {project.category}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] md:text-[1.75rem]">
                {project.name}
              </h3>
              <p className="home-lede mt-3 line-clamp-2 max-w-md text-[0.95rem] leading-6">
                {project.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Stack">
                {project.stack.map((tech) => (
                  <li key={tech} className="home-chip">
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center gap-5 pt-10 text-sm font-medium">
                <Link href={project.url} className="home-card-link">
                  Read write-up
                  <ArrowRight className="home-nudge size-4" aria-hidden="true" />
                </Link>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="home-text-link relative z-10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                    <ArrowUpRight className="home-nudge-up size-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
