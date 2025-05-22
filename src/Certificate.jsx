import React from 'react'
import { Link } from 'react-router-dom'

const Certificate = () => {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white font-serif text-xl flex flex-col">
   
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

       <div class=" mt-12 ml-16 relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-3xl max-w-4xl">
  <div class="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
    <img
      src="Accenture.jpg"
      alt="Accenture"
      class="h-full w-full rounded-md md:rounded-lg object-cover"
    />
  </div>
  <div class="p-6">
  <p class="text-slate-600 text-xl font-light ml-80">
      December 2017
    </p>
    <div class="mb-5 rounded-full bg-[#A100FF] py-0.5 px-0.5 border border-transparent text-xs text-white transition-all shadow-sm w-25 text-center">ACCENTURE</div>
    <h4 class="mb-2 text-slate-800 text-xl font-semibold">
     The Hour Of Code 
    </h4>
    <p class="mb-8 text-slate-600 leading-normal font-light">
      A Program for ICT student to learn the basics of programming. The program was held at Accenture, IT Park Cebu, Philippines. The program was a 1-day event where students learned the basics of programming using code blocks.
    </p>
  </div>
</div>

      </div>
  )
}

export default Certificate