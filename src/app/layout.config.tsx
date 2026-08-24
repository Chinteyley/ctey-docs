import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { AnimatedLogo } from '@/components/AnimatedLogo';
import { BRAND_HOME_URL } from '@/lib/site';
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
        <>
            <AnimatedLogo />
            CTEY
        </>
    ),

  },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
        {
            text: 'Projects',
            url: '/docs/projects',
        },
        {
            text: 'Contacts',
            url: '/docs/contacts',
        },
        {
            text: 'chintey.com',
            url: BRAND_HOME_URL,
            external: true,
        },
        ],
    githubUrl:"https://github.com/chinteyley"
};
