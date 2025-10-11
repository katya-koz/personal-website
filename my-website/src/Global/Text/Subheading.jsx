import React from "react";
import "../App.scss";
const Subheading = ({ title = false, children, align = "" }) => {
  return <p className={`text subheading ${title ? "subheading-title" : ""} ${align}`}>{children}</p>;
};

export default Subheading;
