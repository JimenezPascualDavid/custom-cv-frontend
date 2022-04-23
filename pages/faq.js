// import { motion } from "framer-motion";
import { useState, useRef } from "react";
import FAQ from '../components/Faq';

export default function Faq() {
  
  const [faqs, setfaqs] = useState([
    {
      question: '¿Qué es una carta de presentación?',
      answer: 'Una carta de presentación es...',
      open: true
    },
    {
      question: '¿Qué pasos he de seguir para estructurarla?',
      answer: 'Para empezar una carta de prensentación..',
      open: false
    },
    {
      question: '¿Es necesaria una carta de presentación?',
      answer: 'Las cartas de presentación no suelen ser obligatorias',
      open: false
    }
  ]);

  const [faqs1, setfaqs1] = useState([
    {
      question: '¿Qué es un curriculum vitae?',
      answer: 'Un curriculum vitae es...',
      open: false
    },
    {
      question: '¿Qué información es importante añadir?',
      answer: 'Al ser un cv el cual verán los reclutadores..',
      open: false
    },
    {
      question: '¿Es recomendable poner foto?',
      answer: 'Según diversas fuentes..',
      open: false
    }
  ]);


  const [faqs2, setfaqs2] = useState([
    {
      question: '¿Qué es Custom cv?',
      answer: 'Es un proyecto con el cual se pretende ayudar...',
      open: false
    },
    {
      question: '¿Cuantas personas están desarrollando el proyecto?',
      answer: 'Por el momento hay dos personas a cargo de..',
      open: false
    },
    {
      question: '¿Puedo unirme al proyecto?',
      answer: '!Claro! Toda ayuda es bien recibida. Para ello tenemos una sección de contacto..',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }



  return (
    <div className="h-100 w-100 bg-sky-200  overflow-hidden">
  
      <h1 className="text-4xl font-bold container mx-auto text-center pt-40 text-stone-50 sm:text-6xl ">
        Preguntas frecuentes
      </h1>
      <div className="container mx-auto  m-20">
   <div className="m-5">
   <h2 className="text-3xl font-bold  text-start m-2  text-stone-50 sm:text-3xl">
          Carta de presentación
        </h2>
{faqs1.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
   </div>

   <div className="m-5 mt-20">
   <h2 className="text-3xl font-bold  text-start m-2  text-stone-50 sm:text-3xl">
          Curriculum
        </h2>
{faqs2.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
   </div>


   <div className="m-5 mt-20">
   <h2 className="text-3xl font-bold  text-start m-2  text-stone-50 sm:text-3xl">
          CustomCv
        </h2>
{faqs1.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
   </div>


   <div className="m-5 mt-20">
   <h2 className="text-3xl font-bold  text-start m-2  text-stone-50 sm:text-3xl">
          Legales
        </h2>
{faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
   </div>


        </div>
    </div>
  );
}
