import { forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from './Icon.jsx'
import { LANG_COLORS, categoryLabel, slugOf } from '../utils/repoUtils.js'

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.18 } },
}

const RepoCard = forwardRef(function RepoCard({ repo }, ref) {
  const navigate = useNavigate()
  const slug = slugOf(repo)
  const detailHref = `/repo/${slug}`

  const goToDetail = () => navigate(detailHref)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      goToDetail()
    }
  }

  return (
    <motion.article
      ref={ref}
      className={`repo-card tone-${repo.team}`}
      variants={cardVariants}
      layout
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      role="link"
      tabIndex={0}
      onClick={goToDetail}
      onKeyDown={handleKeyDown}
    >
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
        <a
          href={repo.url}
          target="_blank"
          rel="noreferrer"
          className="repo-link"
          onClick={(e) => e.stopPropagation()}
        >
          GitHub
          <Icon name="arrowUpRight" size={13} strokeWidth={2} />
        </a>
      </div>

      <div className="repo-card-hint">
        <span>Ver ficha completa</span>
        <Icon name="arrowUpRight" size={13} strokeWidth={2} />
      </div>
    </motion.article>
  )
})

export default RepoCard
