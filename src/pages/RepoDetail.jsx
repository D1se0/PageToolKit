import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '../components/Icon.jsx'
import CodeBlock from '../components/CodeBlock.jsx'
import RepoCard from '../components/RepoCard.jsx'
import NotFound from './NotFound.jsx'
import { DETAILS } from '../data/details.js'
import { findRepoBySlug, relatedRepos, categoryLabel, LANG_COLORS } from '../utils/repoUtils.js'

const heroStagger = {
  initial: {},
  animate: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
const heroItem = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}
const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}
const revealStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}
const listItem = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
}

function Section({ title, children, delay = 0 }) {
  return (
    <motion.section
      className="detail-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={reveal}
      transition={{ delay }}
    >
      <h2>{title}</h2>
      {children}
    </motion.section>
  )
}

function StepList({ steps }) {
  return (
    <motion.ol
      className="step-list"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={revealStagger}
    >
      {steps.map((step, i) => (
        <motion.li key={i} variants={listItem}>
          <div className="step-num">{i + 1}</div>
          <div className="step-body">
            <p>{step.title}</p>
            {step.code && <CodeBlock code={step.code} />}
          </div>
        </motion.li>
      ))}
    </motion.ol>
  )
}

export default function RepoDetail() {
  const { slug } = useParams()
  const repo = findRepoBySlug(slug)

  if (!repo) return <NotFound />

  const details = DETAILS[slug]
  const related = relatedRepos(repo)
  const cloneCmd = `git clone ${repo.url}.git`

  return (
    <div className={`detail-page tone-${repo.team}`}>
      <div className="detail-glow" aria-hidden="true" />

      <div className="detail-container">
        <Link to="/" className="back-link">
          <Icon name="arrowLeft" size={16} /> Volver al ToolKit
        </Link>

        <motion.div className="detail-hero-main" variants={heroStagger} initial="initial" animate="animate">
          <motion.div variants={heroItem} className="detail-icon">
            <Icon name={repo.icon} size={38} strokeWidth={1.4} />
          </motion.div>

          <motion.div variants={heroItem} className="detail-hero-text">
            {repo.featured && <span className="featured-badge static">Destacado</span>}
            <h1>{repo.name}</h1>
            <p className="detail-tagline">{repo.desc}</p>

            <div className="detail-badges">
              <span className="badge">{categoryLabel(repo.category)}</span>
              <span className="badge">
                <i style={{ background: LANG_COLORS[repo.lang] || '#9aa0a6' }} />
                {repo.lang}
              </span>
              <span className="badge">★ {repo.stars}</span>
              <span className="badge">{repo.team === 'red' ? 'Red Team' : 'Blue Team'}</span>
            </div>

            <div className="detail-cta">
              <a href={repo.url} target="_blank" rel="noreferrer" className="btn-primary">
                Ver en GitHub
                <Icon name="arrowUpRight" size={15} strokeWidth={2.1} />
              </a>
              <div className="clone-block">
                <CodeBlock code={cloneCmd} />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {details ? (
          <div className="detail-body">
            <Section title="Resumen">
              <p className="detail-overview">{details.overview}</p>
            </Section>

            <Section title="Características">
              <motion.ul
                className="feature-list"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={revealStagger}
              >
                {details.features.map((f, i) => (
                  <motion.li key={i} variants={listItem}>
                    <Icon name="check" size={15} strokeWidth={2.2} />
                    <span>{f}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </Section>

            {details.requirements?.length > 0 && (
              <Section title="Requisitos">
                <div className="req-chips">
                  {details.requirements.map((r) => (
                    <span className="chip static" key={r}>
                      {r}
                    </span>
                  ))}
                </div>
              </Section>
            )}

            <Section title="Instalación">
              <StepList steps={details.installation} />
            </Section>

            <Section title="Uso">
              <StepList steps={details.usage} />
            </Section>

            {details.disclaimer && (
              <motion.div
                className="disclaimer-box"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={reveal}
              >
                <Icon name="warning" size={20} strokeWidth={1.6} />
                <p>{details.disclaimer}</p>
              </motion.div>
            )}
          </div>
        ) : (
          <motion.div
            className="fallback-note"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
          >
            <Icon name="warning" size={20} strokeWidth={1.6} />
            <p>
              La documentación detallada de esta herramienta todavía no está disponible en el ToolKit. Puedes
              consultar el código fuente y el README completo directamente en su repositorio de GitHub.
            </p>
          </motion.div>
        )}

        {related.length > 0 && (
          <motion.section
            className="related-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={reveal}
          >
            <h2>Herramientas relacionadas</h2>
            <div className="related-grid">
              {related.map((r) => (
                <RepoCard key={r.name} repo={r} />
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  )
}
