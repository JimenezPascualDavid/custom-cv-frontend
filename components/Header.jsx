import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Icon from "../public/icon.png";
import { useState } from "react";

export const Header = () => {
  const [modal, setModal] = useState(false);

  const menu = () => {
    setModal(!modal);
  };

  return (
    <header>
      <nav className=" fixed top-0 left-0 w-screen bg-white sm:flex justify-between z-50">
        <div className="flex  justify-between m-2">
          <div className="flex">
            <Link href="/">
              <Image
                src={Icon}
                className="rounded-full"
                alt="logo"
                height={40}
                width={40}
              />
            </Link>
            <Link href="/">
              <span className="m-2 items-center text-2xl">Custom cv</span>
            </Link>
          </div>
          <div
            className={
              !modal
                ? "flex flex-col sm:invisible justify-center items-end p-3 space-y-2"
                : "hidden"
            }
            onClick={() => menu()}
          >
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div className="w-8 h-0.5 bg-gray-600"></div>
          </div>
          <div
            className={
              modal
                ? "flex flex-col sm:invisible justify-center items-end p-3 space-y-2"
                : "hidden"
            }
            onClick={() => menu()}
          >
            <div className="w-8 h-0.5 bg-gray-600"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
            <div className="w-4 h-0.5 bg-gray-600"></div>
          </div>
        </div>
        <div
          className={
            modal
              ? "flex flex-col sm:invisible  h-screen justify-center  bg-sky-200 "
              : "hidden"
          }
        >
          <ul className="flex flex-col justify-between items-center">
            <li className="p-5 m-5 text-4xl text-white">
              <Link  href="#">
                Crear cv
              </Link>
            </li>
            <li className="p-5 m-5 text-4xl text-white">
              <Link href="/faq">
                FAQ
              </Link>
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
        </div>

        <ul className=" items-center gap-8 text-lg hidden sm:flex mr-5">
          <li>
            <Link className="text-slate-600" href="#">
              Crear cv
            </Link>
          </li>
          <li>
            <Link className="text-slate-600" href="/faq">
              FAQ
            </Link>
          </li>
          <li>
            <Link passHref href="/dashboard">
              <motion.button
                className="rounded-sm py-1 px-6 transition-colors bg-white border-2 border-cyan-400 text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-cyan-400">Login</span>
              </motion.button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
