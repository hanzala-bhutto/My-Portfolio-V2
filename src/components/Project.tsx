import React from "react";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from "../data";
import '../assets/styles/Project.scss';
import { Link } from 'react-router-dom';


function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {projects.slice(0, 4).map((project, index) => (
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
            <div className="load-more-container">
                <Link to="/My-Portfolio-V2/projects" className="load-more-button">Load More</Link>
            </div>
        </div>
    );
}

export default Project;