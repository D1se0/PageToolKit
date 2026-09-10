import RepoCard from './RepoCard.jsx'
import Icon from './Icon.jsx'
import { REPOS } from '../data/repos.js'

export default function RepoGrid({ team, category, search }) {
  const q = search.trim().toLowerCase()

  const filtered = REPOS.filter((r) => {
    if (team !== 'all' && r.team !== team) return false
    if (category !== 'all' && r.category !== category) return false
    if (q && !(r.name.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q) || r.lang.toLowerCase().includes(q))) {
      return false
    }
    return true
  })

  if (filtered.length === 0) {
    return (
      <div className="empty-state">
        <Icon name="folderSearch" size={34} strokeWidth={1.4} />
        <p>No se han encontrado herramientas con esos filtros.</p>
      </div>
    )
  }

  return (
    <div className="repo-grid">
      {filtered.map((repo, i) => (
        <RepoCard key={repo.name} repo={repo} style={{ animationDelay: `${Math.min(i, 12) * 45}ms` }} />
      ))}
    </div>
  )
}

export function countRepos(team, search) {
  const q = search.trim().toLowerCase()
  return REPOS.filter((r) => {
    if (team !== 'all' && r.team !== team) return false
    if (q && !(r.name.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q) || r.lang.toLowerCase().includes(q))) {
      return false
    }
    return true
  }).length
}
