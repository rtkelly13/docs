import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PROJECTS, type ProjectConfig } from '../src/config/projects.js';
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

async function ingestProject(project: ProjectConfig) {
  console.log(`\n======================================================`);
  console.log(`Ingesting project: [ ${project.name} ] (${project.id})`);
  console.log(`======================================================`);

  const projectOutDir = path.join(DATA_DIR, project.id);
  const docsOutDir = path.join(projectOutDir, 'docs');
  fs.mkdirSync(docsOutDir, { recursive: true });

  const projectSourcePath = path.resolve(ROOT_DIR, project.localPath);
  if (!fs.existsSync(projectSourcePath)) {
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

  if (project.apiBaselinesDir) {
    const apiDir = path.join(projectSourcePath, project.apiBaselinesDir);
    if (fs.existsSync(apiDir)) {
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
  if (project.callgraphFile) {
    const cgPath = path.join(projectSourcePath, project.callgraphFile);
    if (fs.existsSync(cgPath)) {
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
  }

  fs.writeFileSync(
    path.join(projectOutDir, 'architecture.json'),
    JSON.stringify({ diagrams }, null, 2),
  );
  console.log(`✓ Extracted ${diagrams.length} architecture diagrams`);

  // 5. Write Project Manifest
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
    await ingestProject(p);
  }

  console.log(
    `\n🎉 Ingestion complete for ${targetProjects.length} project(s)!\n`,
  );
}

main().catch((err) => {
  console.error('Fatal ingestion error:', err);
  process.exit(1);
});
