import React, { useState, useEffect } from "react";
import Portrait from "../Assets/portrait_ASCII.webp";
import PortraitBlink from "../Assets/portrait_eyes_closed.webp";

const LandingImage = () => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const triggerBlink = () => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, 500); // Time for the blink, adjust as needed
    };

    const randomInterval = () => {
      const interval = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000; // Between 2 and 5 seconds
      setTimeout(() => {
        triggerBlink();
        randomInterval(); // Recurse to keep blinking at random intervals
      }, interval);
    };

    randomInterval(); // Start the random blinking

    return () => {
      clearTimeout(randomInterval);
    };
  }, []);

  return (
    <img
      className="landing-image"
      src={isBlinking ? PortraitBlink : Portrait}
      alt="Portrait"
    />
  );
};

export default LandingImage;
