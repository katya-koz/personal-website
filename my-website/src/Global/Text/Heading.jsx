import React from "react";
import "../App.scss";
const Heading = ({ children, align = "" }) => {
  return <p className={`text subheading ${align}`}>{children}</p>;
};

export default Heading;
