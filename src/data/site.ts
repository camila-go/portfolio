export const site = {
  /** Legal / portfolio header */
  fullName: 'Camila Gonzalez',
  /** Hero first line */
  displayName: 'Camila',
  /** Informal */
  shortName: 'Cami',
  /** Domain for system chrome */
  handle: 'camilagonzalez.com',
  /** Subtitle under name (from résumé) */
  roles: 'AI Product Designer · Product design & strategy · Visual storytelling',
  /** One-line positioning */
  tagline:
    'Creative, detail-oriented designer with 6 years in professional design — 3.5+ focused on product design and UX/UI — translating complex ideas into intuitive products that pair emerging AI with accessible, scalable systems.',
  /** CLI / OS label */
  sysVersion: 'CG_PORTFOLIO v2025.1',
  email: 'camil4.gon@gmail.com',
  phone: '678-577-2248',
  websiteUrl: 'https://camilagonzalez.com',
  languages: 'Spanish (fluent) · French (working knowledge)',
  resumePdf: '/cGonzalezResume2025.pdf',
} as const

export const strengths = [
  'AI-augmented product design',
  'A/B testing & experimentation',
  'Interaction & responsive UI',
  'Accessible UI & design systems',
  'User research & product lifecycle',
  'Cross-functional collaboration',
] as const

export const certifications = [
  'AI in Product Design — ELVTR',
  'Full Stack Web Design — DevMountain (HTML, CSS, JS, responsive)',
  'UI/UX Bootcamp — Georgia Tech University',
] as const

export const achievements = [
  'Top 10 in the U.S. — IBM Creative Jam UI/UX (2019)',
  'Adobe Government Recognition for design excellence',
  'Company-wide AI Hackathon winner — SEI',
] as const

export const education = {
  school: 'School of the Art Institute of Chicago',
  degree: 'BFA, Visual Communication',
  year: '2019',
} as const

export const metrics = [
  {
    id: 'conversion',
    label: 'Email conversion lift',
    value: '300%',
    accent: 'text-cami-amber',
    glow: 'shadow-[0_0_28px_rgba(251,191,36,0.2)]',
    detail:
      'At SEI — driven by A/B testing, research, and iterative UI for enrollment and campaign flows.',
  },
  {
    id: 'reach',
    label: 'Scale (enterprise)',
    value: '1.5M+',
    accent: 'text-cami-mint',
    glow: 'shadow-[0_0_28px_rgba(74,222,128,0.2)]',
    detail:
      'Walmart contract — internal logistics & scheduling tools across 4,700+ stores.',
  },
  {
    id: 'experience',
    label: 'Design experience',
    value: '6 yrs',
    accent: 'text-cami-cyan',
    glow: 'shadow-[0_0_28px_rgba(34,211,238,0.18)]',
    detail:
      '3.5+ years concentrated in product design and UX/UI — from research to shipped UI and systems.',
  },
] as const

/** Selected work — aligned to résumé highlights (case study pages can follow). */
export const projects = [
  {
    id: 'jynx-networking',
    index: '01',
    title: 'Jynx — AI event networking + Teams (SEI)',
    tag: 'SEI · Events · AI',
    year: '2025',
    status: 'Live',
    statusTone: 'mint' as const,
    excerpt:
      'Product design and build for this shipped networking app at SEI leadership conferences: AI-assisted matching and Microsoft Teams integration for 300+ attendees. Built with Cursor, Vercel, and Supabase — so leaders connect without leaving how they already work.',
    accent: 'from-fuchsia-500/25 to-cyan-500/10',
    liveUrl: 'https://www.jynxnetworking.app/welcome',
    liveLabel: 'GS26 welcome page',
  },
  {
    id: 'dpic-dive-cloud',
    index: '02',
    title: 'DPIC — Dive Program in the Cloud',
    tag: 'ADPA · Responsive app & PWA',
    year: '2019',
    status: 'Case study',
    statusTone: 'amber' as const,
    excerpt:
      'Strategic redesign of the Dive Program in the Cloud (DPIC) for Georgia Aquarium: complex dive logging made mobile-first, with offline-sync so pros and volunteers can record safely when connectivity fails.',
    accent: 'from-orange-500/20 to-cyan-900/20',
  },
  {
    id: 'nsa-redesign',
    index: '03',
    title: 'NSA — Public web redesign & IA',
    tag: 'NSA · Web redesign & IA',
    year: '2020',
    status: 'Case study',
    statusTone: 'amber' as const,
    excerpt:
      'End-to-end redesign of the NSA public site architecture: clearer paths to cybersecurity guidance and threat information for a general U.S. audience, grounded in research and card sorting.',
    accent: 'from-slate-500/25 to-blue-900/20',
  },
] as const

export const experience = [
  {
    company: 'SEI (Strategic Education, Inc.)',
    role: 'Product Designer — product design & UX/UI',
    dates: 'Aug 2022 — Present',
    highlights: [
      '↑ Email conversion ~300% via A/B tests and research-informed UI.',
      'Product design and build: Jynx — AI event networking with Teams integration for 300+ leaders (Cursor, Vercel, Supabase; jynxnetworking.app).',
      'AI-integrated enrollment & internal tools for Capella & Strayer — 50,000+ users; stronger leads across web & email.',
      'Usability testing, design systems with dev/copy/PM; AI-driven workflows & personalization.',
    ],
  },
  {
    company: 'Walmart',
    role: 'UX Designer (Contract)',
    dates: 'Mar 2022 — Aug 2022',
    highlights: [
      'Enterprise apps — logistics & scheduling — for 1.5M+ associates, 4,700+ stores.',
      'Simplified heavy workflows; prototypes steered internal roadmaps.',
    ],
  },
  {
    company: 'Michael Coleman Creative Agency',
    role: 'Digital Designer',
    dates: 'Dec 2021 — Feb 2022',
    highlights: [
      'Digital projects bridging dev and design — UI, banners, and brand assets.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Designer',
    dates: 'Dec 2019 — Present',
    highlights: [
      'AI-enhanced branding, UI, and product interfaces; web, print, and motion focused on UX and conversions.',
    ],
  },
] as const

export const navItems = [
  { id: 'home', label: 'HOME' },
  { id: 'work', label: 'WORK' },
  { id: 'about', label: 'ABOUT' },
  { id: 'resume', label: 'RESUME' },
] as const
