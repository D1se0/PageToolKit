import Icon from './Icon.jsx'
import { STATS } from '../data/repos.js'

export default function Hero({ team, setTeam }) {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <p className="hero-kicker">
        <span className="pulse-dot" /> Arsenal de ciberseguridad ofensiva &amp; defensiva
      </p>

      <h1 className="hero-title">
        Un ToolKit. <span className="grad-text">Dos frentes.</span>
      </h1>

      <p className="hero-subtitle">
        Colección curada de herramientas open-source de <strong>D1se0</strong> para operaciones
        de <em>Red Team</em> y <em>Blue Team</em>: explotación, evasión, forense, hardening y mucho más.
      </p>

      <div className="hero-stats">
        <div className="stat-pill">
          <span className="stat-num">{STATS.totalRepos}</span>
          <span className="stat-label">Repositorios</span>
        </div>
        <div className="stat-pill tone-red">
          <Icon name="crosshair" size={16} />
          <span className="stat-num">{STATS.red}</span>
          <span className="stat-label">Red Team</span>
        </div>
        <div className="stat-pill tone-blue">
          <Icon name="shieldCheck" size={16} />
          <span className="stat-num">{STATS.blue}</span>
          <span className="stat-label">Blue Team</span>
        </div>
      </div>

      <div className="hero-panels">
        <button className={`hero-panel red ${team === 'red' ? 'is-active' : ''}`} onClick={() => setTeam('red')}>
          <div className="hero-panel-icon">
            <Icon name="crosshair" size={30} strokeWidth={1.6} />
          </div>
          <h3>Red Team</h3>
          <p>Explotación, C2, evasión, wireless y post-explotación.</p>
          <span className="hero-panel-cta">Explorar arsenal ofensivo →</span>
        </button>

        <button className={`hero-panel blue ${team === 'blue' ? 'is-active' : ''}`} onClick={() => setTeam('blue')}>
          <div className="hero-panel-icon">
            <Icon name="shieldCheck" size={30} strokeWidth={1.6} />
          </div>
          <h3>Blue Team</h3>
          <p>Forense, hardening, auditoría de código y seguridad de credenciales.</p>
          <span className="hero-panel-cta">Explorar arsenal defensivo →</span>
        </button>
      </div>
    </section>
  )
}
