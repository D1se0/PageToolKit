import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import RepoDetail from './pages/RepoDetail.jsx'
import NotFound from './pages/NotFound.jsx'

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
}

export default function App() {
  const [team, setTeam] = useState('all')
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')
  const location = useLocation()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', team)
  }, [team])

  useEffect(() => {
    setCategory('all')
  }, [team])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [location.pathname])

  const handleSetTeam = (t) => setTeam((prev) => (prev === t ? 'all' : t))

  return (
    <div className="app-shell">
      <Navbar team={team} setTeam={setTeam} />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Routes location={location}>
            <Route
              path="/"
              element={
                <Home
                  team={team}
                  setTeam={handleSetTeam}
                  category={category}
                  setCategory={setCategory}
                  search={search}
                  setSearch={setSearch}
                />
              }
            />
            <Route path="/repo/:slug" element={<RepoDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  )
}
