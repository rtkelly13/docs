'use client';

import { useMemo } from 'react';
import { MermaidViewer } from '@/components/MermaidViewer';
import type { TypeDoc } from '@/lib/ingest/parseApiModel';

interface TypeHierarchyUmlProps {
  typeDoc: TypeDoc;
}

function cleanMermaidName(name: string): string {
  // Replace <T> with ~T~ for Mermaid generic support, and strip namespace dots for node IDs
  return name.replace(/<([^>]+)>/g, '~$1~').replace(/[^a-zA-Z0-9_~]/g, '_');
}

function formatShortName(fullName: string): string {
  const parts = fullName.split('.');
  return parts[parts.length - 1];
}

export function TypeHierarchyUml({ typeDoc }: TypeHierarchyUmlProps) {
  const chart = useMemo(() => {
    const lines: string[] = ['classDiagram'];
    const currentName = cleanMermaidName(typeDoc.name);

    lines.push(`    class ${currentName} {`);
    if (typeDoc.kind === 'Interface') {
      lines.push('        <<interface>>');
    } else if (typeDoc.isAbstract) {
      lines.push('        <<abstract>>');
    }

    // Include top properties in UML
    for (const prop of typeDoc.properties.slice(0, 8)) {
      const typeStr = prop.returnType
        ? cleanMermaidName(formatShortName(prop.returnType))
        : '';
      lines.push(`        +${typeStr} ${prop.name}`);
    }

    // Include top methods in UML
    for (const method of typeDoc.methods.slice(0, 8)) {
      const retStr = method.returnType
        ? cleanMermaidName(formatShortName(method.returnType))
        : 'void';
      lines.push(`        +${method.name}() ${retStr}`);
    }
    lines.push('    }');

    // Direct base class relation
    if (
      typeDoc.inheritanceHierarchy &&
      typeDoc.inheritanceHierarchy.length >= 2
    ) {
      const directBase =
        typeDoc.inheritanceHierarchy[typeDoc.inheritanceHierarchy.length - 2];
      if (
        directBase &&
        directBase !== 'object' &&
        directBase !== 'System.Object'
      ) {
        const baseName = cleanMermaidName(formatShortName(directBase));
        lines.push(`    ${baseName} <|-- ${currentName}`);
      }
    }

    // Implemented interfaces relation
    for (const iface of typeDoc.interfaces.slice(0, 4)) {
      const ifaceName = cleanMermaidName(formatShortName(iface));
      lines.push(`    ${ifaceName} <|.. ${currentName}`);
    }

    return lines.join('\n');
  }, [typeDoc]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between border-b border-[var(--ds-border-subtle)] pb-2">
        <h3 className="text-sm font-mono font-bold text-[var(--ds-text-muted)] uppercase tracking-wider">
          UML Class Diagram
        </h3>
      </div>
      <MermaidViewer chart={chart} title={`${typeDoc.name} Class Diagram`} />
    </div>
  );
}
