import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Whiteboard from '../../components/WhiteBoard';
import RightSidebar from '../../components/RightSidebar';
import { GlobalContext } from '../../context/GlobalContext';
import SelectProject from '../../images/select-project.png';
import './style.scss';

const Dashboard = () => {
  const { activeProject = {} } = useContext(GlobalContext);
  const navigate = useNavigate();
  const isEmptyProject = !activeProject || Object.keys(activeProject).length === 0;

  return (
    <div className="dashboard-container">
      <div className={`dashboard ${isEmptyProject ? 'empty-dashboard' : ''}`}>
        <div className="dashboard-title">
          {!isEmptyProject ? `Dashboard - Project ${activeProject.name}` : 'Dashboard'}
        </div>
        {!isEmptyProject ? (
          <div className="whiteboard-container">
            <Whiteboard />
          </div>
        ) : (<div className="no-project-placeholder">
        <img src={SelectProject} alt="No Project Selected" />
          <span>No project selected. Please select an existing project or create a new one to get started!</span>
            <button onClick={() => navigate('/projects')} className="projects-cta-btn">Choose Project</button>
          </div>
        )}
      </div>
      {!isEmptyProject && <RightSidebar />}
    </div>
  );
};

export default Dashboard;
