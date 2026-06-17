const URL_RE =
  /https?:\/\/[^\s,)]+|(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[^\s,)]*)?/g

function toHref(match: string): string {
  return match.startsWith('http') ? match : `https://${match}`
}

export function AutoLinkText({ text }: { text: string }) {
  const nodes: React.ReactNode[] = []
  let lastIndex = 0

  for (const match of text.matchAll(URL_RE)) {
    const url = match[0]
    const index = match.index ?? 0

    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index))
    }

    nodes.push(
      <a
        key={index}
        href={toHref(url)}
        target="_blank"
        rel="noreferrer"
        className="text-orange-400 underline-offset-2 transition hover:text-orange-300 hover:underline"
      >
        {url}
      </a>,
    )

    lastIndex = index + url.length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return <>{nodes}</>
}
