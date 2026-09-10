import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FilterBar from './components/FilterBar.jsx'
import RepoGrid, { countRepos } from './components/RepoGrid.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [team, setTeam] = useState('all')
  const [category, setCategory] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', team)
  }, [team])

  useEffect(() => {
    setCategory('all')
  }, [team])

  const count = useMemo(() => countRepos(team, search), [team, search])

  const handleSetTeam = (t) => setTeam((prev) => (prev === t ? 'all' : t))

  return (
    <div className="app-shell">
      <Navbar team={team} setTeam={setTeam} />
      <Hero team={team} setTeam={handleSetTeam} />

      <main className="content" id="arsenal">
        <FilterBar
          team={team}
          category={category}
          setCategory={setCategory}
          search={search}
          setSearch={setSearch}
          count={count}
        />
        <RepoGrid team={team} category={category} search={search} />
      </main>

      <Footer />
    </div>
  )
}
