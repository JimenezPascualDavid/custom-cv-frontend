import { motion } from 'framer-motion'
import Head from 'next/head'
import { useState } from 'react'

export default function Templates() {
  const [colorSelected, setColorSelected] = useState('#0ea5e9')

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const colors = [
    '#10b981',
    '#0ea5e9',
    '#e11d48',
    '#64748b',
    '#111827',
    '#4f46e5',
    '#7c3aed',
    '#c026d3',
  ]

  return (
    <>
      <Head>
        <title>Templates</title>
        <meta content="Configuration of yout cv, colors and template" name="description" />
      </Head>
      <main className="flex flex-col items-center gap-8">
        <motion.h1
          animate={{ scale: 1 }}
          className="text-3xl font-semibold"
          initial={{ scale: 0.6 }}
        >
          Escoge el color y la plantilla que deseas
        </motion.h1>
        <motion.div animate="visible" className="flex gap-4" initial="hidden" variants={container}>
          {colors.map((color, index) => (
            <motion.button
              key={index}
              className="w-16 h-16 rounded-xl"
              style={{ backgroundColor: color }}
              type="button"
              variants={item}
              whileHover={{ borderRadius: '50%' }}
              onClick={() => setColorSelected(color)}
            />
          ))}
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 max-w-7xl">
          {[0, 1, 2, 3, 4, 5].map((cv, index) => (
            <motion.div
              key={index}
              animate={{ opacity: 1 }}
              className="w-80 h-[460px] border-2 bg-slate-300 cursor-pointer"
              initial={{ opacity: 0 }}
              transition={{ delay: 1.5, duration: 1, type: 'just' }}
            />
          ))}
        </div>
      </main>
    </>
  )
}
