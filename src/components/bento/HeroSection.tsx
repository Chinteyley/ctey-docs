import { AnimatedLogo } from '@/components/AnimatedLogo';

export function HeroSection() {
  return (
    <div className="relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden">
      <div className="nothing-dot-field" aria-hidden="true" />
      <AnimatedLogo
        size={84}
        className="ctey-logo-soft pointer-events-none absolute right-8 top-14 hidden size-24 text-foreground/10 md:block"
      />

      <div className="relative flex items-center justify-between gap-4">
        <p className="nothing-kicker">
          <span className="nothing-red-light" aria-hidden="true" />
          CTEY / 001
        </p>
        <p className="font-mono text-[0.65rem] uppercase text-muted-foreground/70">
          TypeScript + Native UI
        </p>
      </div>

      <div className="relative space-y-5">
        <div>
          <p className="mb-2 font-mono text-xs uppercase text-muted-foreground">
            Software Developer
          </p>
          <h1 className="max-w-[9ch] text-balance text-5xl font-black leading-[0.9] tracking-normal md:text-6xl lg:text-7xl">
            Chintey Ley
          </h1>
        </div>

        <p className="max-w-md text-pretty text-base leading-7 text-muted-foreground md:text-lg">
          Building sharp web and mobile products with TypeScript, React,
          Next.js, and Expo.
        </p>
      </div>

      <div className="relative flex flex-wrap gap-2 pt-8 font-mono text-[0.68rem] uppercase text-muted-foreground">
        <span className="nothing-chip">React Native</span>
        <span className="nothing-chip">Next.js</span>
        <span className="nothing-chip">Open Source</span>
      </div>
    </div>
  );
}
