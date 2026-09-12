import fs from 'node:fs';
import path from 'node:path';
import { Badge } from '@rtkelly13/design-system';
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  GitPullRequest,
  Table,
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortalHeader } from '@/components/PortalHeader';
import { getProject, PROJECTS } from '@/config/projects';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    project: p.id,
  }));
}

interface PageProps {
  params: Promise<{
    project: string;
  }>;
}

export default async function ProjectOverviewPage({ params }: PageProps) {
  const { project: projectId } = await params;
  const project = getProject(projectId);

  if (!project) {
    notFound();
  }

  const dataDir = path.join(process.cwd(), 'src/data', project.id);
  let manifest = {
    stats: {
      docCount: 0,
      apiSymbolCount: 0,
      modelCount: 0,
      ledgerEntryCount: 0,
    },
    models: [] as string[],
  };
  let docsCatalog: {
    slug: string;
    title: string;
    category: string;
    readingMinutes: number;
    order: number;
  }[] = [];

  const manifestPath = path.join(dataDir, 'manifest.json');
  if (fs.existsSync(manifestPath)) {
    try {
      manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    } catch {}
  }

  const catalogPath = path.join(dataDir, 'docs-catalog.json');
  if (fs.existsSync(catalogPath)) {
    try {
      docsCatalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));
    } catch {}
  }

  const guides = docsCatalog.filter((d) => d.category === 'Guides');
  const reference = docsCatalog.filter((d) => d.category === 'Reference');
  const internals = docsCatalog.filter(
    (d) => d.category === 'Internals & Engineering Spikes',
  );

  return (
    <div className="min-h-screen flex flex-col bg-[var(--ds-surface-base)]">
      <PortalHeader currentProject={project} />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 sm:py-12">
        {/* Project Hero Header */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[var(--ds-text-muted)] uppercase">
              {project.category}
            </span>
            <Badge accent="primary">v{project.version}</Badge>
            {project.badge && <Badge accent="secondary">{project.badge}</Badge>}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-[var(--ds-text-primary)]">
              {project.name}
            </h1>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[var(--ds-border-default)] text-xs font-mono text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)] transition-colors w-fit"
            >
              <span>VIEW SOURCE ON GITHUB</span>
              <ExternalLink size={13} />
            </a>
          </div>

          <p className="text-base sm:text-lg text-[var(--ds-text-secondary)] max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Quick Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Documentation Guides */}
          {project.features.guides && (
            <div className="border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={18} className="text-cyan-400" />
                  <h2 className="text-sm font-mono font-bold uppercase text-[var(--ds-text-primary)]">
                    DOCUMENTATION & GUIDES
                  </h2>
                </div>
                <p className="text-xs text-[var(--ds-text-secondary)] mb-4">
                  {manifest.stats.docCount} curated architectural guides,
                  tutorials, compiler diagnostics, and engineering spikes.
                </p>
                <div className="space-y-1 mb-4 text-xs font-mono text-[var(--ds-text-muted)]">
                  <div>• Guides: {guides.length}</div>
                  <div>• Reference: {reference.length}</div>
                  <div>• Internals: {internals.length}</div>
                </div>
              </div>
              <Link
                href={
                  docsCatalog.length > 0
                    ? `/${project.id}/guides/${docsCatalog[0].slug}`
                    : `/${project.id}`
                }
                className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:underline"
              >
                <span>READ DOCUMENTATION</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          )}

          {/* Interactive API Grid */}
          {project.features.apiGrid && (
            <div className="border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Table size={18} className="text-pink-400" />
                  <h2 className="text-sm font-mono font-bold uppercase text-[var(--ds-text-primary)]">
                    INTERACTIVE API GRID
                  </h2>
                </div>
                <p className="text-xs text-[var(--ds-text-secondary)] mb-4">
                  {manifest.stats.apiSymbolCount} emitted C# signatures
                  extracted directly from golden compiler baselines.
                </p>
                <div className="space-y-1 mb-4 text-xs font-mono text-[var(--ds-text-muted)]">
                  <div>• Models: {manifest.models.join(', ')}</div>
                  <div>• Filter by profile, return type, and members</div>
                </div>
              </div>
              <Link
                href={`/${project.id}/api`}
                className="inline-flex items-center gap-1 text-xs font-mono text-pink-400 hover:underline"
              >
                <span>OPEN API GRID</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          )}

          {/* API Change Ledger */}
          {project.features.ledger && (
            <div className="border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <GitPullRequest size={18} className="text-emerald-400" />
                  <h2 className="text-sm font-mono font-bold uppercase text-[var(--ds-text-primary)]">
                    API CHANGE LEDGER
                  </h2>
                </div>
                <p className="text-xs text-[var(--ds-text-secondary)] mb-4">
                  {manifest.stats.ledgerEntryCount} governed semver change
                  entries tracking additions, breaking shifts, and emitted
                  shapes.
                </p>
                <div className="space-y-1 mb-4 text-xs font-mono text-[var(--ds-text-muted)]">
                  <div>• Governed under ADR #230</div>
                  <div>• Semver impact badges & rationale explorer</div>
                </div>
              </div>
              <Link
                href={`/${project.id}/ledger`}
                className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:underline"
              >
                <span>VIEW LEDGER</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          )}
        </div>

        {/* Documentation Directory */}
        {docsCatalog.length > 0 && (
          <div className="space-y-8">
            <div className="border-b border-[var(--ds-border-default)] pb-2 flex items-center justify-between">
              <h2 className="text-base font-mono font-bold uppercase tracking-wider text-[var(--ds-text-primary)]">
                [ GUIDES & REFERENCE INDEX ]
              </h2>
              <span className="text-xs font-mono text-[var(--ds-text-muted)]">
                {docsCatalog.length} ARTICLES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Guides */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-[var(--ds-border-default)] pb-1">
                  1. CONSUMER GUIDES ({guides.length})
                </h3>
                <div className="space-y-2">
                  {guides.map((doc) => (
                    <Link
                      key={doc.slug}
                      href={`/${project.id}/guides/${doc.slug}`}
                      className="block p-2 text-xs font-mono border border-transparent hover:border-[var(--ds-border-default)] hover:bg-[var(--ds-surface-subtle)] text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)] transition-colors"
                    >
                      <div className="font-semibold">{doc.title}</div>
                      <div className="text-[10px] text-[var(--ds-text-muted)] mt-0.5">
                        {doc.readingMinutes} min read
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Reference */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 border-b border-[var(--ds-border-default)] pb-1">
                  2. SPEC & REFERENCE ({reference.length})
                </h3>
                <div className="space-y-2">
                  {reference.map((doc) => (
                    <Link
                      key={doc.slug}
                      href={`/${project.id}/guides/${doc.slug}`}
                      className="block p-2 text-xs font-mono border border-transparent hover:border-[var(--ds-border-default)] hover:bg-[var(--ds-surface-subtle)] text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)] transition-colors"
                    >
                      <div className="font-semibold">{doc.title}</div>
                      <div className="text-[10px] text-[var(--ds-text-muted)] mt-0.5">
                        {doc.readingMinutes} min read
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Internals */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 border-b border-[var(--ds-border-default)] pb-1">
                  3. INTERNALS & SPIKES ({internals.length})
                </h3>
                <div className="space-y-2">
                  {internals.map((doc) => (
                    <Link
                      key={doc.slug}
                      href={`/${project.id}/guides/${doc.slug}`}
                      className="block p-2 text-xs font-mono border border-transparent hover:border-[var(--ds-border-default)] hover:bg-[var(--ds-surface-subtle)] text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)] transition-colors"
                    >
                      <div className="font-semibold">{doc.title}</div>
                      <div className="text-[10px] text-[var(--ds-text-muted)] mt-0.5">
                        {doc.readingMinutes} min read
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
