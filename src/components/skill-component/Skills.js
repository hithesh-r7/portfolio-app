import React from "react";
import "./Skills.css";

const skills = [
  "JavaScript", "TypeScript", "React",
  "Node.js", "Next.js", "TailwindCSS",
  "PostgreSQL", "GraphQL", "Git"
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-heading">Skills & Technologies</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
