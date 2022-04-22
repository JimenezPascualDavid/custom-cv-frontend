import Image from "next/image";
import { motion } from "framer-motion";
import Intro from "../public/assets/home/intro.png";
import Cv from "../public/assets/home/cv.png";
import { Tabs } from "../components/Tabs.jsx";

export default function Home() {
  return (
    <div className="">
      <section className="bg-sky-200">
        <div className="container mx-auto">
          <div className="h-screen w-100 flex justify-around items-center ">
            <div className="w-50 ml-5 sm:w-70">
              <h1 className="text-4xl m-5 text-stone-50 sm:text-5xl md:text-8xl">
                PERSONALIZA TU CURRICULUM
              </h1>
              <h2 className="text-3xl sm:text-4xl m-5 text-stone-50">
                Destaca, Innova, Descarga
              </h2>
              <motion.button
                className="text-2xl text-stone-50  p-5 m-5 border-4 border-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Empezar ya
              </motion.button>
            </div>
            <div className="w-50 hidden sm:block ">
              <Image src={Intro} className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto">
          <div className="h-100 w-100">
            <Tabs />
          </div>
        </div>
      </section>
      <section
        className="h-100 w-100 
      bg-sky-700 opacity-80 relative overflow-hidden"
      >
        <Image src={Cv} className="max-w-full h-auto mix-blend-overlay" />
        <div className="flex flex-wrap lg:flex-nowrap absolute top-0 left-0 h-full w-full">
          <div className="p-4 border-solid  w-50 lg:mt-52">
            <p className="text-white font-bold m-2 text-2xl sm:text-6xl sm:m-5">
              Desde custom cv te guiamos
              <br />
              para crear tu curriculum
            </p>

            <p className="text-white  m-2 text-1xl md:text-4xl md:m-5">
              A través de nuestra plataforma será capáz de crear un atractivo
              curriculum con nuestras plantillas personalizadas
            </p>
            <motion.button
              className=" text-stone-50  p-1 m-2 border-4 border-white text-1xl md:text-4xl md:p-5 md:m-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Ver Tips
            </motion.button>
          </div>
          <div className=" p-4 border-solid flex flex-col justify-end md:mb-52">
            <p className="text-white  m-4 text-2xl md:text-4xl">
              Y si no tiene en ese momento una idea o no sabe desarrollarlo...
            </p>

            <p className="text-white font-bold m-4 text-2xl md:text-6xl">
              ¡No hay problema!
            </p>

            <p className="text-white  m-4 text-2xl md:text-4xl">
              Siga los pasos que le proporcionamos en nuestro custom cv
              personalizado con tips y plantillas personalizadas
            </p>
          </div>
        </div>
      </section>
      {/* <section className="h-screen w-100"></section> */}
    </div>
  );
}
