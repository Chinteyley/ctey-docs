import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Not found',
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-1 flex-col items-center justify-center p-4 md:p-8">
      <section
        className="nothing-panel relative w-full max-w-lg p-6 md:p-8"
        aria-labelledby="not-found-status"
      >
        <div className="nothing-dot-field" aria-hidden="true" />

        <div className="relative flex items-center justify-between gap-4">
          <p className="nothing-kicker">
            <span className="nothing-red-light" aria-hidden="true" />
            CTEY / 404
          </p>
          <p className="font-mono text-[0.65rem] uppercase text-muted-foreground/70">
            No route
          </p>
        </div>

        <div className="relative mt-10 space-y-4">
          <h1
            id="not-found-status"
            className="font-mono text-7xl font-black leading-[0.85] tracking-tight md:text-8xl"
          >
            404
          </h1>
          <p className="text-pretty text-base leading-7 text-muted-foreground">
            Route missing.
          </p>
        </div>

        <nav
          className="relative mt-10 flex flex-wrap gap-2 font-mono text-[0.68rem] uppercase text-muted-foreground"
          aria-label="Pages"
        >
          <Link href="/" className="nothing-command">
            Home
          </Link>
          <Link href="/docs" className="nothing-command">
            Docs
          </Link>
        </nav>
      </section>
    </div>
  );
}
