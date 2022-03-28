import { motion } from 'framer-motion'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex justify-between px-12 py-6">
      <span className="text-2xl">Custom cv</span>
      <nav>
        <ul className="flex items-center gap-8 text-lg">
          {/* cambiar etiqueta "a" por "Link" de next */}
          <li>
            <a className="text-slate-600" href="#">
              Crear cv
            </a>
          </li>
          <li>
            <a className="text-slate-600" href="#">
              FAQ
            </a>
          </li>
          <li>
            <Link passHref href="/dashboard">
              <motion.button
                className="rounded-sm py-1 px-6 transition-colors bg-cyan-400 text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Login
              </motion.button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
