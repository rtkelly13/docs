import fs from 'node:fs';
import path from 'node:path';
import { Badge } from '@rtkelly13/design-system';
import { ArrowRight, Cpu, ExternalLink, Globe, Table } from 'lucide-react';
import Link from 'next/link';
import { PortalHeader } from '@/components/PortalHeader';
import { PROJECTS, type ProjectConfig } from '@/config/projects';

function getProjectStats() {
  let totalDocs = 0;
  let totalSymbols = 0;
  let totalModels = 0;
  let totalLedger = 0;

  const dataDir = path.join(process.cwd(), 'src/data');
  for (const project of PROJECTS) {
    const manifestPath = path.join(dataDir, project.id, 'manifest.json');
    if (fs.existsSync(manifestPath)) {
      try {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
        totalDocs += manifest.stats?.docCount || 0;
        totalSymbols += manifest.stats?.apiSymbolCount || 0;
        totalModels += manifest.stats?.modelCount || 0;
        totalLedger += manifest.stats?.ledgerEntryCount || 0;
      } catch {}
    }
  }

  return { totalDocs, totalSymbols, totalModels, totalLedger };
}

function ProjectCard({ project }: { project: ProjectConfig }) {
  const dataDir = path.join(process.cwd(), 'src/data', project.id);
  let projectStats = { docCount: 0, apiSymbolCount: 0, modelCount: 0 };
  const manifestPath = path.join(dataDir, 'manifest.json');
  if (fs.existsSync(manifestPath)) {
    try {
      const m = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
      projectStats = m.stats;
    } catch {}
  }

  const isDotNet = project.ecosystem === 'dotnet';

  return (
    <div className="border-2 border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-6 flex flex-col justify-between hover:border-[var(--ds-border-strong)] transition-all relative group">
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono text-[var(--ds-text-muted)] uppercase tracking-wider">
                {project.language}
              </span>
              {project.badge && (
                <Badge accent={isDotNet ? 'primary' : 'secondary'}>
                  {project.badge}
                </Badge>
              )}
            </div>
            <h3 className="text-xl font-mono font-bold text-[var(--ds-text-primary)] group-hover:text-cyan-400 transition-colors">
              <Link href={`/${project.id}`}>{project.name}</Link>
            </h3>
          </div>
          <span className="text-xs font-mono px-2 py-0.5 border border-[var(--ds-border-default)] text-[var(--ds-text-secondary)]">
            v{project.version}
          </span>
        </div>

        <p className="text-sm text-[var(--ds-text-secondary)] mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Capabilities badges */}
        <div className="flex flex-wrap gap-2 mb-6 text-xs font-mono">
          {project.features.guides && (
            <span className="px-2 py-0.5 bg-[var(--ds-surface-base)] border border-[var(--ds-border-default)] text-[var(--ds-text-muted)]">
              {projectStats.docCount} Guides
            </span>
          )}
          {project.features.apiGrid && (
            <span className="px-2 py-0.5 bg-[var(--ds-surface-base)] border border-[var(--ds-border-default)] text-[var(--ds-text-muted)]">
              {projectStats.apiSymbolCount} API Symbols (
              {projectStats.modelCount} Models)
            </span>
          )}
          {project.features.ledger && (
            <span className="px-2 py-0.5 bg-[var(--ds-surface-base)] border border-[var(--ds-border-default)] text-[var(--ds-text-muted)]">
              Semver Ledger
            </span>
          )}
          {project.features.architecture && (
            <span className="px-2 py-0.5 bg-[var(--ds-surface-base)] border border-[var(--ds-border-default)] text-[var(--ds-text-muted)]">
              Call Graphs & Architecture
            </span>
          )}
        </div>
      </div>

      <div className="pt-4 border-t border-[var(--ds-border-default)] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Link
            href={`/${project.id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--ds-surface-base)] hover:bg-[var(--ds-surface-strong)] border border-[var(--ds-border-default)] text-xs font-mono text-[var(--ds-text-primary)] transition-colors"
          >
            <span>EXPLORE PROJECT</span>
            <ArrowRight size={12} />
          </Link>

          {project.features.apiGrid && (
            <Link
              href={`/${project.id}/api`}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 border border-dashed border-[var(--ds-border-default)] text-xs font-mono text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)] transition-colors"
            >
              <Table size={12} />
              <span>API GRID</span>
            </Link>
          )}
        </div>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-[var(--ds-text-muted)] hover:text-[var(--ds-text-primary)] inline-flex items-center gap-1"
        >
          <span>GITHUB</span>
          <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
}

export default function HubPage() {
  const stats = getProjectStats();
  const dotnetProjects = PROJECTS.filter((p) => p.ecosystem === 'dotnet');
  const jsProjects = PROJECTS.filter((p) => p.ecosystem === 'javascript');

  return (
    <div className="min-h-screen flex flex-col bg-[var(--ds-surface-base)]">
      <PortalHeader />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge accent="secondary">[ PARQUET PORTAL ]</Badge>
            <Badge accent="primary">CROSS-ECOSYSTEM COMPATIBILITY</Badge>
            <Badge accent="warning">STATIC EXPORT</Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-[var(--ds-text-primary)]">
            PARQUET // ECOSYSTEMS
          </h1>

          <p className="text-base sm:text-lg font-sans text-[var(--ds-text-secondary)] max-w-3xl leading-relaxed">
            Dedicated documentation portal, architectural call graphs, and
            interactive generated API reference catalogs for Apache Parquet
            tools across the{' '}
            <span className="text-[var(--ds-text-primary)] font-semibold">
              .NET
            </span>{' '}
            and{' '}
            <span className="text-[var(--ds-text-primary)] font-semibold">
              JavaScript / TypeScript
            </span>{' '}
            ecosystems.
          </p>
        </div>

        {/* Aggregate Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-4">
            <p className="text-xs font-mono text-[var(--ds-text-muted)] uppercase tracking-wider">
              PARQUET PROJECTS
            </p>
            <p className="text-2xl sm:text-3xl font-mono font-bold text-[var(--ds-text-primary)] mt-1">
              {PROJECTS.length}
            </p>
          </div>
          <div className="border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-4">
            <p className="text-xs font-mono text-[var(--ds-text-muted)] uppercase tracking-wider">
              DOC GUIDES
            </p>
            <p className="text-2xl sm:text-3xl font-mono font-bold text-[var(--ds-text-primary)] mt-1">
              {stats.totalDocs}
            </p>
          </div>
          <div className="border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-4">
            <p className="text-xs font-mono text-[var(--ds-text-muted)] uppercase tracking-wider">
              API SYMBOLS
            </p>
            <p className="text-2xl sm:text-3xl font-mono font-bold text-[var(--ds-text-primary)] mt-1">
              {stats.totalSymbols}
            </p>
          </div>
          <div className="border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-4">
            <p className="text-xs font-mono text-[var(--ds-text-muted)] uppercase tracking-wider">
              LEDGER ENTRIES
            </p>
            <p className="text-2xl sm:text-3xl font-mono font-bold text-[var(--ds-text-primary)] mt-1">
              {stats.totalLedger}
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Partition 1: .NET Ecosystem */}
        {/* ========================================================================= */}
        <div className="mb-14 space-y-6">
          <div className="flex items-center justify-between border-b-2 border-cyan-500 pb-2">
            <div className="flex items-center gap-2">
              <Cpu size={20} className="text-cyan-400" />
              <h2 className="text-lg font-mono font-bold uppercase tracking-wider text-[var(--ds-text-primary)]">
                [ 01 // .NET ECOSYSTEM ]
              </h2>
            </div>
            <span className="text-xs font-mono text-cyan-400 font-bold">
              C# 13 • F# 6+ • .NET 9 • NATIVE AOT
            </span>
          </div>

          <p className="text-sm text-[var(--ds-text-secondary)] max-w-3xl">
            High-throughput compile-time serializers, generative F# type
            providers, zero-allocation columnar transposition, and Roslyn
            compiler analyzers targeting{' '}
            <code className="font-mono text-cyan-400">Parquet.Net</code>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dotnetProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Partition 2: JavaScript & TypeScript Ecosystem */}
        {/* ========================================================================= */}
        <div className="mb-14 space-y-6">
          <div className="flex items-center justify-between border-b-2 border-pink-500 pb-2">
            <div className="flex items-center gap-2">
              <Globe size={20} className="text-pink-400" />
              <h2 className="text-lg font-mono font-bold uppercase tracking-wider text-[var(--ds-text-primary)]">
                [ 02 // JAVASCRIPT & TYPESCRIPT ECOSYSTEM ]
              </h2>
            </div>
            <span className="text-xs font-mono text-pink-400 font-bold">
              TYPESCRIPT • DUCKDB-WASM • ARROW JS • EDGE
            </span>
          </div>

          <p className="text-sm text-[var(--ds-text-secondary)] max-w-3xl">
            Modern client-side and edge columnar execution. Query remote Parquet
            files directly in the browser with DuckDB-Wasm HTTP range requests,
            zero-copy Apache Arrow buffers, and TypeScript schema interfaces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jsProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Cross-Ecosystem Architectural Contract */}
        <div className="border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase text-[var(--ds-text-muted)]">
              [ CROSS-ECOSYSTEM ARCHITECTURE & SPECIFICATION #279 ]
            </span>
          </div>
          <h3 className="text-lg font-mono font-bold text-[var(--ds-text-primary)]">
            Decoupled Data Producers & Interoperable Binary Standards
          </h3>
          <p className="text-sm text-[var(--ds-text-secondary)] leading-relaxed">
            Parquet is the universal columnar data contract. Backend engines
            written with{' '}
            <strong className="text-cyan-400">Parquet.SourceGenerator</strong>{' '}
            serialize millions of records per second with zero allocations;
            frontend web applications running{' '}
            <strong className="text-pink-400">DuckDB-Wasm & Arrow JS</strong>{' '}
            query those exact files over HTTP range requests without requiring
            intermediate server transformation. This portal documents the
            specifications, APIs, and tooling connecting both ecosystems.
          </p>
        </div>
      </main>
    </div>
  );
}
