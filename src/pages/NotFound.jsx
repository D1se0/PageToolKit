import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '../components/Icon.jsx'

export default function NotFound() {
  return (
    <motion.main
      className="notfound"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Icon name="folderSearch" size={40} strokeWidth={1.3} />
      <h1>404</h1>
      <p>No hemos encontrado esa herramienta en el arsenal.</p>
      <Link to="/" className="back-link">
        ← Volver al ToolKit
      </Link>
    </motion.main>
  )
}
