// import { motion } from "framer-motion";
import { useState } from "react";
import { GoX } from "react-icons/go";

export default function Faq() {
  const [status, setStatus] = useState(false);
  const toogle = (e) => {
    if (!status) {
      e.target.nextSibling.style.display = "block";
      setStatus(true);
    } else {
      e.target.nextSibling.style.display = "none";
      setStatus(!status);
    }
  };

  return (
    <div className="h-screen w-100 bg-sky-200   ">
      <h1 className="text-4xl font-bold container mx-auto text-center pt-40 text-stone-50 sm:text-6xl ">
        Preguntas frecuentes
      </h1>
      <div className="container mx-auto  m-20">
        <h2 className="text-2xl font-bold  text-start m-2 sm:m-20 text-stone-50 sm:text-3xl">
          Carta de presentación
        </h2>
        <div className=" m-2 sm:m-40">
          <h3
            className="text-white font-bold border-b-2 border-cyan-50 flex justify-between"
            onClick={(e) => toogle(e)}
          >
            ¿Qué es una carta de presentación?
            <GoX
              className="text-2xl text-white hover:text-black"
              onClick={() => setStatus(!status)}
            />
          </h3>
          <p className="hidden text-white font-bold m-5">
            Una carta de presentación es..
          </p>
        </div>
      </div>
    </div>
  );
}
