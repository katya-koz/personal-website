import React from "react";
import "../../App.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import Container from "../Container/Container";
import Caption from "../../Text/Caption";

import Paragraph from "../../Text/Paragraph.jsx";
const ListElement = ({ children, date, bobble, type = "" }) => {
  if (bobble) {
    return (
     
      <div className="list-element">
        {/* <Container direction="horizontal"> */}
          <i className="bi bi-square-fill list-icon"></i>
          <Paragraph align="left">{children}</Paragraph>
        {/* </Container> */}
        <Paragraph align="right" type="date">
          {date}
        </Paragraph>
      
      </div>
    );
  } else if (type == "" && !bobble) {
    // without a bobble is a title
    return (
      <div className="list-element">
        <Caption align="left">{children}</Caption>
        <Paragraph align="right" type="date">
          {date}
        </Paragraph>
      </div>
    );
  } else {
    return (
      <div className="list-element">
        {/* <Container direction="horizontal"> */}
          <Paragraph align="left">{children}</Paragraph>
        {/* </Container> */}
      </div>
    );
  }
};

export default ListElement;
