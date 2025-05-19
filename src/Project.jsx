import React from 'react'
import { Link } from 'react-router-dom'


function Project(){
    return(
    <div className="min-h-screen bg-[#181A1C] text-white font-serif text-xl flex flex-col">
     <div className="flex justify-between items-center px-4 md:px-8 py-4 text-sm">
       <a href="/" className="space-x-4 md:text-base">John Miecho Catalan Arnad</a> 
    
      <div className="space-x-2 md:space-x-4 text-xs md:text-sm flex flex-wrap">
        <Link to="/project" className="bg-[#181A1C] text-white px-3 py-1.5 rounded hover:bg-[#2A2D30] transition">Projects</Link>
        <Link to="/resume" className="bg-[#181A1C] text-white px-3 py-1.5 rounded hover:bg-[#2A2D30] transition">Resume</Link>
        <Link to="/Certificate" className="bg-[#181A1C] text-white px-3 py-1.5 rounded hover:bg-[#2A2D30] transition">Certificates</Link>
      </div>
    </div>

      
<a href="#" class="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow-md max-w-3xl hover:shadow-lg transition">
  
  <img class="object-cover w-full md:w-64 h-60 md:h-auto rounded-t-lg md:rounded-none md:rounded-s-lg" src="apteum.jpg" alt="Apteum" />


  <div class="flex flex-col justify-center p-6">
    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
      Data Engineer Intern At Apteum (Mar 2024 - July 2025)
    </h5><br></br>
    <p class="text-gray-700">
      Focused on data maintenance and quality assurance. Created documentation of all issues found in the tool, performed maintenance, fixed bugs, and implemented new functions to improve the tool using PHP and Laravel.
    </p>
  </div>
</a>

</div>
    )
}

export default Project;