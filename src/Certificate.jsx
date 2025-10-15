import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Certificate = () => {
  // Images for the Appsheet card
  const appsheetImages = [
    'Appsheet2.jpg',
    'Appsheet1.jpg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? appsheetImages.length - 1 : prev - 1))
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === appsheetImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-[#181A1C] text-white font-serif text-xl flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-4 md:px-8 py-6 text-sm border-b border-gray-700">
        <a
          href="/"
          className="text-lg font-semibold tracking-wide hover:text-gray-300 transition duration-200"
        >
          John Miecho Catalan Arnad
        </a>
        <div className="space-x-2 md:space-x-4 text-xs md:text-sm flex flex-wrap">
          <Link
            to="/project"
            className="bg-[#1F2123] hover:bg-[#2A2D30] text-white px-4 py-2 rounded transition"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="bg-[#1F2123] hover:bg-[#2A2D30] text-white px-4 py-2 rounded transition"
          >
            About
          </Link>
          <Link
            to="/certificate"
            className="bg-[#1F2123] hover:bg-[#2A2D30] text-white px-4 py-2 rounded transition"
          >
            Certificates
          </Link>
        </div>
      </div>

      {/* First Card */}
      <div className="mt-12 ml-16 relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-3xl max-w-4xl">
        <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
          <img
            src="Accenture.jpg"
            alt="Accenture"
            className="h-full w-full rounded-md md:rounded-lg object-cover"
          />
        </div>
        <div className="p-6">
          <p className="text-slate-600 text-xl font-light">December 2017</p>
          <div className="mb-5 rounded-full bg-[#A100FF] py-0.5 px-0.5 border border-transparent text-xs text-white transition-all shadow-sm w-25 text-center">
            ACCENTURE
          </div>
          <h4 className="mb-2 text-slate-800 text-xl font-semibold">The Hour Of Code</h4>
          <p className="mb-8 text-slate-600 leading-normal font-light">
            A Program for ICT student to learn the basics of programming. The program was held at Accenture, IT Park Cebu, Philippines. The program was a 1-day event where students learned the basics of programming using code blocks.
          </p>
        </div>
      </div>

      {/* Second Card with Carousel */}
      <div className="mt-12 ml-16 relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-3xl max-w-4xl">
        <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden flex items-center justify-center">
          <img
            src={appsheetImages[currentIndex]}
            alt={`Appsheet slide ${currentIndex + 1}`}
            className="h-full w-full rounded-md md:rounded-lg object-cover transition-transform duration-500 ease-in-out"
          />

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            aria-label="Previous Image"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-ash bg-opacity-80 hover:bg-opacity-95 text-gray-800 rounded-full p-3 shadow-md transition"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            aria-label="Next Image"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-ash bg-opacity-80 hover:bg-opacity-95 text-gray-800 rounded-full p-3 shadow-md transition"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {appsheetImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-green-500 shadow-lg' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="p-6">
          <p className="text-slate-600 text-xl font-light">October 2025</p>
          <div className="mb-5 rounded-full bg-[#2600ff] py-0.5 px-0.5 border border-transparent text-xs text-white transition-all shadow-sm w-25 text-center">
            GLOBE BUSINESS
          </div>
          <h4 className="mb-2 text-slate-800 text-xl font-semibold">Appsheet Fundamentals & Advance</h4>
          <p className="mb-8 text-slate-600 leading-normal font-light">
            AppSheet enables the creation of simple apps without coding by connecting data, designing intuitive interfaces, and incorporating basic logic, while also supporting the development of more complex apps with advanced workflows, automation, security, and customization features.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Certificate
