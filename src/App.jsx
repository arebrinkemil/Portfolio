import { useState } from "react";
import { Sidenav } from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProgressBar from "react-scroll-progress-bar";

function App() {
  return (
    <>
      <div className="bg-darkmode">
        <div id="myProgressBar">
          <ProgressBar />
        </div>
        <Sidenav />
        <Main />
        <Work />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
