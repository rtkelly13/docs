import fs from 'node:fs';
import path from 'node:path';
import { Badge } from '@rtkelly13/design-system';
import { ArrowRight, ExternalLink, Table } from 'lucide-react';
import Link from 'next/link';
import { PortalHeader } from '@/components/PortalHeader';
import { PROJECTS } from '@/config/projects';

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

export default function HubPage() {
  const stats = getProjectStats();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--ds-surface-base)]">
      <PortalHeader />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge accent="secondary">[ PORTAL V0.1.0 ]</Badge>
            <Badge accent="primary">MULTI-PROJECT CONTRACT</Badge>
            <Badge accent="warning">STATIC EXPORT</Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-[var(--ds-text-primary)]">
            RYAN KELLY // DOCS
          </h1>

          <p className="text-base sm:text-lg font-sans text-[var(--ds-text-secondary)] max-w-3xl leading-relaxed">
            Centralized documentation portal, architectural call graphs, and
            interactive generated API reference catalogs for .NET compilers,
            language tools, and distributed infrastructure.
          </p>
        </div>

        {/* Aggregate Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-4">
            <p className="text-xs font-mono text-[var(--ds-text-muted)] uppercase tracking-wider">
              PROJECTS
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

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-mono font-bold uppercase tracking-wider text-[var(--ds-text-primary)]">
            [ ECOSYSTEM DIRECTORY ]
          </h2>
          <span className="text-xs font-mono text-[var(--ds-text-muted)]">
            AUTOMATED EXTRACTION VIA CI DISPATCH
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {PROJECTS.map((project) => {
            const dataDir = path.join(process.cwd(), 'src/data', project.id);
            let projectStats = {
              docCount: 0,
              apiSymbolCount: 0,
              modelCount: 0,
            };
            const manifestPath = path.join(dataDir, 'manifest.json');
            if (fs.existsSync(manifestPath)) {
              try {
                const m = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
                projectStats = m.stats;
              } catch {}
            }

            return (
              <div
                key={project.id}
                className="border-2 border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-6 flex flex-col justify-between hover:border-[var(--ds-border-strong)] transition-all relative group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-[var(--ds-text-muted)] uppercase">
                          {project.category}
                        </span>
                        {project.badge && (
                          <Badge
                            accent={project.featured ? 'secondary' : 'quiet'}
                          >
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
                        Call Graphs
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
                      <span>EXPLORE</span>
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
          })}
        </div>

        {/* Architectural Principles Box */}
        <div className="border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase text-[var(--ds-text-muted)]">
              [ ARCHITECTURAL SPECIFICATION #279 ]
            </span>
          </div>
          <h3 className="text-lg font-mono font-bold text-[var(--ds-text-primary)]">
            Decoupled Presentation & Automated Ingestion Contract
          </h3>
          <p className="text-sm text-[var(--ds-text-secondary)] leading-relaxed">
            The documentation site frontend lives exclusively within this
            repository. Upstream C# and F# codebases remain pure data producers,
            free from React, Next.js, and CSS commit noise. When releases or
            pull requests merge upstream, a GitHub Action dispatch notifies this
            portal to re-ingest markdown guides, emitted API baselines (
            <code className="text-xs font-mono text-cyan-400">*.api.txt</code>),
            and version ledgers.
          </p>
        </div>
      </main>
    </div>
  );
}
