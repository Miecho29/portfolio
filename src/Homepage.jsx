import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white font-serif text-xl flex flex-col">
   
        <div className="flex justify-between items-center px-4 md:px-8 py-4 text-sm">
          <div className='space-x-4 md:text-base'>John Miecho Catalan Arnad</div>
          <div className="space-x-4 md:space-x-6 text-xs md:text-sm">
            <Link to="/project" className="hover:underline">Projects</Link>
            <Link to="/resume" className="hover:underline">Resume</Link>
            <a href="#certificates" className="hover:underline">Certificates</a>
          </div>
        </div>

 
        <div className="flex flex-col-reverse md:flex-row flex-1 items-center justify-center px-4 md:px-8 space-y-8 md:space-y-0 animate-pop-up-above">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Hi, I’m Miko<span className="text-white">.</span></h1>
            <p className=" text-base md:text-lg text-gray-300 mb-6">
              A Hard working Fresh Graduate Software Developer and QA from Cebu City, Philippines. I specialize at React JS, Tailwind and Nest JS.
            </p>
            <Link
              to="/project"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full transition inline-block"
            >
              My Projects
            </Link>
          </div>

          <div className="w-full md:w-auto flex justify-center">
            <img
              src="/1000001470.png"
              alt="Miko"
              className="rounded-b-full h-60 md:h-80 object-cover" />
          </div>
        </div>


      </div>
  )
}

export default Homepage