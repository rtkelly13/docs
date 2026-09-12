import { describe, expect, it } from 'vitest';
import { parseApiTxt } from '../src/lib/ingest/parseApiTxt';

describe('parseApiTxt', () => {
  it('parses type, method, property, and static extension lines', () => {
    const fixture = `#nullable enable
SampleDomain.Models.PocoOrderParquet
SampleDomain.Models.PocoOrderParquetFilteredSource.AsAsyncEnumerable(System.Threading.CancellationToken cancellationToken = default) -> System.Collections.Generic.IAsyncEnumerable<PocoOrder>
SampleDomain.Models.PocoOrderRowGroupMetadata.Id.get -> Parquet.SourceGenerator.ParquetColumnStatistics<int>
SampleDomain.Models.PocoOrderRowGroupMetadata.PocoOrderRowGroupMetadata(int rowGroupIndex, long rowCount, bool hasStatistics, Parquet.SourceGenerator.ParquetColumnStatistics<int> column_0) -> void
static SampleDomain.Models.PocoOrderParquet.From(System.IO.Stream stream) -> PocoOrderParquetStreamSource
static SampleDomain.Models.PocoOrderParquetExtensions.ReadParquetArrayAsync(System.IO.Stream stream) -> System.Threading.Tasks.Task<PocoOrder[]>
`;

    const symbols = parseApiTxt(fixture, 'PocoOrder');
    expect(symbols.length).toBe(6);

    // 1. Type
    expect(symbols[0].kind).toBe('Type');
    expect(symbols[0].typeName).toBe('PocoOrderParquet');
    expect(symbols[0].memberName).toBe('PocoOrderParquet');
    expect(symbols[0].isStatic).toBe(false);

    // 2. Async Enumerable Method
    expect(symbols[1].kind).toBe('Method');
    expect(symbols[1].typeName).toBe('PocoOrderParquetFilteredSource');
    expect(symbols[1].memberName).toBe('AsAsyncEnumerable');
    expect(symbols[1].returnType).toBe(
      'System.Collections.Generic.IAsyncEnumerable<PocoOrder>',
    );
    expect(symbols[1].isAsync).toBe(true);

    // 3. Property getter
    expect(symbols[2].kind).toBe('Property');
    expect(symbols[2].memberName).toBe('Id');
    expect(symbols[2].returnType).toBe(
      'Parquet.SourceGenerator.ParquetColumnStatistics<int>',
    );

    // 4. Constructor
    expect(symbols[3].kind).toBe('Constructor');
    expect(symbols[3].returnType).toBe('void');

    // 5. Static entry point
    expect(symbols[4].kind).toBe('Method');
    expect(symbols[4].isStatic).toBe(true);
    expect(symbols[4].memberName).toBe('From');
    expect(symbols[4].category).toBe('Source & Builder');

    // 6. Direct Extension
    expect(symbols[5].kind).toBe('Method');
    expect(symbols[5].isExtension).toBe(true);
    expect(symbols[5].category).toBe('Direct Extension');
  });
});
