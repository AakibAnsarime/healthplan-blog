import React, { useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ScrollingSection = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.scrolling-content').classList.add('start-scroll');
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const icons = [
    { icon: <FaFacebook className="text-4xl text-blue-600" />, text: "Follow us on Facebook" },
    { icon: <FaTwitter className="text-4xl text-blue-400" />, text: "Follow us on Twitter" },
    { icon: <FaInstagram className="text-4xl text-pink-600" />, text: "Follow us on Instagram" },
    { icon: <FaLinkedin className="text-4xl text-blue-700" />, text: "Connect with us on LinkedIn" },
    // Add more icons if needed
  ];

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-8">
      <div className="scrolling-content flex items-center space-x-8">
        {icons.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {item.icon}
            <span className="text-xl font-semibold">{item.text}</span>
          </div>
        ))}
        {icons.map((item, index) => (
          <div key={index + icons.length} className="flex flex-col items-center">
            {item.icon}
            <span className="text-xl font-semibold">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingSection;