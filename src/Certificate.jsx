import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Certificate = () => {
  // State for carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselImages = ['Appsheet1.jpg', 'Appsheet2.jpg'];

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-[#181A1C] text-white font-serif text-xl flex flex-col items-center">
      {/* Header */}
      <div className="flex justify-between items-center px-4 md:px-8 py-6 text-sm border-b border-gray-700 w-full max-w-6xl">
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

      {/* Certificate 1 */}
      <div className="mt-12 relative flex flex-col md:flex-row w-full max-w-5xl my-6 bg-white shadow-sm border border-slate-200 rounded-3xl">
        <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
          <img
            src="Accenture.jpg"
            alt="Accenture"
            className="h-full w-full rounded-md md:rounded-lg object-cover"
          />
        </div>
        <div className="p-6 flex-1">
          <p className="text-slate-600 text-xl font-light ml-0 md:ml-0">
            December 2017
          </p>
          <div className="mb-5 rounded-full bg-[#A100FF] py-1 px-3 border border-transparent text-xs text-white shadow-sm w-max text-center">
            ACCENTURE
          </div>
          <h4 className="mb-2 text-slate-800 text-xl font-semibold">
            The Hour Of Code
          </h4>
          <p className="mb-8 text-slate-600 leading-normal font-light">
            A Program for ICT student to learn the basics of programming. The program was held at Accenture, IT Park Cebu, Philippines. The program was a 1-day event where students learned the basics of programming using code blocks.
          </p>
        </div>
      </div>

      {/* Certificate 2 with Carousel */}
      <div className="mt-12 relative flex flex-col md:flex-row w-full max-w-5xl my-6 bg-white shadow-sm border border-slate-200 rounded-3xl">
        {/* Carousel */}
        <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
          <img
            src={carouselImages[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="h-full w-full rounded-md md:rounded-lg object-cover transition-all duration-500"
          />
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2  bg-opacity-50 text-white px-2 py-1 rounded-full hover:bg-opacity-70"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2  bg-opacity-50 text-white px-2 py-1 rounded-full hover:bg-opacity-70"
          >
            ›
          </button>
        </div>

        {/* Card Content */}
        <div className="p-6 flex-1">
          <p className="text-slate-600 text-xl font-light ml-0 md:ml-0">
            October 2025
          </p>
          <div className="mb-5 rounded-full bg-[#A100FF] py-1 px-3 border border-transparent text-xs text-white shadow-sm w-max text-center">
            Globe Business
          </div>
          <h4 className="mb-2 text-slate-800 text-xl font-semibold">
            Google Workspace AppSheet Fundamentals & Advance
          </h4>
          <p className="mb-8 text-slate-600 leading-normal font-light">
            Completed a 2-day intensive training program in partnership with Globe Business, covering fundamentals to advanced certification in building web applications with Google AppSheet. Gained hands-on experience in creating fully functional websites using a dedicated cloud database and no-code features, enabling efficient and scalable application development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
