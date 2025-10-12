// src/AnimatedSection.js
import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const Section = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? "scale(1) translateY(0)"
      : "scale(0.8) translateY(10em)",
    config: { tension: 100, friction: 10 },
  });

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.current.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
      }
    )
  );

  useEffect(() => {
    if (ref.current) {
      observer.current.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.current.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <animated.div style={animationProps} ref={ref}>
      {children}
    </animated.div>
  );
};

export default Section;
