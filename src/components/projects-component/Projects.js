import React from "react";
import "./Projects.css";

const projectData = [
  {
    title: "Ecommerce Dashboard",
    description: "A brief description of the project and the technologies used in its development.",
    imageUrl: "ecommerce.jpg",
    link: "#"
  },
  {
    title: "Project Title 2",
    description: "A brief description of the project and the technologies used in its development.",
    imageUrl: "/path/to/image2.jpg",
    link: "#"
  },
  {
    title: "Project Title 3",
    description: "A brief description of the project and the technologies used in its development.",
    imageUrl: "/path/to/image3.jpg",
    link: "#"
  },
  {
    title: "Project Title 4",
    description: "A brief description of the project and the technologies used in its development.",
    imageUrl: "/path/to/image4.jpg",
    link: "#"
  }
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="projects-heading">Featured Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
      <hr className="full-line mt-10" />
    </div>
  );
};

export default Projects;
