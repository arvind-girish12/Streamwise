import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import GlobalState from './context/GlobalState';
import LeftSidebar from './components/LeftSidebar';
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
          <div className="layout">
            <LeftSidebar />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Navigate to="/projects" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </GlobalState>
  );
};

export default App;
