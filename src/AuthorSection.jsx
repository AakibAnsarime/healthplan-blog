import React from 'react';

const AuthorSection = ({ author }) => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-4 md:py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-4 md:p-6 flex flex-col items-center">
        <img 
          src={author.image} 
          alt={author.name} 
          className="w-24 md:w-32 h-24 md:h-32 rounded-full mb-3 md:mb-4 object-cover" 
        />
        <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-2 text-center">
          {author.name}
        </h2>
        <p className="text-sm md:text-base text-gray-700 text-center max-w-prose">
          {author.description}
        </p>
      </div>
    </div>
  );
};

export default AuthorSection;