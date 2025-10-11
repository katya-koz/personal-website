import React from "react";
import Stack from "react-bootstrap/Stack";
import Pill from "../Pill/Pill.jsx";
import ListElement from "../ListElement/ListElement.jsx";
import "./InfoPanel.scss";
import Container from "../Container/Container.jsx";
import "../../App.scss";

import Caption from "../../Text/Caption.jsx";
import Tab from "../Tab/Tab.jsx";
const InfoPanel = ({ list, title, date, logo, caption, badges }) => {
  return (
    <div className="panel">
      <Tab position="upper">
        <ListElement date={date}>{title}</ListElement>
      </Tab>
      <Container direction="horizontal" align="center" type="inner-content">
        <div className="name-and-logo">
          <img src={logo} className="logo"></img>
          <Caption>{caption}</Caption>
        </div>
        <Stack>
          {list.map((item, index) => (
            <ListElement key={index} date={item.date} bobble={true}>
              {item.paragraph}
            </ListElement>
          ))}
        </Stack>
      </Container>
      <Tab position="lower">
        <Stack direction="horizontal" className="wrapped" gap={2}>
          {badges.map((name, index) => (
            <Pill key={index} type={"small"}>
              {name}
            </Pill>
          ))}
        </Stack>
      </Tab>
    </div>
  );
};

export default InfoPanel;
