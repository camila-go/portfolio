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
  roles: 'AI Product Designer · Product Strategist · Visual Storyteller',
  /** One-line positioning */
  tagline:
    'Creative, detail-oriented designer with 6 years in professional design — 3.5+ focused on UX/UI — translating complex ideas into intuitive products that pair emerging AI with accessible, scalable systems.',
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
      '3.5+ years concentrated in UX/UI and product — from research to shipped UI and systems.',
  },
] as const

/** Selected work — aligned to résumé highlights (case study pages can follow). */
export const projects = [
  {
    id: 'sei-ai-edu',
    index: '01',
    title: 'AI-integrated enrollment & internal tools',
    tag: 'SEI · Higher ed · AI',
    year: '2022 — present',
    status: 'Shipping',
    statusTone: 'mint' as const,
    excerpt:
      'UX/UI for Capella & Strayer: AI-assisted enrollment flows, internal workflow tools, and email/campaign experiences — 50,000+ users touched, stronger lead generation, and company-wide AI hackathon win for new design approaches.',
    accent: 'from-fuchsia-500/25 to-cyan-500/10',
  },
  {
    id: 'walmart-enterprise',
    index: '02',
    title: 'Enterprise internal tools at scale',
    tag: 'Walmart · Contract',
    year: '2022',
    status: 'Shipped',
    statusTone: 'mint' as const,
    excerpt:
      'Logistics & employee scheduling for 1.5M+ associates: complex workflows distilled into usable UI, prototypes that informed roadmaps, and patterns adopted across internal products.',
    accent: 'from-violet-500/25 to-rose-500/10',
  },
  {
    id: 'freelance-ai-brand',
    index: '03',
    title: 'Freelance — AI-enhanced product & brand',
    tag: 'Freelance · Multi-client',
    year: '2019 — present',
    status: 'Ongoing',
    statusTone: 'amber' as const,
    excerpt:
      'Branding, UI, and interfaces for varied clients — web, print, and motion — with AI-assisted workflows where they amplify craft and speed.',
    accent: 'from-cyan-500/20 to-amber-500/10',
  },
] as const

export const experience = [
  {
    company: 'SEI (Strategic Education, Inc.)',
    role: 'UI/UX Designer · Product Designer',
    dates: 'Aug 2022 — Present',
    highlights: [
      '↑ Email conversion ~300% via A/B tests and research-informed UI.',
      'AI-integrated enrollment & internal tools for Capella & Strayer — 50,000+ users; stronger leads across web & email.',
      'Usability testing & iteration for accessibility and engagement.',
      'Design systems with dev, copy, and PM partners; AI-driven workflows & personalization.',
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
