import React from "react";
import "../../App.scss";

const Tab = ({ children, position }) => {
  return <div className={`tab ${position}`}>{children}</div>;
};

export default Tab;
