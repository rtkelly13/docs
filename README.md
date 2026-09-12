# docs.ryankelly.dev

> Unified multi-project documentation portal and interactive API reference for the `ryankelly.dev` ecosystem.

Powered by **Next.js (App Router)**, **`@rtkelly13/design-system`**, and automated data extraction pipelines.

---

## 🏛️ Vision & Architecture

Rather than co-locating doc site frontend dependencies (Next.js, MDX engines, Tailwind v4, UI libraries) inside individual software repositories and adding commit churn to engine git histories, this dedicated documentation portal acts as a **centralized presentation and reference hub**.

Each upstream library acts as a **pure data producer**, maintaining its documentation guides, generated API signatures, and version ledgers in source:

```
┌─────────────────────────────────────────────────────────┐
│              Upstream Project Repos                     │
│                                                         │
│  - Parquet.SourceGenerator                              │
│      * docs/*.md (Guides, Reference, Internals)         │
│      * test/**/GoldenFiles/*.api.txt (Generated API)    │
│      * docs/api/LEDGER.md (Public API version ledger)   │
│      * docs/callgraph-generated.md (Mermaid diagrams)   │
│                                                         │
│  - Parquet.TypeProvider / Resultful / blobflags / ...   │
└───────────────────────────┬─────────────────────────────┘
                            │
               Extract via Git / CI Dispatch
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│        Dedicated Docs Repo (docs.ryankelly.dev)         │
│                                                         │
│  - Next.js (App Router, Static Export to GitHub Pages)  │
│  - @rtkelly13/design-system (Brutalist theme ladder)    │
│  - Multi-Project Ingest Engine:                         │
│      * Parses *.api.txt -> Interactive TanStack Table   │
│      * Renders docs/*.md with brutalist prose           │
│      * Embeds @rtkelly/mermaid-toolkit diagrams         │
│      * Filters API version ledgers with semver badges   │
│  - Subdomain routing on ryankelly.dev                   │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 Projects Covered

- **[Parquet.SourceGenerator](https://github.com/rtkelly13/Parquet.SourceGenerator)** — High-throughput compile-time Parquet serializer, pruner, and reader for .NET.
- **[Parquet.TypeProvider](https://github.com/rtkelly13/Parquet.TypeProvider)** — Strongly-typed F# Type Provider for Apache Parquet.
- **[Resultful](https://github.com/rtkelly13/Resultful)** — Zero-allocation Railway Oriented Programming `Result<T, E>` primitives for .NET.
- **[blobflags](https://github.com/rtkelly13/blobflags)** — High-scale zero-idle-cost feature flags backed by cloud blob storage.
- **[mermaid-toolkit](https://github.com/rtkelly13/mermaid-toolkit)** — Terminal and browser Mermaid diagram rendering toolkit.

---

## 📦 Getting Started

### Prerequisites

- Node.js `>= 22.0.0`
- pnpm `>= 9.0.0`

### Development

```bash
# Install dependencies
pnpm install

# Run automated ingestion against local sibling repositories
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
