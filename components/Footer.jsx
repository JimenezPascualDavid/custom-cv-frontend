import React from "react";
import Image from "next/image";
import GitD from "../public/git-d.png";
import GitW from "../public/git-b.png";
import { GoMarkGithub } from "react-icons/go";

export const Footer = () => {
  return (
    <div className="h-20 w-full bg-sky-300 flex items-center justify-end">
      <div className="m-3">
        <a href="#">
          <GoMarkGithub className="text-2xl text-white hover:text-black" />
        </a>
      </div>
      <div className="m-3">
        <a href="#">
          <GoMarkGithub className="text-2xl text-white hover:text-black" />
        </a>
      </div>
    </div>
  );
};
