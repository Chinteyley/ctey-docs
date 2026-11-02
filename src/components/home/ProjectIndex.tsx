import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ProjectGroup } from '@/lib/projects';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function ProjectIndex({ groups }: { groups: ProjectGroup[] }) {
  const total = groups.reduce((sum, group) => sum + group.projects.length, 0);

  return (
    <section className="py-16 md:py-24" aria-labelledby="index-heading">
      <Reveal delay={0.4}>
        <SectionHeading
          label="Index"
          meta={
            <p className="font-label text-xs tracking-wide text-muted-foreground uppercase">
              {total} write-ups
            </p>
          }
        >
          <span id="index-heading">
            Every project, <span className="home-serif">in one place.</span>
          </span>
        </SectionHeading>
      </Reveal>

      <div className="space-y-10">
        {groups.map((group, i) => (
          <Reveal key={group.id} delay={0.45 + i * 0.05}>
            <div className="grid gap-4 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8">
              <h3 className="font-label flex items-baseline gap-2 pt-1 text-xs tracking-wide text-muted-foreground uppercase md:pt-5">
                {group.label}
                <span className="text-muted-foreground/70">{String(group.projects.length).padStart(2, '0')}</span>
              </h3>
              <ul className="home-list">
                {group.projects.map((project) => (
                  <li key={project.url}>
                    <Link href={project.url} className="home-row">
                      <span className="truncate font-medium text-foreground">{project.name}</span>
                      <span className="home-row-desc truncate">{project.description}</span>
                      <ArrowRight className="home-nudge size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
