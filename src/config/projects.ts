export interface ProjectConfig {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  version: string;
  githubUrl: string;
  category:
    | 'Core .NET Engine'
    | 'Language & Typing'
    | 'Cloud & Distributed'
    | 'Developer Tooling';
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
    name: 'Parquet.SourceGenerator',
    shortName: 'Parquet.SG',
    tagline:
      'High-throughput compile-time Parquet serializer and reader for C#',
    description:
      'Zero-allocation incremental Roslyn source generator for Parquet.Net. Emits high-performance column readers, row group predicates, and prunable schemas at compile time.',
    version: '0.1.0',
    githubUrl: 'https://github.com/rtkelly13/Parquet.SourceGenerator',
    category: 'Core .NET Engine',
    badge: 'Preview',
    featured: true,
    color: '#06b6d4', // cyan
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
    name: 'Parquet.TypeProvider',
    shortName: 'Parquet.TP',
    tagline: 'Strongly-typed F# Type Provider for Apache Parquet schemas',
    description:
      'Generative type provider delivering instant IntelliSense, static typing, and schema validation over Apache Parquet datasets directly in F# scripts and applications.',
    version: '0.2.0',
    githubUrl: 'https://github.com/rtkelly13/Parquet.TypeProvider',
    category: 'Language & Typing',
    badge: 'Alpha',
    featured: true,
    color: '#3b82f6', // blue
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
    id: 'mermaid-toolkit',
    name: 'Mermaid Toolkit',
    shortName: 'MermaidTK',
    tagline:
      'Professional Mermaid.js theme engine with terminal ASCII fallbacks',
    description:
      'Multi-format diagramming toolkit bringing brutalist theme styling, SVG export, and high-fidelity terminal ASCII rendering to Mermaid architecture diagrams.',
    version: '0.0.1',
    githubUrl: 'https://github.com/rtkelly13/mermaid-toolkit',
    category: 'Developer Tooling',
    badge: 'Tooling',
    featured: true,
    color: '#ec4899', // pink
    localPath: '../mermaid-toolkit',
    docsDir: 'docs',
    features: {
      guides: true,
      apiGrid: false,
      ledger: false,
      architecture: true,
    },
  },
  {
    id: 'resultful',
    name: 'Resultful',
    shortName: 'Resultful',
    tagline:
      'Zero-allocation Railway Oriented Programming Result<T, E> for .NET',
    description:
      'Lightweight, allocation-free discriminated union and Railway Oriented Programming primitives designed for robust functional domain modeling in modern .NET.',
    version: '0.3.0',
    githubUrl: 'https://github.com/rtkelly13/Resultful',
    category: 'Core .NET Engine',
    badge: 'Library',
    featured: false,
    color: '#10b981', // emerald
    localPath: '../Resultful',
    docsDir: 'docs',
    features: {
      guides: true,
      apiGrid: false,
      ledger: false,
      architecture: false,
    },
  },
  {
    id: 'blobflags',
    name: 'BlobFlags',
    shortName: 'BlobFlags',
    tagline: 'Zero-idle-cost feature flags backed by cloud blob storage',
    description:
      'Cost-effective, serverless feature flag system designed to host inside your own AWS/Azure environment, paying only for underlying blob storage operations.',
    version: '0.1.0',
    githubUrl: 'https://github.com/rtkelly13/blobflags',
    category: 'Cloud & Distributed',
    badge: 'Cloud',
    featured: false,
    color: '#f59e0b', // amber
    localPath: '../blobflags',
    docsDir: 'docs',
    features: {
      guides: true,
      apiGrid: false,
      ledger: false,
      architecture: false,
    },
  },
];

export function getProject(id: string): ProjectConfig | undefined {
  return PROJECTS.find((p) => p.id === id);
}
