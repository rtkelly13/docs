'use client';

import { useRouter } from 'next/navigation';
import type { VersionManifest } from '@/lib/ingest/parseApiModel';

interface VersionSelectorProps {
  projectId: string;
  currentVersion: string;
  manifest: VersionManifest;
  currentTypeSlug?: string;
}

export function VersionSelector({
  projectId,
  currentVersion,
  manifest,
  currentTypeSlug,
}: VersionSelectorProps) {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    const targetUrl = currentTypeSlug
      ? `/${projectId}/api/${selected}/${currentTypeSlug}`
      : `/${projectId}/api/${selected}`;
    router.push(targetUrl);
  };

  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="version-select"
        className="text-xs font-mono font-semibold text-[var(--ds-text-muted)] uppercase tracking-wider whitespace-nowrap"
      >
        Version:
      </label>
      <select
        id="version-select"
        value={currentVersion}
        onChange={handleChange}
        className="bg-[var(--ds-surface-sunken)] border border-[var(--ds-border-subtle)] text-[var(--ds-text-primary)] font-mono text-xs px-2.5 py-1.5 focus:outline-none focus:border-cyan-500 cursor-pointer"
      >
        {manifest.versions.map((v) => (
          <option key={v.version} value={v.version}>
            v{v.version} {v.isLatest ? '(latest)' : ''}
          </option>
        ))}
      </select>
    </div>
  );
}
