import React from "react";
import ProjectItem from "./ProjectItem";
import hus from "../assets/hus.jpg";
import api from "../assets/API.png";
import pelago from "../assets/pelago.png";
import chat from "../assets/reactchat.png";
import pro from "../assets/protech.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-aeroblue">Projects</h1>
      <p className="text-textwhite text-center py-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
        voluptatem rem voluptatum minus? Illo dolores at tempore quam, minus
        assumenda ipsam quidem reiciendis porro magnam veniam eum quo laudantium
        commodi.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={chat}
          title="react chat"
          description={"A simple chat application made with react and firebase"}
          hasGithub={true}
          isHosted={true}
          underDevelopment={false}
          url={"https://react-chat-lac.vercel.app/"}
          github={"https://github.com/arebrinkemil/reactChat"}
        />
        <ProjectItem
          img={pelago}
          title="Yrgopelago"
          description={
            "A hotel booking site made with php,javascript and sqlite"
          }
          hasGithub={true}
          isHosted={true}
          underDevelopment={false}
          url={"https://arebrink.se/yrgopelago/public/index.php"}
          github={"https://github.com/arebrinkemil/yrgopelago"}
        />
        <ProjectItem
          img={pro}
          title="Protech"
          description={
            "A collaborative with students from design. A website for a fictional companies products"
          }
          hasGithub={true}
          isHosted={true}
          underDevelopment={false}
          url={"https://pro-tech-three.vercel.app/"}
          github={"https://github.com/arebrinkemil/ProTech-gruppProjekt"}
        />
        <ProjectItem
          img={api}
          title="Node API"
          description={
            "A simple API made with node and express. It can retrieve, add, delete and update images/albums from an mongodb database"
          }
          hasGithub={true}
          isHosted={false}
          underDevelopment={true}
          url={""}
          github={"https://github.com/arebrinkemil/photolibraryNODE"}
        />
      </div>
    </div>
  );
};

export default Projects;
