// Librería de iconos SVG propios, estilo lineal consistente (stroke = currentColor)
// Cada entrada es el contenido interno de un <svg viewBox="0 0 24 24">

const PATHS = {
  proxy: (
    <>
      <circle cx="4.5" cy="12" r="2.4" />
      <circle cx="19.5" cy="12" r="2.4" />
      <path d="M6.9 12h4.1M17.1 12H13" />
      <rect x="10.6" y="9.4" width="2.8" height="5.2" rx="0.6" transform="rotate(45 12 12)" />
    </>
  ),
  bot: (
    <>
      <rect x="5" y="9" width="14" height="10" rx="2.5" />
      <path d="M12 9V5.5" />
      <circle cx="12" cy="4" r="1.2" />
      <circle cx="9" cy="14" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14" r="1.1" fill="currentColor" stroke="none" />
      <path d="M2.5 13v2M21.5 13v2" />
    </>
  ),
  satellite: (
    <>
      <path d="M14.5 3.5 20.5 9.5 17 13 11 7Z" />
      <path d="M11 7 4 14l2.2 2.2M9.2 15.2 7 13" />
      <path d="M3 21c2-3 5-4 6-6" />
      <path d="M15 6c1.8 1.8 1.8 4.2 0 6M17.4 3.6c3 3 3 7.8 0 10.8" />
    </>
  ),
  skull: (
    <>
      <path d="M12 3.5c-4.4 0-7.5 3.1-7.5 7 0 2.6 1.4 4.3 2.8 5.4V19c0 .8.6 1.5 1.4 1.5h.6v1.3c0 .4.4.7.8.7h.9v-2h1.9v2h.9c.4 0 .8-.3.8-.7v-1.3h.6c.8 0 1.4-.7 1.4-1.5v-3.1c1.4-1.1 2.8-2.8 2.8-5.4 0-3.9-3.1-7-7.4-7Z" />
      <circle cx="9.3" cy="11.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="14.7" cy="11.5" r="1.3" fill="currentColor" stroke="none" />
      <path d="M11.3 13.6h1.4l-.7 1.4Z" fill="currentColor" stroke="none" />
    </>
  ),
  keyboard: (
    <>
      <rect x="3" y="6.5" width="18" height="11" rx="1.8" />
      <path d="M6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01" strokeWidth="2.2" />
      <path d="M7 14h10" />
    </>
  ),
  ghost: (
    <>
      <path d="M6 20V11a6 6 0 0 1 12 0v9l-2.2-1.6L14 20l-2-1.6L10 20l-1.8-1.6Z" />
      <circle cx="9.7" cy="11.3" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.3" cy="11.3" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  shuffle: (
    <>
      <path d="M3 7h3.6c1.5 0 2.8.8 3.6 2l3.6 6c.8 1.2 2.1 2 3.6 2H21" />
      <path d="M17 4l4 3-4 3" />
      <path d="M3 17h3.6c1.5 0 2.8-.8 3.6-2M13.8 9c.8-1.2 2.1-2 3.6-2H21" />
      <path d="M17 20l4-3-4-3" />
    </>
  ),
  terminal: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M7 9.5 10.5 12 7 14.5" />
      <path d="M12.5 14.5h4.5" />
    </>
  ),
  link: (
    <>
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M11 7.5 12.6 5.9a3.2 3.2 0 0 1 4.5 4.5L15.5 12" />
      <path d="M13 16.5 11.4 18.1a3.2 3.2 0 0 1-4.5-4.5L8.5 12" />
    </>
  ),
  crosshair: (
    <>
      <circle cx="12" cy="12" r="6.5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <path d="M12 2v3.2M12 18.8V22M2 12h3.2M18.8 12H22" />
    </>
  ),
  syringe: (
    <>
      <path d="M20 4 17.5 6.5" />
      <path d="M16.8 3.3l3.9 3.9" />
      <rect x="9.5" y="8.6" width="9" height="4.2" rx="0.6" transform="rotate(45 14 10.7)" />
      <path d="M11.2 12.3 5 18.5v2.5h2.5l6.2-6.2" />
      <path d="M4 22l1.6-1.6" />
    </>
  ),
  radar: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <path d="M12 12 18 6.5" />
      <path d="M12 3.5v0" />
    </>
  ),
  wifi: (
    <>
      <path d="M4.5 9.8a11 11 0 0 1 15 0" />
      <path d="M7.3 13a7 7 0 0 1 9.4 0" />
      <path d="M10.1 16.2a3 3 0 0 1 3.8 0" />
      <circle cx="12" cy="19" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.2" />
      <rect x="10" y="10" width="4" height="4" rx="0.6" />
      <path d="M9 3.5V7M15 3.5V7M9 17v3.5M15 17v3.5M3.5 9H7M3.5 15H7M17 9h3.5M17 15h3.5" />
    </>
  ),
  folderSearch: (
    <>
      <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4l1.6 2H19.5A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5Z" />
      <circle cx="13.2" cy="13" r="2.6" />
      <path d="M15.1 14.9 17 16.8" />
    </>
  ),
  key: (
    <>
      <circle cx="7.5" cy="14.5" r="3.6" />
      <path d="M10 12 19 3" />
      <path d="M15.5 6.5 18 9M13 9l2 2" />
    </>
  ),
  bug: (
    <>
      <rect x="8.5" y="8.5" width="7" height="9" rx="3.4" />
      <path d="M9 8.5 7 6M15 8.5l2-2.5M4.5 12H8M16 12h3.5M5 16.5 8.3 15M15.7 15l3.3 1.5M10 5.5h4" />
    </>
  ),
  fileSearch: (
    <>
      <path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5V8h4" />
      <circle cx="10.8" cy="14.5" r="2.4" />
      <path d="M12.6 16.3l1.9 1.9" />
    </>
  ),
  flask: (
    <>
      <path d="M10 3.5h4" />
      <path d="M10.5 4v5.2L5.8 18a1.6 1.6 0 0 0 1.4 2.4h9.6a1.6 1.6 0 0 0 1.4-2.4L13.5 9.2V4" />
      <path d="M8.3 15h7.4" />
    </>
  ),
  fingerprint: (
    <>
      <path d="M12 3.8c-4 0-7.2 3.2-7.2 7.2v2.5" />
      <path d="M12 3.8c4 0 7.2 3.2 7.2 7.2v1.3" />
      <path d="M8.4 20.5A9 9 0 0 1 6 14.5v-1" />
      <path d="M12 7.2a4 4 0 0 1 4 4v2.6" />
      <path d="M12 7.2a4 4 0 0 0-4 4v1.8a9.3 9.3 0 0 0 3 7" />
      <path d="M12 11.2a1.8 1.8 0 0 1 1.8 1.8v1.5a7 7 0 0 0 2 5" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="9.5" rx="1.8" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
      <circle cx="12" cy="14.8" r="1.4" fill="currentColor" stroke="none" />
      <path d="M12 16.2v1.8" />
    </>
  ),
  shieldLock: (
    <>
      <path d="M12 3 5 5.8v5.4c0 4.6 3 7.6 7 9 4-1.4 7-4.4 7-9V5.8Z" />
      <rect x="9.4" y="11.2" width="5.2" height="4.2" rx="0.9" />
      <path d="M10.4 11.2V9.7a1.6 1.6 0 0 1 3.2 0v1.5" />
    </>
  ),
  shieldCheck: (
    <>
      <path d="M12 3 5 5.8v5.4c0 4.6 3 7.6 7 9 4-1.4 7-4.4 7-9V5.8Z" />
      <path d="M9 12.3l2.1 2.1 4-4.2" />
    </>
  ),
  vault: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <circle cx="12" cy="12" r="4.4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      <path d="M12 7.6V6M12 18v-1.6M16.4 12H18M6 12h1.6" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="4.8" r="2.1" />
      <circle cx="5.5" cy="18" r="2.1" />
      <circle cx="18.5" cy="18" r="2.1" />
      <path d="M12 6.9v4.4M10.7 13.5 6.9 16.3M13.3 13.5l3.8 2.8M9 11.3h6" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="2.6" />
      <path d="M5 6v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" />
      <path d="M5 12v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-6" />
    </>
  ),
  library: (
    <>
      <path d="M4 20V5.5A1.5 1.5 0 0 1 5.5 4h2A1.5 1.5 0 0 1 9 5.5V20" />
      <path d="M11 20V6.2A1.5 1.5 0 0 1 12.5 4.7h2A1.5 1.5 0 0 1 16 6.2V20" />
      <path d="M18.3 20 16.6 5.7a1.5 1.5 0 0 1 1.3-1.7l1.9-.2a1.5 1.5 0 0 1 1.6 1.3L23 19" />
      <path d="M3 20h18" />
    </>
  ),
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="1.8" />
      <path d="M6 15H5.5A1.5 1.5 0 0 1 4 13.5v-8A1.5 1.5 0 0 1 5.5 4h8A1.5 1.5 0 0 1 15 5.5V6" />
    </>
  ),
  check: <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />,
  arrowLeft: (
    <>
      <path d="M19 12H5" />
      <path d="M11 6 5 12l6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  warning: (
    <>
      <path d="M12 3.5 21.5 20h-19Z" />
      <path d="M12 9.8v4.2" />
      <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  hash: (
    <>
      <path d="M9 3.5 7 20.5M17 3.5l-2 17M4 8.5h16M3 15.5h16" />
    </>
  ),
}

export default function Icon({ name, size = 22, strokeWidth = 1.7, className = '' }) {
  const content = PATHS[name] || PATHS.terminal
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {content}
    </svg>
  )
}
