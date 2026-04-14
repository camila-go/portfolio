export type CaseStudyFigure = {
  caption: string
  /** Placeholder layout — swap for real assets later */
  variant: 'hero-stack' | 'pair' | 'wide' | 'tall' | 'gallery'
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

const figure = (caption: string, variant: CaseStudyFigure['variant']): CaseStudyFigure => ({
  caption,
  variant,
})

export const caseStudies: CaseStudy[] = [
  {
    slug: 'jynx-networking',
    shortTitle: 'Jynx · SEI · Shipped',
    headline:
      'AI event networking at scale — with Microsoft Teams — for 300+ people.',
    dek: 'Jynx is a shipped web experience for Strategic Education, Inc. leadership conferences (including GS26-style summit networking). I led product design end-to-end and built the app — AI-assisted matching and Teams integration — so attendees find the right connections during large internal events without leaving how they already work. The build used Cursor for development, Vercel for hosting and deploys, and Supabase for backend and data.',
    liveUrl: 'https://www.jynxnetworking.app/welcome',
    liveCtaLabel: 'Open GS26 welcome (live)',
    heroFigureCaption:
      'Jynx — event networking UI (add screenshots from production)',
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
          figure('Journey map — event phases & emotional peaks (placeholder)', 'wide'),
          figure('Early IA — profiles, matches, Teams handoff (placeholder)', 'pair'),
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
          figure('Teams-adjacent flows — states & edge cases (placeholder)', 'pair'),
        ],
      },
      {
        id: 'ai-ux',
        title: 'AI matching people can understand',
        paragraphs: [
          'Suggestions are only as good as the control users feel they have. Patterns emphasized why a match might make sense, how to accept or dismiss, and how to correct the system over time — critical when reputations and politics are in the room.',
        ],
        figures: [
          figure('Match cards — transparency, actions, feedback (placeholder)', 'tall'),
          figure('Gallery — density across breakpoints (placeholder)', 'gallery'),
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
      'Professional dive logging at aquarium scale: offline-sync for the Georgia Aquarium.',
    dek: 'A strategic redesign of the Dive Program in the Cloud (DPIC) system, translating complex logging requirements into a mobile-first interface that functions without an internet connection.',
    meta: [
      { label: 'Context', value: 'ADPA · Responsive app & PWA' },
      { label: 'Client', value: 'Georgia Aquarium — Dive Program in the Cloud (DPIC)' },
      { label: 'Role', value: 'Product design · UX/UI · visual system' },
      { label: 'Focus', value: 'Mobile-first logging · offline-sync · handoff-ready prototypes' },
      {
        label: 'Brand',
        value: 'UI Style Tile — #F9A26C, #325D79 · custom iconography',
      },
    ],
    problem: {
      title: 'The problem',
      paragraphs: [
        'Professional divers and volunteers at the Georgia Aquarium work in a “bad internet” environment that makes it hard to input safe, accurate data when it matters.',
        'The existing experience was described as a cumbersome interface: poor legibility, input targets that were hard to find, and flows that broke concentration. That lack of reliability reduced confidence in the tool and pulled attention away from dive operations.',
      ],
      bullets: [
        'Unreliable connectivity blocks real-time-only patterns',
        'Heavy forms need clarity, not decoration',
        'Trust in the app is tied to speed and accuracy underwater-adjacent workflows',
      ],
    },
    solution: {
      title: 'The solution',
      paragraphs: [
        'A mobile-first DPIC concept centered on offline-sync as the MVP: log locally, sync when the network returns, with states that make “pending” and “saved” obvious.',
        'Interaction patterns prioritized pain relievers — autofill where safe, forgiving edit states, and hierarchy that surfaces the next required field — before layering visual polish.',
      ],
      bullets: [
        'Heuristic evaluation to prioritize navigation and efficiency before visual refinement',
        'Responsive coverage across mobile, tablet, and desktop for volunteer and pro contexts',
        'Documented path from sketches to high-fidelity prototypes for engineering alignment',
      ],
    },
    sections: [
      {
        id: 'mobile-offline',
        title: 'Mobile-first & offline-sync',
        paragraphs: [
          'In unreliable environments, the most valuable feature is confidence that data will not be lost. The IA and screen flow were structured so critical logging paths work without a connection, with clear recovery when sync resumes.',
        ],
        figures: [
          figure('Logging flows — offline vs synced states (placeholder)', 'pair'),
          figure('Field hierarchy & legibility exploration (placeholder)', 'wide'),
        ],
      },
      {
        id: 'adoption',
        title: 'Adoption & handoff',
        paragraphs: [
          'Deliverables included a comprehensive UI Style Tile with Georgia Aquarium–aligned brand colors (#F9A26C, #325D79), custom iconography, and a documented design process from sketches through high-fidelity responsive prototypes.',
          'The final handoff packaged functional flows for mobile, tablet, and desktop so stakeholders could validate cross-device compatibility before build.',
        ],
      },
    ],
    takeaways: [
      {
        title: 'Offline-sync is the MVP',
        body: 'In unreliable environments, the ability to log data locally and sync later is the most valuable feature for stakeholders.',
      },
      {
        title: 'Functionality over polish',
        body: 'Professional tools need high-value pain relievers like autofill and easy edit states before purely aesthetic gains.',
      },
      {
        title: 'Hierarchy via heuristics',
        body: 'Using standardized evaluation frameworks ensured navigation and efficiency were prioritized before the visual layer was applied.',
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
