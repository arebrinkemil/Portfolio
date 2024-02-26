import React from "react";
import { SiCsharp } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

function IconGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 w-full lg:w-[40vw]  p-4 max-h-[80vh]">
      <div className="aspect-w-1 aspect-h-1 flex items-center justify-center bg-white/50 rounded-lg hover:bg-white/90 hover:scale-105  transition-all duration-300">
        <IoLogoJavascript size="100%" />
      </div>
      <div className="aspect-w-1 aspect-h-1 flex items-center justify-center bg-white/50 rounded-lg hover:bg-white/90 hover:scale-105 transition-all duration-300">
        <SiCsharp size="100%" />
      </div>
      <div className="aspect-w-1 aspect-h-1 flex items-center justify-center bg-white/50 rounded-lg hover:bg-white/90 hover:scale-105  transition-all duration-300">
        <FaGitSquare size="100%" />
      </div>
      <div className="aspect-w-1 aspect-h-1 flex items-center justify-center bg-white/50 rounded-lg hover:bg-white/90 hover:scale-105  transition-all duration-300">
        <SiPhp size="100%" />
      </div>
      <div className="aspect-w-1 aspect-h-1 flex items-center justify-center bg-white/50 rounded-lg hover:bg-white/90 hover:scale-105  transition-all duration-300">
        <SiTailwindcss size="100%" />
      </div>
      <div className="aspect-w-1 aspect-h-1 flex items-center justify-center bg-white/50 rounded-lg hover:bg-white/90 hover:scale-105  transition-all duration-300">
        <FaReact size="100%" />
      </div>
      <div className="aspect-w-1 aspect-h-1 flex items-center justify-center bg-white/50 rounded-lg hover:bg-white/90 hover:scale-105  transition-all duration-300">
        <FaNode size="100%" />
      </div>
      <div className="aspect-w-1 aspect-h-1 flex items-center justify-center bg-white/50 rounded-lg hover:bg-white/90 hover:scale-105  transition-all duration-300">
        <FaLaravel size="100%" />
      </div>
      <div className="aspect-w-1 aspect-h-1 flex items-center justify-center bg-white/50 rounded-lg hover:bg-white/90 hover:scale-105 transition-all duration-300">
        <SiMysql size="100%" />
      </div>
    </div>
  );
}

export default IconGrid;
