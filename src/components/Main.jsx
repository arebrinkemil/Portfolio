import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import PF from "../assets/PFbild.jpg";

const Main = () => {
  return (
    <div id="main">
      {/* <img
        className="w-full h-screen object-cover object-right"
        src="https://images.unsplash.com/photo-1506794778225-cbf6c8df4c5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img> */}
      <div className="w-full h-screen"></div>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/">
        <div className="h-full w-full flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-2">
          <div className="max-w-[700px] lg:h-full lg:w-full flex justify-center flex-col lg:items-start items-center">
            <h1 className="sm:text-5xl text-4xl font-bold text-textwhite">
              I'm Emil Årebrink
            </h1>
            <h2 className="flex sm:text-3xl text-2xl pt-4 text-textgray">
              im a
              <TypeAnimation
                sequence={["Developer", 1000, "Helt kodad", 1000]}
                wrapper="div"
                speed={50}
                style={{ fontSize: "1em", paddingLeft: "5px" }}
                cursor={true}
                repeat={Infinity}
              />
            </h2>
            <div className="flex justify-between pt-6 max-w-[100px] w-full">
              <FaGithub color="white" className="cursor-pointer" size={30} />
              <FaLinkedin color="white" className="cursor-pointer" size={30} />
            </div>
          </div>
          <div
            className="shadow-lg overflow-hidden rounded-lg"
            style={{ boxShadow: "0 0 30px 10px rgba(20,42,93, 0.6)" }}
          >
            <img
              className="h-60 w-full object-cover md:h-full md:w-60 rounded-lg border-4 border-darkmode"
              src={PF}
              alt="Modern building architecture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
