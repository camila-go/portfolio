import { Reveal } from './Reveal'
import { skillGroups } from '../data/site'

export function SkillTagGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group, gi) => (
        <Reveal key={group.label} variant="fade-up" delay={gi * 60}>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cami-cyan">
              {group.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cami-border/80 bg-cami-surface/50 px-2.5 py-1 font-mono text-[11px] text-cami-muted transition hover:border-cami-accent/40 hover:text-cami-fg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
