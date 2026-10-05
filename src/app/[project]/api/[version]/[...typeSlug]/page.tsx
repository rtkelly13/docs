import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ApiNavSidebar } from '@/components/api/ApiNavSidebar';
import { TypeDetailView } from '@/components/api/TypeDetailView';
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
    typeSlug: string[];
  }>;
}

export function generateStaticParams() {
  const params: { project: string; version: string; typeSlug: string[] }[] = [];
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
          const versionFile = path.join(versionsDir, `v${v.version}.json`);
          if (fs.existsSync(versionFile)) {
            const apiDoc: ApiDocProject = JSON.parse(
              fs.readFileSync(versionFile, 'utf-8'),
            );
            for (const ns of apiDoc.namespaces) {
              for (const type of ns.types) {
                params.push({
                  project: project.id,
                  version: v.version,
                  typeSlug: [type.name],
                });
              }
            }
          }
        }
      } catch {}
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { project: projectId, version, typeSlug } = await params;
  const typeName = typeSlug[typeSlug.length - 1];
  return {
    title: `${typeName} | API Reference v${version}`,
    description: `API reference and UML class breakdown for ${typeName} in ${projectId}`,
    alternates: {
      canonical: `/${projectId}/api/latest/${typeName}`,
    },
  };
}

export default async function TypeDetailPage({ params }: PageProps) {
  const { project: projectId, version, typeSlug } = await params;
  const project = getProject(projectId);
  if (!project) notFound();

  const typeName = typeSlug[typeSlug.length - 1];

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

  let matchedType = null;
  for (const ns of apiDoc.namespaces) {
    const found = ns.types.find(
      (t) => t.name === typeName || t.id.endsWith(`.${typeName}`),
    );
    if (found) {
      matchedType = found;
      break;
    }
  }

  if (!matchedType) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--ds-surface-base)]">
      <PortalHeader currentProject={project} />

      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl w-full mx-auto">
        <ApiNavSidebar
          projectId={project.id}
          version={version}
          manifest={manifest}
          apiDoc={apiDoc}
          currentTypeName={typeName}
        />

        <main className="flex-1 p-6 lg:p-10 max-w-4xl w-full">
          <TypeDetailView
            typeDoc={matchedType}
            projectId={project.id}
            version={version}
            manifest={manifest}
          />
        </main>
      </div>
    </div>
  );
}
