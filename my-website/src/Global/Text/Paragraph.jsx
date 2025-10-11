// src/components/Paragraph.js
import React from "react";
import "../App.scss";

const Paragraph = ({
  children = "",
  align = "",
  type = "",
  isTabbed = false,
}) => {
  // Function to replace **word** with <em>word</em> while preserving paragraph structure

  // Use formatItalics to prepare the HTML string for dangerouslySetInnerHTML

  return (
    <p
      className={`text paragraph ${align} ${type}`}
      // Directly set the formatted string as innerHTML
      dangerouslySetInnerHTML={{
        // __html: isTabbed ? `&emsp;&emsp;${children}` : children,
        __html: children,
      }}
    />
    // <p className={`text paragraph ${align} ${type}`}>{children}</p>
  );
};

export default Paragraph;
