'use client';

import { Badge, DataTable } from '@rtkelly13/design-system';
import type { ColumnDef } from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import type { ApiSymbol } from '@/lib/ingest/parseApiTxt';

interface ApiTableExplorerProps {
  symbols: ApiSymbol[];
  models: string[];
}

export function ApiTableExplorer({ symbols, models }: ApiTableExplorerProps) {
  const [selectedModel, setSelectedModel] = useState<string>('ALL');
  const [selectedKind, setSelectedKind] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [staticFilter, setStaticFilter] = useState<
    'ALL' | 'STATIC' | 'INSTANCE'
  >('ALL');

  const filteredData = useMemo(() => {
    return symbols.filter((item) => {
      if (selectedModel !== 'ALL' && item.model !== selectedModel) return false;
      if (selectedKind !== 'ALL' && item.kind !== selectedKind) return false;
      if (selectedCategory !== 'ALL' && item.category !== selectedCategory)
        return false;
      if (staticFilter === 'STATIC' && !item.isStatic) return false;
      if (staticFilter === 'INSTANCE' && item.isStatic) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.memberName.toLowerCase().includes(q) ||
          item.typeName.toLowerCase().includes(q) ||
          item.returnType.toLowerCase().includes(q) ||
          item.parameters.toLowerCase().includes(q) ||
          item.rawSignature.toLowerCase().includes(q)
        );
      }

      return true;
    });
  }, [
    symbols,
    selectedModel,
    selectedKind,
    selectedCategory,
    staticFilter,
    searchQuery,
  ]);

  const columns = useMemo<ColumnDef<ApiSymbol>[]>(
    () => [
      {
        accessorKey: 'kind',
        header: 'KIND',
        size: 90,
        cell: ({ row }) => {
          const kind = row.original.kind;
          let accent: 'primary' | 'secondary' | 'warning' | 'quiet' = 'quiet';
          if (kind === 'Method') accent = 'primary';
          else if (kind === 'Property') accent = 'secondary';
          else if (kind === 'Type') accent = 'warning';
          return <Badge accent={accent}>{kind.toUpperCase()}</Badge>;
        },
      },
      {
        accessorKey: 'memberName',
        header: 'MEMBER / TYPE',
        cell: ({ row }) => {
          const item = row.original;
          return (
            <div className="font-mono text-xs">
              <div className="text-[var(--ds-text-muted)] text-[10px] truncate max-w-xs">
                {item.typeName}
              </div>
              <div className="font-bold text-[var(--ds-text-primary)]">
                {item.isStatic && (
                  <span className="text-cyan-400 mr-1">static</span>
                )}
                {item.memberName}
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: 'parameters',
        header: 'PARAMETERS / SIGNATURE',
        cell: ({ row }) => {
          const item = row.original;
          if (!item.parameters)
            return (
              <span className="text-[var(--ds-text-muted)] text-xs">—</span>
            );
          return (
            <div className="font-mono text-xs text-[var(--ds-text-secondary)] break-all max-w-md">
              {item.parameters}
            </div>
          );
        },
      },
      {
        accessorKey: 'returnType',
        header: 'RETURN TYPE',
        cell: ({ row }) => {
          const rt = row.original.returnType;
          return (
            <div
              className="font-mono text-xs text-cyan-400 truncate max-w-xs"
              title={rt}
            >
              {rt}
            </div>
          );
        },
      },
      {
        accessorKey: 'category',
        header: 'CATEGORY',
        cell: ({ row }) => (
          <span className="font-mono text-[10px] px-1.5 py-0.5 border border-[var(--ds-border-default)] text-[var(--ds-text-muted)] whitespace-nowrap">
            {row.original.category}
          </span>
        ),
      },
      {
        accessorKey: 'model',
        header: 'MODEL',
        cell: ({ row }) => (
          <span className="font-mono text-xs text-[var(--ds-text-secondary)]">
            {row.original.model}
          </span>
        ),
      },
    ],
    [],
  );

  return (
    <div className="space-y-6">
      {/* Filter Controls Toolbar */}
      <div className="border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-4 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search symbols, types, parameters, return types..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[var(--ds-surface-base)] text-[var(--ds-text-primary)] border border-[var(--ds-border-default)] px-3 py-1.5 text-xs font-mono rounded-none focus:outline-none focus:border-[var(--ds-border-strong)]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Model Filter */}
            <div className="flex items-center gap-1">
              <span className="text-xs font-mono text-[var(--ds-text-muted)]">
                MODEL:
              </span>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="bg-[var(--ds-surface-base)] text-[var(--ds-text-primary)] border border-[var(--ds-border-default)] px-2 py-1 text-xs font-mono rounded-none focus:outline-none focus:border-[var(--ds-border-strong)] cursor-pointer"
              >
                <option value="ALL">[ ALL MODELS ]</option>
                {models.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* Static / Instance */}
            <div className="flex items-center gap-1">
              <span className="text-xs font-mono text-[var(--ds-text-muted)]">
                SCOPE:
              </span>
              <select
                value={staticFilter}
                onChange={(e) => setStaticFilter(e.target.value as any)}
                className="bg-[var(--ds-surface-base)] text-[var(--ds-text-primary)] border border-[var(--ds-border-default)] px-2 py-1 text-xs font-mono rounded-none focus:outline-none focus:border-[var(--ds-border-strong)] cursor-pointer"
              >
                <option value="ALL">ALL</option>
                <option value="STATIC">STATIC ONLY</option>
                <option value="INSTANCE">INSTANCE ONLY</option>
              </select>
            </div>
          </div>
        </div>

        {/* Kind & Category filter buttons */}
        <div className="flex flex-wrap gap-4 pt-2 border-t border-[var(--ds-border-default)] text-xs font-mono">
          <div className="flex items-center gap-1">
            <span className="text-[var(--ds-text-muted)] mr-1">KIND:</span>
            {['ALL', 'Method', 'Property', 'Type', 'Constructor'].map((k) => (
              <button
                key={k}
                onClick={() => setSelectedKind(k)}
                className={`px-2 py-0.5 transition-colors ${
                  selectedKind === k
                    ? 'bg-cyan-500 text-black font-bold'
                    : 'bg-[var(--ds-surface-base)] text-[var(--ds-text-secondary)] border border-[var(--ds-border-default)] hover:text-[var(--ds-text-primary)]'
                }`}
              >
                {k.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <span className="text-[var(--ds-text-muted)] mr-1">AXIS:</span>
            {[
              'ALL',
              'Source & Builder',
              'Pushdown & Metadata',
              'Direct Extension',
              'Model Type',
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2 py-0.5 transition-colors ${
                  selectedCategory === cat
                    ? 'bg-pink-500 text-black font-bold'
                    : 'bg-[var(--ds-surface-base)] text-[var(--ds-text-secondary)] border border-[var(--ds-border-default)] hover:text-[var(--ds-text-primary)]'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs font-mono text-[var(--ds-text-muted)]">
        <div>
          SHOWING{' '}
          <span className="text-[var(--ds-text-primary)] font-bold">
            {filteredData.length}
          </span>{' '}
          OF {symbols.length} EMITTED SYMBOLS
        </div>
        <div>DATA CONTRACT: test/**/GoldenFiles/*.api.txt</div>
      </div>

      {/* TanStack Table */}
      <div className="border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] overflow-x-auto">
        <DataTable
          columns={columns}
          data={filteredData}
          pageSize={25}
          emptyText="No API symbols matched your current filters."
        />
      </div>
    </div>
  );
}
