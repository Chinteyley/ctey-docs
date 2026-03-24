'use client';

import {
  DocsLayout,
  NavigationPanel,
  useFluxLayout,
} from 'fumadocs-ui/layouts/flux';
import type { DocsLayoutProps } from 'fumadocs-ui/layouts/flux';
import {
  getLayoutTabs,
  isLayoutTabActive,
  LinkItem,
} from 'fumadocs-ui/layouts/shared';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { useSearchContext } from 'fumadocs-ui/contexts/search';
import Link from 'fumadocs-core/link';
import { usePathname } from 'fumadocs-core/framework';
import Image from 'next/image';
import type { Root as PageTreeRoot } from 'fumadocs-core/page-tree';
import { Languages } from 'lucide-react';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';
import { useMemo } from 'react';

type FluxDocsLayoutProps = {
  tree: PageTreeRoot;
};

type FluxDocsShellProps = {
  tree: PageTreeRoot;
  links?: DocsLayoutProps['links'];
  githubUrl?: DocsLayoutProps['githubUrl'];
  nav?: DocsLayoutProps['nav'];
  children: ReactNode;
};

export function FluxDocsLayout({ tree }: FluxDocsLayoutProps) {
  const { open } = useSearchContext();
  const { props, menuItems, slots } = useFluxLayout();
  const pathname = usePathname();
  const tabs = getLayoutTabs(tree);
  const activeTab = useMemo(
    () => tabs.findLast((tab) => isLayoutTabActive(tab, pathname)),
    [tabs, pathname],
  );
  const iconLinks = menuItems
    .filter((item) => item.type === 'icon')
    .map((item, i) => (
      <LinkItem
        key={i}
        item={item}
        className={clsx(
          buttonVariants({
            size: 'icon-sm',
            color: 'ghost',
          }),
        )}
        aria-label={item.label}
      >
        {item.icon}
      </LinkItem>
    ));

  const tools = (
    <>
      {slots.languageSelect ? (
        <slots.languageSelect.root>
          <Languages className="size-4.5" />
        </slots.languageSelect.root>
      ) : null}
      {slots.sidebar ? (
        <slots.sidebar.trigger
          className={clsx(
            buttonVariants({
              variant: 'ghost',
              size: 'icon-sm',
              className: 'overflow-hidden',
            }),
          )}
        />
      ) : null}
      {slots.themeSwitch ? (
        <slots.themeSwitch className="ms-1 h-full rounded-xl bg-fd-muted p-1 *:rounded-lg" />
      ) : null}
    </>
  );
  const compactSearchTrigger = slots.searchTrigger ? (
    <slots.searchTrigger.sm hideIfDisabled className="rounded-lg" />
  ) : null;

  return (
    <NavigationPanel
      className="sm:max-w-[440px]"
      animate={{
        scale: open ? 0.92 : 1,
        translateY: open ? 20 : 0,
        opacity: open ? 0.8 : 1,
      }}
      head={
        <>
          {slots.navTitle ? (
            <slots.navTitle className="inline-flex items-center gap-2.5 text-sm font-semibold" />
          ) : null}
          {props.nav?.children}
        </>
      }
      tabDropdown={
        tabs.length > 0 ? (
          <slots.tabDropdown className="w-full" tabs={tabs} />
        ) : null
      }
      link={iconLinks}
      tool={tools}
    >
      {() => (
        <div className="flex flex-col gap-2 p-2 sm:p-1.5">
          <div className="flex min-h-11 items-center gap-2">
            <div className="min-w-0 shrink-0 ps-1 text-sm font-semibold">
              <div className="inline-flex items-center gap-2.5 text-sm font-semibold">
                <Link
                  href={props.nav?.url ?? '/'}
                  className="inline-flex items-center gap-2.5 rounded-md transition-opacity hover:opacity-85"
                >
                  <Image
                    src="/ctey.png"
                    alt="CTEY logo"
                    width={28}
                    height={28}
                    className="size-7 rounded-sm object-contain dark:invert dark:brightness-0"
                  />
                  {slots.navTitle ? (
                    <slots.navTitle className="inline-flex items-center gap-2.5 text-sm font-semibold" />
                  ) : null}
                </Link>

                {activeTab ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-fd-border/80 bg-fd-secondary/70 px-2 py-0.5 text-[11px] font-medium text-fd-muted-foreground">
                    {activeTab.icon ? (
                      <span className="size-3.5 shrink-0 [&_svg]:size-full">
                        {activeTab.icon}
                      </span>
                    ) : null}
                    <span className="truncate">
                      {typeof activeTab.title === 'string' ? activeTab.title : 'Docs'}
                    </span>
                  </span>
                ) : null}
              </div>
              {props.nav?.children}
            </div>

            <div
              id="flux-layout-slot"
              className="min-w-0 flex-1"
            />
          </div>

          <div className="flex flex-row gap-1.5 overflow-x-auto overflow-y-hidden px-0.5">
            <div className="flex min-w-0 flex-1 items-center gap-2">
              {tabs.length > 0 ? (
                <slots.tabDropdown className="w-full" tabs={tabs} />
              ) : null}
            </div>

            <div className="flex items-center text-fd-muted-foreground empty:hidden">
              {iconLinks}
            </div>

            <div className="flex items-center text-fd-muted-foreground empty:hidden">
              {compactSearchTrigger}
            </div>

            <div className="flex items-center text-fd-muted-foreground empty:hidden">
              {tools}
            </div>
          </div>
        </div>
      )}
    </NavigationPanel>
  );
}

export function FluxDocsShell({
  tree,
  links,
  githubUrl,
  nav,
  children,
}: FluxDocsShellProps) {
  return (
    <DocsLayout
      tree={tree}
      links={links}
      githubUrl={githubUrl}
      nav={nav}
      renderNavigationPanel={() => null}
    >
      <FluxDocsLayout tree={tree} />
      {children}
    </DocsLayout>
  );
}
