'use client';

import { ThemeEngine } from '@rtkelly/mermaid-toolkit';
import { Check, Code, Copy, Eye } from 'lucide-react';
import mermaid from 'mermaid';
import { useEffect, useId, useState } from 'react';

const themeEngine = new ThemeEngine({
  preset: 'retro-brutalist',
  customVariables: {
    primaryColor: '#06b6d4',
    secondaryColor: '#ec4899',
    tertiaryColor: '#facc15',
  },
});

interface MermaidViewerProps {
  chart: string;
  title: string;
}

export function MermaidViewer({ chart, title }: MermaidViewerProps) {
  const [svg, setSvg] = useState<string>('');
  const [viewMode, setViewMode] = useState<'diagram' | 'source'>('diagram');
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const id = useId().replace(/[:]/g, '_');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || viewMode !== 'diagram') return;

    let isSubscribed = true;
    const renderChart = async () => {
      try {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'loose',
          fontFamily: 'IBM Plex Mono, monospace',
          ...themeEngine.getConfig(),
        });

        const { svg: renderedSvg } = await mermaid.render(
          `mermaid-${id}`,
          chart.trim(),
        );
        if (isSubscribed) {
          setSvg(renderedSvg);
        }
      } catch (err) {
        console.error('Failed to render Mermaid chart:', err);
      }
    };

    renderChart();
    return () => {
      isSubscribed = false;
    };
  }, [chart, id, mounted, viewMode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(chart);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-[var(--ds-border-default)] bg-[var(--ds-surface-subtle)]">
      <div className="flex items-center justify-between p-3 border-b border-[var(--ds-border-default)] bg-[var(--ds-surface-base)]">
        <h3 className="text-xs font-mono font-bold text-[var(--ds-text-primary)]">
          {title}
        </h3>

        <div className="flex items-center gap-2">
          <div className="flex border border-[var(--ds-border-default)]">
            <button
              onClick={() => setViewMode('diagram')}
              className={`px-2 py-1 text-xs font-mono flex items-center gap-1 transition-colors ${
                viewMode === 'diagram'
                  ? 'bg-cyan-500 text-black font-bold'
                  : 'text-[var(--ds-text-muted)] hover:text-[var(--ds-text-primary)]'
              }`}
            >
              <Eye size={12} />
              <span>VISUAL</span>
            </button>
            <button
              onClick={() => setViewMode('source')}
              className={`px-2 py-1 text-xs font-mono flex items-center gap-1 transition-colors ${
                viewMode === 'source'
                  ? 'bg-cyan-500 text-black font-bold'
                  : 'text-[var(--ds-text-muted)] hover:text-[var(--ds-text-primary)]'
              }`}
            >
              <Code size={12} />
              <span>SOURCE</span>
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="px-2 py-1 border border-[var(--ds-border-default)] text-xs font-mono text-[var(--ds-text-muted)] hover:text-[var(--ds-text-primary)] flex items-center gap-1"
            title="Copy Mermaid source"
          >
            {copied ? (
              <Check size={12} className="text-green-400" />
            ) : (
              <Copy size={12} />
            )}
            <span>{copied ? 'COPIED' : 'COPY'}</span>
          </button>
        </div>
      </div>

      <div className="p-4 overflow-x-auto min-h-[250px] flex items-center justify-center">
        {viewMode === 'diagram' ? (
          svg ? (
            <div
              className="w-full flex justify-center [&_svg]:max-w-full [&_svg]:h-auto"
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          ) : (
            <div className="text-xs font-mono text-[var(--ds-text-muted)] animate-pulse">
              Rendering diagram...
            </div>
          )
        ) : (
          <pre className="w-full text-xs font-mono bg-black p-4 text-[var(--ds-text-secondary)] overflow-x-auto">
            <code>{chart}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
