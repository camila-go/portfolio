export const site = {
  /** Legal / portfolio header */
  fullName: 'Camila Gonzalez',
  /** Hero first line */
  displayName: 'Camila',
  /** Informal */
  shortName: 'Cami',
  /** Domain for system chrome */
  handle: 'camilagonzalez.xyz',
  /** Subtitle under name (from résumé) */
  roles: 'AI Product Designer · Product design & strategy · Visual storytelling',
  /** One-line positioning */
  tagline:
    'Creative, detail-oriented AI Product Designer with 6.5 years of professional design experience — 4.5+ focused on product design and UX/UI — translating complex ideas into intuitive products that pair emerging AI with accessible, scalable systems.',
  /** CLI / OS label */
  sysVersion: 'CG_PORTFOLIO v2026.1',
  email: 'camil4.gon@gmail.com',
  phone: '678-577-2248',
  websiteUrl: 'https://camilagonzalez.xyz',
  languages: 'Spanish (fluent) · French (working knowledge)',
  headshot: '/camila-headshot.jpg',
  resumePdf: '/cGonzalezResume2026.pdf',
  caseStudyFocus:
    'Case Studies: AI Product Design · Enterprise UX · Design Systems',
} as const

export const coreCompetencies = [
  'Product Design',
  'UX Research',
  'Interaction Design',
  'Design Systems',
  'AI Product Design',
  'Generative AI',
  'Prompt Engineering',
  'Conversational UX',
  'AI Interaction Design',
  'Human-Centered AI',
  'Agentic Workflows',
  'LLM Evaluation',
  'Prompt Design',
  'User Flows',
  'Wireframing',
  'Rapid Prototyping',
  'Accessibility (WCAG)',
  'A/B Testing',
  'Product Strategy',
  'Information Architecture',
  'Cross-functional Leadership',
  'Design Thinking',
] as const

export const skillGroups = [
  {
    label: 'Design',
    tags: [
      'Figma',
      'Figma MCP',
      'Adobe XD',
      'Photoshop',
      'Illustrator',
      'InDesign',
      'After Effects',
      'Animate',
      'Lightroom',
      'Rive',
      'Axure RP 9',
      'Adobe Creative Cloud',
    ],
  },
  {
    label: 'AI & LLMs',
    tags: [
      'Claude',
      'ChatGPT',
      'Gemini',
      'OpenAI API',
      'MCP Servers',
      'Perplexity AI',
      'Midjourney',
      'DALL·E',
      'Runway ML',
      'Sora',
      'Prompt Engineering',
      'AI Agents',
      'Agentic Workflows',
      'RAG',
      'LLM Evaluation',
      'Conversational UX',
      'AI Interaction Design',
    ],
  },
  {
    label: 'Languages',
    tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Frameworks & Platforms',
    tags: [
      'React',
      'Next.js',
      'Node.js',
      'Bootstrap',
      'Tailwind CSS',
      'Webflow',
      'Supabase',
      'Vercel',
      'D3.js',
      'GitHub',
    ],
  },
  {
    label: 'AI Dev & IDEs',
    tags: [
      'Cursor',
      'Claude Code',
      'v0',
      'Bolt',
      'Replit',
      'Lovable',
      'GitHub Copilot',
      'VS Code',
    ],
  },
  {
    label: 'Collaboration & PM',
    tags: [
      'Notion',
      'Jira',
      'Confluence',
      'Trello',
      'Agile/Scrum',
      'MS Teams',
      'MS Office Suite',
      'Google Workspace',
    ],
  },
] as const

export const coreStrengths = [
  'AI-Augmented Design',
  'Human-Centered AI',
  'Conversational UX',
  'A/B Testing',
  'Interaction Design',
  'Accessible UI',
  'Brand Development',
  'User Research',
  'AI Interaction Design',
] as const

/** @deprecated Use coreStrengths in About — kept for any legacy imports */
export const strengths = coreStrengths

