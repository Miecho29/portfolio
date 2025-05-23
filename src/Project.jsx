import React from 'react'
import { Link } from 'react-router-dom'

function Project() {
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

      <div className="flex justify-center items-center flex-wrap gap-8 px-4">
        <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-3xl max-w-4xl">
          <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
            <img
              src="apteum.jpg"
              alt="Apteum"
              className="h-full w-full rounded-md md:rounded-lg object-cover"
            />
          </div>
          <div className="p-4">
            <p className="text-slate-600 text-xl font-light ml-65">
              March 2024 - June 2025
            </p>
            <div className="mb-5 rounded-full bg-teal-600 py-1 px-0.5 border border-transparent text-xs text-white transition-all shadow-sm w-25 text-center">INTERNSHIP</div>
            <div className="flex justify-between items-center">
              <h4 className="mb-2 text-slate-800 text-xl font-semibold">
                Data Engineer Intern At Apteum 
              </h4>
            </div>
            <p className="mb-8 text-slate-600 leading-normal font-light">
              Focused on data maintenance and quality assurance. Created documentation of all issues found in the tool, performed maintenance, fixed bugs, and implemented new functions to improve the tool using PHP and Laravel.
            </p>
            <div className="flex gap-2 items-stretch">
              <div className="rounded-full bg-teal-600 h-8 px-7 border border-transparent text-xs text-white transition-all shadow-sm flex items-center justify-center">
                PHP
              </div>
              <div className="rounded-full bg-teal-600 h-8 px-7 border border-transparent text-xs text-white transition-all shadow-sm flex items-center justify-center">
                Laravel
              </div>
              <div className="rounded-full bg-teal-600 h-8 px-7 border border-transparent text-xs text-white transition-all shadow-sm flex items-center justify-center">
                SQL
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-3xl max-w-4xl">
  <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
    <img
      src="QRPH.jpg"
      alt="QRPH"
      className="h-full w-full rounded-md md:rounded-lg object-cover"
    />
  </div>
  <div className="p-4">
    <p className="text-slate-600 text-xl font-light ml-75">
      February 18, 2025
    </p>
    <div className="mb-5 rounded-full bg-[#007bff] py-1 px-0.5 border border-transparent text-xs text-white transition-all shadow-sm w-25 text-center">
      WEALTHBANK
    </div>
    <h4 className="mb-2 text-slate-800 text-xl font-semibold">
      QRPH 
    </h4>
    <p className="mb-8 text-slate-600 leading-normal font-light">
      As part of the QRPH team, my primary role is to provide backend support by monitoring system logs and ensuring that all data transmitted from partner banks to WealthBank is accurate, secure, and properly processed.
    </p>

    
    <div className="flex gap-2">
      <div className="rounded-full bg-[#007bff] px-4 border border-transparent text-xs text-white transition-all shadow-sm w-25 text-center min-h-[32px] flex items-center justify-center">
        SQL
      </div>
      <div className="rounded-full bg-[#007bff] px-4 border border-transparent text-xs text-white transition-all shadow-sm w-30 text-center min-h-[32px] flex items-center justify-center">
        Node Express
      </div>
    </div>
  </div>
</div>


        <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-3xl max-w-4xl">
          <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
            <img
              src="Wealthpay.png"
              alt="WealthPay"
              className="h-full w-full rounded-md md:rounded-lg object-cover"
            />
          </div>
          <div className="p-7">
            <div className="mb-5 rounded-full bg-[#007bff] py-1 px-0.5 border border-transparent text-xs text-white transition-all shadow-sm w-25 text-center">WEALTHBANK</div>
            <h4 className="mb-2 text-slate-800 text-xl font-semibold">
              WealthPay
            </h4>
            <p className="mb-8 text-slate-600 leading-normal font-light">
              In my role, I am responsible for developing and maintaining the backend of the project using NestJS and SQL. Ensuring robust security measures and implementing the necessary business logic to facilitate seamless and secure transactions for our customers.
            </p>
            <div className="flex gap-2">
              <div className="rounded-full bg-[#007bff] h-8 min-w-[64px] px-5 border border-transparent text-xs text-white transition-all shadow-sm flex items-center justify-center">
                NestJS
              </div>
              <div className="rounded-full bg-[#007bff] h-8 min-w-[64px] px-7 border border-transparent text-xs text-white transition-all shadow-sm flex items-center justify-center">
                SQL
              </div>
              <div className="rounded-full bg-[#007bff] h-8 min-w-[64px] px-7 border border-transparent text-xs text-white transition-all shadow-sm flex items-center justify-center">
                TypeScript
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-3xl max-w-4xl">
          <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
            <img
              src="housing.png"
              alt="Housing"
              className="h-full w-full rounded-md md:rounded-lg object-cover"
            />
          </div>
          <div className="p-3.5">
          <p className="text-slate-600 text-xl font-light ml-85">
              March 08, 2025
            </p>
            <div className="mb-5 rounded-full bg-[#007bff] py-0.5 px-0.5 border border-transparent text-xs text-white transition-all shadow-sm w-25 text-center">WEALTHBANK</div>
            <h4 className="mb-2 text-slate-800 text-xl font-semibold">
              LPS - Housing 
            </h4>
            <p className="mb-8 text-slate-600 leading-normal font-light">
              Focused on data maintenance and quality assurance. Created documentation of all issues found in the tool, performed maintenance, fixed bugs, and implemented new functions to improve the tool using PHP and Laravel.
            </p>
            <div className="mb-5 rounded-full bg-[#007bff] py-2 px-5 border border-transparent text-xs text-white transition-all shadow-sm w-36 text-center">Functional Testing</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;
