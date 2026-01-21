import React from "react";
import Pill from "../../Global/Components/Pill/Pill.jsx";
import "./Skills.scss";
import Container from "../../Global/Components/Container/Container.jsx";
import Subheading from "../../Global/Text/Subheading.jsx";

const languages = [
  "Java",
  "C#",
  "Python",
  "Typescript",
  "JavaScript",
  "SQL",
  "C",
  "Verilog",
  "HTML",
  "SCSS/CSS",
  "Bash",
  "R",
];

const databases = ["PostgreSQL", "MongoDB", "MSSQL(T-SQL)", "SSIS"];

const frameworks = [
  "React",
  "Node",
  "Kafka",
  ".NET Core",
  "ASP.NET",
  "Spring Boot",
  "Express.js",
  "Pandas",
  "Pytorch",
  "Unity",
];

const tools = [
  "Docker",
  "Nginx",
  "Azure",
  "AWS (S3, CloudFront)",
  "JUnit",
  "Debian/Linux",
  "Maven",
  "Gradle",
  "Selenium",
  "IIS",
  "Jira",
  "Git",
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
      <Subheading title={true}>Frameworks & Libraries</Subheading>
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
      <Subheading title={true}>Tools & Devops</Subheading>
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
