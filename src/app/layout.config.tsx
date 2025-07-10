import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="">
                <path d="M10 16h4"></path>
                <path d="m2 16 4-4-4-4"></path>
                <path d="m18 16 4-4-4-4"></path>
            </svg>
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
        }
        ],
    githubUrl:"https://github.com/chinteyley"
};
