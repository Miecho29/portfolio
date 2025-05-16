import React from 'react'
import './App.css'

function App() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">John Miecho Arnad</div>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-gray-300">Projects</a></li>
          <li><a href="/about" className="hover:text-gray-300">Resume</a></li>
          <li><a href="/services" className="hover:text-gray-300">Certificates</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default App
