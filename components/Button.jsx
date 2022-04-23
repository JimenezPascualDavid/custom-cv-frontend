import { motion } from 'framer-motion'

export const Button = ({ text, addClass }) => {
  return (
    <motion.button
      className={`rounded-sm py-2 px-6 border-4 text-white ${addClass}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.button>
  )
}
