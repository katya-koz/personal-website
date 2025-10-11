import React, { useEffect, useState } from "react";
import Stack from "react-bootstrap/Stack";
import "bootstrap-icons/font/bootstrap-icons.css";
import Pill from "../../Global/Components/Pill/Pill.jsx";
import Carousel from "../../Global/Components/Carousel/Carousel.jsx";
import ListElement from "../../Global/Components/ListElement/ListElement.jsx";
import Container from "../../Global/Components/Container/Container.jsx";
import "../../Global/App.scss";
import IconButton from "../../Global/Components/IconButton/IconButton.jsx";
import Paragraph from "../../Global/Text/Paragraph.jsx";
import Tab from "../../Global/Components/Tab/Tab.jsx";
import { useSpring, animated } from "@react-spring/web";
import "./Modal.scss";

const Modal = ({
  listItems,
  description,
  title,
  media,
  //extendedDescription,
  link,
  badges,
  show,
  onClose,
  date,
  cardReference,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  // Capture the card's position
  const cardRect = cardReference.current?.getBoundingClientRect(); // Use optional chaining to avoid errors
  const initialRect = cardRect || { left: 0, top: 0, width: 0, height: 0 }; // Fallback if undefined

  const popOutAnimation = useSpring({
    from: {
      opacity: 0,
      transform: `scale(0.5) translate(${
        initialRect.left - initialRect.width
      }px, ${initialRect.top - initialRect.height}px)`,
    },
    to: {
      opacity: 1,
      transform: `scale(1) translate(0px, 0px)`,
    },
    reverse: isClosing,
    onRest: () => {
      if (isClosing) {
        onClose(); // Call onClose to update state
      }
    },
    config: { tension: 150, friction: 15 },
  });

  const opacityShift = useSpring({
    opacity: show && !isClosing ? 1 : 0,
    config: { tension: 170, friction: 20 },
  });

  useEffect(() => {
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [show]);

  const handleOutsideClick = (e) => {
    if (e.target.className.includes("modal-overlay")) {
      // Start closing the modal
      setIsClosing(true);

      // Immediately remove event listener to avoid needing a click
      setTimeout(() => {
        onClose(); // Close modal after animation duration
      }, 300); // Match this duration with your animation duration
    }
  };

  // Prevent closing the modal if not shown
  if (!show) {
    return null;
  }

  return (
    <animated.div
      style={opacityShift}
      className="modal-overlay"
      onClick={handleOutsideClick}
    >
      <animated.div style={popOutAnimation} className={"panel modal"}>
        <Tab position="upper">
          <div className="list-element">
            <div className="text caption">{title + ", " + date}</div>
            <Stack direction="horizontal" className="right">
              {link && (
                <IconButton
                  icon="bi bi-github"
                  action={() => window.open(link, "_blank")}
                ></IconButton>
              )}
              <IconButton
                icon="bi bi-x-square-fill"
                action={() => {
                  setIsClosing(true);
                  setTimeout(() => {
                    onClose();
                  }, 300);
                }}
              ></IconButton>
            </Stack>
          </div>
        </Tab>
        <div id="inner-modal" className="scrollable">
          <Container direction="horizontal" type="modal-picture media-friendly">
            <Carousel media={media}></Carousel>
            <Paragraph type="standout" align="left" isTabbed={true}>
              {description}
            </Paragraph>
          </Container>
          {listItems && listItems.length > 0 && (
            <Stack className="list">
              {listItems.map((item, index) => (
                <ListElement type={"t"} key={index} bobble={true}>
                  {item.paragraph}
                </ListElement>
              ))}
            </Stack>
          )}
        </div>
        {/* <IconButton
          type="scroll"
          icon={"bi bi-arrow-bar-down"}
          action={"standout"}
        ></IconButton> */}
        <Tab position="lower">
          <Stack direction="horizontal" className="badges wrapped" gap={2}>
            {badges.map((name) => (
              <Pill type="small" key={name}>
                {name}
              </Pill>
            ))}
          </Stack>
        </Tab>
      </animated.div>
    </animated.div>
  );
};

export default Modal;
