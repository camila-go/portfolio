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
    slug: 'sei-ai-edu',
    shortTitle: 'SEI · AI & enrollment',
    headline:
      'An “all-in-one” motion for enrollment: AI-assisted flows that stay human.',
    dek: 'Higher-ed web, email, and internal tools for Capella & Strayer — research-led UI, measurable lift, and responsible AI patterns.',
    meta: [
      { label: 'Role', value: 'UI/UX · Product design' },
      { label: 'Org', value: 'SEI (Strategic Education, Inc.)' },
      { label: 'Timeline', value: '2022 — present' },
      {
        label: 'Tools',
        value: 'Figma (Make, Buzz), research, design system, A/B tooling',
      },
    ],
    problem: {
      title: 'The problem',
      paragraphs: [
        'Prospective students were bouncing between marketing sites, application steps, and follow-up emails that didn’t always feel like one journey. Internal teams needed faster ways to ship experiments without breaking brand or accessibility.',
        'Lead quality and conversion varied by channel; the product surface area was large (web + email + internal ops), so small inconsistencies compounded.',
      ],
      bullets: [
        'Fragmented narrative across touchpoints',
        'Heavy coordination between marketing, product, and ops',
        'Pressure to introduce AI without eroding trust',
      ],
    },
    solution: {
      title: 'The solution',
      paragraphs: [
        'A cohesive enrollment story with reusable patterns, clear states for AI-assisted steps, and a testing cadence so we could learn fast without guessing.',
        'Design system extensions, usability sessions, and iterative UI shipped in partnership with engineering and copy — with accessibility and consent surfaced early.',
      ],
      bullets: [
        'Unified components + content patterns across web & email',
        'Explainable AI affordances and recovery paths',
        'Experimentation tied to conversion and lead quality metrics',
      ],
    },
    sections: [
      {
        id: 'process',
        title: 'Designing for clarity under complexity',
        paragraphs: [
          'We mapped critical paths (discover → apply → enroll) and pressure-tested edge cases: returning visitors, incomplete applications, and counselor-assisted flows.',
          'Low-fidelity flows graduated into high-fidelity UI with realistic data so stakeholders could react to the real density of the experience.',
        ],
        figures: [
          figure('Early IA + flow exploration (placeholder)', 'pair'),
          figure('Responsive layouts — mobile-first enrollment (placeholder)', 'pair'),
        ],
      },
      {
        id: 'systems',
        title: 'Systems that scale experiments',
        paragraphs: [
          'Tokens, type, and components were tuned so squads could assemble new pages without one-off styles. That made A/B tests cheaper to execute and easier to read in results.',
        ],
        bullets: [
          'Shared patterns for hero modules, forms, and confirmations',
          'Documentation that engineering could trust during handoff',
        ],
        figures: [figure('Design system snapshot — components at a glance (placeholder)', 'wide')],
      },
      {
        id: 'visual',
        title: 'Visual design & craft',
        paragraphs: [
          'Visual language balanced institutional trust with a modern product feel: strong hierarchy, generous spacing, and motion used sparingly for feedback — not decoration.',
        ],
        figures: [
          figure('End-to-end mobile sequence (placeholder)', 'tall'),
          figure('Gallery — breadth of modules & states (placeholder)', 'gallery'),
        ],
      },
    ],
    takeaways: [
      {
        title: 'Measure the journey, not just the screen',
        body: 'Connecting web + email experiments to the same narrative made wins legible to partners outside design.',
      },
      {
        title: 'AI works when the UI admits uncertainty',
        body: 'Clear defaults, explainability, and escape hatches kept automation from feeling risky to applicants and staff.',
      },
      {
        title: 'Systems are a strategy for speed',
        body: 'Investing in reusable UI paid off every time we launched another test — less rework, cleaner learning.',
      },
    ],
  },
  {
    slug: 'walmart-enterprise',
    shortTitle: 'Walmart · Enterprise UX',
    headline: 'Internal tools at Walmart scale: logistics & scheduling for 1.5M+ associates.',
    dek: 'Contract engagement focused on enterprise workflows — translating operational complexity into interfaces teams could adopt across thousands of stores.',
    meta: [
      { label: 'Role', value: 'UX Designer (Contract)' },
      { label: 'Focus', value: 'Logistics & employee scheduling' },
      { label: 'Timeline', value: 'Mar 2022 — Aug 2022' },
      { label: 'Tools', value: 'Figma, prototyping, workshops' },
    ],
    problem: {
      title: 'The problem',
      paragraphs: [
        'Associates and managers relied on dense internal tools where small inefficiencies multiplied across a massive footprint. Workflows crossed roles — scheduling changes could ripple through coverage and compliance.',
      ],
      bullets: [
        'High cognitive load on routine tasks',
        'Inconsistent patterns between related products',
        'Need for prototypes that could align PM + engineering early',
      ],
    },
    solution: {
      title: 'The solution',
      paragraphs: [
        'We reframed tasks around outcomes (“get coverage right fast”) and validated with iterative prototypes. Patterns were designed to travel: similar table/filter behaviors, predictable actions, and clear confirmation states.',
      ],
      bullets: [
        'Task-based IA and progressive disclosure for heavy data',
        'Design patterns referenced in roadmap conversations',
        'Collaboration with PM/engineering to land feasible slices',
      ],
    },
    sections: [
      {
        id: 'enterprise',
        title: 'Designing for operational reality',
        paragraphs: [
          'Wireframes focused on density and scanability — enterprise users don’t want clever; they want dependable. We prototyped states for errors, permissions, and partial data.',
        ],
        figures: [
          figure('Two-up comparison — before/after task flow (placeholder)', 'pair'),
          figure('Dashboard-scale view — scheduling overview (placeholder)', 'wide'),
        ],
      },
      {
        id: 'adoption',
        title: 'Adoption & handoff',
        paragraphs: [
          'Deliverables included annotated specs and interaction notes so engineering could ship with fewer loops. Where possible, we reused components that could extend to adjacent internal apps.',
        ],
      },
    ],
    takeaways: [
      {
        title: 'Prototype is a shared language',
        body: 'Interactive artifacts aligned stakeholders faster than static decks for gnarly workflows.',
      },
      {
        title: 'Design for the exception cases',
        body: 'Coverage and scheduling live at the edge cases — those screens needed as much love as the happy path.',
      },
      {
        title: 'Patterns beat one-off polish',
        body: 'Repeatable UI reduced engineering thrash and made the experience feel coherent store to store.',
      },
    ],
  },
  {
    slug: 'freelance-ai-brand',
    shortTitle: 'Freelance · AI & brand',
    headline: 'AI-enhanced product & brand work — fast craft without losing taste.',
    dek: 'Select freelance engagements spanning branding, UI, web, print, and motion — using AI tools where they accelerate exploration, never as a substitute for judgment.',
    meta: [
      { label: 'Role', value: 'Designer · Art direction' },
      { label: 'Clients', value: 'Various' },
      { label: 'Timeline', value: '2019 — present' },
      { label: 'Tools', value: 'Figma, Adobe CC, AI tooling (Midjourney, ChatGPT, etc.)' },
    ],
    problem: {
      title: 'The problem',
      paragraphs: [
        'Clients needed premium visual craft on startup timelines. Traditional pipelines couldn’t always explore enough directions before deadlines — especially across brand + UI + campaign assets.',
      ],
      bullets: [
        'Tight timelines vs. breadth of exploration',
        'Consistency across web, print, and motion',
        'Responsible use of generative tools with client trust',
      ],
    },
    solution: {
      title: 'The solution',
      paragraphs: [
        'A hybrid workflow: AI for divergence (mood, copy variants, rapid comps) and designer-led convergence (systems, accessibility, and final polish). Deliverables stayed anchored to brand strategy and measurable goals like conversion.',
      ],
      bullets: [
        'Brand kits + UI kits clients could extend',
        'Motion and web assets aligned to the same type + color logic',
        'Clear presentation of options so stakeholders could decide quickly',
      ],
    },
    sections: [
      {
        id: 'process',
        title: 'From mood to interface',
        paragraphs: [
          'Projects often started with positioning and visual territories, then moved into UI patterns and landing structures. Keeping a single thread from story to screen reduced rework late in the schedule.',
        ],
        figures: [
          figure('Brand exploration boards (placeholder)', 'pair'),
          figure('UI concepts — desktop + mobile (placeholder)', 'pair'),
        ],
      },
      {
        id: 'delivery',
        title: 'Delivery that ships',
        paragraphs: [
          'Handoffs included organized Figma files, export specs, and motion guidelines when needed — optimized for both developers and print partners.',
        ],
        figures: [figure('Collateral + web in one thread (placeholder)', 'wide')],
      },
    ],
    takeaways: [
      {
        title: 'AI is a multiplier, not a moral pass',
        body: 'Generative tools sped exploration; curation, taste, and QA stayed firmly human.',
      },
      {
        title: 'Systems beat single hero images',
        body: 'Clients got more value when deliverables included repeatable components and rules.',
      },
      {
        title: 'Show options with intent',
        body: 'Narrow, well-framed directions beat endless unstructured variations.',
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
