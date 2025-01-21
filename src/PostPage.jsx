import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthorSection from './AuthorSection';
import { LoadingScreen } from './LoadingScreen';
import authorImage from './assets/author.jpg'; // Adjust the path as needed

const PostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('/articles.json');
        const data = await response.json();
        const foundPost = data.find(article => article.slug === slug);
        setPost(foundPost);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-8 py-8 h-screen">
        <LoadingScreen />
      </div>
    );
  }

  if (!post) {
    return <div className="container mx-auto px-8 py-8">Post not found</div>;
  }

  const author = {
    image: authorImage,
    name: "Md Aakib Ansari", // Replace with your actual name
    description: "Passionate fitness enthusiast and blogger dedicated to helping beginners achieve their fitness goals. When he's not writing, you'll find him exploring new workouts or sipping on a post-workout smoothie." // Replace with your actual description
  };

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full" style={{ height: '400px' }}>
          <img
            src={post.images[0]} // Assuming the first image is the main image
            alt={post.headline}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{post.heading}</h1>
          <h2 className="text-2xl font-semibold mb-4">{post.headline}</h2>
          <p className="text-gray-600 mb-4">By {author.name} on {new Date(post.date).toLocaleDateString()}</p>
          
          {post.sections && post.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{section.subheading}</h3>
              <p className="text-gray-800 mb-4">{section.text}</p>
              {section.image && <img src={section.image} alt={`Section image ${index + 1}`} className="w-full h-48 object-cover mb-4" />}
            </div>
          ))}
        </div>
      </div>
      <AuthorSection author={author} />
    </div>
  );
};

export default PostPage;
