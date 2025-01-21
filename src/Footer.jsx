import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Footer Text */}
          <p className="text-center md:text-left text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} My Health Plan. All rights reserved.
          </p>
          
          {/* Footer Links */}
          <div className="text-center md:text-right">
            <Link 
              to="/terms-and-conditions" 
              className="text-blue-400 hover:text-blue-500 transition duration-200 ease-in-out text-sm"
            >
              Terms and Conditions
            </Link>
            <Link 
              to="/privacy-policy" 
              className="text-blue-400 hover:text-blue-500 transition duration-200 ease-in-out text-sm ml-4"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
