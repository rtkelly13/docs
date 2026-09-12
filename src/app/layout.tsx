import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { ClientProviders } from '@/components/ClientProviders';

export const metadata: Metadata = {
  title: {
    template: '%s | docs.ryankelly.dev',
    default: 'docs.ryankelly.dev — Multi-Project Documentation Hub',
  },
  description:
    'High-throughput C# Source Generators, F# Type Providers, and Developer Tooling documentation portal.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[var(--ds-surface-base)] text-[var(--ds-text-primary)] antialiased font-sans">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
