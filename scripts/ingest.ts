import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PROJECTS, type ProjectConfig } from '../src/config/projects.js';
import type {
  ApiDocProject,
  VersionInfo,
  VersionManifest,
} from '../src/lib/ingest/parseApiModel.js';
import { type ApiSymbol, parseApiTxt } from '../src/lib/ingest/parseApiTxt.js';
import { type ParsedDoc, parseDoc } from '../src/lib/ingest/parseDocs.js';
import {
  type LedgerEntry,
  parseLedger,
} from '../src/lib/ingest/parseLedger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.resolve(ROOT_DIR, 'src/data');

interface ProjectManifest {
  projectId: string;
  projectName: string;
  version: string;
  updatedAt: string;
  stats: {
    docCount: number;
    apiSymbolCount: number;
    modelCount: number;
    ledgerEntryCount: number;
  };
  models: string[];
}

function fetchMainDump(project: ProjectConfig): string | null {
  const repoName = project.githubUrl.replace('https://github.com/', '');
  const dumpDir = path.resolve(ROOT_DIR, '.cache/main-dump', project.id);
  if (fs.existsSync(dumpDir)) {
    fs.rmSync(dumpDir, { recursive: true, force: true });
  }
  fs.mkdirSync(dumpDir, { recursive: true });

  try {
    console.log(
      `[--from-main] Checking latest successful CI run on main for ${repoName}...`,
    );
    const runListJson = execSync(
      `gh run list --repo ${repoName} --branch main --workflow "CI & PR E2E Checks" --status success --limit 1 --json databaseId`,
      { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'ignore'] },
    );
    const runs = JSON.parse(runListJson);
    if (!runs || runs.length === 0) {
      console.warn(
        `[WARN] No successful CI runs found on main for ${repoName}`,
      );
      return null;
    }
    const runId = runs[0].databaseId;
    console.log(
      `[--from-main] Downloading derived-outputs artifact from run ${runId}...`,
    );
    execSync(
      `gh run download ${runId} --repo ${repoName} -n derived-outputs --dir "${dumpDir}"`,
      { stdio: 'inherit' },
    );
    const headDir = path.join(dumpDir, 'head');
    if (fs.existsSync(headDir)) {
      console.log(
        `✓ [--from-main] Successfully loaded up-to-date dump from main: ${headDir}`,
      );
      return headDir;
    }
    return dumpDir;
  } catch (err: any) {
    console.warn(
      `[WARN] Failed to fetch main dump via gh CLI: ${err?.message || err}`,
    );
    return null;
  }
}

