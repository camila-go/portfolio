export type CaseStudyFigure = {
  caption: string
  /** Placeholder layout — swap for real assets later */
  variant: 'hero-stack' | 'pair' | 'wide' | 'tall' | 'gallery'
  /** Optional real asset served from /public; falls back to placeholder when unset */
  src?: string
  alt?: string
}

export type CaseStudySection = {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
  figures?: CaseStudyFigure[]
}

export type CaseStudyTakeaway = {
  title: string
  body: string
}

export type CaseStudy = {
  slug: string
  shortTitle: string
  headline: string
  dek: string
  /** Shipped product / demo (opens in new tab) */
  liveUrl?: string
  /** Primary CTA label when liveUrl is set */
  liveCtaLabel?: string
  /** Hero figure caption under the placeholder */
  heroFigureCaption?: string
  /** Hero figure image served from /public (falls back to placeholder when unset) */
  heroFigureSrc?: string
  meta: { label: string; value: string }[]
  problem: {
    title: string
    paragraphs: string[]
    bullets: string[]
  }
  solution: {
    title: string
    paragraphs: string[]
    bullets: string[]
  }
  sections: CaseStudySection[]
  takeaways: CaseStudyTakeaway[]
}

const figure = (
  caption: string,
  variant: CaseStudyFigure['variant'],
  src?: string,
  alt?: string,
): CaseStudyFigure => ({
  caption,
  variant,
  ...(src ? { src } : {}),
  ...(alt ? { alt } : {}),
})

