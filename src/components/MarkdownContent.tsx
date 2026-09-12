import { marked } from 'marked';

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  // Pre-process GitHub alerts: > [!NOTE], > [!TIP], > [!IMPORTANT], > [!WARNING], > [!CAUTION]
  const preprocessed = content.replace(
    /^>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*([\s\S]*?)(?=(?:\n[^\n>]|\n*$))/gm,
    (_match, alertType, alertBody) => {
      const type = alertType.toLowerCase();
      return `<div class="docs-callout docs-callout-${type} border-l-4 p-4 my-4 bg-[var(--ds-surface-subtle)] border-[var(--ds-border-strong)]">
  <div class="font-mono text-xs font-bold uppercase mb-1 tracking-wider">[ ${alertType} ]</div>
  <div class="text-sm">${alertBody.replace(/^>\s*/gm, '')}</div>
</div>`;
    },
  );

  const html = marked.parse(preprocessed, {
    gfm: true,
    breaks: false,
    async: false,
  }) as string;

  return (
    <div
      className="prose-ladder space-y-4"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
