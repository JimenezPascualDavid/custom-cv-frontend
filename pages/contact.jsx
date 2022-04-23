import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="h-screen w-100 bg-sky-200">
      <div className="h-full w-100 flex flex-col justify-center items-center">
        <div className="mt-60 ">
        <h1 className="text-4xl font-bold  text-stone-50 sm:text-6xl  md:text-8xl ">
          CONTACTO
        </h1>
        </div>
        <div className="container mx-auto  h-full m-5 sm:flex flex-col ">
          <form action="#" method="POST">
            <div className="h-100  w-100 flex flex-col sm:flex-row justify-evenly items-center">
              <input
                className="text-white shadow-inner m-5 sm:m-0 bg-sky-300 h-12 w-5/6  sm:w-2/6 pl-4 placeholder-white"
                id="Name"
                type="text"
                autocomplete="Name"
                placeholder="Name"
                required
              />
              <input
                className="text-white shadow-inner m-5 bg-sky-300 h-12 w-5/6 sm:w-2/6 pl-4 placeholder-white"
                id="Email"
                type="text"
                autocomplete="Email"
                placeholder="Email"
                required
              />


            </div>
            <div className="w-100  sm:w-full flex justify-center">
              <input
                className="text-white shadow-inner bg-sky-300 h-60 w-10/12 sm:w-5/6 pl-4 placeholder-white"
                id="Mensaje"
                type="text"
                autocomplete="Mensaje"
                placeholder="Text"
                required
              />
            </div> 
             <div className="w-full flex justify-evenly mt-12">
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
