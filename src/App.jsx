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
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import { TestimonialSlider } from './TestimonialSlider';
import Lists from './Lists';

const App = () => {
  return (
    <Router>
      <div>
        <Helmet>
          <title>Healthblog - Your Source for Fitness and Wellness</title>
          <meta name="description" content="Healthblog provides the latest tips and advice on fitness, wellness, and healthy living. Join our community and start your journey to a healthier life today!" />
          <link rel="canonical" href="https://www.myhealthplanblog.com" />
          <meta property="og:title" content="Healthblog - Your Source for Fitness and Wellness" />
          <meta property="og:description" content="Healthblog provides the latest tips and advice on fitness, wellness, and healthy living. Join our community and start your journey to a healthier life today!" />
          <meta property="og:url" content="https://www.myhealthplanblog.com" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://www.myhealthplanblog.com/logo.png" />
          <meta name="bb62b1f7f41519a46b6508579145844478784bc6" content="bb62b1f7f41519a46b6508579145844478784bc6" />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": "https://www.myhealthplanblog.com",
                "name": "Healthplanblog",
                "description": "Healthplanblog provides the latest tips and advice on fitness, wellness, and healthy living. Join our community and start your journey to a healthier life today!",
                "publisher": {
                  "@type": "Organization",
                  "name": "Healthplanblog",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.myhealthplanblog.com/logo.png"
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
              <TestimonialSlider />
            </>
          } />
          <Route path="/category/:category/" element={<CategoryPage />} />
          <Route path="/:slug/" element={<PostPage />} />
          <Route path="/add-post/" element={<AddPost />} />
          <Route path="/about-us/" element={<AboutUs />} />
          <Route path="/contact-us/" element={<ContactUs />} />
          <Route path="/terms-and-conditions/" element={<TermsAndConditions />} />
          <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
          <Route path="/lists/*" element={<Lists />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
