import React, { useState } from 'react';
import jsonp from 'jsonp';
import './index.css';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    // Replace 'your-mailchimp-url' with your Mailchimp action URL
    const url = 'https://gmail.us13.list-manage.com/subscribe//post-json?u=16ea8d1b63a389e4e8f58eaa7&amp;id=c7998a98b3&amp;f_id=00f300e9f0" method="post" id="mc-embedded-subscribe-form'; // Example: 'https://example.usXX.list-manage.com/subscribe/post-json?u=xxx&id=xxx'
    const fullUrl = `${url}&EMAIL=${encodeURIComponent(email)}`;

    jsonp(fullUrl, { param: 'c' }, (err, data) => {
      if (err) {
        setStatus('error');
        alert('There was an issue submitting your email. Please try again.');
      } else if (data.result === 'success') {
        setStatus('success');
        alert('Thank you for subscribing!');
      } else {
        setStatus('error');
        alert(data.msg || 'There was an error. Please try again.');
      }
    });
  };

  return (
    <section className="w-full h-screen animated-background flex flex-col items-center justify-center">
      <div className="max-w-4xl text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-black">Fitness goals,</span>
          <br />
          <span className="text-black">the efficient way</span>
        </h1>

        <p className="text-black text-lg md:text-xl max-w-2xl mx-auto">
          Innovative fitness solutions for health-conscious individuals and athletes
          weary of the typical training methodology. Launching soon.
        </p>

        <form
          onSubmit={onSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full"
        >
          <div className="relative flex-1 max-w-md w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@email.com"
              className="w-full px-6 py-4 bg-white border border-gray-300 rounded-full text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-300"
              required
            />
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors flex items-center space-x-2 whitespace-nowrap"
          >
            <span>Get notified</span>
          </button>
        </form>

        {status === 'success' && (
  <p className="mt-4 px-6 py-3 bg-white text-green-600 rounded-lg shadow-md text-center">
    🎉 You’ve been subscribed successfully!
  </p>
)}
{status === 'error' && (
  <p className="mt-4 px-6 py-3 bg-white text-red-600 rounded-lg shadow-md text-center">
    ⚠️ Something went wrong. Please try again.
  </p>
)}

      </div>
    </section>
  );
};

export default Hero;
