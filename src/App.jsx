import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Project from './Project'
import Homepage from './Homepage';
import Resume from './Resume';
import Certificate from './Certificate';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
    </Router>
  );
}

export default App;
