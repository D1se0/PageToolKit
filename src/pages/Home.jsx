import { useMemo } from 'react'
import Hero from '../components/Hero.jsx'
import FilterBar from '../components/FilterBar.jsx'
import RepoGrid, { countRepos } from '../components/RepoGrid.jsx'

export default function Home({ team, setTeam, category, setCategory, search, setSearch }) {
  const count = useMemo(() => countRepos(team, search), [team, search])

  return (
    <>
      <Hero team={team} setTeam={setTeam} />

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
    </>
  )
}
