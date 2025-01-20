import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthorSection from './AuthorSection';
import { LoadingScreen } from './LoadingScreen';
import authorImage from './assets/author.jpg'; // Adjust the path as needed

const PostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [faqOpen, setFaqOpen] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/articles.json')
      .then(response => response.json())
      .then(data => {
        const foundPost = data.find(article => article.slug === slug);
        setPost(foundPost);
      })
      .catch(error => console.error('Error fetching post:', error))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Show loading screen for 2 seconds
      });
  }, [slug]);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-8 py-8 h-screen"> {/* Ensure full height for centering */}
        <LoadingScreen />
      </div>
    );
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  const author = {
    image: authorImage,
    name: "Md Aakib Ansari", // Replace with your actual name
    description: "Passionate fitness enthusiast and blogger dedicated to helping beginners achieve their fitness goals. When he's not writing, you'll find him exploring new workouts or sipping on a post-workout smoothie." // Replace with your actual description
  };

  return (
    <div className="container mx-auto px-8 py-8"> {/* Reduced padding */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full" style={{ height: '400px' }}>
          <img
            src={post.image}
            alt={post.headline}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{post.content.title}</h1>
          <p className="text-gray-600 mb-4">By {author.name} on {post.date}</p>
          <p className="text-gray-700 mb-4">{post.summary}</p>
          <div className="text-gray-800">
            {post.content.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-bold mb-2">{section.heading}</h2>
                <h3 className="text-xl font-semibold mb-2">{section.subheading}</h3>
                <p className="text-gray-800">{section.content}</p>
              </div>
            ))}
          </div>
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">FAQs</h2>
              {post.faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left text-lg font-semibold text-blue-600 focus:outline-none"
                  >
                    {faq.question}
                  </button>
                  {faqOpen === index && (
                    <p className="mt-2 text-gray-700">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <AuthorSection author={author} />
    </div>
  );
};

export default PostPage;