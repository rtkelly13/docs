import fs from 'node:fs';
import path from 'node:path';
import { Badge } from '@rtkelly13/design-system';
import { notFound } from 'next/navigation';
import { LedgerExplorer } from '@/components/LedgerExplorer';
import { PortalHeader } from '@/components/PortalHeader';
import { getProject, PROJECTS } from '@/config/projects';
import type { LedgerEntry } from '@/lib/ingest/parseLedger';

export function generateStaticParams() {
  return PROJECTS.filter((p) => p.features.ledger).map((p) => ({
    project: p.id,
  }));
}

interface PageProps {
  params: Promise<{
    project: string;
  }>;
}

export default async function ProjectLedgerPage({ params }: PageProps) {
  const { project: projectId } = await params;
  const project = getProject(projectId);

  if (!project?.features.ledger) {
    notFound();
  }

  const ledgerFile = path.join(
    process.cwd(),
    'src/data',
    project.id,
    'ledger.json',
  );
  if (!fs.existsSync(ledgerFile)) {
    notFound();
  }

  const entries: LedgerEntry[] = JSON.parse(
    fs.readFileSync(ledgerFile, 'utf-8'),
  );

  return (
    <div className="min-h-screen flex flex-col bg-[var(--ds-surface-base)]">
      <PortalHeader currentProject={project} />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 sm:py-10">
        <div className="mb-8 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge accent="success">GOVERNED SEMVER</Badge>
            <Badge accent="primary">ADR #230 CONTRACT</Badge>
          </div>

          <h1 className="text-2xl sm:text-4xl font-mono font-bold text-[var(--ds-text-primary)]">
            {project.name} // API CHANGE LEDGER
          </h1>

          <p className="text-sm sm:text-base text-[var(--ds-text-secondary)] max-w-3xl leading-relaxed">
            Every modification to governed public, emitted, or internal seams
            requires an explicit ledger entry classifying its semver impact with
            accompanying architectural rationale.
          </p>
        </div>

        <LedgerExplorer entries={entries} />
      </main>
    </div>
  );
}
