import React, { useState } from "react";
import LandingImage from "../LandingImage/LandingImage";

import "./Home.scss";
import "../../Global/App.scss";
import TypeWriterText from "../TypeWriterText/TypeWriterText";

const Home = () => {
  const [currentLine, setCurrentLine] = useState(0);

  const handleComplete = () => {
    setCurrentLine(currentLine + 1);
  };

  return (
    <div id="home">
      <LandingImage />
      <div className="vertical container left">
        {currentLine >= 0 && (
          <TypeWriterText
            speed={150} // lower is faster
            style="landing-text text"
            handleCompletedTyping={handleComplete}
          >
            Hi,
          </TypeWriterText>
        )}
        {currentLine >= 1 && (
          <TypeWriterText
            speed={150}
            style="landing-text text"
            handleCompletedTyping={handleComplete}
          >
            I'm Katya.
          </TypeWriterText>
        )}

        {currentLine >= 2 && (
          <TypeWriterText
            isLastLine={true}
            speed={80}
            style="landing-text text caption"
            handleCompletedTyping={handleComplete}
          >
            Full Stack Software Developer
          </TypeWriterText>
        )}
      </div>
    </div>
  );
};

export default Home;