export const caseStudies: CaseStudy[] = [
  {
    slug: 'jynx-networking',
    shortTitle: 'Jynx · SEI · Shipped',
    headline:
      'AI event networking at scale — with Microsoft Teams — for 300+ people.',
    dek: 'Jynx is a shipped web experience for Strategic Education, Inc. leadership conferences (including GS26-style summit networking). I led product design end-to-end and built the app — AI-assisted matching and Teams integration — so attendees find the right connections during large internal events without leaving how they already work. The build used Cursor for development, Vercel for hosting and deploys, and Supabase for backend and data.',
    liveUrl: 'https://www.jynxnetworking.app/welcome',
    liveCtaLabel: 'Visit Jynx app (live)',
    heroFigureCaption: 'Jynx — AI event networking, desktop & mobile',
    heroFigureSrc: '/case-studies/jynx/jynx-hero.webp',
    meta: [
      {
        label: 'Role',
        value: 'Product design + build — UX, implementation, launch',
      },
      { label: 'Org', value: 'SEI (Strategic Education, Inc.)' },
      { label: 'Scale', value: '300+ attendees · shipped' },
      {
        label: 'Stack',
        value:
          'Web app (built) · Microsoft Teams integration · AI-assisted matching',
      },
      {
        label: 'Build',
        value:
          'Cursor (dev & AI-assisted coding) · Vercel (hosting & deploy) · Supabase (backend, data, auth)',
      },
    ],
    problem: {
      title: 'The problem',
      paragraphs: [
        'Internal leadership summits bring hundreds of leaders together — but “hallway conversations” don’t scale. Without structure, the best connections are left to chance, and introverts or first-time attendees can get left behind.',
        'Our colleagues already live in Microsoft Teams for chat, meetings, and day-to-day work. A standalone networking silo would mean extra logins, duplicate profiles, and friction right when energy for the event is highest.',
      ],
      bullets: [
        'High headcount events need intentional serendipity, not randomness',
        'Context switching away from Teams kills adoption',
        'AI-powered introductions must feel opt-in, transparent, and safe',
      ],
    },
    solution: {
      title: 'The solution',
      paragraphs: [
        'Jynx is a focused networking layer for the conference: profiles, discovery, and AI-assisted suggestions that help people decide who to meet next. The live welcome experience for Global Summit 2026 (GS26) is at jynxnetworking.app/welcome. I owned both the product design and the build, so research and UX decisions stayed tied to what was technically feasible on a tight event timeline.',
        'Teams integration keeps the experience adjacent to where work already happens, reducing drop-off and support load. The UI prioritizes clarity, consent, and easy escape hatches so “smart matching” never feels pushy.',
        'On the implementation side, I developed in Cursor, shipped the front end on Vercel (previews and production deploys), and used Supabase for the database, auth, and server-side pieces the matching flows depend on — so the stack stayed small, fast to iterate, and appropriate for an internal conference deadline.',
      ],
      bullets: [
        'Shipped product used by 300+ participants at SEI',
        'Flows tuned for real-time event constraints (onboarding, peak load, mobile)',
        'End-to-end product design, front-end implementation, Teams touchpoints, and trustworthy AI UX patterns',
        'Tooling: Cursor + Vercel + Supabase for a modern build-and-ship loop',
      ],
    },
    sections: [
      {
        id: 'discovery',
        title: 'Product design for the room — and the calendar',
        paragraphs: [
          'I mapped the arc of a multi-day leadership conference: pre-event setup, in-the-moment networking between sessions, and follow-ups after. Each phase had different jobs-to-be-done — from “who should I meet first?” to “how do I continue this conversation in Teams?” — then carried product design through into the screens and code I shipped.',
        ],
        figures: [
          figure('User journey — event phases, touchpoints & emotional peaks', 'wide', '/case-studies/jynx/jynx-journey-map.webp'),
          figure('Information architecture — onboarding \u2192 matches \u2192 Teams handoff', 'pair', '/case-studies/jynx/jynx-ia.webp'),
        ],
      },
      {
        id: 'teams',
        title: 'Microsoft Teams as the anchor',
        paragraphs: [
          'Rather than competing with Teams, Jynx complements it: deep links, familiar affordances, and copy that signals when you’re crossing back into the hub. Implementing that integration myself raised the bar technically but paid off in adoption and trust.',
        ],
        bullets: [
          'Fewer duplicate identities and notification channels',
          'Faster path from “interesting person” to “real conversation”',
        ],
        figures: [
          figure('System & Teams handoff — deep links into MS Teams', 'pair', '/case-studies/jynx/jynx-architecture.webp'),
        ],
      },
      {
        id: 'ai-ux',
        title: 'AI matching people can understand',
        paragraphs: [
          'Suggestions are only as good as the control users feel they have. Patterns emphasized why a match might make sense, how to accept or dismiss, and how to correct the system over time — critical when reputations and politics are in the room.',
        ],
        figures: [
          figure('AI match cards — \u201cwhy connect\u201d reasoning, desktop & mobile', 'tall', '/case-studies/jynx/jynx-matches.webp'),
          figure('Responsive UI — density across breakpoints, desktop & mobile', 'gallery', '/case-studies/jynx/jynx-gallery.webp'),
        ],
      },
      {
        id: 'build-stack',
        title: 'How it was built: Cursor, Vercel, Supabase',
        paragraphs: [
          'Cursor was my day-to-day dev environment: AI-assisted editing and refactors helped bridge product design and implementation so I could move from layout and flows to working UI without losing momentum.',
          'Vercel handles hosting and deployment — including preview URLs for stakeholders and a straightforward path to production for the GS26 / welcome experience and the rest of the app.',
          'Supabase is the backend layer: structured data for people and matches, authentication where needed, and the APIs and realtime-friendly patterns that keep the networking experience coherent under load.',
        ],
      },
    ],
    takeaways: [
      {
        title: 'Ship where the work already lives',
        body: 'Teams integration wasn’t a nice-to-have — it was the adoption strategy for 300+ busy leaders. Owning the build meant I could ship those touchpoints without product design intent getting lost in handoff.',
      },
      {
        title: 'AI needs etiquette, not just algorithms',
        body: 'Opt-in language, visible reasoning, and graceful declines kept matchmaking professional, not creepy.',
      },
      {
        title: 'Events are a live system',
        body: 'Because I was doing product design and building, the product could assume peak concurrency, confused first-timers, and support on the floor — not just happy-path mocks.',
      },
    ],
  },
  {
    slug: 'dpic-dive-cloud',
    shortTitle: 'DPIC · Georgia Aquarium',
    headline:
      'High-stakes dive logging when connectivity fails: a system redesign for Georgia Aquarium.',
    dek: 'A system-level redesign of Dive Program in the Cloud (DPIC): offline-first architecture for a “bad internet” environment, heuristic evaluation to prioritize navigation and efficiency, and logging flows that protect diver focus and operational safety—not just interface polish.',
    meta: [
      { label: 'Context', value: 'ADPA · Responsive app & PWA' },
      { label: 'Client', value: 'Georgia Aquarium — Dive Program in the Cloud (DPIC)' },
      { label: 'Role', value: 'Product design · UX/UI · systems thinking' },
      {
        label: 'Focus',
        value: 'Offline-sync MVP · heuristic evaluation · cross-device logging',
      },
      {
        label: 'Handoff',
        value: 'Documented flows · responsive prototypes · UI Style Tile for legibility',
      },
    ],
    problem: {
      title: 'The problem',
      paragraphs: [
        'Professional divers and volunteers at the Georgia Aquarium work in a “bad internet” environment—the primary blocker for any real-time-only logging pattern. Safe, accurate data capture has to work when the network does not.',
        'The existing experience was described as a cumbersome interface that distracted divers from their primary responsibilities: poor legibility, hard-to-find inputs, and flows that broke concentration mid-operation. That lack of reliability eroded trust and pulled attention away from dive work—framing UX as a safety and focus problem, not an aesthetics problem.',
      ],
      bullets: [
        'Connectivity failure risks lost or delayed logs in safety-critical workflows',
        'Broken concentration mid-dive pulls focus from operations, not the screen',
        'Heavy forms need task efficiency and trust states—not decoration',
      ],
    },
    solution: {
      title: 'The solution',
      paragraphs: [
        'Offline-sync as the deliberate MVP: log locally, sync when the network returns, with clear “pending” and “saved” states so divers know their data is secure before they move on.',
        'Heuristic evaluation prioritized navigation and task efficiency with objective criteria before any visual layer—autofill where safe, forgiving edit states, and hierarchy that surfaces the next required field as operational pain relievers.',
      ],
      bullets: [
        'Heuristic evaluation to justify IA and navigation decisions before visual refinement',
        'Offline-first logging paths: what must work without connectivity, what can wait for sync',
        'Documented flows and responsive prototypes for engineering alignment across mobile, tablet, and desktop',
      ],
    },
    sections: [
      {
        id: 'mobile-offline',
        title: 'Mobile-first & offline-sync',
        paragraphs: [
          'Offline-first was the product strategy, not a feature add-on. Critical logging paths had to function without a connection; secondary data could queue for sync. Recovery behavior—what happens when sync resumes, how conflicts resolve, how “pending” reads at a glance—was designed as part of the system, not bolted on after the visual layer.',
        ],
        figures: [
          figure('Logging flows — offline vs synced states (placeholder)', 'pair'),
          figure('Field hierarchy & legibility exploration (placeholder)', 'wide'),
        ],
      },
      {
        id: 'adoption',
        title: 'Validation & engineering handoff',
        paragraphs: [
          'Deliverables led with documented functional flows and cross-device coverage so stakeholders could validate logging behavior before build—not just mockups. Responsive prototypes covered mobile, tablet, and desktop for both volunteer and professional diver contexts.',
          'A UI Style Tile (Georgia Aquarium–aligned #F9A26C, #325D79, custom iconography) supported the system: legibility, field recognition, and consistent states across devices—applied after heuristic-driven IA and navigation were locked.',
        ],
      },
    ],
    takeaways: [
      {
        title: 'Offline-sync is the MVP',
        body: 'In constrained environments like the aquarium, offline-sync is the strategic product choice—not a nice-to-have. Local log, sync later, with trust states that stakeholders can evaluate on day one.',
      },
      {
        title: 'UX protects operational focus',
        body: 'Poor design distracts divers from primary responsibilities. The goal was a tool that fades into the workflow: fast inputs, clear recovery, and reliability that supports safety-critical operations.',
      },
      {
        title: 'Heuristics before visuals',
        body: 'Standardized heuristic evaluation justified navigation and efficiency decisions with objective criteria before the visual layer—hallmark of senior, evidence-based product design.',
      },
    ],
  },
  {
    slug: 'nsa-redesign',
    shortTitle: 'NSA · Public web',
    headline:
      'Modernizing declassified intelligence: a strategic redesign of the NSA’s public architecture.',
    dek: 'An end-to-end redesign focused on updating site architecture to present cybersecurity best practices and threat-detection guidance to the general U.S. population.',
    meta: [
      { label: 'Context', value: 'NSA · Web redesign & information architecture' },
      { label: 'Role', value: 'UX research · IA · UI concepts' },
      { label: 'Audience', value: 'U.S. general public (broad demographic)' },
      {
        label: 'Methods',
        value: 'Card sorting · affinity mapping · A/B testing · accessibility heuristics',
      },
    ],
    problem: {
      title: 'The problem',
      paragraphs: [
        'People trying to stay current on cybersecurity threats found the existing public site difficult to navigate: search and primary navigation failed basic usability expectations for scanning and orientation.',
        'Research surfaced a feeling of displacement — users could not predict where declassified and educational content would live, which eroded trust and task success for dense, sensitive topics.',
      ],
      bullets: [
        'Complex categories need logical grouping before UI work',
        'Search and nav must work together for data-heavy government publishing',
        'Trust depends on clarity, not novelty',
      ],
    },
    solution: {
      title: 'The solution',
      paragraphs: [
        'A restructuring effort led with card sorting and affinity mapping so content types such as threat intelligence and cybersecurity advisories mapped to mental models, not org charts.',
        'Two navigation iterations were developed in sequence: the second version responded to A/B testing that showed the first still left users feeling lost.',
      ],
      bullets: [
        'Redline annotations captured known failures in the legacy experience',
        'New sitemap and nav models reduced displacement and supported scan-first behavior',
        'High-contrast patterns and persistent wayfinding (e.g. “Back to top”) for ages 25–64',
      ],
    },
    sections: [
      {
        id: 'research-ia',
        title: 'Research & information architecture',
        paragraphs: [
          'Card sorting and affinity mapping produced a defensible category system before visual design. The goal was to make “where am I?” answerable within one glance for first-time visitors and returning readers alike.',
        ],
        figures: [
          figure('Sitemap & category model (placeholder)', 'wide'),
          figure('Card-sort clusters → nav scheme (placeholder)', 'pair'),
        ],
      },
      {
        id: 'adoption',
        title: 'Adoption & handoff',
        paragraphs: [
          'Deliverables included redline annotations of legacy failures, a new sitemap, and two distinct navigation iterations — with the second shaped by A/B test learnings on orientation and findability.',
          'Accessibility-minded UI patterns (contrast, anchors, predictable structure) were treated as part of trust-building for a broad public audience.',
        ],
      },
    ],
    takeaways: [
      {
        title: 'Information architecture is foundation',
        body: 'For data-heavy government sites, card sorting is required to logically encompass categories before UI design begins.',
      },
      {
        title: 'Validation via A/B testing',
        body: 'Iteration two was developed only after A/B testing revealed the first version still left users feeling lost.',
      },
      {
        title: 'Trust through accessibility',
        body: 'For a broad demographic (ages 25–64), high-contrast UI and clear “Back to top” anchors are essential for building digital trust.',
      },
    ],
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

export function getCaseStudyIndex(slug: string): number {
  return caseStudies.findIndex((c) => c.slug === slug)
}

export function getAdjacentCaseStudies(slug: string): {
  prev: CaseStudy | null
  next: CaseStudy | null
} {
  const i = getCaseStudyIndex(slug)
  if (i < 0) return { prev: null, next: null }
  return {
    prev: i > 0 ? caseStudies[i - 1]! : null,
    next: i < caseStudies.length - 1 ? caseStudies[i + 1]! : null,
  }
}
