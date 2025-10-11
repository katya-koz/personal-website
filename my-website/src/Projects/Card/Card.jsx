// src/components/Card.jsx

import React, { useState, useRef } from "react";
import Modal from "../Modal/Modal";
import Pill from "../../Global/Components/Pill/Pill";
import Stack from "react-bootstrap/Stack";
import "../../Global/App.scss";
import "./Card.scss";

const Card = ({
  media,
  title,
  description,
  //extendedDescription,
  link,
  listItems,
  badges,
  coverImage,
  date,
}) => {
  const [showModal, setShowModal] = useState(false);
  const cardReference = useRef(null); // reference the card element

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  // check to ensure coverImage exists
  const backgroundImageStyle = coverImage
    ? { backgroundImage: `url(${coverImage})` }
    : {};

  return (
    <>
      <div
        className="card-container"
        ref={cardReference}
        onClick={handleShow}
        style={backgroundImageStyle}
      >
        <div className="card-overlay">
          <div className="terminal-text card-title">{title}</div>
          <p className="terminal-text caption white ">Click to Learn More...</p>
          <Stack
            direction="horizontal"
            className="badges centered wrapped"
            gap={2}
          >
            {badges.map((name, index) => (
              <Pill key={index} type={"small"}>
                {name}
              </Pill>
            ))}
          </Stack>
        </div>
      </div>

      {showModal && (
        <Modal
          show={showModal}
          onClose={handleClose}
          cardReference={cardReference}
          badges={badges}
          media={media}
          description={description}
          //extendedDescription={extendedDescription}
          title={title}
          listItems={listItems}
          link={link}
          date={date}
        />
      )}
    </>
  );
};

export default Card;
