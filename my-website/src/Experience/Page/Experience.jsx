import React from "react";
import "./Experience.scss";
import InfoPanel from "../../Global/Components/InfoPanel/InfoPanel";
import CVRLogo from "../Assets/cvr_logo.png";
import MHLogo from "../Assets/mh.png";
const Experience = () => {
  const tools = ["C#", "Unity", "Virtual Reality"];
  const tools1 = [
    "C#",
    ".NET",
    "SQL",
    "MSSQL",
    "Selenium",
    "Excel",
    "Azure",
    "Python",
  ];

  const listItemsRA = [
    {
      paragraph:
        "Developed several virtual reality image quality assessment programs in Unity and C#, incorporating various media types (image and video) and interactive tasks.",
    },
    {
      paragraph:
        "Maintained high data integrity by thoroughly testing and implementing safeguards against frame loss during head tracking, ensuring continuous capture of motion data.",
    },
    {
      paragraph:
        "Optimized high-fidelity 360° video playback for smooth performance on demanding VR headsets.",
    },
    {
      paragraph:
        "Implemented multithreaded systems to enable real time logging and processing of head tracking data.",
    },
    {
      paragraph:
        "Optimized VR experimental programs to minimize frame drop related data loss, reducing average loss from 20% to below 1%.",
    },
  ];

  const listItemsMH = [
    {
      paragraph:
        "Built and deployed a JWT token secured web app using C#, ASP.NET, and JavaScript to automate an outdated staff badge administration workflow, reducing service ticket creation by over 25% and facilitating the management and consolidation of over 1,500 staff profiles across several vendor applications.",
    },
    {
      paragraph:
        "Developed a stateless ASP.NET REST API to centralize development, scheduled tasks (Quartz.NET CRON triggers), and backend web and database operations across 6 systems. Secured via IIS and Windows Authentication",
    },
    {
      paragraph:
        "Designed and implemented a relational SQL database to integrate employee data across multiple vendor platforms and support a development API.",
    },
    {
      paragraph:
        "Conducted an analyis on historical data in SQL to assess the effectiveness of hospital technology in preventing patient falls, ultimately contributing to CVH achieving a HIMSS Analytics Stage 7 evaluation.",
    },
    {
      paragraph:
        "Created an experimental forward tracing temporal graph model with Python (Jupyter Notebook, Pandas, Pytorch) to contact trace COVID-19 infections at the hospital. Predicted with 80% accuracy whether an encounter between staff and patient resulted in transmission across a historical dataset",
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
        title={"Full Stack Developer"}
        date={"August 2024 - August 2025"}
        caption={"Mackenzie Health"}
      ></InfoPanel>
    </div>
  );
};

export default Experience;
