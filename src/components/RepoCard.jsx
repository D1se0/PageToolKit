import Icon from './Icon.jsx'
import { RED_CATEGORIES, BLUE_CATEGORIES } from '../data/repos.js'

const LANG_COLORS = {
  Python: '#f1c40f',
  JavaScript: '#f0db4f',
  TypeScript: '#3ba9e0',
  HTML: '#e6714a',
  CSS: '#5b9dd9',
  Shell: '#8bd39a',
  'C#': '#a97bde',
  'C++': '#e06c9f',
  C: '#a3b1c6',
  Rust: '#e08a4d',
  Makefile: '#9aa0a6',
}

function categoryLabel(id) {
  const found = [...RED_CATEGORIES, ...BLUE_CATEGORIES].find((c) => c.id === id)
  return found ? found.label : id
}

export default function RepoCard({ repo, style }) {
  return (
    <article className={`repo-card tone-${repo.team}`} style={style}>
      {repo.featured && <span className="featured-badge">Destacado</span>}

      <div className="repo-card-head">
        <div className="repo-icon">
          <Icon name={repo.icon} size={24} strokeWidth={1.6} />
        </div>
        <div className="repo-card-titles">
          <h3>{repo.name}</h3>
          <span className="repo-category">{categoryLabel(repo.category)}</span>
        </div>
      </div>

      <p className="repo-desc">{repo.desc}</p>

      <div className="repo-card-foot">
        <div className="repo-meta">
          <span className="lang-tag">
            <i style={{ background: LANG_COLORS[repo.lang] || '#9aa0a6' }} />
            {repo.lang}
          </span>
          <span className="star-tag">★ {repo.stars}</span>
        </div>
        <a href={repo.url} target="_blank" rel="noreferrer" className="repo-link">
          Ver repositorio
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </article>
  )
}
