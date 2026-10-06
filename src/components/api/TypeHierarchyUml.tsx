'use client';

import { useMemo } from 'react';
import { MermaidViewer } from '@/components/MermaidViewer';
import type { TypeDoc } from '@/lib/ingest/parseApiModel';

interface TypeHierarchyUmlProps {
  typeDoc: TypeDoc;
}

function cleanIdentifier(name: string): string {
  // Strip namespace prefixes, generics (<...>, ~...~), array brackets, and non-alphanumeric chars
  const shortName = name.split('.').pop() || name;
  const noGenerics = shortName.replace(/<[^>]+>/g, '').replace(/~[^~]+~/g, '');
  const sanitized = noGenerics
    .replace(/[^a-zA-Z0-9_]/g, '_')
    .replace(/^_+/, '');
  return sanitized || 'Type';
}

function cleanMemberName(name: string): string {
  // Methods can be .ctor, op_Equality, etc. Remove leading dots and special chars
  const cleaned = name.replace(/<[^>]+>/g, '').replace(/[^a-zA-Z0-9_]/g, '');
  return cleaned || 'member';
}

export function TypeHierarchyUml({ typeDoc }: TypeHierarchyUmlProps) {
  const chart = useMemo(() => {
    const lines: string[] = ['classDiagram'];
    const currentName = cleanIdentifier(typeDoc.name);

    lines.push(`    class ${currentName} {`);
    if (typeDoc.kind === 'Interface') {
      lines.push('        <<interface>>');
    } else if (typeDoc.isAbstract) {
      lines.push('        <<abstract>>');
    }

    // Include top properties in UML
    const seenProps = new Set<string>();
    for (const prop of typeDoc.properties) {
      const propName = cleanMemberName(prop.name);
      if (seenProps.has(propName) || seenProps.size >= 8) continue;
      seenProps.add(propName);
      const typeStr = prop.returnType
        ? cleanIdentifier(prop.returnType)
        : 'var';
      lines.push(`        +${typeStr} ${propName}`);
    }

    // Include top methods in UML
    const seenMethods = new Set<string>();
    for (const method of typeDoc.methods) {
      const methodName = cleanMemberName(method.name);
      if (seenMethods.has(methodName) || seenMethods.size >= 8) continue;
      seenMethods.add(methodName);
      const retStr = method.returnType
        ? cleanIdentifier(method.returnType)
        : 'void';
      lines.push(`        +${methodName}() ${retStr}`);
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
        directBase !== 'System.Object' &&
        directBase !== 'System.ValueType'
      ) {
        const baseName = cleanIdentifier(directBase);
        if (baseName !== currentName) {
          lines.push(`    ${baseName} <|-- ${currentName}`);
        }
      }
    }

    // Implemented interfaces relation
    const seenIfaces = new Set<string>();
    for (const iface of typeDoc.interfaces) {
      const ifaceName = cleanIdentifier(iface);
      if (
        seenIfaces.has(ifaceName) ||
        ifaceName === currentName ||
        seenIfaces.size >= 4
      ) {
        continue;
      }
      seenIfaces.add(ifaceName);
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
