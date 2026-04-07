export function FooterNav() {
  return (
    <footer className="border-t border-cami-border/40 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-mono text-[10px] text-cami-muted">
          © {new Date().getFullYear()} Camila Gonzalez · Built with React &amp;
          Tailwind
        </p>
      </div>
    </footer>
  )
}
