export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export interface ParsedDoc {
  slug: string;
  projectId: string;
  title: string;
  category:
    | 'Guides'
    | 'Reference'
    | 'Internals & Engineering Spikes'
    | 'General';
  order: number;
  headings: HeadingItem[];
  rawMarkdown: string;
  readingMinutes: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

export function parseDoc(
  content: string,
  fileName: string,
  projectId: string,
  tierMap?: Record<
    string,
    'Guides' | 'Reference' | 'Internals & Engineering Spikes'
  >,
): ParsedDoc {
  const baseSlug = fileName.replace(/\.md$/, '');
  const lines = content.split(/\r?\n/);

  let title = baseSlug;
  const headings: HeadingItem[] = [];

  for (const line of lines) {
    const h1Match = line.match(/^#\s+(.+)$/);
    if (h1Match && title === baseSlug) {
      title = h1Match[1].trim();
    }

    const headingMatch = line.match(/^(#{2,3})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].replace(/[#*_`[\]]/g, '').trim();
      const id = slugify(text);
      headings.push({ id, text, level });
    }
  }

  // Rewrite markdown relative links to portal routes
  const normalizedMarkdown = content
    .replace(
      /\[([^\]]+)\]\(\.\/api\/LEDGER\.md\)/g,
      `[$1](/${projectId}/ledger)`,
    )
    .replace(
      /\[([^\]]+)\]\(\.\/callgraph(?:-generated)?\.md\)/g,
      `[$1](/${projectId}/architecture)`,
    )
    .replace(
      /\[([^\]]+)\]\(\.\/([0-9A-Za-z_-]+)\.md\)/g,
      `[$1](/${projectId}/guides/$2)`,
    );

  let category: ParsedDoc['category'] = 'General';
  if (tierMap?.[fileName]) {
    category = tierMap[fileName];
  } else {
    // Default tier heuristics based on doc prefixes in Parquet.SG
    const num = parseInt(baseSlug.split('-')[0], 10);
    if (!Number.isNaN(num)) {
      if ([1, 2, 10, 15, 19].includes(num) || baseSlug === 'BENCHMARKS') {
        category = 'Guides';
      } else if ([7, 13, 14, 16, 17, 18, 20].includes(num)) {
        category = 'Reference';
      } else {
        category = 'Internals & Engineering Spikes';
      }
    }
  }

  const wordCount = content.split(/\s+/).length;
  const readingMinutes = Math.max(1, Math.round(wordCount / 200));

  const orderMatch = baseSlug.match(/^(\d+)/);
  const order = orderMatch ? parseInt(orderMatch[1], 10) : 99;

  return {
    slug: baseSlug,
    projectId,
    title,
    category,
    order,
    headings,
    rawMarkdown: normalizedMarkdown,
    readingMinutes,
  };
}
