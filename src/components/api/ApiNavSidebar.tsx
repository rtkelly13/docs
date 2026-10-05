'use client';

import { Search } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type {
  ApiDocProject,
  VersionManifest,
} from '@/lib/ingest/parseApiModel';
import { VersionSelector } from './VersionSelector';

interface ApiNavSidebarProps {
  projectId: string;
  version: string;
  manifest: VersionManifest;
  apiDoc: ApiDocProject;
  currentTypeName?: string;
}

export function ApiNavSidebar({
  projectId,
  version,
  manifest,
  apiDoc,
  currentTypeName,
}: ApiNavSidebarProps) {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredNamespaces = useMemo(() => {
    if (!filterQuery.trim()) return apiDoc.namespaces;
    const q = filterQuery.toLowerCase();
    return apiDoc.namespaces
      .map((ns) => ({
        ...ns,
        types: ns.types.filter(
          (t) =>
            t.name.toLowerCase().includes(q) ||
            t.namespace.toLowerCase().includes(q),
        ),
      }))
      .filter((ns) => ns.types.length > 0);
  }, [apiDoc.namespaces, filterQuery]);

  return (
    <aside className="w-full lg:w-72 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-[var(--ds-border-subtle)] bg-[var(--ds-surface-sunken)] p-4 space-y-4">
      {/* Version Selector */}
      <div className="pb-3 border-b border-[var(--ds-border-subtle)]">
        <VersionSelector
          projectId={projectId}
          currentVersion={version}
          manifest={manifest}
          currentTypeSlug={currentTypeName}
        />
      </div>

      {/* Filter Input */}
      <div className="relative">
        <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[var(--ds-text-muted)]" />
        <input
          type="text"
          placeholder="Filter types..."
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          className="w-full bg-[var(--ds-surface-base)] border border-[var(--ds-border-subtle)] font-mono text-xs pl-8 pr-3 py-1.5 text-[var(--ds-text-primary)] placeholder-[var(--ds-text-muted)] focus:outline-none focus:border-cyan-500"
        />
      </div>

      {/* Navigation Tree */}
      <nav className="space-y-4 overflow-y-auto max-h-[calc(100vh-250px)] pr-1">
        {filteredNamespaces.map((ns) => (
          <div key={ns.name} className="space-y-1.5">
            <h4 className="text-[11px] font-mono font-bold text-[var(--ds-text-muted)] uppercase tracking-wider px-2">
              {ns.name}
            </h4>
            <ul className="space-y-0.5 text-xs font-mono">
              {ns.types.map((type) => {
                const isActive = currentTypeName === type.name;
                return (
                  <li key={type.id}>
                    <Link
                      href={`/${projectId}/api/${version}/${type.name}`}
                      className={`flex items-center justify-between px-2 py-1.5 transition-colors border-l-2 ${
                        isActive
                          ? 'bg-[var(--ds-surface-overlay)] text-cyan-400 font-bold border-cyan-400'
                          : 'border-transparent text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)] hover:bg-[var(--ds-surface-overlay)]'
                      }`}
                    >
                      <span className="truncate">{type.name}</span>
                      <span
                        className={`text-[10px] uppercase px-1 py-0.2 border text-center min-w-4 ${
                          type.kind === 'Class'
                            ? 'text-cyan-400 border-cyan-900 bg-cyan-950/40'
                            : type.kind === 'Enum'
                              ? 'text-amber-400 border-amber-900 bg-amber-950/40'
                              : type.kind === 'Interface'
                                ? 'text-purple-400 border-purple-900 bg-purple-950/40'
                                : 'text-emerald-400 border-emerald-900 bg-emerald-950/40'
                        }`}
                      >
                        {type.kind[0]}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
