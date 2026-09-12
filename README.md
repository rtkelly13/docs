# docs.ryankelly.dev // Parquet Documentation Portal

> Dedicated multi-project documentation hub, architectural call graphs, and interactive generated API reference catalogs for **Apache Parquet** across the **.NET** and **JavaScript / TypeScript** ecosystems.

Powered by **Next.js (App Router)**, **`@rtkelly13/design-system`**, and automated data extraction pipelines.

---

## 🏛️ Vision & Architecture

Rather than co-locating documentation frontend dependencies (Next.js, MDX engines, Tailwind v4, UI libraries) inside individual compiler or library repositories, this portal acts as a **centralized presentation and reference hub** specifically for the Parquet family of tools.

Each upstream repository acts as a **pure data producer**, maintaining its documentation guides, generated API signatures, and version ledgers in source:

```
┌───────────────────────────────────────────────────────────┐
│                 Upstream Parquet Repos                    │
│                                                           │
│  [ .NET Ecosystem ]                                       │
│  - Parquet.SourceGenerator                                │
│      * docs/*.md (Guides, Reference, Internals)           │
│      * test/**/GoldenFiles/*.api.txt (Emitted Baselines)  │
│      * docs/api/LEDGER.md (Public API version ledger)     │
│      * docs/callgraph-generated.md (Mermaid diagrams)     │
│  - Parquet.TypeProvider                                   │
│      * docs/*.md (F# architecture, type mappings)         │
│                                                           │
│  [ JavaScript / TypeScript Ecosystem ]                    │
│  - Parquet.JS & Web Tools                                 │
│      * Browser WASM, DuckDB-Wasm, and Arrow JS guides     │
└─────────────────────────────┬─────────────────────────────┘
                              │
                 Extract via Git / CI Dispatch
                              │
                              ▼
┌───────────────────────────────────────────────────────────┐
│          Parquet Docs Portal (docs.ryankelly.dev)         │
│                                                           │
│  - Next.js (App Router, Static Export to GitHub Pages)    │
│  - @rtkelly13/design-system (Brutalist theme ladder)      │
│  - Ecosystem Partitions:                                  │
│      * [ 01 // .NET Ecosystem ] (C# 13, F# 6+, AOT)       │
│      * [ 02 // JavaScript Ecosystem ] (DuckDB-Wasm, Arrow)│
│  - Multi-Project Ingest Engine:                           │
│      * Parses *.api.txt -> Interactive TanStack Table     │
│      * Renders docs/*.md with brutalist prose             │
│      * Embeds @rtkelly/mermaid-toolkit diagrams           │
│      * Filters API version ledgers with semver badges     │
└───────────────────────────────────────────────────────────┘
```

---

## 🌐 Ecosystem Partitions & Projects

### 01 // .NET Ecosystem (`dotnet`)
- **[Parquet.SourceGenerator](https://github.com/rtkelly13/Parquet.SourceGenerator)** (`C# 13 / .NET 9`): Zero-allocation Roslyn incremental source generator targeting `Parquet.Net`. Emits compile-time columnar serializers, readers, pushdown predicates, and prunable schemas.
- **[Parquet.TypeProvider](https://github.com/rtkelly13/Parquet.TypeProvider)** (`F# 6+ / .NET`): Generative F# Type Provider delivering instant IntelliSense, static typing, and schema validation over Apache Parquet datasets.

### 02 // JavaScript & TypeScript Ecosystem (`javascript`)
- **[Parquet.JS & Web Tools](./content/parquet-js)** (`TypeScript / WASM`): Client-side and edge Parquet inspection, Apache Arrow JS conversion, DuckDB-Wasm virtual tables over HTTP byte-range requests, and TypeScript schema codegen.

---

## 📦 Getting Started

### Prerequisites

- Node.js `>= 22.0.0`
- pnpm `>= 9.0.0`

### Development

```bash
# Install dependencies
pnpm install

# Run automated ingestion across local Parquet repositories
pnpm ingest:local

# Start Next.js development server
pnpm dev
```

### Static Export

```bash
# Ingest data artifacts and compile static site
pnpm build
```

---

## 📄 License

MIT © [Ryan Kelly](https://github.com/rtkelly13)
