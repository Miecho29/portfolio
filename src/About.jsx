import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white font-serif text-xl flex flex-col">
      
   
      <div className="flex justify-between items-center px-4 md:px-8 py-4 text-sm">
        <a href="/" className="space-x-4 md:text-base">John Miecho Catalan Arnad</a>

        <div className="space-x-2 md:space-x-4 text-xs md:text-sm flex flex-wrap">
          <Link to="/project" className="bg-[#181A1C] text-white px-3 py-1.5 rounded hover:bg-[#2A2D30] transition">Projects</Link>
          <Link to="/about" className="bg-[#181A1C] text-white px-3 py-1.5 rounded hover:bg-[#2A2D30] transition">About</Link>
          <Link to="/certificate" className="bg-[#181A1C] text-white px-3 py-1.5 rounded hover:bg-[#2A2D30] transition">Certificates</Link>
        </div>
      </div>

       <div className="w-full md:w-auto flex justify-center">
          <img
            src="/1000001470.png"
            alt="Miko"
            className="rounded-b-full h-60 md:h-80 object-cover"
          />
        </div>
    
      <div className="flex flex-col-reverse md:flex-row flex-1 items-center justify-center px-4 md:px-8 space-y-8 md:space-y-0 animate-pop-up-above">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Hi, I’m Miko<span className="text-white">.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-6">
            A hardworking fresh graduate Software Developer and QA from Cebu City, Philippines. I specialize in React JS, Tailwind, and Nest JS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;