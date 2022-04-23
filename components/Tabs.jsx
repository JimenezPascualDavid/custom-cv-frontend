import { useState } from 'react'
import Image from 'next/image'

import Edit from '../public/assets/home/edit.png'
import Save from '../public/assets/home/save.png'
import Export from '../public/assets/home/image-9.jpg'

export const Tabs = () => {
  const [tabs, setTabs] = useState(1)

  const numberTabs = index => {
    setTabs(index)
    console.log(index)
  }

  return (
    <div>
      <div className="sm:hidden">
        <div>
          <span className="mt-5 mb-5 m-auto p-4 h-40 w-4/5 flex justify-center items-center text-2xl text-gray-500 bg-white rounded-l-lg border-2">
            Edita en linea
          </span>
          <Image className="max-w-full h-auto" src={Edit} />
          <div className="flex-1">
            <p className="text-2xl p-4">!Edita tu curriculum tantas veces como quieras!</p>
            <p className="text-2xl p-4">
              Ten siempre a mano tu curriculum para cambiar tus datos en cualquier momento y poder
              adaptarlo junto con nuestras plantillas a tu puesto de trabajo deseado
            </p>
          </div>
        </div>

        <div>
          <span className="mt-5 mb-5 m-auto p-4 h-40 w-4/5 flex justify-center items-center text-2xl text-gray-500 bg-white rounded-l-lg border-2">
            Guarda tus datos
          </span>
          <Image className="max-w-full h-auto" src={Save} />
          <div className="flex-1">
            <p className="text-2xl p-4">!Sube tus datos a la nube!</p>
            <p className="text-2xl p-4">
              En customcv permitimos a nuestros usuarios guardar los datos en las nube para en
              cualquier momento y lugar poder disponer de toda su información y crear distintos
              curriculums personalizados dependiendo su sector
            </p>
          </div>
        </div>

        <div>
          <span className="mt-5 mb-5 m-auto p-4 h-40 w-4/5 flex justify-center items-center text-2xl text-gray-500 bg-white rounded-l-lg border-2">
            Exporta
          </span>
          <Image className="max-w-full h-auto" src={Export} />
          <div className="flex-1">
            <p className="text-2xl p-4">
              En cualquier momento podrá descargarse sus datos con sus sus cv personalizados con
              toda su información y poder encontrar el trabajo de sus sueños
            </p>
          </div>
        </div>
      </div>
      <ul className="hidden m-5 text-sm font-medium text-center text-gray-500 rounded-lg  shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li className="w-full">
          <span
            className={
              tabs == 1
                ? ' p-4 h-40 w-full flex justify-center items-center text-2xl text-white bg-sky-200 rounded-l-lg'
                : 'p-4 h-40 w-full flex justify-center items-center text-2xl text-gray-900 bg-white rounded-l-lg'
            }
            onClick={() => numberTabs(1)}
          >
            Edita en linea
          </span>
        </li>
        <li className="w-full">
          <span
            className={
              tabs == 2
                ? ' p-4 h-40 w-full flex justify-center items-center text-2xl text-white bg-sky-200 rounded-l-lg'
                : 'p-4 h-40 w-full flex justify-center items-center text-2xl text-gray-900 bg-white rounded-l-lg'
            }
            onClick={() => numberTabs(2)}
          >
            Guarda tus datos
          </span>
        </li>
        <li className="w-full">
          <span
            className={
              tabs == 3
                ? ' p-4 h-40 w-full flex justify-center items-center text-2xl text-white bg-sky-200 rounded-l-lg'
                : ' p-4 h-40 w-full flex justify-center items-center text-2xl text-gray-900 bg-white rounded-l-lg'
            }
            href="#"
            onClick={() => numberTabs(3)}
          >
            Exporta
          </span>
        </li>
      </ul>
      <div className={tabs == 1 ? ' h-100 w-100 hidden sm:flex justify-around items-center' : 'hidden'}>
        <div className="flex-1">
          <Image className="max-w-full h-auto" src={Edit} />
        </div>
        <div className="flex-1">
          <p className="text-4xl p-2 sm:p-0">
            !Edita tu curriculum tantas veces como quieras! Ten siempre a mano tu curriculum para
            cambiar tus datos en cualquier momento y poder adaptarlo junto con nuestras plantillas a
            tu puesto de trabajo deseado
          </p>
        </div>
      </div>

      <div className={tabs == 2 ? 'h-100 w-100 hidden sm:flex justify-around items-center' : 'hidden'}>
        <div className="flex-1">
          <p className="text-4xl p-2 sm:p-0">
            En customcv permitimos a nuestros usuarios guardar los datos en las nube para en
            cualquier momento y lugar poder disponer de toda su información y crear distintos
            curriculums personalizados dependiendo su sector
          </p>
        </div>
        <div className="flex-1">
          <Image className="max-w-full h-auto" src={Save} />
        </div>
      </div>

      <div className={tabs == 3 ? 'h-100 w-100 hidden sm:flex justify-around items-center' : 'hidden'}>
        <div className="flex-1">
          <Image className="max-w-2xl h-auto " src={Export} />
        </div>
        <div className="flex-1">
          <p className="text-4xl p-2 sm:p-0">
            En cualquier momento podrá descargarse sus datos con sus sus cv personalizados con toda
            su información y poder encontrar el trabajo de sus sueños
          </p>
        </div>
      </div>
    </div>
  )
}
