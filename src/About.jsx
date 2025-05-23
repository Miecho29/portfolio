import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white font-serif flex flex-col">
      <div className="flex justify-between items-center px-4 md:px-8 py-6 text-sm border-b border-gray-700">
        <a href="/" className="text-lg font-semibold tracking-wide hover:text-gray-300 transition duration-200">
          John Miecho Catalan Arnad
        </a>
        <div className="space-x-2 md:space-x-4 text-xs md:text-sm flex flex-wrap">
          <Link to="/project" className="bg-[#1F2123] hover:bg-[#2A2D30] text-white px-4 py-2 rounded transition">
            Projects
          </Link>
          <Link to="/about" className="bg-[#1F2123] hover:bg-[#2A2D30] text-white px-4 py-2 rounded transition">
            About
          </Link>
          <Link to="/certificate" className="bg-[#1F2123] hover:bg-[#2A2D30] text-white px-4 py-2 rounded transition">
            Certificates
          </Link>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-center flex-1 px-4 md:px-12 py-12 gap-12 animate-fade-in">
        <div className="max-w-2xl text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Hi, I’m <span className="text-teal-400">Miko</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I am passionate about software development, with practical experience in building robust applications using <span className="text-teal-300">NestJS</span>, <span className="text-teal-300">ReactJS</span>, and <span className="text-teal-300">SQL</span>. My work focuses on clean code, efficient data management, and delivering user-centric solutions. I thrive on solving complex problems and view software development as a lifelong learning journey.
          </p>

          {/* Button moved to the left */}
          <div className="flex justify-start mt-8">
            <a 
              href="./Resume -John Miecho Arnad.pdf" 
              download 
              className="inline-flex items-center px-6 py-2 bg-[#1FC6B4] text-white font-semibold rounded-full shadow hover:shadow-teal-500/40 hover:bg-[#17a99a] transition duration-300 w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h4a1 1 0 010 2H5v12h10V4h-3a1 1 0 110-2h4a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm7 2a1 1 0 00-1 1v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src="/1000001470.png"
            alt="Miko"
            className="rounded-full h-60 md:h-80 object-cover shadow-2xl border-4 border-teal-400 transition-transform hover:scale-105 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
