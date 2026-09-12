'use client';

import { Badge } from '@rtkelly13/design-system';
import { Calendar, ExternalLink } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { LedgerEntry } from '@/lib/ingest/parseLedger';

interface LedgerExplorerProps {
  entries: LedgerEntry[];
}

export function LedgerExplorer({ entries }: LedgerExplorerProps) {
  const [selectedSemver, setSelectedSemver] = useState<string>('ALL');
  const [selectedSurface, setSelectedSurface] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredEntries = useMemo(() => {
    return entries.filter((entry) => {
      if (selectedSemver !== 'ALL' && entry.semver !== selectedSemver)
        return false;
      if (selectedSurface !== 'ALL' && entry.surface !== selectedSurface)
        return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          entry.title.toLowerCase().includes(q) ||
          entry.rationale.toLowerCase().includes(q) ||
          entry.issue?.toLowerCase().includes(q)
        );
      }

      return true;
    });
  }, [entries, selectedSemver, selectedSurface, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Filters Toolbar */}
      <div className="border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-4 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          <input
            type="text"
            placeholder="Search entries, issue numbers, rationale..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-96 bg-[var(--ds-surface-base)] text-[var(--ds-text-primary)] border border-[var(--ds-border-default)] px-3 py-1.5 text-xs font-mono rounded-none focus:outline-none focus:border-[var(--ds-border-strong)]"
          />

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 text-xs font-mono">
              <span className="text-[var(--ds-text-muted)]">SURFACE:</span>
              <select
                value={selectedSurface}
                onChange={(e) => setSelectedSurface(e.target.value)}
                className="bg-[var(--ds-surface-base)] text-[var(--ds-text-primary)] border border-[var(--ds-border-default)] px-2 py-1 text-xs font-mono rounded-none focus:outline-none focus:border-[var(--ds-border-strong)] cursor-pointer"
              >
                <option value="ALL">[ ALL SURFACES ]</option>
                <option value="emitted">emitted</option>
                <option value="public">public</option>
                <option value="seams">seams</option>
              </select>
            </div>
          </div>
        </div>

        {/* Semver impact tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[var(--ds-border-default)] text-xs font-mono">
          <span className="text-[var(--ds-text-muted)] mr-1">
            SEMVER IMPACT:
          </span>
          {[
            { id: 'ALL', label: 'ALL' },
            { id: 'generated-shape', label: 'GENERATED-SHAPE' },
            { id: 'additive-minor', label: 'ADDITIVE-MINOR' },
            { id: 'breaking-major', label: 'BREAKING-MAJOR' },
            { id: 'internal', label: 'INTERNAL' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedSemver(tab.id)}
              className={`px-2 py-0.5 transition-colors ${
                selectedSemver === tab.id
                  ? 'bg-emerald-500 text-black font-bold'
                  : 'bg-[var(--ds-surface-base)] text-[var(--ds-text-secondary)] border border-[var(--ds-border-default)] hover:text-[var(--ds-text-primary)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Counter */}
      <div className="flex items-center justify-between text-xs font-mono text-[var(--ds-text-muted)]">
        <div>
          SHOWING{' '}
          <span className="text-[var(--ds-text-primary)] font-bold">
            {filteredEntries.length}
          </span>{' '}
          OF {entries.length} GOVERNED ENTRIES
        </div>
        <div>CONTRACT: docs/18-API-CHANGE-CONTRACT.md</div>
      </div>

      {/* Ledger Cards */}
      <div className="space-y-4">
        {filteredEntries.length === 0 ? (
          <div className="p-8 border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] text-center text-xs font-mono text-[var(--ds-text-muted)]">
            No ledger entries matched your current criteria.
          </div>
        ) : (
          filteredEntries.map((entry) => {
            let semverAccent: 'primary' | 'secondary' | 'warning' | 'quiet' =
              'quiet';
            if (entry.semver === 'additive-minor') semverAccent = 'primary';
            else if (entry.semver === 'generated-shape')
              semverAccent = 'secondary';
            else if (entry.semver === 'breaking-major')
              semverAccent = 'warning';

            return (
              <div
                key={entry.id}
                className="border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-5 space-y-3 hover:border-[var(--ds-border-strong)] transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--ds-border-default)] pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[var(--ds-text-muted)] flex items-center gap-1">
                      <Calendar size={12} />
                      {entry.date}
                    </span>
                    <span className="text-xs font-mono text-[var(--ds-text-muted)]">
                      •
                    </span>
                    <h2 className="text-sm font-mono font-bold text-[var(--ds-text-primary)]">
                      {entry.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge accent={semverAccent}>
                      {entry.semver.toUpperCase()}
                    </Badge>
                    <span className="text-xs font-mono px-1.5 py-0.5 border border-[var(--ds-border-default)] text-[var(--ds-text-muted)] uppercase">
                      {entry.surface}
                    </span>
                    {entry.issue && entry.issueUrl && (
                      <a
                        href={entry.issueUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-0.5"
                      >
                        <span>{entry.issue}</span>
                        <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="text-xs text-[var(--ds-text-secondary)] font-sans leading-relaxed whitespace-pre-line pl-2 border-l-2 border-[var(--ds-border-default)]">
                  {entry.rationale}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