async function ingestProject(
  project: ProjectConfig,
  fromMain: boolean = false,
) {
  console.log(`\n======================================================`);
  console.log(`Ingesting project: [ ${project.name} ] (${project.id})`);
  console.log(`======================================================`);

  const projectOutDir = path.join(DATA_DIR, project.id);
  const docsOutDir = path.join(projectOutDir, 'docs');
  fs.mkdirSync(docsOutDir, { recursive: true });

  const projectSourcePath = path.resolve(ROOT_DIR, project.localPath);
  const mainDumpDir = fromMain ? fetchMainDump(project) : null;

  if (!fs.existsSync(projectSourcePath) && !mainDumpDir) {
    console.warn(
      `[WARN] Source path not found for ${project.id}: ${projectSourcePath}. Generating stub data.`,
    );
    // Generate stub data if not found
    const emptyManifest: ProjectManifest = {
      projectId: project.id,
      projectName: project.name,
      version: project.version,
      updatedAt: new Date().toISOString(),
      stats: {
        docCount: 0,
        apiSymbolCount: 0,
        modelCount: 0,
        ledgerEntryCount: 0,
      },
      models: [],
    };
    fs.writeFileSync(
      path.join(projectOutDir, 'manifest.json'),
      JSON.stringify(emptyManifest, null, 2),
    );
    fs.writeFileSync(
      path.join(projectOutDir, 'docs-catalog.json'),
      JSON.stringify([], null, 2),
    );
    fs.writeFileSync(
      path.join(projectOutDir, 'api-catalog.json'),
      JSON.stringify([], null, 2),
    );
    fs.writeFileSync(
      path.join(projectOutDir, 'ledger.json'),
      JSON.stringify([], null, 2),
    );
    fs.writeFileSync(
      path.join(projectOutDir, 'architecture.json'),
      JSON.stringify({ diagrams: [] }, null, 2),
    );
    return;
  }

  // 1. Ingest Docs
  const docsSourceDir = path.join(projectSourcePath, project.docsDir);
  const docCatalog: Omit<ParsedDoc, 'rawMarkdown'>[] = [];
  let docCount = 0;

  if (fs.existsSync(docsSourceDir)) {
    const files = fs
      .readdirSync(docsSourceDir)
      .filter((f) => f.endsWith('.md') && f !== 'INDEX.md');
    for (const file of files) {
      const filePath = path.join(docsSourceDir, file);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const parsed = parseDoc(raw, file, project.id);

      // Save individual doc
      fs.writeFileSync(
        path.join(docsOutDir, `${parsed.slug}.json`),
        JSON.stringify(parsed, null, 2),
      );

      // Append to catalog without the heavy markdown body
      const { rawMarkdown, ...summary } = parsed;
      docCatalog.push(summary);
      docCount++;
    }
  }

  // Sort doc catalog by order
  docCatalog.sort((a, b) => a.order - b.order);
  fs.writeFileSync(
    path.join(projectOutDir, 'docs-catalog.json'),
    JSON.stringify(docCatalog, null, 2),
  );
  console.log(`✓ Parsed ${docCount} markdown documentation guides`);

  // 2. Ingest API Baselines
  const allSymbols: ApiSymbol[] = [];
  const modelsSet = new Set<string>();

  const candidateApiDirs = [
    mainDumpDir ? path.join(mainDumpDir, 'golden') : null,
    path.join(projectSourcePath, 'artifacts/golden'),
    project.apiBaselinesDir
      ? path.join(projectSourcePath, project.apiBaselinesDir)
      : null,
  ].filter((d): d is string => Boolean(d && fs.existsSync(d)));

  if (candidateApiDirs.length > 0) {
    const apiDir = candidateApiDirs[0];
    const apiFiles = fs
      .readdirSync(apiDir)
      .filter((f) => f.endsWith('.api.txt'));
    for (const apiFile of apiFiles) {
      const modelName = apiFile.replace(
        /(ParquetExtensions|ParquetLegacyExtensions|\.api\.txt)/g,
        '',
      );
      modelsSet.add(modelName);
      const content = fs.readFileSync(path.join(apiDir, apiFile), 'utf-8');
      const symbols = parseApiTxt(content, modelName);
      allSymbols.push(...symbols);
    }
  }

  fs.writeFileSync(
    path.join(projectOutDir, 'api-catalog.json'),
    JSON.stringify(allSymbols, null, 2),
  );
  console.log(
    `✓ Extracted ${allSymbols.length} API symbols across ${modelsSet.size} golden models`,
  );

  // 3. Ingest Ledger
  let ledgerEntries: LedgerEntry[] = [];
  if (project.ledgerFile) {
    const ledgerPath = path.join(projectSourcePath, project.ledgerFile);
    if (fs.existsSync(ledgerPath)) {
      const content = fs.readFileSync(ledgerPath, 'utf-8');
      ledgerEntries = parseLedger(content);
    }
  }

  fs.writeFileSync(
    path.join(projectOutDir, 'ledger.json'),
    JSON.stringify(ledgerEntries, null, 2),
  );
  console.log(`✓ Parsed ${ledgerEntries.length} API Change Ledger entries`);

  // 4. Ingest Architecture / Call Graph
  const diagrams: {
    id: string;
    title: string;
    chart: string;
    description?: string;
  }[] = [];

  const candidateCallgraphs = [
    mainDumpDir
      ? path.join(mainDumpDir, 'callgraph/callgraph-generated.md')
      : null,
    mainDumpDir ? path.join(mainDumpDir, 'callgraph/callgraph.md') : null,
    path.join(projectSourcePath, 'artifacts/callgraph/callgraph-generated.md'),
    path.join(projectSourcePath, 'artifacts/callgraph/callgraph.md'),
    project.callgraphFile
      ? path.join(projectSourcePath, project.callgraphFile)
      : null,
  ].filter((f): f is string => Boolean(f && fs.existsSync(f)));

  if (candidateCallgraphs.length > 0) {
    const cgPath = candidateCallgraphs[0];
    const content = fs.readFileSync(cgPath, 'utf-8');
    const mermaidMatches = Array.from(
      content.matchAll(/```mermaid\s*([\s\S]*?)\s*```/g),
    );
    for (let i = 0; i < mermaidMatches.length; i++) {
      diagrams.push({
        id: `diag-${i + 1}`,
        title: `Generated Call Graph Architecture ${i + 1}`,
        chart: mermaidMatches[i][1].trim(),
      });
    }
  }

  fs.writeFileSync(
    path.join(projectOutDir, 'architecture.json'),
    JSON.stringify({ diagrams }, null, 2),
  );
  console.log(`✓ Extracted ${diagrams.length} architecture diagrams`);

  // 5. Ingest Versioned API Model & Baselines
  const versionsOutDir = path.join(projectOutDir, 'versions');
  fs.mkdirSync(versionsOutDir, { recursive: true });

  const candidateApiModelPaths = [
    mainDumpDir ? path.join(mainDumpDir, 'api-model.json') : null,
    path.join(projectSourcePath, 'artifacts/api-model.json'),
  ].filter((f): f is string => Boolean(f && fs.existsSync(f)));

  if (candidateApiModelPaths.length > 0) {
    const localApiModelPath = candidateApiModelPaths[0];
    const rawModel = fs.readFileSync(localApiModelPath, 'utf-8');
    const apiDoc: ApiDocProject = JSON.parse(rawModel);
    const versionTag = `v${apiDoc.version}`;

    // Write current version snapshot
    fs.writeFileSync(path.join(versionsOutDir, `${versionTag}.json`), rawModel);
    // Write latest.json
    fs.writeFileSync(path.join(versionsOutDir, 'latest.json'), rawModel);

    // Read or initialize versions manifest
    const manifestPath = path.join(versionsOutDir, 'versions.json');
    let versionManifest: VersionManifest = {
      projectId: project.id,
      latest: apiDoc.version,
      versions: [],
    };
    if (fs.existsSync(manifestPath)) {
      try {
        versionManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
      } catch {}
    }

    const typeCount = apiDoc.namespaces.reduce(
      (acc, ns) => acc + ns.types.length,
      0,
    );
    const existingIdx = versionManifest.versions.findIndex(
      (v) => v.version === apiDoc.version,
    );
    const versionEntry: VersionInfo = {
      version: apiDoc.version,
      releasedAt: apiDoc.generatedAt,
      isLatest: true,
      typeCount,
    };

    if (existingIdx >= 0) {
      versionManifest.versions[existingIdx] = versionEntry;
    } else {
      versionManifest.versions.push(versionEntry);
    }

    for (const v of versionManifest.versions) {
      v.isLatest = v.version === apiDoc.version;
    }

    versionManifest.latest = apiDoc.version;
    fs.writeFileSync(manifestPath, JSON.stringify(versionManifest, null, 2));
    console.log(
      `✓ Ingested versioned API model for ${versionTag} (${typeCount} types)`,
    );
  }

  // 6. Write Project Manifest
  const manifest: ProjectManifest = {
    projectId: project.id,
    projectName: project.name,
    version: project.version,
    updatedAt: new Date().toISOString(),
    stats: {
      docCount,
      apiSymbolCount: allSymbols.length,
      modelCount: modelsSet.size,
      ledgerEntryCount: ledgerEntries.length,
    },
    models: Array.from(modelsSet).sort(),
  };

  fs.writeFileSync(
    path.join(projectOutDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2),
  );
  console.log(`✓ Saved manifest for ${project.id}`);
}

async function main() {
  fs.mkdirSync(DATA_DIR, { recursive: true });

  const fromMain = process.argv.includes('--from-main');
  const targetProjectArg = process.argv.indexOf('--project');
  const targetProjectId =
    targetProjectArg !== -1 ? process.argv[targetProjectArg + 1] : null;

  const targetProjects = targetProjectId
    ? PROJECTS.filter((p) => p.id === targetProjectId)
    : PROJECTS;

  if (targetProjects.length === 0) {
    console.error(
      `Error: Project "${targetProjectId}" not found in projects.ts`,
    );
    process.exit(1);
  }

  for (const p of targetProjects) {
    await ingestProject(p, fromMain);
  }

  console.log(
    `\n🎉 Ingestion complete for ${targetProjects.length} project(s)!\n`,
  );
}

main().catch((err) => {
  console.error('Fatal ingestion error:', err);
  process.exit(1);
});
