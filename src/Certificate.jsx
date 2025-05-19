import React from 'react'
import { Link } from 'react-router-dom'

const Certificate = () => {
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

        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    {/* <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""> */}
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Hour of Code</h5>
        {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p> */}
    </div>
</a>


      </div>
  )
}

export default Certificate