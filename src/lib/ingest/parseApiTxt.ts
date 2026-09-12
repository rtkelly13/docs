export interface ApiSymbol {
  id: string;
  model: string;
  kind: 'Type' | 'Method' | 'Property' | 'Constructor';
  namespace: string;
  typeName: string;
  memberName: string;
  parameters: string;
  returnType: string;
  isStatic: boolean;
  isAsync: boolean;
  isExtension: boolean;
  rawSignature: string;
  category:
    | 'Source & Builder'
    | 'Pushdown & Metadata'
    | 'Direct Extension'
    | 'Model Type';
}

export function parseApiTxt(content: string, modelName: string): ApiSymbol[] {
  const lines = content
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0 && !l.startsWith('#'));

  const symbols: ApiSymbol[] = [];

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    let line = raw;
    let isStatic = false;

    if (line.startsWith('static ')) {
      isStatic = true;
      line = line.substring('static '.length).trim();
    }

    let returnType = '';
    if (line.includes(' -> ')) {
      const parts = line.split(' -> ');
      line = parts[0];
      returnType = parts.slice(1).join(' -> ').trim();
    }

    let kind: ApiSymbol['kind'] = 'Type';
    let memberName = '';
    let parameters = '';
    let fullTypeName = '';

    if (line.includes('(') && line.endsWith(')')) {
      const parenIndex = line.indexOf('(');
      parameters = line.substring(parenIndex);
      const preParen = line.substring(0, parenIndex);
      const lastDot = preParen.lastIndexOf('.');
      if (lastDot !== -1) {
        fullTypeName = preParen.substring(0, lastDot);
        memberName = preParen.substring(lastDot + 1);
        if (memberName === fullTypeName.split('.').pop()) {
          kind = 'Constructor';
        } else {
          kind = 'Method';
        }
      } else {
        memberName = preParen;
        kind = 'Method';
      }
    } else if (line.endsWith('.get') || line.endsWith('.set')) {
      kind = 'Property';
      const clean = line.replace(/\.(get|set)$/, '');
      const lastDot = clean.lastIndexOf('.');
      if (lastDot !== -1) {
        fullTypeName = clean.substring(0, lastDot);
        memberName = clean.substring(lastDot + 1);
      } else {
        memberName = clean;
      }
    } else {
      kind = 'Type';
      fullTypeName = line;
      memberName = line.split('.').pop() || line;
    }

    const nsParts = fullTypeName.split('.');
    const typeName = nsParts.pop() || fullTypeName;
    const namespace = nsParts.join('.');

    const isAsync =
      returnType.startsWith('System.Threading.Tasks.Task') ||
      returnType.startsWith('System.Collections.Generic.IAsyncEnumerable') ||
      memberName.endsWith('Async');

    const isExtension = isStatic && typeName.endsWith('Extensions');

    let category: ApiSymbol['category'] = 'Model Type';
    if (
      typeName.includes('Source') ||
      memberName === 'From' ||
      memberName === 'Write'
    ) {
      category = 'Source & Builder';
    } else if (
      typeName.includes('Metadata') ||
      memberName.includes('Where') ||
      memberName.includes('Statistics')
    ) {
      category = 'Pushdown & Metadata';
    } else if (isExtension) {
      category = 'Direct Extension';
    }

    symbols.push({
      id: `${modelName}-${i}-${memberName || typeName}`,
      model: modelName,
      kind,
      namespace,
      typeName,
      memberName: memberName || typeName,
      parameters,
      returnType: returnType || (kind === 'Type' ? 'type' : 'void'),
      isStatic,
      isAsync,
      isExtension,
      rawSignature: raw,
      category,
    });
  }

  return symbols;
}
