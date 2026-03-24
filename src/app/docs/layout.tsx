import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { FluxDocsShell } from '@/components/docs/FluxDocsLayout';

export default function Layout({ children }: { children: ReactNode }) {
  const { nav, ...rest } = baseOptions;

  return (
    <FluxDocsShell
      tree={source.getPageTree()}
      {...rest}
      nav={{ ...nav, title: 'CTEY' }}
    >
      {children}
    </FluxDocsShell>
  );
}
