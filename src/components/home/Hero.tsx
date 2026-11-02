import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SearchButton } from './SearchButton';

interface HeroProps {
  projectCount: number;
  categories: string[];
}

export function Hero({ projectCount, categories }: HeroProps) {
  return (
    <section className="relative pt-20 pb-10 md:pt-28 md:pb-14">
      <Reveal>
        <p className="home-pill">
          <span className="home-dot" aria-hidden="true" />
          CTEY / Project docs
        </p>
      </Reveal>

      <Reveal delay={0.06}>
        <h1 className="mt-7 max-w-4xl text-balance text-[2.75rem] leading-[1.02] font-semibold tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          Project docs,{' '}
          <span className="home-serif">
            written down <span className="text-[var(--nothing-red)]">properly.</span>
          </span>
        </h1>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="home-lede mt-7 max-w-xl text-pretty text-lg leading-8 md:text-xl md:leading-8">
          Write-ups for every web, mobile, macOS, and ML project Chintey Ley ships: the
          architecture, the stack, and live links.
        </p>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link href="/docs/projects" className="home-btn home-btn-primary">
            Browse projects
            <ArrowRight className="home-nudge size-4" aria-hidden="true" />
          </Link>
          <SearchButton />
          <a href="https://chintey.com" className="home-text-link ms-1">
            chintey.com
            <ArrowUpRight className="home-nudge-up size-4" aria-hidden="true" />
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.24}>
        <p className="font-label mt-14 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs tracking-wide text-muted-foreground uppercase">
          <span>
            <span className="text-foreground">{projectCount}</span> projects
          </span>
          <span aria-hidden="true">·</span>
          <span>
            <span className="text-foreground">{categories.length}</span> categories
          </span>
          <span aria-hidden="true">·</span>
          <span>{categories.join(' / ')}</span>
        </p>
      </Reveal>
    </section>
  );
}
