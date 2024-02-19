import { useState } from "react";
import { Sidenav } from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import ProgressBar from "react-scroll-progress-bar";
import Background from "./components/Background";
import ContactForm from "./components/ContactForm";

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
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default App;
