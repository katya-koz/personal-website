import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Global/Components/NavBar/NavBar.jsx";
import Home from "./Home/Page/Home.jsx";
import About from "./About/Page/About.jsx";
import Skills from "./Skills/Page/Skills.jsx";
import Education from "./Education/Page/Education.jsx";
import Experience from "./Experience/Page/Experience.jsx";
import Projects from "./Projects/Page/Projects.jsx";
import Footer from "./Footer/Footer.jsx";
import "./Global/App.scss";

const App = () => {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <div className="main-container">
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default App;
