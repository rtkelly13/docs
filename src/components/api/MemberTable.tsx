import { Badge } from '@rtkelly13/design-system';
import type { MemberDoc } from '@/lib/ingest/parseApiModel';

interface MemberTableProps {
  title: string;
  members: MemberDoc[];
}

export function MemberTable({ title, members }: MemberTableProps) {
  if (!members || members.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between border-b border-[var(--ds-border-subtle)] pb-2">
        <h3 className="text-lg font-mono font-bold text-[var(--ds-text-primary)] uppercase tracking-wider flex items-center gap-2">
          <span>{title}</span>
          <Badge accent="quiet">{members.length}</Badge>
        </h3>
      </div>

      <div className="border border-[var(--ds-border-subtle)] divide-y divide-[var(--ds-border-subtle)] bg-[var(--ds-surface-base)]">
        {members.map((member) => (
          <div
            key={member.syntax}
            id={member.name}
            className="p-4 hover:bg-[var(--ds-surface-overlay)] transition-colors space-y-3"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono font-bold text-sm sm:text-base text-cyan-400">
                  {member.name}
                </span>
                {member.isStatic && <Badge accent="warning">STATIC</Badge>}
                {member.returnType && (
                  <span className="font-mono text-xs text-[var(--ds-text-secondary)]">
                    : <code className="text-pink-400">{member.returnType}</code>
                  </span>
                )}
                {member.constantValue !== undefined &&
                  member.constantValue !== null && (
                    <span className="font-mono text-xs text-yellow-400">
                      = {member.constantValue}
                    </span>
                  )}
              </div>
            </div>

            <div className="bg-[var(--ds-surface-sunken)] p-2.5 font-mono text-xs text-[var(--ds-text-primary)] border-l-2 border-cyan-500 overflow-x-auto">
              <code>{member.syntax}</code>
            </div>

            {member.summary && (
              <p className="text-xs sm:text-sm text-[var(--ds-text-secondary)] leading-relaxed">
                {member.summary}
              </p>
            )}

            {member.parameters && member.parameters.length > 0 && (
              <div className="space-y-1.5 pl-2 border-l border-[var(--ds-border-subtle)]">
                <span className="text-[11px] font-mono font-semibold text-[var(--ds-text-muted)] uppercase tracking-wider">
                  Parameters:
                </span>
                <ul className="space-y-1 text-xs font-mono">
                  {member.parameters.map((p) => (
                    <li
                      key={p.name}
                      className="flex flex-wrap items-baseline gap-1.5"
                    >
                      <span className="text-cyan-300 font-bold">{p.name}</span>
                      <span className="text-[var(--ds-text-muted)]">
                        ({p.type})
                      </span>
                      {p.summary && (
                        <span className="text-[var(--ds-text-secondary)] font-sans">
                          — {p.summary}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {member.remarks && (
              <div className="text-xs text-[var(--ds-text-muted)] italic bg-[var(--ds-surface-sunken)]/50 p-2 border-l border-yellow-500/50">
                <span className="font-semibold not-italic">Remarks:</span>{' '}
                {member.remarks}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
