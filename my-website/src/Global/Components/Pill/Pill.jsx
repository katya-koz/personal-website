import React from "react";
import "./Pill.scss";
///jeu

const Pill = ({ children, type = "" }) => {
  return <div className={`pill-badge ${type}`}>{children}</div>;
};

export default Pill;
