import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-8">
        <p className="text-center">&copy; {new Date().getFullYear()} My Health Plan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;