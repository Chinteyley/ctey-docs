import type { ReactNode } from 'react';

interface SectionHeadingProps {
  label: string;
  meta?: ReactNode;
  children: ReactNode;
}

export function SectionHeading({ label, meta, children }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="font-label text-xs tracking-wide text-muted-foreground uppercase">{label}</p>
        <h2 className="mt-3 text-3xl leading-[1.05] font-semibold tracking-[-0.035em] md:text-[2.75rem]">
          {children}
        </h2>
      </div>
      {meta}
    </div>
  );
}
