'use client';

import { DocsLinkProvider, ThemeProvider } from '@rtkelly13/design-system';
import type { ReactNode } from 'react';
import { NextDocsLink } from './NextDocsLink';

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultLevel="midnight" persist={true} followSystem={true}>
      <DocsLinkProvider component={NextDocsLink}>{children}</DocsLinkProvider>
    </ThemeProvider>
  );
}
