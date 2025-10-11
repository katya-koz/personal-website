// src/components/About.js
import React from "react";
import Carousel from "../../Global/Components/Carousel/Carousel.jsx";
import "./About.scss";
import "../../Global/App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import IconButton from "../../Global/Components/IconButton/IconButton.jsx";
import Paragraph from "../../Global/Text/Paragraph.jsx";
import Caption from "../../Global/Text/Caption.jsx";
import Subheading from "../../Global/Text/Subheading.jsx";
import Container from "../../Global/Components/Container/Container";

// import portrait0 from "../Assets/portrait0.png";
// import portrait1 from "../Assets/portrait1.png";
// import portrait2 from "../Assets/portrait2.png";
// import portrait3 from "../Assets/portrait3.png";
// import portrait4 from "../Assets/portrait4.png";
// import portrait5 from "../Assets/portrait5.png";
import portrait6 from "../Assets/portrait6.png";

const images = [{ src: portrait6, type: "image" }];

const About = () => {
  return (
    <div id="about" className="section">
      <Container direction="horizontal" align="center" type="media-friendly">
        <Container direction="vertical" align="center">
          <Subheading title={true}>About Me</Subheading>
          <Paragraph isTabbed={true}>
            Hey, my name is Katya and I'm a Software Engineering (Security
            Stream) student at York University. I've just completed a 12 month
            co-op placement as a Software Developer at Mackenzie Health, and am
            in my third year.
          </Paragraph>
          <br />
          <Paragraph isTabbed={true}>
            Aside from programming, I like to watch movies, read books, play
            games, and bake. I consider myself a little bit of a film buff, so
            if you're interested in some of my movie recommendations don't
            hesitate to message me on Linkedin :D
          </Paragraph>
          <br />
          <Caption>Connect With Me:</Caption>
          <Container direction="horizontal" align="center">
            <IconButton
              icon="bi bi-github"
              action={() =>
                window.open("https://github.com/katya-koz", "_blank")
              }
            ></IconButton>
            <IconButton
              icon="bi bi-linkedin"
              action={() =>
                window.open("https://www.linkedin.com/in/katya-koz/", "_blank")
              }
            ></IconButton>
            {/* <IconButton
              icon="bi bi-file-earmark-text"
              action={() =>
                window.open("https://www.linkedin.com/in/katya-koz/", "_blank")
              }
            ></IconButton> */}
          </Container>
        </Container>
        <Carousel aspectRatio="square" media={images} />
      </Container>
    </div>
  );
};

export default About;
