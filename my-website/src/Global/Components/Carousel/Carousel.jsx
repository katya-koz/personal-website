import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Container from "../Container/Container.jsx";
import IconButton from "../IconButton/IconButton.jsx";
import "../../App.scss";
import "./Carousel.scss";
import Video from "../Video/Video.jsx";
import Image from "../Image/Image.jsx";
import PDF from "../PDF/PDF.jsx";

const Carousel = ({ aspectRatio = "landscape", media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const setCurrentMediaActive = {};

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  //   return (
  //     <Container align="center" direction="horizontal" type="image-controller">
  //       {media.length > 1 && (
  //         <IconButton
  //           icon="bi bi-caret-left-fill"
  //           action={goToPrevSlide}
  //           type="indicator-button"
  //         ></IconButton>
  //       )}
  //       <Container align="center" direction="vertical" type="carousel">
  //         <Container direction="horizontal" type="carousel-image-container">
  //           {media.map((item, idx) => (
  //             <div
  //               key={idx}
  //               className={`${aspectRatio} carousel-item ${
  //                 idx === currentIndex ? "active" : ""
  //               }`}
  //             >
  //               {item.type === "image" && <Image imageSource={item.src}></Image>}
  //               {item.type === "video" && (
  //                 <Video
  //                   hasSound={item.hassound}
  //                   videoSource={item.src}
  //                   isActive={idx === currentIndex}
  //                 ></Video>
  //               )}
  //               {item.type === "pdf" && <PDF PDFSource={item.src}></PDF>}
  //             </div>
  //           ))}
  //         </Container>
  //         {media.length > 1 && (
  //           <Container
  //             direction="horizontal"
  //             align="center"
  //             type="image-carousel-indicators"
  //           >
  //             {media.map((_, idx) => (
  //               <span
  //                 key={idx}
  //                 className={`indicator ${
  //                   idx === currentIndex ? "indicator-active" : ""
  //                 }`}
  //                 onClick={() => setCurrentIndex(idx)}
  //               ></span>
  //             ))}
  //           </Container>
  //         )}
  //       </Container>
  //       {media.length > 1 && (
  //         <IconButton
  //           type="indicator-button"
  //           icon="bi bi-caret-right-fill"
  //           action={goToNextSlide}
  //         ></IconButton>
  //       )}
  //     </Container>
  //   );

  return (
    <div className="carousel-container">
      <div className="image-controller">
        {media.length > 1 && (
          <IconButton
            icon="bi bi-caret-left-fill"
            action={goToPrevSlide}
            type="indicator-button"
          ></IconButton>
        )}

        <div className="carousel-image-container">
          {media.map((item, idx) => (
            <div
              key={idx}
              className={`${aspectRatio} carousel-item ${
                idx === currentIndex ? "active" : ""
              }`}
            >
              {item.type === "image" && <Image imageSource={item.src}></Image>}
              {item.type === "video" && (
                <Video
                  hasSound={item.hassound}
                  videoSource={item.src}
                  isActive={idx === currentIndex}
                ></Video>
              )}
              {item.type === "pdf" && <PDF PDFSource={item.src}></PDF>}
            </div>
          ))}
        </div>

        {media.length > 1 && (
          <IconButton
            type="indicator-button"
            icon="bi bi-caret-right-fill"
            action={goToNextSlide}
          ></IconButton>
        )}
      </div>
      {media.length > 1 && (
        <div className="indicators-bar">
          {media.map((_, idx) => (
            <span
              key={idx}
              className={`indicator ${
                idx === currentIndex ? "indicator-active" : ""
              }`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["image", "video", "pdf"]).isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
  autoPlayInterval: PropTypes.number,
};

export default Carousel;
