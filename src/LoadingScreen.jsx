import React from 'react';
import { FaLink } from 'react-icons/fa'; // Using react-icons as an example

export function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center space-y-6 max-w-sm w-full px-4">
        {/* Logo and text */}
        <div className="flex items-center space-x-3">
          <FaLink className="w-10 h-10 text-blue-500" />
          <span className="text-2xl font-semibold text-gray-800">Healthblog</span>
        </div>

        {/* Loading bar container */}
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          {/* Animated loading bar */}
          <div className="h-full bg-blue-500 rounded-full animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}