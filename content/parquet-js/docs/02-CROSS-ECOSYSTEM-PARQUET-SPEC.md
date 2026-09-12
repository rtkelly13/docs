# 02 - Cross-Ecosystem Parquet Compatibility Specification

This specification establishes the interoperability rules, physical encodings, logical type mappings, and compression codecs for Parquet files produced in **.NET** and consumed in **JavaScript/TypeScript** (or vice versa).

---

## 🎯 Interoperability Matrix

| Data Type / Feature | .NET (`Parquet.SourceGenerator`) | TypeScript (`Arrow JS / DuckDB-Wasm`) | Wire Representation |
|:---|:---|:---|:---|
| **`int` / `long`** | `int`, `long` | `Int32Array`, `BigInt64Array` | Plain / Delta Binary Packed |
| **`float` / `double`** | `float`, `double` | `Float32Array`, `Float64Array` | IEEE 754 float/double |
| **`string`** | `string` / UTF-8 | `Utf8` / `LargeUtf8` Arrow Vector | Plain string / Dictionary |
| **`bool`** | `bool` | `Boolean` BitVector | 1-bit packed boolean |
| **`decimal`** | `decimal` (`[ParquetDecimal(p, s)]`) | `Decimal128(precision, scale)` | Fixed-length byte array or Int64 |
| **`DateTime` (UTC)** | `DateTime` / `DateTimeOffset` | `Timestamp(TimeUnit.MILLISECOND)` | Int64 Unix timestamp |
| **`DateOnly`** | `DateOnly` | `DateDay` (32-bit epoch days) | Int32 days since 1970-01-01 |
| **`Guid`** | `System.Guid` | `FixedSizeBinary(16)` / UUID String | 16-byte fixed binary |
| **Dictionary Categoricals** | `[ParquetColumn]` string enum | `Dictionary<Int32, Utf8>` | Dict encoding with RLE keys |

---

## 🗜️ Compression Codecs Across Runtimes

When writing Parquet files in .NET intended for consumption by browser-based TypeScript engines:

1. **Snappy (Recommended for Web & Speed)**:
   - Supported natively across .NET CoreCLR, WASM decoders, and DuckDB-Wasm.
   - Lowest decompression CPU overhead inside browser main/worker threads.
2. **Zstandard (ZSTD - Recommended for Storage Efficiency)**:
   - Excellent compression ratios for archival datasets.
   - Supported in DuckDB-Wasm and modern WebAssembly builds.
3. **GZIP**:
   - Universally supported, but higher CPU overhead during decompression in WASM.

---

## 🛡️ Nullability & Definition Levels

In both .NET and TypeScript, explicit nullability tracking is essential:
- In C#, `string?` emits optional column definitions with definition level 1. Non-nullable `string` emits definition level 0.
- In TypeScript, optional columns map to nullable Arrow vectors (`vector.isValid(i) === true`).
- Both runtimes guarantee that no null values trigger unexpected runtime pointer exceptions.
