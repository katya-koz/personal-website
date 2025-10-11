import React from "react";
import Pill from "../../Global/Components/Pill/Pill.jsx";
import "./Skills.scss";
import Container from "../../Global/Components/Container/Container.jsx";
import Subheading from "../../Global/Text/Subheading.jsx";

const languages = [
  "C#",
  "Java",
  "Typescript",
  "JavaScript",
  "HTML",
  "SCSS/CSS",
  "Python",
  "Bash",
  "C",
];

const databases = ["PostgreSQL", "MSSQL", "Firebase", "SSIS"];

const frameworks = [
  "React.js",
  "Node.js",
  ".NET",
  "ASP.NET",
  "Angular",
  "Java Spring Boot",
  "Express.js",
];

const tools = [
  "Docker",
  "Debian",
  "AWS",
  "Azure",
  "FFMPEG",
  "Unity",
  "Nginx",
  "Gradle",
  "IIS",
];

const Skills = () => {
  return (
    <div className="section" id="skills">
      <Subheading title={true}>Languages</Subheading>
      <Container direction="horizontal" wrap="wrapped" align="center">
        {languages.map((skill, index) => (
          <Pill key={index}>{skill}</Pill>
        ))}
      </Container>
      <Subheading title={true}>Frameworks</Subheading>
      <Container direction="horizontal" wrap="wrapped" align="center">
        {frameworks.map((skill, index) => (
          <Pill key={index}>{skill}</Pill>
        ))}
      </Container>
      <Subheading title={true}>Data</Subheading>
      <Container direction="horizontal" wrap="wrapped" align="center">
        {" "}
        {databases.map((skill, index) => (
          <Pill key={index}>{skill}</Pill>
        ))}
      </Container>
      <Subheading title={true}>Tools</Subheading>
      <Container direction="horizontal" wrap="wrapped" align="center">
        {" "}
        {tools.map((skill, index) => (
          <Pill key={index}>{skill}</Pill>
        ))}
      </Container>
    </div>
  );
};

export default Skills;
