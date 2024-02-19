import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      {/* <img
        className="w-full h-screen object-cover object-right"
        src="https://images.unsplash.com/photo-1506794778225-cbf6c8df4c5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img> */}
      <div className="w-full h-screen"></div>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/">
        <div className="max-w-[700px] m-auto h-full w-full flex justify-center flex-col lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-textwhite">
            I'm Emil Årebrink
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-textgray">
            im a
            <TypeAnimation
              sequence={["Developer", 1000, "Coder", 1000]}
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
      </div>
    </div>
  );
};

export default Main;
