import { About } from '../components/About'
import { FooterNav } from '../components/FooterNav'
import { Hero } from '../components/Hero'
import { Metrics } from '../components/Metrics'
import { ModuleStickyNav } from '../components/ModuleStickyNav'
import { ResumeSection } from '../components/ResumeSection'
import { SystemHeader } from '../components/SystemHeader'
import { TerminalPrompt } from '../components/TerminalPrompt'
import { Work } from '../components/Work'

export default function HomePage() {
  return (
    <div className="cami-mesh min-h-svh">
      <SystemHeader />
      <main>
        <Hero />
        <Metrics />
        <ModuleStickyNav />
        <Work />
        <About />
        <ResumeSection />
        <TerminalPrompt />
      </main>
      <FooterNav />
    </div>
  )
}
