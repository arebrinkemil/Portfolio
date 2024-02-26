import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bridge from "../assets/walpapabron.jpg";
import house from "../assets/houses.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    gsap.to(imageRef1.current, {
      y: 70,
      scrollTrigger: {
        trigger: imageRef1.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        ease: "power1.out",
      },
    });

    gsap.to(imageRef2.current, {
      y: -70,
      scrollTrigger: {
        trigger: imageRef2.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        ease: "power1.out",
      },
    });
  }, []);

  return (
    <section className="h-screen flex justify-center" id="about">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 overflow-y-hidden">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 overflow-y-hidden">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            About Me!
          </h2>
          <p className="mb-4">
            Hey there! I'm Emil Årebrink, a 22-year-old web developer currently
            studying at Yrgo in Gothenburg. Originally from Stenungsund, I'm
            passionate about coding and creating digital experiences that
            connect with users. My interest in web development stems from a love
            for problem-solving and the opportunity to bring ideas to life
            online. Whether it's building websites or diving into web
            applications, I enjoy the process of turning concepts into
            functional, visually appealing projects. Outside of coding, I enjoy
            photography, gaming, and music. Photography allows me to capture
            moments, while gaming provides a creative outlet and music sets the
            mood for my coding sessions.
          </p>
          <p>
            Join me on my journey as I explore the world of web development and
            continue to learn and grow in this dynamic field.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-10 lg:h-[70vh] overflow-y-hidden ">
          <img
            ref={imageRef1}
            className="w-full rounded-lg"
            src={bridge}
            alt="office content 1"
          />
          <img
            ref={imageRef2}
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={house}
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
