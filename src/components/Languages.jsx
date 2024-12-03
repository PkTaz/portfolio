import React from "react";
import "../styles/Languages.css";


const Lcards = () => {
  const cardsData = [
    { title: "HTML", level: "Advanced", icon: "HTML.svg" },
    { title: "CSS", level: "Advanced", icon: "CSS.svg" },
    { title: "JavaScript", level: "Intermediate", icon: "JS.svg" },
    { title: "TypeScript", level: "Proficient", icon: "TS.svg" },
    { title: "Python", level: "Intermediate", icon: "Python.png" },
    { title: "Node.js", level: "Proficient", icon: "NODEJS.svg" },
    { title: "REACT", level: "Intermediate", icon: "REACT.svg" },
    { title: "Angular", level: "Proficient", icon: "Angular.svg" },
    { title: "MySQL", level: "Proficient", icon: "MySQL.png" },
    { title: "GitHub", level: "Advanced", icon: "GitHub.png" },
  ];

  return (
    <div className="cardcontainer">
      {cardsData.map(({ title, level, icon }) => (
        <div className="card" key={title}>
          <h3 className="title">{title}</h3>
          <h4 className={`level ${level.toLowerCase()}`}>{level}</h4> {/* Dynamically add level class */}
          <div className="bar">
            <div className="emptybar"></div>
            <div className={`filledbar ${level.toLowerCase()}`}></div>
            <img
              className="L-icon"
              src={`${process.env.PUBLIC_URL}/assets/${icon}`}
              alt={`${title} icon`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lcards;
