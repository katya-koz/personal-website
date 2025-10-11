import React from "react";
import "./Education.scss";
import InfoPanel from "../../Global/Components/InfoPanel/InfoPanel";
import YorkLogo from "../Assets/york_logo.png";
const Education = () => {
  const courses = [
    "Embedded Systems",
    "Data Structures",
    "Object Oriented Programming",
    "Operating Systems",
  ];
  const listItems = [
    { paragraph: "Lassonde Undergraduate Research Award", date: "May 2023" },
    {
      paragraph: "York University Automatic Entrance Scholarship",
      date: "September 2022, September 2023",
    },
    { paragraph: "Dean's Honour List", date: "May 2023, May 2024" },
    { paragraph: "York Mobility Award", date: "May 2024" },
    { paragraph: "Cumulative GPA of 3.8/4.0", date: "Present" },
  ];
  return (
    <div className="section" id="education">
      <InfoPanel
        logo={YorkLogo}
        badges={courses}
        list={listItems}
        title={"B.Eng., Spec. Hons. Software Engineering (Security)"}
        date={"Expected Graduation May 2026"}
        caption={"York University"}
      ></InfoPanel>
    </div>
  );
};

export default Education;
