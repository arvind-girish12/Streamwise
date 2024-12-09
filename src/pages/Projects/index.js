import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import { GlobalContext } from '../../context/GlobalContext';
import CreateProjectModal from '../../components/CreateProjectModal';

const Projects = () => {
  const { projects, setProjects, activeProject, setActiveProject } = useContext(GlobalContext);
  const [showCreateProject, setShowCreateProject] = useState(false);
  const navigate = useNavigate();
  const handleSaveProject = (projectDetails) => {
    setProjects([...projects, projectDetails]);
    setShowCreateProject(false);
  }
  
  return (
    <div className="projects-container">
      <div className="projects">
      <div className="projects-title">
        <span>Projects</span>
        {projects && projects.length > 0 && <button 
        onClick={() => setShowCreateProject(true)}
          className="create-project-btn projects-title-btn"
        >
          Create New Project
        </button>}
        </div>
      
      {projects && projects.length > 0 ? (
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              className={`project-card ${project === activeProject ? 'active' : ''}`}
              onClick={() => setActiveProject(project)}
            >
              <div className="project-card-left">
                {project.clientLogo && (
                  <img 
                    src={URL.createObjectURL(project.clientLogo)} 
                    alt={`${project.clientName} logo`}
                    className="client-logo"
                  />
                )}
              </div>
              <div className="project-card-right">
                {project === activeProject && (
                  <div className="active-tag">Active</div>
                )}
                <span className="project-name">Project: {project.name}</span>
                <div className="client-name">Client: {project.clientName}</div>
                <div className="competitors">
                  <span className="competitors-label">Competitors:</span>
                  <ul className="competitors-list">
                    {project.competitors.map((competitor, index) => (
                      <li key={index}>{competitor}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="go-to-dashboard-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProject(project);
                    navigate('/dashboard');
                  }}
                >
                  Go to Dashboard
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="projects-empty">
          <span>No projects found</span>
          <button 
        onClick={() => setShowCreateProject(true)}
        className="create-project-btn"
      >
        Create New Project
      </button>
        </div>
        
      )}
    </div>
    <CreateProjectModal 
      isOpen={showCreateProject}
    onClose={() => setShowCreateProject(false)}
    saveProject={handleSaveProject}
    />
    </div>
  );
};

export default Projects;
