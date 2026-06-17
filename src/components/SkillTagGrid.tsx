import { Reveal } from './Reveal'
import { SkillChip, useSkillChipGroup } from './SkillChip'
import { skillGroups } from '../data/site'

export function SkillTagGrid() {
  const { activeKey, toggle, containerRef } = useSkillChipGroup()

  return (
    <div
      ref={containerRef}
      className="grid gap-6 overflow-visible sm:grid-cols-2 lg:grid-cols-3"
    >
      {skillGroups.map((group, gi) => (
        <Reveal key={group.label} variant="fade-up" delay={gi * 60}>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cami-cyan">
              {group.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <SkillChip
                  key={tag}
                  label={tag}
                  activeKey={activeKey}
                  onToggle={toggle}
                  className="border-cami-border bg-cami-surface/80 text-cami-fg/90 hover:border-cami-accent/50 hover:text-cami-fg"
                />
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
