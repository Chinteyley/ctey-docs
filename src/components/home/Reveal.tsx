import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Stagger offset in seconds. */
  delay?: number;
  className?: string;
}

// CSS fade-and-rise entrance (.home-reveal in global.css). Pure CSS so content
// never depends on JS to become visible; reduced motion disables it.
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <div
      className={className ? `home-reveal ${className}` : 'home-reveal'}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
