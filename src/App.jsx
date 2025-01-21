import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Hero from './Hero';
import AddPost from './AddPost';
import ScrollingSection from './ScrollingSection';
import BlogSection from './BlogSection';
import CategoryPage from './CategoryPage';
import PostPage from './PostPage';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Helmet>
          <title>Healthblog - Your Source for Fitness and Wellness</title>
          <meta name="description" content="Healthblog provides the latest tips and advice on fitness, wellness, and healthy living. Join our community and start your journey to a healthier life today!" />
          <link rel="canonical" href="https://www.yourwebsite.com/" />
          <meta property="og:title" content="Healthblog - Your Source for Fitness and Wellness" />
          <meta property="og:description" content="Healthblog provides the latest tips and advice on fitness, wellness, and healthy living. Join our community and start your journey to a healthier life today!" />
          <meta property="og:url" content="https://www.yourwebsite.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://www.yourwebsite.com/path-to-your-image.jpg" />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": "https://www.yourwebsite.com/",
                "name": "Healthblog",
                "description": "Healthblog provides the latest tips and advice on fitness, wellness, and healthy living. Join our community and start your journey to a healthier life today!",
                "publisher": {
                  "@type": "Organization",
                  "name": "Healthblog",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.yourwebsite.com/path-to-your-logo.jpg"
                  }
                }
              }
            `}
          </script>
        </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ScrollingSection />
              <BlogSection />
            </>
          } />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/:slug" element={<PostPage />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;