// src/components/Paragraph.js
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ScrollLink from "../ScrollLink/ScrollLink";
import "../../App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const IconButton = ({ icon, action, type = "" }) => {
  const [setIcon] = useState(icon);
  const [isHidden, setIsHidden] = useState(0);
  const changeIcon = (newIcon) => {
    setIcon(newIcon);
  };

  const updateIsHidden = () => {
    const container = document.getElementsByClassName("scrollable")[0];
    const target = document.getElementsByClassName("standout")[0];

    if (container.clientHeight + container.scrollTop > target.offsetTop) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };
  useEffect(() => {
    if (type == "scroll") {
      const container = document.getElementsByClassName("scrollable")[0];

      container.addEventListener("scroll", updateIsHidden);
      return () => window.removeEventListener("scroll", updateIsHidden);
    }
  }, []);

  {
    if (type === "scroll") {
      return (
        // <button className = {`text subheading button ${type}`}
        <>
          {!isHidden && (
            <nav>
              <ScrollLink container="scroll-modal" to={"standout"}>
                <i className={`text icon-button button ${type} ${icon}`}></i>
              </ScrollLink>
              {/* <i className = {icon}><ScrollLink to = {`${action}`}></ScrollLink></i> */}
            </nav>
          )}
        </>
      );
    } else {
      return (
        <button className={`text icon-button button ${type}`} onClick={action}>
          {<i className={icon}></i>}
        </button>
      );
    }
  }
};

export default IconButton;
