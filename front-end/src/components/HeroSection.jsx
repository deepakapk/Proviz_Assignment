import React, { useEffect, useState } from 'react';
import FormModal from './FormModal';


const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define closeModal function properly
  const closeModal = (e) => {
    e.stopPropagation(); // Prevent closing the modal if it's called from inside the modal
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  return (
    <section id="up" className="h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="max-w-3xl text-center px-6 py-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          AI-Powered Learning Awaits
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Dive into the world of Artificial Intelligence with tailored tutorials and cutting-edge resources.
        </p>
        
        <div className="space-x-4">
          <button onClick={openModal} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-lg font-medium hover:scale-105 transition transform duration-200 ease-in-out shadow-lg">
            Get Started
          </button>
          {
              isOpen && <FormModal closeModal={closeModal}/>
          }
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
