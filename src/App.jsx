import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Project from './Project'
import Homepage from './Homepage';
import About from './About';
import Certificate from './Certificate';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/About" element={<About />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
    </Router>
  );
}

export default App;
