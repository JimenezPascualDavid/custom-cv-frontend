import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

import Icon from '../public/icon.png'

export const Header = () => {
  const [modal, setModal] = useState(false)

  const menu = () => {
    setModal(!modal)
  }

  return (
    <header>
      <nav className={!modal ? "fixed top-0 left-0 w-screen bg-white flex justify-between z-50 px-12 py-4" : "hidden md:flex justify-between fixed top-0 left-0 w-screen bg-white z-50 px-12 py-4"}>
        <div className="flex justify-between">
          <Link href="/">
            <a className="flex items-center">
              <Image alt="logo" className="rounded-full" height={40} src={Icon} width={40} />
              <span className="m-2 items-center text-2xl">Custom cv</span>
            </a>
          </Link>
        </div>
        <div>
          <FiMenu className="text-5xl md:hidden" onClick={() => menu()} />
        </div>

        <ul className="hidden items-center gap-8 text-lg md:flex mr-5">
          <li>
            <Link href="/">
              <a className="text-slate-600">Crear cv</a>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <a className="text-slate-600">FAQ</a>
            </Link>
          </li>
          <li>
            <Link passHref href="/dashboard">
              <motion.button
                className="rounded-sm py-1 px-6 bg-white border-2 border-cyan-400 text-cyan-400"
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Login
              </motion.button>
            </Link>
          </li>
        </ul>
        
      </nav>
     
   
     <nav className={ modal ? "fixed top-0 left-0 w-screen bg-white  z-50 py-2 md:hidden" : "hidden"}>
       <div className='flex justify-between px-8 p-2'>
        <div className="flex justify-between ">
          <Link href="/">
            <a className="flex items-center">
              <Image alt="logo" className="rounded-full" height={40} src={Icon} width={40} />
              <span className="m-2 items-center text-2xl">Custom cv</span>
            </a>
          </Link>
        </div>
        <div>
          <FiMenu className="text-5xl md:hidden" onClick={() => menu()} />
        </div>
        </div>
<div className='h-screen w-full bg-sky-200 flex items-center justify-center'>
<ul className="flex flex-col justify-between items-center">
            <li className="p-5 m-5 text-4xl text-white">
              <Link href="#">Crear cv</Link>
            </li>
            <li className="p-5 m-5 text-4xl text-white">
              <Link href="/faq">FAQ</Link>
            </li>
            <li className="p-5 m-5">
              <Link passHref href="/dashboard">
                <motion.button
                  className="rounded-sm py-1 px-6 transition-colors bg-transparent border-2 border-white "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-4xl text-white">Login</span>
                </motion.button>
              </Link>
            </li>
          </ul>
</div>
        

     </nav>
     

    </header>
  )
}




        {/* <div
          className={
            modal ? 'flex flex-col sm:invisible  h-screen justify-center  bg-sky-200 ' : 'hidden'
          }
        >
          <ul className="hidden md:flex md:flex-col md:justify-between md:items-center">
            <li className="p-5 m-5 text-4xl text-white">
              <Link href="#">Crear cv</Link>
            </li>
            <li className="p-5 m-5 text-4xl text-white">
              <Link href="/faq">FAQ</Link>
            </li>
            <li className="p-5 m-5">
              <Link passHref href="/dashboard">
                <motion.button
                  className="rounded-sm py-1 px-6 transition-colors bg-white border-2 border-cyan-400 text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-4xl text-cyan-400">Login</span>
                </motion.button>
              </Link>
            </li>
          </ul>
        </div> */}
