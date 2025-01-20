import React from 'react';
import './index.css';

const Hero = () => {
  return (
    <section className="w-full h-screen animated-background flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-black">Fitness goals,</span>
          <br />
          <span className="text-black">the efficient way</span>
        </h1>
        
        <p className="text-black text-lg md:text-xl max-w-2xl mx-auto">
          Innovative fitness solutions for health-conscious individuals and athletes 
          weary of the typical training methodology. Launching soon.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <div className="relative flex-1 max-w-md w-full">
            <input 
              type="email" 
              placeholder="name@email.com"
              className="w-full px-6 py-4 bg-white border border-gray-300 rounded-full text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>
          <button className="px-8 py-4 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors flex items-center space-x-2 whitespace-nowrap">
            <span>Get notified</span>
            {/* Replace ChevronRight with an appropriate icon component */}
          </button>
        </div>
      </div>


    </section>
  );
};

export default Hero;