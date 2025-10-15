import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
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

     
      <div className="flex flex-col-reverse md:flex-row flex-1 items-center justify-center px-4 md:px-8 space-y-8 md:space-y-0 animate-pop-up-above">
        <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Hi, I’m <span className="text-teal-400">Miko</span>.
          </h1> 
          <p className="text-base md:text-xl text-gray-300 mb-6">
            A Hard working Fresh Graduate Software Developer and QA from Cebu City, Philippines. I specialize at <span className="text-teal-300">React JS, Tailwind and Nest JS.</span>
          </p>
          <Link
            to="/project"
            className="bg-[#1FC6B4] hover:bg-[#17a99a] text-white font-semibold px-6 py-3 rounded-full shadow hover:shadow-teal-500/40 transition duration-300"
          >
            My Projects
          </Link>

    
          <ul className="flex justify-center md:justify-start mt-10 space-x-5 ">
            <li>
              <a
                href="https://www.linkedin.com/in/john-miecho-c-arnad-155b802b5/"
                target="_blank"
                className="text-gray-500 hover:text-[#B0B0B0] dark:hover:text-white dark:text-gray-400"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.761 0 5-2.24 5-5v-14c0-2.76-2.239-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.3c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.25 12.3h-3v-5.5c0-1.38-.028-3.16-1.93-3.16-1.932 0-2.23 1.51-2.23 3.06v5.6h-3v-11h2.879v1.5h.041c.401-.76 1.38-1.56 2.84-1.56 3.039 0 3.6 2 3.6 4.6v6.46z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/johnmiecho.arnad.2024"
                target="_blank"
                className="text-gray-500 hover:text-[#B0B0B0] dark:hover:text-white dark:text-gray-400"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .73.593 1.324 1.325 1.324h11.495v-9.294h-3.127v-3.622h3.127v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.59l-.467 3.622h-3.123v9.293h6.116c.73 0 1.324-.594 1.324-1.324v-21.35c0-.732-.594-1.325-1.324-1.325z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=arnadjohnmiecho25@gmail.com"
                className="text-gray-500 hover:text-[#B0B0B0] dark:hover:text-white dark:text-gray-400"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                  <path d="M12 13.065l-11.917-7.065v14h23.834v-14l-11.917 7.065zm11.917-9.065h-23.834l11.917 7.065 11.917-7.065z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

      
        <div className="relative">
          <img
            src="/1000001470.png"
            alt="Miko"
            className="rounded-full h-60 md:h-80 object-cover shadow-2xl border-4 border-teal-400 transition-transform hover:scale-105 duration-300"
          />
        </div>
      </div>
    </div>
  )
}

export default Homepage
