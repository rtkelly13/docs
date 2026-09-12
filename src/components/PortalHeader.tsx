'use client';

import { DocsHeader } from '@rtkelly13/design-system';
import { Layers } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { ECOSYSTEMS, PROJECTS, type ProjectConfig } from '@/config/projects';

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export interface PortalHeaderProps {
  currentProject?: ProjectConfig;
  sidebarOpen?: boolean;
  onToggleSidebar?: () => void;
}

export function PortalHeader({
  currentProject,
  sidebarOpen,
  onToggleSidebar,
}: PortalHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = currentProject
    ? [
        {
          label: 'OVERVIEW',
          href: `/${currentProject.id}`,
          active:
            pathname === `/${currentProject.id}` ||
            pathname === `/${currentProject.id}/`,
        },
        ...(currentProject.features.guides
          ? [
              {
                label: 'GUIDES',
                href: `/${currentProject.id}/guides/01-VISION-AND-ARCHITECTURE`,
                active: pathname.includes(`/${currentProject.id}/guides`),
              },
            ]
          : []),
        ...(currentProject.features.apiGrid
          ? [
              {
                label: 'API GRID',
                href: `/${currentProject.id}/api`,
                active:
                  pathname === `/${currentProject.id}/api` ||
                  pathname.startsWith(`/${currentProject.id}/api/`),
              },
            ]
          : []),
        ...(currentProject.features.ledger
          ? [
              {
                label: 'LEDGER',
                href: `/${currentProject.id}/ledger`,
                active:
                  pathname === `/${currentProject.id}/ledger` ||
                  pathname.startsWith(`/${currentProject.id}/ledger/`),
              },
            ]
          : []),
        ...(currentProject.features.architecture
          ? [
              {
                label: 'ARCHITECTURE',
                href: `/${currentProject.id}/architecture`,
                active:
                  pathname === `/${currentProject.id}/architecture` ||
                  pathname.startsWith(`/${currentProject.id}/architecture/`),
              },
            ]
          : []),
      ]
    : [
        {
          label: 'ALL PARQUET PROJECTS',
          href: '/',
          active: pathname === '/',
        },
        {
          label: '.NET ECOSYSTEM',
          href: '/parquet-sourcegenerator',
          active:
            pathname.includes('parquet-sourcegenerator') ||
            pathname.includes('parquet-typeprovider'),
        },
        {
          label: 'JS / TS ECOSYSTEM',
          href: '/parquet-js',
          active: pathname.includes('parquet-js'),
        },
      ];

  const currentEcosystem = currentProject
    ? ECOSYSTEMS[currentProject.ecosystem]
    : undefined;

  return (
    <DocsHeader
      title="PARQUET // DOCS"
      titleHref="/"
      nav={navItems}
      sidebarOpen={sidebarOpen}
      onToggleSidebar={onToggleSidebar}
    >
      <div className="flex items-center gap-3">
        {currentEcosystem && (
          <span className="hidden md:inline-flex items-center text-[10px] font-mono px-2 py-0.5 border border-[var(--ds-border-default)] text-[var(--ds-text-muted)]">
            [ {currentEcosystem.shortName} ]
          </span>
        )}

        {/* Project Switcher Select */}
        <div className="relative flex items-center">
          <Layers
            size={14}
            className="text-[var(--ds-text-muted)] mr-1 hidden sm:inline"
          />
          <select
            value={currentProject?.id || ''}
            onChange={(e) => {
              const selectedId = e.target.value;
              if (selectedId) {
                router.push(`/${selectedId}`);
              } else {
                router.push('/');
              }
            }}
            className="bg-[var(--ds-surface-subtle)] text-[var(--ds-text-primary)] border border-[var(--ds-border-default)] px-2 py-1 text-xs font-mono rounded-none focus:outline-none focus:border-[var(--ds-border-strong)] cursor-pointer"
            aria-label="Switch Parquet project"
          >
            <option value="">[ SELECT PROJECT ]</option>
            <optgroup label=".NET Ecosystem">
              {PROJECTS.filter((p) => p.ecosystem === 'dotnet').map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.language})
                </option>
              ))}
            </optgroup>
            <optgroup label="JavaScript / TypeScript Ecosystem">
              {PROJECTS.filter((p) => p.ecosystem === 'javascript').map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.language})
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        {currentProject && (
          <a
            href={currentProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--ds-text-muted)] hover:text-[var(--ds-text-primary)] transition-colors p-1"
            title={`View ${currentProject.name} on GitHub`}
          >
            <GitHubIcon size={16} />
          </a>
        )}
      </div>
    </DocsHeader>
  );
}
