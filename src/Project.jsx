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

      
    <div class=" mt-12 ml-16 relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-3xl max-w-4xl">
  <div class="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
    <img
      src="apteum.jpg"
      alt="Apteum"
      class="h-full w-full rounded-md md:rounded-lg object-cover"
    />
  </div>
  <div class="p-6">
    <div class="mb-5 rounded-full bg-teal-600 py-0.5 px-0.5 border border-transparent text-xs text-white transition-all shadow-sm w-25 text-center">INTERNSHIP</div>
    <h4 class="mb-2 text-slate-800 text-xl font-semibold">
      Data Engineer Intern At Apteum (Mar 2024 - July 2025)
    </h4>
    <p class="mb-8 text-slate-600 leading-normal font-light">
      Focused on data maintenance and quality assurance. Created documentation of all issues found in the tool, performed maintenance, fixed bugs, and implemented new functions to improve the tool using PHP and Laravel.
    </p>
  </div>
</div>


<div class="ml-270 relative flex flex-col md:flex-row w-full my-10 bg-white shadow-sm border border-slate-200 rounded-3xl max-w-4xl mt-[-385px]">

  <div class="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
    <img
      src="QRPH.jpg"
      alt="Apteum"
      class="h-full w-full rounded-md md:rounded-lg object-cover"
    />
  </div>
  <div class="p-6">
    <div class="mb-5 rounded-full bg-[#007bff] py-0.5 px-0.5 border border-transparent text-xs text-white transition-all shadow-sm w-25 text-center">WEALTHBANK</div>
    <h4 class="mb-2 text-slate-800 text-xl font-semibold">
      QRPH 
    </h4>
    <p class="mb-8 text-slate-600 leading-normal font-light">
    As part of the QRPH team, my primary role is to provide backend support by monitoring system logs and ensuring that all data transmitted from partner banks to WealthBank is accurate, secure, and properly processed.
    </p>
  </div>
</div>

<div class=" mt-12 ml-16 relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-3xl max-w-4xl">
  <div class="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
    <img
      src="Wealthpay.png "
      alt="WealthPay"
      class="h-full w-full rounded-md md:rounded-lg object-cover"
    />
  </div>
  <div class="p-6">
    <div class="mb-5 rounded-full bg-[#007bff] py-0.5 px-0.5 border border-transparent text-xs text-white transition-all shadow-sm w-25 text-center">WEALTHBANK</div>
    <h4 class="mb-2 text-slate-800 text-xl font-semibold">
      WealthPay
    </h4>
    <p class="mb-8 text-slate-600 leading-normal font-light">
      In my role, I am responsible for developing and maintaining the backend of the project using NestJS and SQL. Ensuring robust security measures and implementing the necessary business logic to facilitate seamless and secure transactions for our customers.
    </p>
  </div>
</div>

<div class=" mt-[-340px] ml-270 relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-3xl max-w-4xl">
  <div class="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
    <img
      src="housing.png"
      alt="Housing"
      class="h-full w-full rounded-md md:rounded-lg object-cover"
    />
  </div>
  <div class="p-6">
    <div class="mb-5 rounded-full bg-[#007bff] py-0.5 px-0.5 border border-transparent text-xs text-white transition-all shadow-sm w-25 text-center">WEALTHBANK</div>
    <h4 class="mb-2 text-slate-800 text-xl font-semibold">
      LPS - Housing 
    </h4>
    <p class="mb-8 text-slate-600 leading-normal font-light">
      Focused on data maintenance and quality assurance. Created documentation of all issues found in the tool, performed maintenance, fixed bugs, and implemented new functions to improve the tool using PHP and Laravel.
    </p>
  </div>
</div>


</div>
    )
}

export default Project;