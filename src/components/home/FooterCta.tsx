import { ArrowUpRight, Mail } from 'lucide-react';
import { Reveal } from './Reveal';

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/chinteyley' },
  { label: 'X', href: 'https://x.com/kimteyley' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chinteyley' },
  { label: 'chintey.com', href: 'https://chintey.com' },
];

export function FooterCta() {
  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-32">
      <Reveal delay={0.5}>
        <div className="home-cta">
          <h2 className="relative text-4xl leading-[1.02] font-semibold tracking-[-0.04em] md:text-6xl">
            Got something <span className="home-serif">to build?</span>
          </h2>
          <div className="relative mt-9 flex flex-wrap items-center gap-x-6 gap-y-5">
            <a href="mailto:hello@ctey.dev" className="home-btn home-btn-primary">
              <Mail className="size-4" aria-hidden="true" />
              hello@ctey.dev
            </a>
            <ul className="font-label flex flex-wrap gap-x-5 gap-y-2 text-xs tracking-wide uppercase">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="home-text-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <ArrowUpRight className="home-nudge-up size-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
