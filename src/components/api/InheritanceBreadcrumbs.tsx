import { ChevronRight } from 'lucide-react';

interface InheritanceBreadcrumbsProps {
  hierarchy: string[];
}

export function InheritanceBreadcrumbs({
  hierarchy,
}: InheritanceBreadcrumbsProps) {
  if (!hierarchy || hierarchy.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-[var(--ds-text-secondary)] bg-[var(--ds-surface-sunken)] p-3 border border-[var(--ds-border-subtle)]">
      <span className="font-semibold text-[var(--ds-text-muted)] uppercase tracking-wider mr-1">
        Inheritance:
      </span>
      {hierarchy.map((type, idx) => {
        const isLast = idx === hierarchy.length - 1;
        return (
          <div key={type} className="flex items-center gap-1.5">
            {idx > 0 && (
              <ChevronRight className="w-3.5 h-3.5 text-[var(--ds-text-muted)]" />
            )}
            <span
              className={
                isLast
                  ? 'font-bold text-[var(--ds-text-primary)] bg-[var(--ds-surface-overlay)] px-1.5 py-0.5 border border-[var(--ds-border-primary)]'
                  : 'text-[var(--ds-text-secondary)] hover:text-[var(--ds-text-primary)] transition-colors'
              }
            >
              {type}
            </span>
          </div>
        );
      })}
    </div>
  );
}
