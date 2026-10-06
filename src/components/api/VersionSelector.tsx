'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
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
  const [showArchived, setShowArchived] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    const targetUrl = currentTypeSlug
      ? `/${projectId}/api/${selected}/${currentTypeSlug}`
      : `/${projectId}/api/${selected}`;
    router.push(targetUrl);
  };

  // Partition versions into stable and pre-releases
  const stableVersions = manifest.versions.filter((v) => !v.isPrerelease);
  const prereleaseVersions = manifest.versions.filter((v) => v.isPrerelease);

  // By convention: typically only the single latest pre-release is included in default view
  const latestPrerelease =
    prereleaseVersions.length > 0 ? prereleaseVersions[0] : null;
  const isViewingArchivedPrerelease =
    prereleaseVersions.some((v) => v.version === currentVersion) &&
    latestPrerelease?.version !== currentVersion;

  // The active pre-releases to show in the dropdown
  const visiblePrereleases = showArchived
    ? prereleaseVersions
    : latestPrerelease
      ? isViewingArchivedPrerelease
        ? prereleaseVersions.filter(
            (v) =>
              v.version === latestPrerelease.version ||
              v.version === currentVersion,
          )
        : [latestPrerelease]
      : [];

  const hiddenArchivedCount =
    prereleaseVersions.length - visiblePrereleases.length;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
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
          {stableVersions.length > 0 && (
            <optgroup label="Stable Releases">
              {stableVersions.map((v) => (
                <option key={v.version} value={v.version}>
                  v{v.version} {v.isLatest ? '(latest)' : ''}
                </option>
              ))}
            </optgroup>
          )}

          {visiblePrereleases.length > 0 && (
            <optgroup label="Pre-release / Preview">
              {visiblePrereleases.map((v) => {
                const isCurrentArchived =
                  v.version === currentVersion &&
                  v.version !== latestPrerelease?.version;
                return (
                  <option key={v.version} value={v.version}>
                    v{v.version}{' '}
                    {isCurrentArchived ? '(archived preview)' : '(preview)'}
                  </option>
                );
              })}
            </optgroup>
          )}
        </select>
      </div>

      {hiddenArchivedCount > 0 && !showArchived && (
        <button
          type="button"
          onClick={() => setShowArchived(true)}
          className="text-[10px] font-mono text-[var(--ds-text-muted)] hover:text-cyan-400 underline underline-offset-2 transition-colors cursor-pointer"
        >
          +{hiddenArchivedCount} older preview
          {hiddenArchivedCount > 1 ? 's' : ''}
        </button>
      )}
    </div>
  );
}
