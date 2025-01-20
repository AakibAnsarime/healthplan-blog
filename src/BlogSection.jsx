import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/articles.json')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setArticles(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  const latestArticles = articles.slice(-3).reverse(); // Get the three latest articles

  return (
    <div className="container mx-auto px-8 py-16">
      <h2 className="text-4xl font-bold mb-8">Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {latestArticles.map((article, index) => (
          <Link to={`/post/${article.slug}`} key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={article.image} alt={article.headline} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{article.headline}</h3>
              <p className="text-gray-600 mb-4">By {article.author} on {article.date}</p>
              <p className="text-gray-700">{article.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;