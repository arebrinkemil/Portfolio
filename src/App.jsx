import { useState } from "react";
import { Sidenav } from "./components/Sidenav";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import ProgressBar from "react-scroll-progress-bar";
import Background from "./components/Background";
import ContactForm from "./components/ContactForm";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Background /> {}
      <div className="bg-darkmode">
        <div id="myProgressBar">
          <ProgressBar />
        </div>
        <div id="content">
          <Sidenav />
          <Main />

          <About />
          <Skills />
          <Projects />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default App;
