import React, { useState, useRef, useEffect } from "react";
import IconButton from "../IconButton/IconButton.jsx";
import "../../App.scss";

const Video = ({ videoSource, hasSound, isActive }) => {
  const [isMuted, setIsMuted] = useState(true); // init state
  const ref = useRef(null);

  const handleVideoPlay = () => {
    if (ref.current) {
      ref.current.play();
    }
  };

  const handleVideoPause = () => {
    if (ref.current) {
      ref.current.pause();
    }
  };

  const toggleMute = () => {
    if (hasSound && ref.current) {
      setIsMuted(!isMuted);
      ref.current.muted = !isMuted;
    }
  };

  useEffect(() => {
    if (isActive) {
      handleVideoPlay();
    } else {
      handleVideoPause();
    }
    if (ref.current) {
      ref.current.muted = isMuted;
    }
  }, [isActive, isMuted]);

  return (
    <div className="video-wrapper">
      <video
        className="video-container"
        ref={ref}
        src={videoSource}
        controls
        loop={true}
        muted={isMuted}
        playsInline
      />

      {hasSound && (
        <IconButton
          icon={isMuted ? "bi bi-volume-mute" : "bi bi-volume-up"}
          action={toggleMute}
          type="mute-button"
        >
          {isMuted ? "Unmute" : "Mute"}
        </IconButton>
      )}
    </div>
  );
};

export default Video;
