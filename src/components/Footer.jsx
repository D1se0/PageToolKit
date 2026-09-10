import Icon from './Icon.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Icon name="shieldLock" size={18} />
          <span>D1se0 :: ToolKit</span>
        </div>
        <p>
          Todas las herramientas listadas son proyectos open-source con fines educativos y de
          seguridad ofensiva/defensiva autorizada. Úsalas de forma ética y responsable.
        </p>
        <a href="https://github.com/D1se0" target="_blank" rel="noreferrer" className="footer-link">
          github.com/D1se0 ↗
        </a>
      </div>
    </footer>
  )
}
