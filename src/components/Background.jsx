import React, { useEffect, useRef } from "react";
import "../Background.css";
const Background = () => {
  const elements = useRef([]);

  const min = 1;
  const max = 1.5;

  const Shape = ({ el }) => {
    const size = el.offsetWidth;
    let x = random(0, window.innerWidth - size);
    let y = random(0, window.innerHeight - size);
    let vx = random(min, max);
    let vy = random(min, max);

    const boundary = () => {
      if (x >= window.innerWidth - size) {
        vx *= -1;
        x = window.innerWidth - size;
      }
      if (y >= window.innerHeight - size) {
        vy *= -1;
        y = window.innerHeight - size;
      }
      if (x <= 0) {
        vx *= -1;
        x = 0;
      }
      if (y <= 0) {
        vy *= -1;
        y = 0;
      }
    };

    const animate = () => {
      x += vx;
      y += vy;
      el.style.transform = `translate(${x}px,${y}px)`;
      boundary();
    };

    return { animate };
  };

  const random = (min, max) => Math.random() * (max - min) + min;

  useEffect(() => {
    const shapes = Array.from(elements.current, (el) => Shape({ el }));
    const update = () => {
      shapes.forEach((shape) => shape.animate());
      requestAnimationFrame(update);
    };
    update();
  }, []);

  return (
    <main className="background">
      <div className="glass"></div>
      <div className="shapes">
        <div
          className="shape shape-yellow"
          ref={(el) => elements.current.push(el)}
        ></div>
        <div
          className="shape shape-salmon"
          ref={(el) => elements.current.push(el)}
        ></div>
        <div
          className="shape shape-yellow"
          ref={(el) => elements.current.push(el)}
        ></div>
        <div
          className="shape shape-salmon"
          ref={(el) => elements.current.push(el)}
        ></div>
      </div>
    </main>
  );
};

export default Background;
