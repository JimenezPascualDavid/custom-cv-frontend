import Image from 'next/image'
import { motion } from 'framer-motion'

import { Tabs } from '../components/Tabs.jsx'
import { Button } from '../components/Button'
import Intro from '../public/assets/home/intro.png'

export default function Home() {
  return (
    <section>
      <section className="bg-sky-300 h-screen w-screen flex flex-col justify-center lg:justify-evenly lg:flex-row items-center px-8">
        <aside className="max-w-4xl space-y-5">
          <h1 className="text-5xl text-stone-50 md:text-7xl">PERSONALIZA TU CURRICULUM</h1>
          <h2 className="text-3xl sm:text-4xl text-stone-50">Destaca, Innova, Descarga</h2>
          <motion.button
            className="text-2xl text-stone-50 p-5 border-4 border-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Empezar ya
          </motion.button>
        </aside>
        <aside className="w-96 lg:w-1/3">
          <Image alt="custom cv homepage" className="max-w-full h-auto" src={Intro} />
        </aside>
      </section>

      <section>
        <div className="h-screen w-screen px-8">
          <Tabs />
        </div>
      </section>

      <section className="min-h-screen w-full bg-[url('../public/assets/home/cv.png')] relative">
        {/* bg-cyan-900 mix-blend-hard-light to bg with color cyan and text white*/}
        <div className="absolute top-0 left-0 h-full w-full grid grid-cols-1 gap-y-4 md:gap-y-10 lg:grid-cols-2 px-14 py-12 lg:py-24 lg:px-24 bg-cyan-900 mix-blend-hard-light">
          <div className="flex flex-col justify-end lg:justify-start space-y-5">
            <p className="text-white font-bold text-3xl md:text-4xl lg:text-6xl">
              Desde custom cv te guiamos
              <br />
              para crear tu curriculum
            </p>
            <p className="text-white text-xl md:text-2xl lg:text-3xl">
              A través de nuestra plataforma serás capáz de crear un atractivo curriculum con
              nuestras plantillas personalizadas
            </p>
            <Button addClass="max-w-max text-xl md:text-3xl" text="Ver Tips" />
          </div>
          <div className="flex flex-col lg:justify-end space-y-5">
            <p className="text-white text-xl md:text-2xl lg:text-4xl">
              Y si no tiene en ese momento una idea o no sabe desarrollarlo...
            </p>
            <p className="text-white font-bold text-4xl lg:text-6xl">¡No hay problema!</p>
            <p className="text-white text-xl md:text-2xl lg:text-4xl">
              Siga los pasos que le proporcionamos en nuestro custom cv personalizado con tips y
              plantillas personalizadas
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}
