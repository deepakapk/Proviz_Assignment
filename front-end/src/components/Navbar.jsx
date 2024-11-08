// Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed bg-gray-900 text-white px-6 py-4 shadow-md w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#up" className="text-2xl font-semibold hover:text-cyan-400 transition-all duration-200">
          PROVIZ AI
        </a>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#up" className="hover:text-cyan-400 transition duration-200">
            Home
          </a>
          <a href="#middle" className="hover:text-cyan-400 transition duration-200">
            About
          </a>
          <a href="#middle" className="hover:text-cyan-400 transition duration-200">
            Tutorials
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-cyan-400 text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <a href="#home" className="block px-4 py-2 hover:bg-cyan-500">Home</a>
          <a href="#about" className="block px-4 py-2 hover:bg-cyan-500">About</a>
          <a href="#tutorials" className="block px-4 py-2 hover:bg-cyan-500">Tutorials</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-cyan-500">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
