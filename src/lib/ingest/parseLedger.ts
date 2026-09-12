export interface LedgerEntry {
  id: string;
  date: string;
  title: string;
  surface: 'emitted' | 'seams' | 'public' | 'unspecified';
  semver:
    | 'additive-minor'
    | 'breaking-major'
    | 'generated-shape'
    | 'internal'
    | 'other';
  issue?: string;
  issueUrl?: string;
  rationale: string;
  rawText: string;
}

export function parseLedger(content: string): LedgerEntry[] {
  const entries: LedgerEntry[] = [];
  const sections = content.split(/^###\s+/m);

  for (let i = 1; i < sections.length; i++) {
    const section = sections[i].trim();
    if (!section) continue;

    const firstLineEnd = section.indexOf('\n');
    const headerLine =
      firstLineEnd === -1 ? section : section.substring(0, firstLineEnd).trim();
    const body =
      firstLineEnd === -1 ? '' : section.substring(firstLineEnd + 1).trim();

    // Match "YYYY-MM-DD — Title (#issue)"
    const headerMatch = headerLine.match(
      /^(\d{4}-\d{2}-\d{2})\s*[—–-]\s*(.*)$/,
    );
    const date = headerMatch ? headerMatch[1] : '';
    const titleWithIssue = headerMatch ? headerMatch[2] : headerLine;

    let surface: LedgerEntry['surface'] = 'unspecified';
    const surfaceMatch = body.match(/-\s*\*\*Surface:\*\*\s*(\S+)/i);
    if (surfaceMatch) {
      const s = surfaceMatch[1].toLowerCase();
      if (s === 'emitted' || s === 'seams' || s === 'public') {
        surface = s;
      }
    }

    let semver: LedgerEntry['semver'] = 'other';
    const semverMatch = body.match(/-\s*\*\*Semver:\*\*\s*(\S+)/i);
    if (semverMatch) {
      const sv = semverMatch[1].toLowerCase();
      if (
        sv === 'additive-minor' ||
        sv === 'breaking-major' ||
        sv === 'generated-shape' ||
        sv === 'internal'
      ) {
        semver = sv;
      }
    }

    let issue = '';
    let issueUrl = '';
    const issueMatch = body.match(
      /-\s*\*\*Issue:\*\*\s*\[?#?(\d+)\]?(?:\(([^)]+)\))?/i,
    );
    if (issueMatch) {
      issue = `#${issueMatch[1]}`;
      issueUrl =
        issueMatch[2] ||
        `https://github.com/rtkelly13/Parquet.SourceGenerator/issues/${issueMatch[1]}`;
    }

    let rationale = '';
    const rationaleMatch = body.match(
      /-\s*\*\*Rationale:\*\*\s*([\s\S]*?)(?=(?:-\s*\*\*|\n###|$))/i,
    );
    if (rationaleMatch) {
      rationale = rationaleMatch[1].trim();
    } else {
      rationale = body;
    }

    entries.push({
      id: `ledger-${i}-${date}`,
      date,
      title: titleWithIssue,
      surface,
      semver,
      issue: issue || undefined,
      issueUrl: issueUrl || undefined,
      rationale,
      rawText: section,
    });
  }

  return entries;
}
