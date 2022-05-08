import { motion } from 'framer-motion'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = ({ children }) => {
  return (
    <motion.ul
      className="absolute top-24 w-60 p-6 flex flex-col gap-8 overflow-hidden"
      variants={variants}
    >
      {children}
    </motion.ul>
  )
}
