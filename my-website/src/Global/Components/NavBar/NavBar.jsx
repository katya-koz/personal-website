import React, { useEffect } from "react";
import ScrollLink from "../ScrollLink/ScrollLink.jsx";
import "./NavBar.scss";
import "../../App.scss";
import Icon from "../../Assets/bunny.png";
const NavBar = () => {
  return (
    <>
      <nav className="navbar subheading">
        <b className="scroll-link">
          <img src={Icon} className="icon"></img>
        </b>
        <ScrollLink to="home" nextLocation={"about"}>
          Home
        </ScrollLink>
        <ScrollLink to="about" nextLocation={"education"}>
          About
        </ScrollLink>
        <ScrollLink to="education" nextLocation={"experience"}>
          Education
        </ScrollLink>
        <ScrollLink to="experience" nextLocation={"projects"}>
          Experience
        </ScrollLink>
        <ScrollLink to="projects" nextLocation={"last"}>
          Projects
        </ScrollLink>
      </nav>
    </>
  );
};

export default NavBar;
