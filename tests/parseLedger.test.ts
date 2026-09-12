import { describe, expect, it } from 'vitest';
import { parseLedger } from '../src/lib/ingest/parseLedger';

describe('parseLedger', () => {
  it('parses ledger entries with metadata and semver tags', () => {
    const fixture = `# API Change Ledger

### 2026-09-12 — \`SortedShipmentParquetExtensions\` catalogued golden model (#264)

- **Surface:** emitted
- **Semver:** generated-shape
- **Issue:** [#264](https://github.com/rtkelly13/Parquet.SourceGenerator/issues/264)
- **Rationale:** Adds 75 emitted members by cataloguing one new combined driver model.

### 2026-09-11 — Breaking API overhaul (#100)

- **Surface:** public
- **Semver:** breaking-major
- **Issue:** #100
- **Rationale:** Changed serializer signature.
`;

    const entries = parseLedger(fixture);
    expect(entries.length).toBe(2);

    expect(entries[0].date).toBe('2026-09-12');
    expect(entries[0].surface).toBe('emitted');
    expect(entries[0].semver).toBe('generated-shape');
    expect(entries[0].issue).toBe('#264');
    expect(entries[0].issueUrl).toBe(
      'https://github.com/rtkelly13/Parquet.SourceGenerator/issues/264',
    );
    expect(entries[0].rationale).toContain('Adds 75 emitted members');

    expect(entries[1].date).toBe('2026-09-11');
    expect(entries[1].surface).toBe('public');
    expect(entries[1].semver).toBe('breaking-major');
  });
});
