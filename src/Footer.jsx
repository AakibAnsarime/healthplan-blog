import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const adRef = useRef(null);

  useEffect(() => {
    // Check if the script is already present
    const existingScript = document.querySelector('script[src="//forsakenburn.com/b.XWVxscdoGQlt0/YQWfdbi/YdWK5-u/ZKXSIT/XeQmF9tujZfUelMk/PXTwYdwrNuD/gRz/NizpYftZNkjQAM0qOwDMMe3/N/wI"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "//forsakenburn.com/b.XWVxscdoGQlt0/YQWfdbi/YdWK5-u/ZKXSIT/XeQmF9tujZfUelMk/PXTwYdwrNuD/gRz/NizpYftZNkjQAM0qOwDMMe3/N/wI";
      script.async = true;
      script.referrerPolicy = 'no-referrer-when-downgrade';
      adRef.current.innerHTML = ''; // Clear any existing content
      adRef.current.appendChild(script); // Append the script to the ad section
    }
  }, []);

  return (
    <footer className="bg-green-400 py-8">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Ads Section */}
          <div ref={adRef} style={{ width: '300px', height: '250px', margin: '20px auto', backgroundColor: '#f0f0f0' }}>
            {/* Placeholder removed */}
          </div>
          {/* Footer Text */}
          <p className="text-center md:text-left text-l mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} My Health Plan. All rights reserved.
          </p>
          
          {/* Footer Links */}
          <div className="text-center md:text-right">
            <Link 
              to="/terms-and-conditions" 
              className="hover:text-white transition duration-200 ease-in-out text-l"
            >
              Terms and Conditions
            </Link>
            <Link 
              to="/privacy-policy" 
              className="hover:text-white transition duration-200 ease-in-out text-l ml-4"
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
