import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import "../NavBar/NavBar.scss";

const ScrollLink = ({ to, children, container = "", nextLocation }) => {
  const navbarHeightRef = useRef(0);
  const [duration] = useState(100);
  const [highlighted, setHighlighted] = useState(false);

  const updateNavbarHeight = () => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      navbarHeightRef.current = navbar.offsetHeight;
    }
  };

  const updateHighlight = () => {
    const currentNavbarHeight = navbarHeightRef.current;
    const target = document.getElementById(to);
    if (!target) return;

    const limit = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );

    const nextSectionTop =
      nextLocation === "last"
        ? limit
        : document.getElementById(nextLocation)?.offsetTop || limit;

    if (
      window.scrollY + currentNavbarHeight >= target.offsetTop &&
      window.scrollY + currentNavbarHeight < nextSectionTop
    ) {
      setHighlighted(true);
    } else {
      setHighlighted(false);
    }
  };

  useEffect(() => {
    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  useEffect(() => {
    updateHighlight();
    window.addEventListener("scroll", updateHighlight);
    return () => window.removeEventListener("scroll", updateHighlight);
  }, []);

  return (
    <Link
      containerId={container}
      className={highlighted ? "scroll-link highlighted" : "scroll-link"}
      to={to}
      smooth={true}
      duration={duration}
      offset={-navbarHeightRef.current}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
