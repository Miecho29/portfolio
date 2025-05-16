import React from 'react'
import './project.css'


function app(){
    return(
    <div className="min-h-screen bg-[#181A1C] text-white font-serif text-xl flex flex-col">
    <div className="flex justify-between items-center px-4 md:px-8 py-4 text-sm">
      <a href="App.jsx" className='space-x-4 md:text-base'>John Miecho Catalan Arnad</a>
      <div className="space-x-4 md:space-x-6 text-xs md:text-sm">
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#resume" className="hover:underline">Resume</a>
        <a href="#certificates" className="hover:underline">Certificates</a>
      </div>
    </div>
</div>
    )
}

export default Project;