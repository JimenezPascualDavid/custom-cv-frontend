import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import Image from 'next/image'
import Link from 'next/link'

import { useDimensions } from '../hooks/useDimensions'

import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import { MenuItem } from './MenuItem'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export const SidebarEdit = ({ items }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      ref={containerRef}
      animate={isOpen ? 'open' : 'closed'}
      className="absolute top-0 left-0 bottom-0 w-80"
      custom={height}
      initial={false}
    >
      <motion.div className="absolute top-0 bottom-0 left-0 w-80 bg-sky-400" variants={sidebar} />
      <Navigation>
        {items.map(item => (
          <MenuItem key={item.id}>
            <Link href={`/dashboard/edit/${item.id}`}>{item.title}</Link>
          </MenuItem>
        ))}
        <MenuItem>Añadir sección</MenuItem>
      </Navigation>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
