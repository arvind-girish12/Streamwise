import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalState from './context/GlobalState';
import TopBar from './components/TopBar';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Projects from './pages/Projects';
import Calendar from './pages/Calendar';
import "./App.scss"

const App = () => {
  return (
    <GlobalState>
      <Router>
        <div className="app">
          <TopBar />
          <div className="layout">
            <LeftSidebar />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </div>
            <RightSidebar />
          </div>
        </div>
      </Router>
    </GlobalState>
  );
};

export default App;
