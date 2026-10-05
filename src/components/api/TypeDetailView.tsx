import { Badge } from '@rtkelly13/design-system';
import Link from 'next/link';
import type { TypeDoc, VersionManifest } from '@/lib/ingest/parseApiModel';
import { InheritanceBreadcrumbs } from './InheritanceBreadcrumbs';
import { MemberTable } from './MemberTable';
import { TypeHierarchyUml } from './TypeHierarchyUml';

interface TypeDetailViewProps {
  typeDoc: TypeDoc;
  projectId: string;
  version: string;
  manifest: VersionManifest;
}

export function TypeDetailView({
  typeDoc,
  projectId,
  version,
  manifest,
}: TypeDetailViewProps) {
  const isLatest = manifest.latest === version;

  return (
    <article className="space-y-8">
      {/* Deprecated / Older version notice */}
      {!isLatest && (
        <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-4 text-xs font-mono text-yellow-200 flex items-center justify-between">
          <span>
            ⚠️ You are viewing documentation for <strong>v{version}</strong>.
          </span>
          <Link
            href={`/${projectId}/api/${manifest.latest}/${typeDoc.name}`}
            className="underline hover:text-white font-bold ml-2"
          >
            Switch to latest (v{manifest.latest}) →
          </Link>
        </div>
      )}

      {/* Type Header */}
      <header className="space-y-3 border-b border-[var(--ds-border-subtle)] pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge accent="primary">{typeDoc.kind.toUpperCase()}</Badge>
          {typeDoc.isSealed && <Badge accent="quiet">SEALED</Badge>}
          {typeDoc.isAbstract && <Badge accent="warning">ABSTRACT</Badge>}
          {typeDoc.isStatic && <Badge accent="secondary">STATIC</Badge>}
          <span className="text-xs font-mono text-[var(--ds-text-muted)]">
            Assembly: <code className="text-cyan-400">{typeDoc.assembly}</code>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-mono font-bold text-[var(--ds-text-primary)]">
          {typeDoc.name}
        </h1>

        <p className="text-xs font-mono text-[var(--ds-text-secondary)]">
          Namespace:{' '}
          <code className="text-[var(--ds-text-primary)]">
            {typeDoc.namespace}
          </code>
        </p>

        {typeDoc.summary && (
          <p className="text-sm sm:text-base text-[var(--ds-text-secondary)] leading-relaxed pt-2">
            {typeDoc.summary}
          </p>
        )}
      </header>

      {/* Inheritance Hierarchy */}
      <section className="space-y-2">
        <InheritanceBreadcrumbs hierarchy={typeDoc.inheritanceHierarchy} />
      </section>

      {/* Syntax Box */}
      <section className="space-y-2">
        <h3 className="text-xs font-mono font-semibold text-[var(--ds-text-muted)] uppercase tracking-wider">
          Syntax
        </h3>
        <div className="bg-[var(--ds-surface-sunken)] p-4 border border-[var(--ds-border-subtle)] font-mono text-xs sm:text-sm text-[var(--ds-text-primary)] overflow-x-auto">
          <pre>
            <code>{typeDoc.syntax}</code>
          </pre>
        </div>
      </section>

      {/* Interfaces */}
      {typeDoc.interfaces && typeDoc.interfaces.length > 0 && (
        <section className="space-y-2">
          <h3 className="text-xs font-mono font-semibold text-[var(--ds-text-muted)] uppercase tracking-wider">
            Implements
          </h3>
          <div className="flex flex-wrap gap-2">
            {typeDoc.interfaces.map((iface) => (
              <Badge key={iface} accent="quiet">
                {iface}
              </Badge>
            ))}
          </div>
        </section>
      )}

      {/* Visual UML Class Diagram */}
      <section className="pt-2">
        <TypeHierarchyUml typeDoc={typeDoc} />
      </section>

      {/* Remarks */}
      {typeDoc.remarks && (
        <section className="space-y-2 border-l-2 border-cyan-500 bg-[var(--ds-surface-sunken)] p-4">
          <h3 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
            Remarks
          </h3>
          <p className="text-xs sm:text-sm text-[var(--ds-text-secondary)] leading-relaxed">
            {typeDoc.remarks}
          </p>
        </section>
      )}

      {/* Member Breakdowns */}
      <div className="space-y-8 pt-4">
        <MemberTable title="Constructors" members={typeDoc.constructors} />
        <MemberTable title="Fields & Constants" members={typeDoc.fields} />
        <MemberTable title="Properties" members={typeDoc.properties} />
        <MemberTable title="Methods" members={typeDoc.methods} />
      </div>
    </article>
  );
}
