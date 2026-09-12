# 01 - JavaScript & TypeScript Parquet Ecosystem Overview

This guide outlines the modern landscape for Apache Parquet execution, query acceleration, and schema handling within the **JavaScript and TypeScript ecosystems** across Browser, Node.js, Bun, and Edge runtime environments.

---

## 🌐 The Prevalence of Parquet in JavaScript

While Apache Parquet originated in the Hadoop and JVM ecosystems and achieved massive adoption in Python (PyArrow, Polars, DuckDB) and .NET (`Parquet.Net`, `Parquet.SourceGenerator`), the JavaScript ecosystem has evolved into a premier client-side and edge analytical environment.

Four architectural revolutions have enabled high-throughput Parquet in JS:
1. **WebAssembly (WASM)**: Near-native execution speeds for columnar decoders, Snappy decompression, and Zstandard codecs inside browser tabs and Cloudflare Workers.
2. **Apache Arrow JS**: Zero-copy in-memory columnar representation enabling columnar sharing between Parquet readers and analytical compute kernels.
3. **DuckDB-Wasm**: Full vectorized SQL engine running directly in WebAssembly inside the browser, capable of streaming HTTP range requests against remote Parquet files.
4. **TypeScript Type System**: Generative typing and schema validation ensuring compile-time safety when decoding columnar byte buffers into typed record arrays.

---

## 🛠️ Key Architectural Engines

```mermaid
flowchart TD
    ParquetFile[Remote Parquet File (HTTP Range)] --> EngineRouter{Execution Context}
    EngineRouter -->|Browser / Web Worker| DuckDBWasm[DuckDB-Wasm Vectorized SQL]
    EngineRouter -->|Browser Zero-Copy| HyParquet[hyparquet / parquet-wasm]
    EngineRouter -->|Node.js / Bun / Server| ArrowPipeline[Apache Arrow JS + Parquet Reader]
    EngineRouter -->|Edge Runtime / Worker| StreamingEdge[Range-Request Streamer]
    
    DuckDBWasm --> ArrowBatch[Apache Arrow RecordBatches]
    HyParquet --> ArrowBatch
    ArrowPipeline --> ArrowBatch
    
    ArrowBatch --> TSModel[Typed TypeScript Objects / Canvas / UI]
```

### 1. DuckDB-Wasm
- **Role**: Full analytical database engine compiled to WebAssembly.
- **Strength**: Issues HTTP byte-range requests directly against cloud blob stores (S3, Cloudflare R2, Azure Blob), reading only required column chunks without downloading multi-gigabyte files.
- **Synergy**: Works seamlessly with Parquet files written by `Parquet.SourceGenerator` carrying zone-map statistics and dictionary encodings.

### 2. `parquet-wasm` & `hyparquet`
- **Role**: Lightweight, fast zero-dependency readers and WebAssembly-backed decoders.
- **Strength**: Minimal bundle footprint for web applications that need direct columnar access without shipping a full SQL engine.

### 3. Apache Arrow JS
- **Role**: In-memory columnar data structure standard.
- **Strength**: Provides SIMD-friendly contiguous memory buffers for Float64, Int32, Date, and Dictionary arrays.

---

## 🔄 Cross-Ecosystem Pipeline: .NET to TypeScript

A common architecture in modern data platforms:
1. **Ingestion & ETL (.NET)**: High-scale backend microservices use `Parquet.SourceGenerator` to serialize millions of rows per second with zero allocations and upload to object storage.
2. **Client Exploration (TypeScript)**: Web analytics dashboards load the emitted Parquet files directly into DuckDB-Wasm and Arrow JS, rendering sub-second interactive charts without backend server roundtrips.
