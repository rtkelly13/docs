import fs from 'node:fs';
import path from 'node:path';
import { Badge } from '@rtkelly13/design-system';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ApiNavSidebar } from '@/components/api/ApiNavSidebar';
import { PortalHeader } from '@/components/PortalHeader';
import { getProject, PROJECTS } from '@/config/projects';
import type {
  ApiDocProject,
  VersionManifest,
} from '@/lib/ingest/parseApiModel';

interface PageProps {
  params: Promise<{
    project: string;
    version: string;
  }>;
}

export function generateStaticParams() {
  const params: { project: string; version: string }[] = [];
  for (const project of PROJECTS) {
    const versionsDir = path.join(
      process.cwd(),
      'src/data',
      project.id,
      'versions',
    );
    const manifestPath = path.join(versionsDir, 'versions.json');
    if (fs.existsSync(manifestPath)) {
      try {
        const manifest: VersionManifest = JSON.parse(
          fs.readFileSync(manifestPath, 'utf-8'),
        );
        for (const v of manifest.versions) {
          params.push({ project: project.id, version: v.version });
        }
      } catch {}
    }
  }
  return params;
}

export default async function VersionApiIndexPage({ params }: PageProps) {
  const { project: projectId, version } = await params;
  const project = getProject(projectId);

  if (!project) notFound();

  const versionsDir = path.join(
    process.cwd(),
    'src/data',
    project.id,
    'versions',
  );
  const manifestPath = path.join(versionsDir, 'versions.json');
  const versionFilePath = path.join(versionsDir, `v${version}.json`);

  if (!fs.existsSync(manifestPath) || !fs.existsSync(versionFilePath)) {
    notFound();
  }

  const manifest: VersionManifest = JSON.parse(
    fs.readFileSync(manifestPath, 'utf-8'),
  );
  const apiDoc: ApiDocProject = JSON.parse(
    fs.readFileSync(versionFilePath, 'utf-8'),
  );

  return (
    <div className="min-h-screen flex flex-col bg-[var(--ds-surface-base)]">
      <PortalHeader currentProject={project} />

      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl w-full mx-auto">
        <ApiNavSidebar
          projectId={project.id}
          version={version}
          manifest={manifest}
          apiDoc={apiDoc}
        />

        <main className="flex-1 p-6 lg:p-8 space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge accent="primary">API REFERENCE</Badge>
              <Badge accent="secondary">v{version}</Badge>
              {version.includes('-') && <Badge accent="warning">PREVIEW</Badge>}
              {manifest.latest === version && (
                <Badge accent="primary">LATEST</Badge>
              )}
            </div>

            {manifest.latest !== version && (
              <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 text-xs font-mono text-yellow-200 flex flex-wrap items-center justify-between gap-2">
                <span>
                  ⚠️ You are viewing{' '}
                  {version.includes('-')
                    ? 'an archived pre-release'
                    : 'an older release'}{' '}
                  (<strong>v{version}</strong>).
                </span>
                <Link
                  href={`/${projectId}/api/${manifest.latest}`}
                  className="underline hover:text-white font-bold ml-2"
                >
                  Switch to latest (v{manifest.latest}) →
                </Link>
              </div>
            )}

            <h1 className="text-2xl sm:text-4xl font-mono font-bold text-[var(--ds-text-primary)]">
              {project.name} // API BROWSER
            </h1>

            <p className="text-sm sm:text-base text-[var(--ds-text-secondary)] max-w-3xl leading-relaxed">
              Explore public type hierarchies, syntax signatures, XML doc
              comments, and live UML class diagrams for release{' '}
              <code className="text-cyan-400 font-mono">v{version}</code>.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <h2 className="text-lg font-mono font-bold text-[var(--ds-text-primary)] border-b border-[var(--ds-border-subtle)] pb-2 uppercase tracking-wider">
              Namespaces & Exported Types
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {apiDoc.namespaces.map((ns) => (
                <div
                  key={ns.name}
                  className="bg-[var(--ds-surface-sunken)] p-4 border border-[var(--ds-border-subtle)] space-y-3"
                >
                  <h3 className="font-mono font-bold text-sm text-cyan-400">
                    {ns.name}
                  </h3>
                  <ul className="space-y-1 text-xs font-mono">
                    {ns.types.map((type) => (
                      <li key={type.id}>
                        <Link
                          href={`/${project.id}/api/${version}/${type.name}`}
                          className="text-[var(--ds-text-secondary)] hover:text-cyan-300 transition-colors flex items-center justify-between"
                        >
                          <span>{type.name}</span>
                          <span className="text-[10px] text-[var(--ds-text-muted)]">
                            {type.kind}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
