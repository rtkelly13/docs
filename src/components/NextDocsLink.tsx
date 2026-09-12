'use client';

import type { DocsLinkProps } from '@rtkelly13/design-system';
import Link from 'next/link';

export function NextDocsLink({ href, children, ...rest }: DocsLinkProps) {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
