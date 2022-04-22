import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="h-screen w-100 bg-sky-200">
      <div className="h-full w-100 border-2 border-rose-500 flex flex-col justify-center items-center overflow-hidden">
        <h1 className="text-4xl font-bold mt-60 text-stone-50 sm:text-6xl sm:-mb-32 md:text-8xl md:mt-60 md:-mb-32">
          CONTACTO
        </h1>
        <div className="container mx-auto  h-full m-5 sm:flex flex-col">
          <form action="#" method="POST">
            <div className="h-full  w-100 flex flex-col sm:flex-row justify-around items-center">
              <input
                className="text-white shadow-inner bg-sky-300 h-12 w-5/6 m-5 sm:w-2/6 pl-4"
                id="Name"
                type="text"
                autocomplete="Name"
                value="Name"
                required
              />
              <input
                className="text-white shadow-inner bg-sky-300 h-12 w-5/6 sm:w-2/6 pl-4"
                id="Email"
                type="text"
                autocomplete="Email"
                value="Email"
                required
              />
            </div>
            <div className="w-100 m-5 flex justify-around sm:-mt-16 md:-mt-20">
              <input
                className="text-white shadow-inner bg-sky-300 h-60  w-11/12 sm:w-5/6 pl-4"
                id="Mensaje"
                type="text"
                autocomplete="Mensaje"
                value="Text"
                required
              />
            </div>
            <div className="w-full sm:flex justify-start mt-12 ml-10 md:ml-24">
              <motion.button
                className="rounded-sm py-1 px-6 transition-colors bg-sky-300 border-2 border-white text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-2xl ">Enviar</span>
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
