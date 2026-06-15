import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PasswordGate } from './components/PasswordGate'
import { isAuthenticated } from './lib/siteAuth'
import CaseStudyPage from './pages/CaseStudyPage'
import HomePage from './pages/HomePage'

function App() {
  const [authed, setAuthed] = useState(() => isAuthenticated())

  if (!authed) {
    return <PasswordGate onSuccess={() => setAuthed(true)} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/work/sei-ai-edu"
          element={<Navigate to="/work/jynx-networking" replace />}
        />
        <Route
          path="/work/walmart-enterprise"
          element={<Navigate to="/#work" replace />}
        />
        <Route
          path="/work/freelance-ai-brand"
          element={<Navigate to="/#work" replace />}
        />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
