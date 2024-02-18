import { useState } from "react";
import { Sidenav } from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProgressBar from "react-scroll-progress-bar";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Background /> {/* Add the Background component */}
      <div className="bg-darkmode">
        <div id="myProgressBar">
          <ProgressBar />
        </div>
        <div id="content">
          <Sidenav />
          <Main />
          <Work />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
