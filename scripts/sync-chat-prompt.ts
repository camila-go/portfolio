import { writeFileSync } from 'node:fs'
import { buildChatSystemPrompt } from '../src/data/chatKnowledge.ts'

const prompt = buildChatSystemPrompt()
writeFileSync(
  'api/lib/systemPrompt.ts',
  `export const SYSTEM_PROMPT = ${JSON.stringify(prompt)} as const\n`,
)
console.log(`Wrote api/lib/systemPrompt.ts (${prompt.length} chars)`)
