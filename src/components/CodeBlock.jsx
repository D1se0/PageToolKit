import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icon.jsx'

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
    } catch {
      // clipboard API no disponible: ignoramos, el usuario puede seleccionar el texto a mano
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="codeblock">
      <pre>
        <code>{code}</code>
      </pre>
      <motion.button
        type="button"
        className={`copy-btn ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
        whileTap={{ scale: 0.9 }}
        aria-label="Copiar comando"
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="check"
              initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
            >
              <Icon name="check" size={14} strokeWidth={2.4} />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.2 }}
            >
              <Icon name="copy" size={14} strokeWidth={1.9} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
