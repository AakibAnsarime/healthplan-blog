import React, { useEffect } from 'react';
import { FaHeartbeat, FaLeaf, FaDumbbell, FaAppleAlt } from 'react-icons/fa'; // Replace with your preferred icons

const ScrollingSection = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.scrolling-content').classList.add('start-scroll');
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  // Custom icons and text
  const icons = [
    { icon: <FaHeartbeat className="text-4xl text-red-500" />, text: "Healthy Heart Tips" },
    { icon: <FaLeaf className="text-4xl text-green-500" />, text: "Natural Remedies" },
    { icon: <FaDumbbell className="text-4xl text-gray-700" />, text: "Fitness Guides" },
    { icon: <FaAppleAlt className="text-4xl text-red-600" />, text: "Healthy Recipes" },
  ];

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-6 md:py-8">
      <div className="scrolling-content flex items-center space-x-6 md:space-x-8 animate-scroll">
        {icons.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center"
            style={{ minWidth: '120px' }}
          >
            {item.icon}
            <span className="text-sm md:text-lg font-semibold mt-2">{item.text}</span>
          </div>
        ))}
        {icons.map((item, index) => (
          <div
            key={index + icons.length}
            className="flex flex-col items-center text-center"
            style={{ minWidth: '120px' }}
          >
            {item.icon}
            <span className="text-sm md:text-lg font-semibold mt-2">{item.text}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .scrolling-content {
          display: flex;
          animation: scroll 10s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @media (max-width: 768px) {
          .scrolling-content {
            animation: scroll 15s linear infinite; /* Slower for smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollingSection;
