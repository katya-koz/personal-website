import React from "react";
import "./Experience.scss";
import InfoPanel from "../../Global/Components/InfoPanel/InfoPanel";
import CVRLogo from "../Assets/cvr_logo.png";
import MHLogo from "../Assets/mh.png";
const Experience = () => {
  const tools = ["C#", "Unity", "OpenXR", "Virtual Reality"];
  const tools1 = [
    "C#",
    "ASP.NET",
    ".NET Core",
    "SQL",
    "Selenium",
    "Azure",
    "Python",
    "IIS",
  ];

  const listItemsRA = [
    {
      paragraph:
        "Accelerated visual perception research by developing 4+ VR programs with OpenXR, Unity, and C#, incorporating interactive tasks.",
    },
    {
      paragraph:
        "Optimized demanding 360° image/video playback for smooth VR performance, reducing frame drop related data loss from 20% to below 1%.",
    },
    {
      paragraph:
        "Implemented multi threaded systems to enable real-time logging and parallel processing of high volume head tracking data.",
    },
    {
      paragraph:
        "Conducted and coordinated over 80 human subject testing trials.",
    },
    {
      paragraph:
        "Translated preliminary research findings into an engaging scientific poster, presented at the Lassonde Undergraduate Research Conference in 2023.",
    },
  ];

  const listItemsMH = [
    {
      paragraph:
        "Deployed a centralized ASP.NET REST API featuring a thread-safe concurrent queue to process 2,000+ tasks across 6 systems; enforced Role-Based Access Control (RBAC) via Windows Authentication and IIS.",
    },
    {
      paragraph:
        "Automated staff badge management via a JWT-secured C#/ASP.NET/JS web app, reducing IT service ticket volume by over 25%.",
    },
    {
      paragraph:
        "Scaled a mission-critical RTLS alert system to support 1,500+ staff profiles by engineering automated data archival and synchronization jobs in C# and SQL.",
    },
    {
      paragraph:
        "Validated hospital safety technologies for HIMSS Stage 7 certification by leveraging SQL to analyze historical data, proving the efficacy of fall prevention systems.",
    },
    {
      paragraph:
        "Achieved 80% transmission accuracy in tracing COVID-19 spread by developing an experimental temporal graph model in Azure ML Studio using PyTorch and Pandas.",
    },
  ];
  return (
    <div className="section" id="experience">
      <InfoPanel
        logo={CVRLogo}
        badges={tools}
        list={listItemsRA}
        title={"Research Assistant"}
        date={"June 2023 - August 2024, August 2025 - Present"}
        caption={"Virtual Reality and Perception Laboratory"}
      ></InfoPanel>
      <InfoPanel
        logo={MHLogo}
        badges={tools1}
        list={listItemsMH}
        title={"Software Engineering Intern"}
        date={"August 2024 - August 2025"}
        caption={"Mackenzie Health"}
      ></InfoPanel>
    </div>
  );
};

export default Experience;
