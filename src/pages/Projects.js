import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaTools, FaTasks } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Tsonggay System',
      description: 'An ongoing capstone project aimed at streamlining business processes and customer interactions through an integrated information system.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      links: {
        github: 'https://github.com/Nixie-Para-unda/Tsonggay-System.git',
        live: null,
      },
      icon: <FaTools />,
    },
    {
      id: 2,
      title: 'Task Management',
      description: 'Midterm Case Study project that allows users to manage their tasks efficiently.',
      technologies: ['React', 'Laravel', 'CSS Modules'],
      links: {
        github: 'https://github.com/Mark-Quipit/Task-Management.git',
        live: null,
      },
      icon: <FaTasks />,
    }
  ];

  return (
    <div className="projects-page">
      <h1 className="section-title">My Projects</h1>

      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-icon-wrapper">
              <div className="project-icon">{project.icon}</div>
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <div className="tech-stack">
                <h3>Technologies</h3>
                <ul>
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
