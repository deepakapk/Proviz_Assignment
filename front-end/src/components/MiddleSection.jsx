import React from 'react';

const MiddleSection = () => {
  const classes = [
    { title: 'Machine Learning', description: 'Master algorithms that make predictions and decisions.' },
    { title: 'Data Science', description: 'Unlock insights from data with analytical skills.' },
    { title: 'Neural Networks', description: 'Explore layers of deep learning architectures.' },
    { title: 'Natural Language Processing', description: 'Build AI that understands human language.' },
    { title: 'Computer Vision', description: 'Enable machines to see and interpret visual data.' },
  ];

  return (
    <section id="middle" className="bg-gray-900 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-10">
          Explore Our Classes
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((item, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg bg-gray-800 border border-transparent hover:border-gradient-to-r from-cyan-500 to-blue-500 shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              <h3 className="text-2xl font-medium text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
