import fs from 'node:fs';
import path from 'node:path';
import { Badge } from '@rtkelly13/design-system';
import { notFound } from 'next/navigation';
import { ApiTableExplorer } from '@/components/ApiTableExplorer';
import { PortalHeader } from '@/components/PortalHeader';
import { getProject, PROJECTS } from '@/config/projects';
import type { ApiSymbol } from '@/lib/ingest/parseApiTxt';

export function generateStaticParams() {
  return PROJECTS.filter((p) => p.features.apiGrid).map((p) => ({
    project: p.id,
  }));
}

interface PageProps {
  params: Promise<{
    project: string;
  }>;
}

export default async function ProjectApiPage({ params }: PageProps) {
  const { project: projectId } = await params;
  const project = getProject(projectId);

  if (!project?.features.apiGrid) {
    notFound();
  }

  const catalogFile = path.join(
    process.cwd(),
    'src/data',
    project.id,
    'api-catalog.json',
  );
  const manifestFile = path.join(
    process.cwd(),
    'src/data',
    project.id,
    'manifest.json',
  );

  if (!fs.existsSync(catalogFile)) {
    notFound();
  }

  const symbols: ApiSymbol[] = JSON.parse(
    fs.readFileSync(catalogFile, 'utf-8'),
  );
  let models: string[] = [];

  if (fs.existsSync(manifestFile)) {
    try {
      const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf-8'));
      models = manifest.models || [];
    } catch {}
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--ds-surface-base)]">
      <PortalHeader currentProject={project} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8 sm:py-10">
        <div className="mb-8 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge accent="primary">PUBLIC API SURFACE</Badge>
            <Badge accent="secondary">GOLDEN BASELINES</Badge>
            <Badge accent="quiet">TANSTACK TABLE</Badge>
          </div>

          <h1 className="text-2xl sm:text-4xl font-mono font-bold text-[var(--ds-text-primary)]">
            {project.name} // GENERATED API GRID
          </h1>

          <p className="text-sm sm:text-base text-[var(--ds-text-secondary)] max-w-4xl leading-relaxed">
            Unlike reflection-based libraries, compile-time Roslyn source
            generators emit concrete C# code. This interactive catalog parses
            generated API baselines (
            <code className="font-mono text-cyan-400">*.api.txt</code>) directly
            into a searchable and filterable type registry.
          </p>
        </div>

        <ApiTableExplorer symbols={symbols} models={models} />
      </main>
    </div>
  );
}
