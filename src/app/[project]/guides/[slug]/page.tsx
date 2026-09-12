import fs from 'node:fs';
import path from 'node:path';
import type {
  Crumb,
  DocPagerTarget,
  DocsNavNode,
  TocEntry,
} from '@rtkelly13/design-system';
import { notFound } from 'next/navigation';
import { DocsViewShell } from '@/components/DocsViewShell';
import { MarkdownContent } from '@/components/MarkdownContent';
import { getProject, PROJECTS } from '@/config/projects';

interface DocData {
  slug: string;
  projectId: string;
  title: string;
  category:
    | 'Guides'
    | 'Reference'
    | 'Internals & Engineering Spikes'
    | 'General';
  order: number;
  headings: { id: string; text: string; level: number }[];
  rawMarkdown: string;
  readingMinutes: number;
}

export function generateStaticParams() {
  const params: { project: string; slug: string }[] = [];
  const dataDir = path.join(process.cwd(), 'src/data');

  for (const project of PROJECTS) {
    const catalogFile = path.join(dataDir, project.id, 'docs-catalog.json');
    if (fs.existsSync(catalogFile)) {
      try {
        const catalog = JSON.parse(fs.readFileSync(catalogFile, 'utf-8'));
        for (const doc of catalog) {
          params.push({
            project: project.id,
            slug: doc.slug,
          });
        }
      } catch {}
    }
  }

  return params;
}

interface PageProps {
  params: Promise<{
    project: string;
    slug: string;
  }>;
}

export default async function GuideDocPage({ params }: PageProps) {
  const { project: projectId, slug } = await params;
  const project = getProject(projectId);

  if (!project) {
    notFound();
  }

  const docPath = path.join(
    process.cwd(),
    'src/data',
    project.id,
    'docs',
    `${slug}.json`,
  );
  const catalogPath = path.join(
    process.cwd(),
    'src/data',
    project.id,
    'docs-catalog.json',
  );

  if (!fs.existsSync(docPath) || !fs.existsSync(catalogPath)) {
    notFound();
  }

  const doc: DocData = JSON.parse(fs.readFileSync(docPath, 'utf-8'));
  const catalog: Omit<DocData, 'rawMarkdown'>[] = JSON.parse(
    fs.readFileSync(catalogPath, 'utf-8'),
  );

  // Build Sidebar Nav Tree
  const guides = catalog.filter((d) => d.category === 'Guides');
  const reference = catalog.filter((d) => d.category === 'Reference');
  const internals = catalog.filter(
    (d) => d.category === 'Internals & Engineering Spikes',
  );
  const general = catalog.filter((d) => d.category === 'General');

  const navTree: DocsNavNode[] = [];

  if (guides.length > 0) {
    navTree.push({
      label: 'Guides',
      items: guides.map((d) => ({
        label: d.title,
        href: `/${project.id}/guides/${d.slug}`,
      })),
    });
  }

  if (reference.length > 0) {
    navTree.push({
      label: 'Reference',
      items: reference.map((d) => ({
        label: d.title,
        href: `/${project.id}/guides/${d.slug}`,
      })),
    });
  }

  if (internals.length > 0) {
    navTree.push({
      label: 'Internals & Spikes',
      items: internals.map((d) => ({
        label: d.title,
        href: `/${project.id}/guides/${d.slug}`,
      })),
    });
  }

  if (general.length > 0) {
    navTree.push({
      label: 'General',
      items: general.map((d) => ({
        label: d.title,
        href: `/${project.id}/guides/${d.slug}`,
      })),
    });
  }

  // Cross-cutting sections in the sidebar
  if (project.features.apiGrid) {
    navTree.push({
      label: 'API Surface',
      items: [
        {
          label: 'Interactive API Grid',
          href: `/${project.id}/api`,
        },
      ],
    });
  }

  if (project.features.ledger) {
    navTree.push({
      label: 'Governance',
      items: [
        {
          label: 'API Change Ledger',
          href: `/${project.id}/ledger`,
        },
      ],
    });
  }

  if (project.features.architecture) {
    navTree.push({
      label: 'Architecture',
      items: [
        {
          label: 'Call Graphs & Diagrams',
          href: `/${project.id}/architecture`,
        },
      ],
    });
  }

  // Derive Table of Contents
  const toc: TocEntry[] = doc.headings.map((h) => ({
    id: h.id,
    title: h.text,
    depth: h.level,
  }));

  // Derive Breadcrumbs
  const breadcrumbs: Crumb[] = [
    { label: 'DOCS', href: '/' },
    { label: project.shortName.toUpperCase(), href: `/${project.id}` },
    { label: doc.category.toUpperCase() },
    { label: doc.title },
  ];

  // Derive Previous / Next Pager targets
  const currentIndex = catalog.findIndex((d) => d.slug === slug);
  let prev: DocPagerTarget | undefined;
  let next: DocPagerTarget | undefined;

  if (currentIndex > 0) {
    const prevDoc = catalog[currentIndex - 1];
    prev = {
      label: prevDoc.title,
      href: `/${project.id}/guides/${prevDoc.slug}`,
    };
  }

  if (currentIndex >= 0 && currentIndex < catalog.length - 1) {
    const nextDoc = catalog[currentIndex + 1];
    next = {
      label: nextDoc.title,
      href: `/${project.id}/guides/${nextDoc.slug}`,
    };
  }

  const currentPath = `/${project.id}/guides/${slug}`;

  return (
    <DocsViewShell
      project={project}
      navTree={navTree}
      currentPath={currentPath}
      toc={toc}
      breadcrumbs={breadcrumbs}
      prev={prev}
      next={next}
    >
      <div className="mb-6 pb-4 border-b border-[var(--ds-border-default)]">
        <div className="flex items-center gap-3 text-xs font-mono text-[var(--ds-text-muted)] mb-2">
          <span>{doc.readingMinutes} MIN READ</span>
          <span>•</span>
          <span className="uppercase">{doc.category}</span>
        </div>
      </div>

      <MarkdownContent content={doc.rawMarkdown} />
    </DocsViewShell>
  );
}
