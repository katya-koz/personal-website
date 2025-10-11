import React from "react";
import "../../App.scss";

const Container = ({
  children,
  direction,
  align = "",
  wrap = "",
  type = "",
}) => {

  const className = [
    "container",
    direction,
    align,
    wrap,
    type,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Container;
