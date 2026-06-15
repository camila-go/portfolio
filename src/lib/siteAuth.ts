const AUTH_STORAGE_KEY = 'cg_portfolio_authed'

/** SHA-256 of the site password — not stored in plaintext in source. */
const PASSWORD_HASH =
  '6ac573514babe18144ba4fbb5e03c55072f4c5fa7bbe9f9972f70699da2fe688'

async function sha256(value: string): Promise<string> {
  const data = new TextEncoder().encode(value)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export function isAuthenticated(): boolean {
  try {
    return sessionStorage.getItem(AUTH_STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

export function setAuthenticated(): void {
  sessionStorage.setItem(AUTH_STORAGE_KEY, '1')
}

export async function verifyPassword(input: string): Promise<boolean> {
  const hash = await sha256(input)
  return hash === PASSWORD_HASH
}
