export type EcosystemId = 'dotnet' | 'javascript';

export interface EcosystemConfig {
  id: EcosystemId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  accent: 'primary' | 'secondary' | 'warning' | 'info';
  badge: string;
  iconName: string;
}

export const ECOSYSTEMS: Record<EcosystemId, EcosystemConfig> = {
  dotnet: {
    id: 'dotnet',
    name: '.NET Ecosystem',
    shortName: '.NET',
    tagline:
      'High-throughput compile-time serializers, type providers, and zero-allocation columnar engines',
    description:
      'C# Roslyn source generators, F# generative type providers, and Native AOT runtime pipelines targeting Parquet.Net.',
    accent: 'primary',
    badge: 'C# / F# / .NET 9',
    iconName: 'Cpu',
  },
  javascript: {
    id: 'javascript',
    name: 'JavaScript / TypeScript Ecosystem',
    shortName: 'JS / TS',
    tagline:
      'Browser, Node.js, and WebAssembly columnar processing, DuckDB-Wasm & Arrow interop',
    description:
      'WebAssembly-accelerated Parquet ingestion, TypeScript schema codegen, and zero-copy streaming readers for web and edge runtimes.',
    accent: 'secondary',
    badge: 'TypeScript / WASM / Edge',
    iconName: 'Globe',
  },
};

export interface ProjectConfig {
  id: string;
  ecosystem: EcosystemId;
  name: string;
  shortName: string;
  language: string;
  tagline: string;
  description: string;
  version: string;
  githubUrl: string;
  badge?: string;
  featured?: boolean;
  color: string;
  localPath: string;
  docsDir: string;
  apiBaselinesDir?: string;
  ledgerFile?: string;
  callgraphFile?: string;
  features: {
    guides: boolean;
    apiGrid: boolean;
    ledger: boolean;
    architecture: boolean;
  };
}

export const PROJECTS: ProjectConfig[] = [
  {
    id: 'parquet-sourcegenerator',
    ecosystem: 'dotnet',
    name: 'Parquet.SourceGenerator',
    shortName: 'Parquet.SG',
    language: 'C# 13 / .NET 9',
    tagline:
      'High-throughput compile-time Parquet serializer and reader for C#',
    description:
      'Zero-allocation incremental Roslyn source generator for Parquet.Net. Emits high-performance column readers, row group predicates, and prunable schemas at compile time.',
    version: '0.1.0',
    githubUrl: 'https://github.com/rtkelly13/Parquet.SourceGenerator',
    badge: 'Core Engine',
    featured: true,
    color: '#06b6d4',
    localPath: '../Parquet.SourceGenerator',
    docsDir: 'docs',
    apiBaselinesDir: 'test/Parquet.SourceGenerator.Tests/GoldenFiles',
    ledgerFile: 'docs/api/LEDGER.md',
    callgraphFile: 'docs/callgraph-generated.md',
    features: {
      guides: true,
      apiGrid: true,
      ledger: true,
      architecture: true,
    },
  },
  {
    id: 'parquet-typeprovider',
    ecosystem: 'dotnet',
    name: 'Parquet.TypeProvider',
    shortName: 'Parquet.TP',
    language: 'F# 6+ / .NET',
    tagline: 'Strongly-typed F# Type Provider for Apache Parquet schemas',
    description:
      'Generative type provider delivering instant IntelliSense, static typing, and schema validation over Apache Parquet datasets directly in F# scripts and applications.',
    version: '0.2.0',
    githubUrl: 'https://github.com/rtkelly13/Parquet.TypeProvider',
    badge: 'Type Provider',
    featured: true,
    color: '#3b82f6',
    localPath: '../Parquet.TypeProvider',
    docsDir: 'docs',
    features: {
      guides: true,
      apiGrid: false,
      ledger: false,
      architecture: false,
    },
  },
  {
    id: 'parquet-js',
    ecosystem: 'javascript',
    name: 'Parquet.JS & Web Tools',
    shortName: 'Parquet.JS',
    language: 'TypeScript / WASM',
    tagline:
      'Browser, Node, and WebAssembly Parquet tools, DuckDB-Wasm & Arrow interop',
    description:
      'Client-side and edge Parquet inspection, Apache Arrow JS conversion, DuckDB-Wasm virtual tables, and TypeScript schema extraction.',
    version: '0.1.0',
    githubUrl: 'https://github.com/rtkelly13',
    badge: 'Web & Edge',
    featured: true,
    color: '#ec4899',
    localPath: 'content/parquet-js',
    docsDir: 'docs',
    features: {
      guides: true,
      apiGrid: false,
      ledger: false,
      architecture: true,
    },
  },
];

export function getProject(id: string): ProjectConfig | undefined {
  return PROJECTS.find((p) => p.id === id);
}

export function getProjectsByEcosystem(
  ecosystem: EcosystemId,
): ProjectConfig[] {
  return PROJECTS.filter((p) => p.ecosystem === ecosystem);
}
