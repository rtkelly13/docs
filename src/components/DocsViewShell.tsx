'use client';

import {
  Breadcrumbs,
  type Crumb,
  DocPager,
  type DocPagerTarget,
  DocsLayout,
  type DocsNavNode,
  DocsSidebar,
  TableOfContents,
  type TocEntry,
} from '@rtkelly13/design-system';
import { type ReactNode, useState } from 'react';
import { PortalHeader } from '@/components/PortalHeader';
import type { ProjectConfig } from '@/config/projects';

export interface DocsViewShellProps {
  project: ProjectConfig;
  navTree: readonly DocsNavNode[];
  currentPath: string;
  toc: readonly TocEntry[];
  breadcrumbs: readonly Crumb[];
  prev?: DocPagerTarget;
  next?: DocPagerTarget;
  children: ReactNode;
}

export function DocsViewShell({
  project,
  navTree,
  currentPath,
  toc,
  breadcrumbs,
  prev,
  next,
  children,
}: DocsViewShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <DocsLayout
      sidebarOpen={sidebarOpen}
      onCloseSidebar={() => setSidebarOpen(false)}
      header={
        <PortalHeader
          currentProject={project}
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />
      }
      sidebar={
        <DocsSidebar
          nav={navTree}
          currentPath={currentPath}
          label={project.shortName.toUpperCase()}
          onNavigate={() => setSidebarOpen(false)}
        />
      }
      toc={toc.length > 0 ? <TableOfContents toc={toc} /> : undefined}
    >
      <div className="space-y-6 pb-16">
        <Breadcrumbs items={breadcrumbs} />

        <div className="docs-prose">{children}</div>

        <div className="pt-8 border-t border-[var(--ds-border-default)]">
          <DocPager prev={prev} next={next} />
        </div>
      </div>
    </DocsLayout>
  );
}
