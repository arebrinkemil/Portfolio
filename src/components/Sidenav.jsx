import React, { useState, useEffect, useRef } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";

import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

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

  const boxRefs = useRef([]);
  boxRefs.current = [];

  const addToRefs = (el) => {
    if (el && !boxRefs.current.includes(el)) {
      boxRefs.current.push(el);
    }
  };

  useEffect(() => {
    boxRefs.current.forEach((box, index) => {
      const tl = gsap.timeline({ paused: true });
      tl.to(box, 0.5, {
        backgroundColor: "blue",
        scale: 1.2,
        boxShadow: "0px 0px 20px blue",
      }).to(box.querySelector("div"), 0.2, {
        color: "red",
        rotation: 360,
        y: 40,
      });
      box.animation = tl;
    });
  }, []);

  const handleMouseEnter = (index) => {
    boxRefs.current[index].animation.play();
  };

  const handleMouseLeave = (index) => {
    boxRefs.current[index].animation.reverse();
  };

  const handleScroll = (sectionId) => {
    gsap.to(window, { duration: 1, scrollTo: { y: sectionId, offsetY: 0 } });
  };

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
            onClick={() => {
              handleNav();
              handleScroll("#main");
            }}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-darkmode shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} color="white" />
            <span className="pl-4 text-textwhite ">Home</span>
          </a>
          <a
            onClick={() => {
              handleNav();
              handleScroll("#about");
            }}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-darkmode shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} color="white" />
            <span className="pl-4 text-textwhite ">about</span>
          </a>

          <a
            onClick={() => {
              handleNav();
              handleScroll("#projects");
            }}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-darkmode shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} color="white" />
            <span className="pl-4 text-textwhite ">Projects</span>
          </a>
          <a
            onClick={() => {
              handleNav();
              handleScroll("#skills");
            }}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-darkmode shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GiSkills size={20} color="white" />
            <span className="pl-4 text-textwhite ">Skills</span>
          </a>
          <a
            onClick={() => {
              handleNav();
              handleScroll("#main");
            }}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-darkmode shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} color="white" />
            <span className="pl-4 text-textwhite ">Resume</span>
          </a>
          <a
            onClick={() => {
              handleNav();
              handleScroll("#contact");
            }}
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
            ref={addToRefs}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
            onClick={() => handleScroll("#main")}
            className="rounded-lg bg-darkmode shadow-lg drop-shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} color="white" />
          </a>
          <a
            ref={addToRefs}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
            onClick={() => handleScroll("#about")}
            className="rounded-lg bg-darkmode shadow-lg drop-shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} color="white" />
          </a>
          <a
            ref={addToRefs}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
            onClick={() => handleScroll("#skills")}
            className="rounded-lg bg-darkmode shadow-lg drop-shadow-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GiSkills size={20} color="white" />
          </a>
          <a
            ref={addToRefs}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
            onClick={() => handleScroll("#projects")}
            className="rounded-lg bg-darkmode shadow-lg drop-shadow-lg  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject size={20} color="white" />
          </a>
          <a
            ref={addToRefs}
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={() => handleMouseLeave(4)}
            onClick={() => handleScroll("#main")}
            className="rounded-lg bg-darkmode shadow-lg drop-shadow-lg  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson size={20} color="white" />
          </a>
          <a
            ref={addToRefs}
            onMouseEnter={() => handleMouseEnter(5)}
            onMouseLeave={() => handleMouseLeave(5)}
            onClick={() => handleScroll("#contact")}
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