export const certifications = [
  { name: 'AI in Product Design', issuer: 'ELVTR' },
  { name: 'Full Stack Web Design Certificate', issuer: 'DevMountain' },
  { name: 'UI/UX Bootcamp Certificate', issuer: 'Georgia Tech University' },
] as const

export const achievements = [
  { title: 'Companywide AI Hackathon Winner', org: 'SEI' },
  { title: 'Top 10 in the U.S.', org: 'IBM Creative Jam UI/UX (2019)' },
  {
    title: 'Adobe Government Recognition',
    org: 'for design excellence',
  },
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
    label: 'Leaders at summit',
    value: '300+',
    accent: 'text-cami-mint',
    glow: 'shadow-[0_0_28px_rgba(74,222,128,0.2)]',
    detail:
      'Jynx at SEI — AI event networking with Teams integration, product design and build for internal leadership conferences.',
  },
  {
    id: 'experience',
    label: 'Design experience',
    value: '6.5 yrs',
    accent: 'text-cami-cyan',
    glow: 'shadow-[0_0_28px_rgba(34,211,238,0.18)]',
    detail:
      '6.5 years in professional design — 4.5+ concentrated in product design and UX/UI, from research to shipped UI and systems.',
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
      'Strategic redesign of Georgia Aquarium’s Dive Program in the Cloud (DPIC): offline-sync as the MVP for a “bad internet” environment, heuristic-driven IA before visual polish, and logging flows that keep divers focused on operations—not the UI.',
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
    role: 'UI/UX Designer · Product Designer',
    dates: 'Aug 2022 — Present',
    highlights: [
      'Improved email conversion rates by 300% through A/B testing and user research insights.',
      'Designed AI-integrated enrollment and internal workflow tools for Capella and Strayer University, impacting 50,000+ users and increasing lead generation across web and email campaigns.',
      'Led 20+ usability testing sessions with iterative design cycles, improving accessibility and task completion across key enrollment flows.',
      'Designed AI-powered user experiences using LLMs, including prompt flows and conversational interfaces for student-facing products.',
      'Collaborated with engineering on AI feature development, evaluating model outputs for usability and refining interaction patterns.',
      'Conducted prompt engineering and rapid AI prototyping to accelerate design-to-development handoff.',
      'Maintained and expanded a design system used across 8+ product teams, ensuring consistency and WCAG accessibility compliance.',
      'Introduced agentic AI workflows and AI-assisted design tooling.',
      'Winner of companywide AI Hackathon.',
    ],
  },
  {
    company: 'Walmart',
    role: 'UX Designer (Contract)',
    dates: 'Mar 2022 — Aug 2022',
    highlights: [
      'Designed enterprise SaaS compliance tools for Walmart Global Tech’s anti-money laundering division — including a suspicious activity tracking dashboard and a legal claims lookup application — supporting a compliance program that has blocked over $700M in fraudulent money transfers.',
      'Partnered with product managers and engineers in Agile sprints to define requirements and deliver compliance UX on tight timelines.',
      'Conducted stakeholder workshops and created user flows and journey maps for complex financial compliance workflows.',
      'Reduced workflow friction for compliance analysts through information architecture improvements and streamlined dashboard navigation.',
      'Designed enterprise dashboards for high-volume operational teams, translating regulatory requirements into intuitive UI patterns.',
      'Created design patterns and prototypes informing product roadmaps for internal compliance tools.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Designer',
    dates: 'Dec 2019 — Present',
    highlights: [
      'Delivered AI-enhanced branding, UI designs, and product interfaces for diverse clients.',
      'Produced web, print, and motion graphics optimized for user experience and conversions.',
    ],
  },
] as const

export const navItems = [
  { id: 'home', label: 'HOME' },
  { id: 'work', label: 'WORK' },
  { id: 'about', label: 'ABOUT' },
  { id: 'resume', label: 'RESUME' },
] as const
