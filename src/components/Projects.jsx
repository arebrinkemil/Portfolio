import React from "react";
import ProjectItem from "./ProjectItem";
import hus from "../assets/hus.jpg";
import bro from "../assets/bro.jpg";
import mars from "../assets/mars.jpg";
import boat from "../assets/boat.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
        voluptatem rem voluptatum minus? Illo dolores at tempore quam, minus
        assumenda ipsam quidem reiciendis porro magnam veniam eum quo laudantium
        commodi.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={hus} title="projekt 1" />
        <ProjectItem img={bro} title="projekt 2" />
        <ProjectItem img={mars} title="projekt 3" />
        <ProjectItem img={boat} title="projekt 4" />
      </div>
    </div>
  );
};

export default Projects;
