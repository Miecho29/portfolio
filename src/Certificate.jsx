import React from 'react';
import { Link } from 'react-router-dom';

const Certificate = () => {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white font-serif text-xl flex flex-col">

      <div className="flex justify-between items-center px-4 md:px-8 py-6 text-sm border-b border-gray-700">
        <a href="/" className="text-lg font-semibold tracking-wide hover:text-gray-300 transition duration-200">
          John Miecho Catalan Arnad
        </a>
        <div className="space-x-2 md:space-x-4 text-xs md:text-sm flex flex-wrap">
          <Link to="/project" className="bg-[#181A1C] hover:bg-[#2A2D30] text-white px-4 py-2 rounded transition">
            Projects
          </Link>
          <Link to="/about" className="bg-[#181A1C] hover:bg-[#2A2D30] text-white px-4 py-2 rounded transition">
            About
          </Link>
          <Link to="/certificate" className="bg-[#181A1C] hover:bg-[#2A2D30] text-white px-4 py-2 rounded transition">
            Certificates
          </Link>
        </div>
      </div>

      <div className="mt-12 px-4 md:px-8 flex justify-center">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-sm border border-slate-200 rounded-3xl overflow-hidden">
        
          <div className="relative md:w-2/5">
            <img
              src="Accenture.jpg"
              alt="Accenture"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 flex flex-col justify-between">
            <p className="text-slate-600 text-sm md:text-lg font-light mb-2 md:text-right">
              December 2017
            </p>
            <div className="mb-3 md:mb-5 self-start bg-[#A100FF] py-1 px-3 text-xs text-white rounded-full shadow-sm">
              ACCENTURE
            </div>
            <h4 className="mb-2 text-slate-800 text-lg md:text-xl font-semibold">
              The Hour Of Code
            </h4>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
              A Program for ICT students to learn the basics of programming. The program was held at Accenture, IT Park Cebu, Philippines. It was a 1-day event where students learned the basics of programming using code blocks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
