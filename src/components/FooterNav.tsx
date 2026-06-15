export function FooterNav() {
  return (
    <footer className="border-t border-cami-border/40 px-4 py-10">
      <div className="mx-auto max-w-6xl space-y-3">
        <p className="text-center font-mono text-[10px] leading-relaxed text-cami-muted">
          Fonts:{' '}
          <a
            href="https://fonts.google.com/specimen/DM+Sans"
            className="underline-offset-2 hover:text-cami-cyan hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            DM Sans
          </a>{' '}
          &amp;{' '}
          <a
            href="https://fonts.google.com/specimen/JetBrains+Mono"
            className="underline-offset-2 hover:text-cami-cyan hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            JetBrains Mono
          </a>{' '}
          (SIL Open Font License 1.1 —{' '}
          <a
            href="/fonts/licenses/OFL-DM-Sans.txt"
            className="underline-offset-2 hover:text-cami-cyan hover:underline"
          >
            DM Sans license
          </a>
          ,{' '}
          <a
            href="/fonts/licenses/OFL-JetBrains-Mono.txt"
            className="underline-offset-2 hover:text-cami-cyan hover:underline"
          >
            JetBrains Mono license
          </a>
          )
        </p>
        <p className="text-center font-mono text-[10px] text-cami-muted">
          © {new Date().getFullYear()} Camila Gonzalez · Built with React &amp;
          Tailwind
        </p>
      </div>
    </footer>
  )
}
