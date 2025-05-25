import React, { useState } from "react";
import "../styles/otherSkills.css";

const skills = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", level: 50 },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", level: 20 },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", level: 20 },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", level: 50 },
  { name: "Node", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", level: 40 },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", level: 60 },
];

const OtherSkillsToggle = () => {
  const [show, setShow] = React.useState(false);
  const toggleShow = () => setShow(prev => !prev);

  return (
    <div className="other-skills-toggle">
      <p onClick={toggleShow} className="no-select">
        {show ? "Hide Other Skills" : "Show Other Skills"}
      </p>

      {show && (
        <div className="other-skills">
          <div className="other-skills-item-container">
            {skills.map(({ name, icon, level }) => (
              <div key={name} className="other-skills-item" style={{ "--level": `${level}%` }}>
                <img src={icon} alt={name} />
                <p className="no-select">{name}</p>

                <div className="other-skill-bar">
                  <div className="other-skill-bar-fill"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OtherSkillsToggle;
