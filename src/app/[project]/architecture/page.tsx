import fs from 'node:fs';
import path from 'node:path';
import { Badge } from '@rtkelly13/design-system';
import { notFound } from 'next/navigation';
import { MermaidViewer } from '@/components/MermaidViewer';
import { PortalHeader } from '@/components/PortalHeader';
import { getProject, PROJECTS } from '@/config/projects';

export function generateStaticParams() {
  return PROJECTS.filter((p) => p.features.architecture).map((p) => ({
    project: p.id,
  }));
}

interface PageProps {
  params: Promise<{
    project: string;
  }>;
}

export default async function ProjectArchitecturePage({ params }: PageProps) {
  const { project: projectId } = await params;
  const project = getProject(projectId);

  if (!project?.features.architecture) {
    notFound();
  }

  const archFile = path.join(
    process.cwd(),
    'src/data',
    project.id,
    'architecture.json',
  );
  if (!fs.existsSync(archFile)) {
    notFound();
  }

  const data = JSON.parse(fs.readFileSync(archFile, 'utf-8'));
  const diagrams: { id: string; title: string; chart: string }[] =
    data.diagrams || [];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--ds-surface-base)]">
      <PortalHeader currentProject={project} />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 sm:py-10">
        <div className="mb-8 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge accent="secondary">ARCHITECTURE & CALL GRAPH</Badge>
            <Badge accent="primary">MERMAID TOOLKIT</Badge>
          </div>

          <h1 className="text-2xl sm:text-4xl font-mono font-bold text-[var(--ds-text-primary)]">
            {project.name} // CALL GRAPHS & ARCHITECTURE
          </h1>

          <p className="text-sm sm:text-base text-[var(--ds-text-secondary)] max-w-3xl leading-relaxed">
            Deterministic architectural relationships and execution call graphs
            extracted from compiler diagnostics and verification specifications.
          </p>
        </div>

        <div className="space-y-8">
          {diagrams.length === 0 ? (
            <div className="p-8 border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)] text-center text-xs font-mono text-[var(--ds-text-muted)]">
              No architecture diagrams found for this project.
            </div>
          ) : (
            diagrams.map((diag) => (
              <MermaidViewer
                key={diag.id}
                chart={diag.chart}
                title={diag.title}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
