// src/components/Paragraph.js
import React from "react";
import "../App.scss";

const Paragraph = ({
  children = "",
  align = "",
  type = "",
  isTabbed = false,
}) => {
  return (
    <p
      className={`text paragraph ${align} ${type}`}
      dangerouslySetInnerHTML={{
        // __html: isTabbed ? `&emsp;&emsp;${children}` : children,
        __html: children,
      }}
    />
    // <p className={`text paragraph ${align} ${type}`}>{children}</p>
  );
};

export default Paragraph;
