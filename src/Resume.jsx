import React from 'react'
import { Link } from 'react-router-dom'

const Resume= () => {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white font-serif text-xl flex flex-col">
   
       <div className="flex justify-between items-center px-4 md:px-8 py-4 text-sm">
         <a href="/" className="space-x-4 md:text-base">John Miecho Catalan Arnad</a> 
      
        <div className="space-x-2 md:space-x-4 text-xs md:text-sm flex flex-wrap">
          <Link to="/project" className="bg-[#181A1C] text-white px-3 py-1.5 rounded hover:bg-[#2A2D30] transition">Projects</Link>
          <Link to="/resume" className="bg-[#181A1C] text-white px-3 py-1.5 rounded hover:bg-[#2A2D30] transition">Resume</Link>
          <Link to="/Certificate" className="bg-[#181A1C] text-white px-3 py-1.5 rounded hover:bg-[#2A2D30] transition">Certificates</Link>
        </div>
      </div>
      
      <p className="" >WORK IN PROGRESS</p>

      </div>
  )
}

export default Resume