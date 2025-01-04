import React, {useState, useEffect } from 'react';
import { projects } from "../data";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../assets/styles/Project.scss';

function ProjectPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const filtered = projects.filter(project =>
      project.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProjects(filtered);
  }, [searchTerm]);

  return (
    <div className="projects-container">
      <h1>All Projects</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by skill"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredProjects.length > 0 ? (
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} className="zoom" alt="thumbnail" width="100%" height="65%"/>
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    <FaGithub size={20} />
                  </a>
                )}
                {project.website && (
                  <a href={project.website} target="_blank" rel="noreferrer" className="project-link">
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-projects-message">
          <p>No projects found.</p>
        </div>
      )}
    </div>
  );
}

export default ProjectPage;