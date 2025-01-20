import React from 'react';

const AuthorSection = ({ author }) => {
  return (
    <div className="container mx-auto px-8 py-8"> {/* Reduced padding */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 flex flex-col items-center">
        <img src={author.image} alt={author.name} className="w-32 h-32 rounded-full mb-4 object-cover" />
        <h2 className="text-3xl font-bold mb-2">{author.name}</h2>
        <p className="text-gray-700 text-center">{author.description}</p>
      </div>
    </div>
  );
};

export default AuthorSection;