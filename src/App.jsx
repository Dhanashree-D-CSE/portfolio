import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import PortfolioNavbar from "./components/Navbar";

function App() {
  return (
    <>
     

      {/* main sections */}
      <div id="home">
        <Home />
      </div>
      {/* <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div> */}
    </>
  );
}

export default App;
