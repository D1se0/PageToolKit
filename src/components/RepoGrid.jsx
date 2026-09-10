import { AnimatePresence, motion } from 'framer-motion'
import RepoCard from './RepoCard.jsx'
import Icon from './Icon.jsx'
import { REPOS } from '../data/repos.js'

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

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
      <motion.div className="empty-state" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Icon name="folderSearch" size={34} strokeWidth={1.4} />
        <p>No se han encontrado herramientas con esos filtros.</p>
      </motion.div>
    )
  }

  return (
    <motion.div className="repo-grid" variants={gridVariants} initial="hidden" animate="visible">
      <AnimatePresence mode="popLayout">
        {filtered.map((repo) => (
          <RepoCard key={repo.name} repo={repo} />
        ))}
      </AnimatePresence>
    </motion.div>
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
