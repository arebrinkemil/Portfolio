import React, { useState, useEffect, useRef } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { gsap } from "gsap";

export const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const sideNavRef = useRef(null);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "auto";
    gsap.fromTo(
      sideNavRef.current,
      { x: "-100%" },
      { x: "0%", duration: 2, ease: "power3.out" }
    );
  }, [nav]);

  return (
    <div>
      <AiOutlineMenu
        color="white"
        size={30}
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-darkmode/90 flex flex-col justify-center items-center z-20 ">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-darkmode shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} color="white" />
            <span className="pl-4 text-textwhite ">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-darkmode shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} color="white" />
            <span className="pl-4 text-textwhite ">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-darkmode shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} color="white" />
            <span className="pl-4 text-textwhite ">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-darkmode shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} color="white" />
            <span className="pl-4 text-textwhite ">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-darkmode shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} color="white" />
            <span className="pl-4 text-textwhite ">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-20" ref={sideNavRef}>
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-lg bg-darkmode shadow-lg drop-shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} color="white" />
          </a>
          <a
            href="#work"
            className="rounded-lg bg-darkmode shadow-lg drop-shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} color="white" />
          </a>
          <a
            href="#projects"
            className="rounded-lg bg-darkmode shadow-lg drop-shadow-lg  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} color="white" />
          </a>
          <a
            href="#main"
            className="rounded-lg bg-darkmode shadow-lg drop-shadow-lg  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} color="white" />
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-darkmode shadow-lg drop-shadow-lg  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail size={20} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
