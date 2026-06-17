/** Short explanations shown when a skill or strength chip is clicked. */
export const skillDescriptions: Record<string, string> = {
  // Core strengths
  'AI-Augmented Design':
    'Using AI tools and models to speed research, prototyping, and exploration—without replacing human judgment.',
  'Human-Centered AI':
    'Designing AI around real user needs, trust, and control—not technology for its own sake.',
  'Conversational UX':
    'Chat, voice, and agent interfaces that feel natural, clear, and easy to recover from.',
  'A/B Testing':
    'Controlled experiments on UI and copy to validate what improves conversion and task success.',
  'Interaction Design':
    'Flows, states, feedback, and micro-interactions that make products feel responsive.',
  'Accessible UI':
    'Interfaces that meet WCAG standards and work across abilities, devices, and contexts.',
  'Brand Development':
    'Visual identity, tone, and consistency so products feel coherent and memorable.',
  'User Research':
    'Interviews, tests, and synthesis to ground decisions in evidence—not assumptions.',
  'AI Interaction Design':
    'Patterns for prompts, model outputs, errors, and opt-in when AI is in the product.',

  // Design tools
  'Figma suite':
    'Figma for UI design, prototyping, and design systems — including Make, Buzz, and MCP integrations.',
  Figma: 'Primary tool for UI design, prototyping, and design systems.',
  'Figma MCP': 'Connecting Figma to AI dev tools for design-to-code workflows.',
  'Adobe XD': 'Prototyping and screen design for web and mobile flows.',
  Photoshop: 'Image editing, compositing, and visual asset prep.',
  Illustrator: 'Vector graphics, icons, and illustration.',
  InDesign: 'Layout for print and long-form collateral.',
  'After Effects': 'Motion graphics and UI animation.',
  Animate: 'Interactive animation and export for web.',
  Lightroom: 'Photo editing and color grading.',
  Rive: 'Interactive animations and stateful motion for product UI.',
  'Axure RP 9': 'High-fidelity prototyping with complex logic.',
  'Adobe Creative Cloud': 'Full suite for cross-media design production.',

  // AI & LLMs
  Claude: "Anthropic's LLM for reasoning, writing, and agent-assisted workflows.",
  ChatGPT: 'OpenAI assistant for ideation, copy, and rapid prototyping.',
  Gemini: "Google's multimodal model for research and generation tasks.",
  'OpenAI API': 'Programmatic access to GPT models for product features and tools.',
  'MCP Servers': 'Model Context Protocol links that connect AI to tools and data sources.',
  'Perplexity AI': 'Research and citation-backed answers for discovery work.',
  Midjourney: 'AI image generation for concept exploration and mood boards.',
  'DALL·E': 'OpenAI image generation for visual concepts.',
  'Runway ML': 'AI video and generative media for motion concepts.',
  Sora: 'AI video generation for storytelling and concept reels.',
  'Prompt Engineering': 'Structuring inputs so LLMs return reliable, useful outputs.',
  'AI Agents': 'Autonomous workflows that chain tools and steps to complete tasks.',
  'Agentic Workflows': 'Multi-step AI pipelines with human checkpoints and fallbacks.',
  RAG: 'Retrieval-augmented generation—grounding LLM answers in your own documents.',
  'LLM Evaluation': 'Testing model outputs for accuracy, tone, and usability before ship.',

  // Languages
  HTML: 'Semantic markup for accessible, SEO-friendly web structure.',
  CSS: 'Layout, typography, and responsive styling—including modern features like Grid and Flexbox.',
  JavaScript: 'Interactive behavior and logic in the browser.',
  TypeScript: 'Typed JavaScript for safer, more maintainable front-end code.',

  // Frameworks & platforms
  React: 'Component-based UI library for building interactive web apps.',
  'Next.js': 'React framework with routing, SSR, and production-ready defaults.',
  'Node.js': 'JavaScript runtime for scripts, APIs, and server-side tooling.',
  Bootstrap: 'CSS framework for rapid responsive layout and components.',
  'Tailwind CSS': 'Utility-first CSS for fast, consistent styling in code.',
  Webflow: 'Visual web builder for marketing sites and no-code prototypes.',
  Supabase: 'Postgres backend with auth, storage, and real-time APIs.',
  Vercel: 'Hosting and deploys for front-end apps and serverless functions.',
  'D3.js': 'Data-driven documents for charts and interactive visualizations.',
  GitHub: 'Version control, collaboration, and CI for design and code.',

  // AI dev & IDEs
  Cursor: 'AI-native IDE for design-informed development and rapid iteration.',
  'Claude Code': 'Agentic coding assistant for implementation and refactors.',
  v0: 'Vercel AI UI generator for quick component and page prototypes.',
  Bolt: 'AI app builder for fast full-stack prototypes.',
  Replit: 'Cloud IDE for experiments and collaborative coding.',
  Lovable: 'AI-assisted app builder for shipping MVPs quickly.',
  'GitHub Copilot': 'Inline code suggestions inside VS Code and other editors.',
  'VS Code': 'Primary code editor for front-end and config work.',

  // Collaboration & PM
  Notion: 'Docs, wikis, and project hubs for design and product notes.',
  Jira: 'Issue tracking and sprint planning with engineering teams.',
  Confluence: 'Team documentation and requirements.',
  Trello: 'Lightweight boards for tasks and workflow visibility.',
  'Agile/Scrum': 'Iterative delivery in sprints with standups and retros.',
  'MS Teams': 'Chat, meetings, and integrations for enterprise collaboration.',
  'MS Office Suite': 'Word, Excel, and PowerPoint for stakeholder deliverables.',
  'Google Workspace': 'Docs, Sheets, and Slides for async collaboration.',
}

export function getSkillDescription(label: string): string {
  return (
    skillDescriptions[label] ??
    `${label} — part of my day-to-day product design and build toolkit.`
  )
}
