export interface ParameterDoc {
  name: string;
  type: string;
  summary?: string | null;
}

export interface MemberDoc {
  name: string;
  kind: 'Constructor' | 'Property' | 'Method' | 'Field';
  returnType?: string | null;
  isStatic?: boolean;
  syntax: string;
  summary?: string | null;
  remarks?: string | null;
  constantValue?: string | null;
  parameters?: ParameterDoc[];
}

export interface TypeDoc {
  id: string;
  name: string;
  namespace: string;
  assembly: string;
  kind: 'Class' | 'Struct' | 'Interface' | 'Enum' | 'Delegate' | string;
  isStatic?: boolean;
  isSealed?: boolean;
  isAbstract?: boolean;
  summary?: string | null;
  remarks?: string | null;
  syntax: string;
  inheritanceHierarchy: string[];
  interfaces: string[];
  constructors: MemberDoc[];
  properties: MemberDoc[];
  methods: MemberDoc[];
  fields: MemberDoc[];
}

export interface NamespaceDoc {
  name: string;
  types: TypeDoc[];
}

export interface ApiDocProject {
  projectName: string;
  version: string;
  generatedAt: string;
  namespaces: NamespaceDoc[];
}

export interface VersionInfo {
  version: string;
  releasedAt: string;
  isLatest: boolean;
  isPrerelease: boolean;
  typeCount: number;
}

export interface VersionManifest {
  projectId: string;
  latest: string;
  versions: VersionInfo[];
}
