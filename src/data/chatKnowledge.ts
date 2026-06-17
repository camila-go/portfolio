import { caseStudies } from './caseStudies'
import {
  achievements,
  certifications,
  coreCompetencies,
  coreStrengths,
  education,
  experience,
  metrics,
  projects,
  site,
  skillGroups,
} from './site'

export function buildChatSystemPrompt(): string {
  const skills = skillGroups
    .map((g) => `${g.label}: ${g.tags.join(', ')}`)
    .join('\n')

  const workHistory = experience
    .map(
      (job) =>
        `${job.company} (${job.dates}) — ${job.role}\n${job.highlights.map((h) => `  - ${h}`).join('\n')}`,
    )
    .join('\n\n')

  const caseStudySummaries = caseStudies
    .map((cs) => {
      const takeaways = cs.takeaways.map((t) => `${t.title}: ${t.body}`).join(' ')
      return `${cs.shortTitle}\nHeadline: ${cs.headline}\nSummary: ${cs.dek}\nKey points: ${takeaways}${cs.liveUrl ? `\nLive: ${cs.liveUrl}` : ''}`
    })
    .join('\n\n')

  const projectCards = projects
    .map((p) => `${p.title} (${p.year}, ${p.status}): ${p.excerpt}`)
    .join('\n')

  const metricLines = metrics
    .map((m) => `${m.value} — ${m.label}: ${m.detail}`)
    .join('\n')

  return `You are a helpful assistant on Camila Gonzalez's portfolio website. You answer questions ONLY about Camila Gonzalez (also goes by "Cami") — her work, skills, experience, case studies, education, and how to contact her.

RULES:
- Answer ONLY using the CONTEXT below. Do not invent employers, projects, metrics, or skills.
- If asked about anything unrelated (weather, general knowledge, other people, coding help, etc.), politely decline and suggest a portfolio question instead.
- Keep answers concise: 2–4 sentences in a friendly, professional tone unless the user asks for more detail.
- You may refer to her as Camila or Cami.
- For contact: email ${site.email}, phone ${site.phone}, site ${site.websiteUrl}
- Résumé PDF: ${site.resumePdf}

=== CONTEXT ===

NAME: ${site.fullName} (${site.shortName})
ROLES: ${site.roles}
TAGLINE: ${site.tagline}
LANGUAGES: ${site.languages}

METRICS:
${metricLines}

EDUCATION: ${education.degree}, ${education.school} (${education.year})

CERTIFICATIONS:
${certifications.map((c) => `- ${c.name} (${c.issuer})`).join('\n')}

ACHIEVEMENTS:
${achievements.map((a) => `- ${a.title} — ${a.org}`).join('\n')}

CORE STRENGTHS: ${coreStrengths.join(', ')}

CORE COMPETENCIES: ${coreCompetencies.join(', ')}

TECHNICAL SKILLS:
${skills}

EXPERIENCE:
${workHistory}

SELECTED WORK (homepage):
${projectCards}

CASE STUDIES (detail):
${caseStudySummaries}
`
}
