import React, { useState, useEffect } from 'react';

const AddPost = () => {
  const [categories] = useState(['Health', 'Fitness']);
  const [category, setCategory] = useState('Health'); // Default category
  const [heading, setHeading] = useState('');
  const [headline, setHeadline] = useState('');
  const [slug, setSlug] = useState('madetero'); // Default slug
  const [sections, setSections] = useState([{ subheading: '', text: '', image: '' }]);
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetch('/articles.json')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  const handleSectionChange = (index, field, value) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const addSection = () => {
    setSections([...sections, { subheading: '', text: '', image: '' }]);
  };

  const handleImageChange = (index, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      handleSectionChange(index, 'image', reader.result); // Set Base64 image
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = { category, heading, headline, slug, sections };

    try {
      const response = await fetch(editingPost ? `http://localhost:5000/edit-post/${editingPost.id}` : 'http://localhost:5000/add-post', {
        method: editingPost ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setMessage(editingPost ? 'Post updated successfully!' : 'Post added successfully!');
        setPosts(editingPost ? posts.map(p => (p.id === editingPost.id ? data.post : p)) : [...posts, data.post]);
        setEditingPost(null);
        setCategory('Health'); // Reset to default category
        setHeading('');
        setHeadline('');
        setSlug('madetero'); // Reset to default slug
        setSections([{ subheading: '', text: '', image: '' }]);
      } else {
        setMessage('There was an error. Please try again.');
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      setMessage('There was an error. Please try again.');
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setCategory(post.category || 'Health');
    setHeading(post.heading || '');
    setHeadline(post.headline || '');
    setSlug(post.slug || 'madetero');
    setSections(post.sections || [{ subheading: '', text: '', image: '' }]);
  };

  return (
    <div className="container mx-auto px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">{editingPost ? 'Edit Post' : 'Add New Post'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slug">
            Slug
          </label>
          <input
            id="slug"
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="headline">
            Headline
          </label>
          <input
            id="headline"
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="heading">
            Heading
          </label>
          <input
            id="heading"
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {sections.map((section, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`subheading-${index}`}>
              Subheading
            </label>
            <input
              id={`subheading-${index}`}
              type="text"
              value={section.subheading}
              onChange={(e) => handleSectionChange(index, 'subheading', e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`text-${index}`}>
              Text
            </label>
            <textarea
              id={`text-${index}`}
              value={section.text}
              onChange={(e) => handleSectionChange(index, 'text', e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`image-${index}`}>
              Image
            </label>
            <input
              type="file"
              onChange={(e) => handleImageChange(index, e.target.files[0])}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        ))}
        <button type="button" onClick={addSection} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
          Add Section
        </button>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          {editingPost ? 'Update Post' : 'Add Post'}
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
      <h2 className="text-2xl font-bold mt-8 mb-4">Available Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <h3 className="text-xl font-semibold">{post.heading}</h3>
            <p>{post.headline}</p>
            <button onClick={() => handleEdit(post)} className="text-blue-500 hover:underline">Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddPost;
