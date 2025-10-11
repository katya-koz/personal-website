// src/components/Projects.jsx

import React from "react";
import Card from "../Card/Card";
import "./Projects.scss";
import Subheading from "../../Global/Text/Subheading";
import Container from "../../Global/Components/Container/Container";

import cardsData from "../Assets/projects_info.json";
import images from "../Assets/project_images";

const Projects = () => {
  return (
    <div id="projects" className="section">
      <Subheading title={true}>Select Projects</Subheading>
      <Container direction="horizontal" align="center" wrap="wrapped">
        {cardsData.cards.map((card) => {
          // Resolve coverImage
          const coverImageSrc = images[card.coverImage];

          // Resolve media
          const mediaResolved = card.media.map((mediaItem, index) => {
            const resolvedSrc = images[mediaItem.src];
            return { ...mediaItem, src: resolvedSrc };
          });

          return (
            <Card
              key={card.id}
              coverImage={coverImageSrc}
              date={card.date}
              media={mediaResolved}
              title={card.title}
              description={card.description}
              link={card.link}
              listItems={card.listItems}
              badges={card.badges}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default Projects;
