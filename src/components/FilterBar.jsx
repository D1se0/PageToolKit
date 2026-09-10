import Icon from './Icon.jsx'
import { RED_CATEGORIES, BLUE_CATEGORIES } from '../data/repos.js'

function categoriesForTeam(team) {
  if (team === 'red') return RED_CATEGORIES
  if (team === 'blue') return BLUE_CATEGORIES
  return [...RED_CATEGORIES, ...BLUE_CATEGORIES]
}

export default function FilterBar({ team, category, setCategory, search, setSearch, count }) {
  const categories = categoriesForTeam(team)

  return (
    <div className="filterbar">
      <div className="search-box">
        <Icon name="folderSearch" size={17} />
        <input
          type="text"
          placeholder="Buscar herramienta, tecnología o técnica…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button className="clear-search" onClick={() => setSearch('')} aria-label="Limpiar búsqueda">
            ×
          </button>
        )}
      </div>

      <div className="chip-row">
        <button className={`chip ${category === 'all' ? 'active' : ''}`} onClick={() => setCategory('all')}>
          Todas ({count})
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            className={`chip ${category === c.id ? 'active' : ''}`}
            onClick={() => setCategory(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  )
}
