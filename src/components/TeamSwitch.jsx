import Icon from './Icon.jsx'

const OPTIONS = [
  { id: 'all', label: 'Todos', icon: 'network' },
  { id: 'red', label: 'Red Team', icon: 'crosshair' },
  { id: 'blue', label: 'Blue Team', icon: 'shieldCheck' },
]

export default function TeamSwitch({ team, setTeam, compact = false }) {
  return (
    <div className={`team-switch ${compact ? 'compact' : ''}`} role="tablist" aria-label="Selector de equipo">
      <span className={`team-switch-thumb thumb-${team}`} aria-hidden="true" />
      {OPTIONS.map((opt) => (
        <button
          key={opt.id}
          role="tab"
          aria-selected={team === opt.id}
          className={`team-switch-btn ${team === opt.id ? 'active' : ''} tone-${opt.id}`}
          onClick={() => setTeam(opt.id)}
        >
          <Icon name={opt.icon} size={compact ? 15 : 17} />
          <span>{opt.label}</span>
        </button>
      ))}
    </div>
  )
}
