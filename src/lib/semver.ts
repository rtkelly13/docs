export interface ParsedSemver {
  major: number;
  minor: number;
  patch: number;
  prerelease?: string;
  raw: string;
}

export function parseSemver(version: string): ParsedSemver {
  const clean = version.trim().replace(/^[vV]/, '');
  const [core, ...prereleaseParts] = clean.split('-');
  const prerelease =
    prereleaseParts.length > 0 ? prereleaseParts.join('-') : undefined;

  const [majorStr = '0', minorStr = '0', patchStr = '0'] = core.split('.');
  const major = parseInt(majorStr, 10) || 0;
  const minor = parseInt(minorStr, 10) || 0;
  const patch = parseInt(patchStr, 10) || 0;

  return {
    major,
    minor,
    patch,
    prerelease,
    raw: version,
  };
}

export function isPrerelease(version: string): boolean {
  return parseSemver(version).prerelease !== undefined;
}

/**
 * Compares two semver strings.
 * Returns negative if v1 > v2 (newest first for Array.sort),
 * positive if v1 < v2, and 0 if equal.
 */
export function compareSemverDesc(v1: string, v2: string): number {
  const p1 = parseSemver(v1);
  const p2 = parseSemver(v2);

  if (p1.major !== p2.major) return p2.major - p1.major;
  if (p1.minor !== p2.minor) return p2.minor - p1.minor;
  if (p1.patch !== p2.patch) return p2.patch - p1.patch;

  // If major, minor, patch are identical:
  // Stable releases are NEWER than pre-releases (e.g. 1.0.0 > 1.0.0-rc.1)
  if (!p1.prerelease && p2.prerelease) return -1;
  if (p1.prerelease && !p2.prerelease) return 1;

  if (p1.prerelease && p2.prerelease) {
    return p2.prerelease.localeCompare(p1.prerelease, undefined, {
      numeric: true,
    });
  }

  return 0;
}
