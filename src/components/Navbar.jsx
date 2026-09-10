import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import TeamSwitch from './TeamSwitch.jsx'

export default function Navbar({ team, setTeam }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">
            <Icon name="shieldLock" size={22} strokeWidth={1.9} />
          </span>
          <span className="brand-text">
            D1se0<span className="brand-dot">::</span>ToolKit
          </span>
        </Link>

        <TeamSwitch team={team} setTeam={setTeam} compact />

        <a
          className="gh-link"
          href="https://github.com/D1se0"
          target="_blank"
          rel="noreferrer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.7.5.7 5.6.7 12c0 5.1 3.3 9.4 7.9 11 .6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.6 7.9-5.9 7.9-11C23.3 5.6 18.3.5 12 .5Z" />
          </svg>
          <span>github.com/D1se0</span>
        </a>
      </div>
    </header>
  )
}
