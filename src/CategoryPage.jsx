import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  useEffect(() => {
    fetch('/articles.json')
      .then((response) => response.json())
      .then((data) =>
        setArticles(data.filter((article) => article.category === category))
      );
  }, [category]);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const hasMorePages = indexOfLastArticle < articles.length;
  const showNextButton = articles.length > articlesPerPage && hasMorePages;
  const showPrevButton = currentPage > 1;

  const nextPage = () => {
    if (hasMorePages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-8 py-16">
      <h2 className="text-4xl font-bold mb-8">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {currentArticles.map((article, index) => (
          <Link
            to={`/${article.slug}/`}
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={article.images[0]}
              alt={article.heading}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{article.heading}</h3>
              <p className="text-gray-600 mb-4">
                By {article.author} on {article.date}
              </p>
              <p className="text-gray-700">{article.summary}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        {showPrevButton && (
          <button
            onClick={prevPage}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Previous
          </button>
        )}
        {showNextButton && (
          <button
            onClick={nextPage}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;