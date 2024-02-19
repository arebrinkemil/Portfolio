import React from "react";
import ProjectItem from "./ProjectItem";
import api from "../assets/API.png";
import pelago from "../assets/pelago.png";
import chat from "../assets/reactchat.png";
import pro from "../assets/protech.png";
import PF from "../assets/PFbild.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "../index.css";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: true,
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App" ref={component}>
      <div className="firstContainer"></div>
      <div ref={slider} className="swagbox">
        <div className="description panel w-screen lg:w-[50vw] h-screen flex items-center">
          <div className=" mx-auto bg-gray-200 rounded-xl shadow-md overflow-hidden flex-initial basis-3/4 lg:basis-1/2 w-[90vw] h-[65vh] lg:h-[50vh]">
            <div className="md:flex">
              <div className="md:shrink-0">
                {/* <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src={PF}
                  alt="Modern building architecture"
                /> */}
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-2xl text-aeroblue font-semibold">
                  Projects
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  Some of my github projects
                </a>
                <p className="mt-2 text-slate-500">
                  Some are still in development and will be marked with
                  "development" and may therefore not be hosted yet
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="panel w-screen lg:w-[50vw] h-screen">
          <div
            id="projects"
            className=" h-full w-full flex items-center justify-center"
          >
            <div className="grid gap-12 gap-6 w-[80%]">
              <ProjectItem
                img={chat}
                title="react chat"
                description={
                  "A simple chat application made with react and firebase"
                }
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
            </div>
          </div>
        </div>
        <div className="panel w-screen lg:w-[50vw] h-screen">
          <div
            id="projects"
            className=" h-full w-full flex items-center justify-center"
          >
            <div className="grid gap-12 gap-6 w-[80%]">
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
        </div>
        <div className="panel w-screen lg:w-[50vw] h-screen">
          <div
            id="projects"
            className=" h-full w-full flex items-center justify-center"
          >
            <div className="grid gap-12 gap-6 w-[80%]">
              <ProjectItem
                img={chat}
                title="react chat"
                description={
                  "A simple chat application made with react and firebase"
                }
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
            </div>
          </div>
        </div>
      </div>
      <div className="lastContainer">Last Container</div>
    </div>
  );
}
