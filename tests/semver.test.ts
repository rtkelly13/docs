import { describe, expect, it } from 'vitest';
import {
  compareSemverDesc,
  isPrerelease,
  parseSemver,
} from '../src/lib/semver.js';

describe('semver parsing and comparison', () => {
  it('correctly parses semver and identifies prerelease', () => {
    expect(parseSemver('1.2.3')).toEqual({
      major: 1,
      minor: 2,
      patch: 3,
      prerelease: undefined,
      raw: '1.2.3',
    });

    expect(parseSemver('v2.0.0-rc.1')).toEqual({
      major: 2,
      minor: 0,
      patch: 0,
      prerelease: 'rc.1',
      raw: 'v2.0.0-rc.1',
    });

    expect(isPrerelease('1.0.0')).toBe(false);
    expect(isPrerelease('1.0.0-preview.2')).toBe(true);
    expect(isPrerelease('v0.2.0-beta')).toBe(true);
  });

  it('sorts versions descending correctly (stable preferred over prerelease of same core)', () => {
    const versions = [
      '1.0.0-rc.1',
      '1.0.0',
      '1.1.0',
      '0.9.0',
      '1.0.0-beta.2',
      '1.0.0-beta.1',
    ];

    const sorted = [...versions].sort(compareSemverDesc);
    expect(sorted).toEqual([
      '1.1.0',
      '1.0.0',
      '1.0.0-rc.1',
      '1.0.0-beta.2',
      '1.0.0-beta.1',
      '0.9.0',
    ]);
  });
});
