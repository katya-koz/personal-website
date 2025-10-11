// src/components/TypeWriterText.js
import React, { useState, useEffect } from "react";
import "../../Global/App.scss";

const TypeWriterText = ({
  isLastLine = false,
  children,
  speed = 100,
  style = "",
  handleCompletedTyping,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCaretVisible, setIsCaretVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  const onComplete = () => {
    if (!isLastLine) {
      setIsCaretVisible(false);
    }
    handleCompletedTyping();
  };

  useEffect(() => {
    if (currentIndex < children.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + children[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    } else if (isTyping) {
      onComplete();
      setIsTyping(false);
    }
  }, [currentIndex, children, speed, onComplete]);

  useEffect(() => {
    let caretBlinking;

    if (isTyping) {
      caretBlinking = setInterval(() => {
        setIsCaretVisible((prev) => !prev);
      }, 500);
    } else if (isLastLine) {
      caretBlinking = setInterval(() => {
        setIsCaretVisible((prev) => !prev);
      }, 500);
    }

    return () => clearInterval(caretBlinking);
  }, [isTyping, isLastLine]);

  return (
    <p className={`typewriter ${style}`}>
      {displayedText}
      {isCaretVisible && <span className="caret">|</span>}
    </p>
  );
};

export default TypeWriterText;
