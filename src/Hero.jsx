import React, { useState } from 'react';
import jsonp from 'jsonp';
import './index.css';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const url = 'https://gmail.us13.list-manage.com/subscribe//post-json?u=16ea8d1b63a389e4e8f58eaa7&amp;id=c7998a98b3&amp;f_id=00f300e9f0" method="post" id="mc-embedded-subscribe-form';
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
    <section className="w-full min-h-screen animated-background flex flex-col items-center justify-center px-4 py-8 md:px-6">
      <div className="max-w-4xl text-center space-y-6 md:space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight px-2">
          <span className="text-black">Fitness goals,</span>
          <br className="sm:hidden" />
          <span className="text-black">the efficient way</span>
        </h1>

        <p className="text-black text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0 px-2 sm:px-4">
          Innovative fitness solutions for health-conscious individuals and athletes
          weary of the typical training methodology.
          <br />
          Launching soon.
        </p>

        <form
          onSubmit={onSubmit}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-4 md:pt-8 w-full px-2 sm:px-4"
        >
          <div className="relative flex-1 max-w-md w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email to get notified"
              className="w-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-white border border-gray-300 rounded-full text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-green-300 text-sm sm:text-base"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-orange-600 text-white font-medium rounded-full hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2 whitespace-nowrap text-sm sm:text-base"
          >
            <span>Get notified</span>
          </button>
        </form>
        <p className="text-black text-xs lg:ml-40 sm:text-sm mt-2">
          We respect your privacy.
        </p>

        {status === 'success' && (
          <p className="mt-3 sm:mt-4 px-2 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 bg-white text-green-600 rounded-lg shadow-md text-center text-xs sm:text-sm md:text-base mx-2 sm:mx-4">
            🎉 You've been subscribed successfully!
          </p>
        )}
        {status === 'error' && (
          <p className="mt-3 sm:mt-4 px-2 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 bg-white text-red-600 rounded-lg shadow-md text-center text-xs sm:text-sm md:text-base mx-2 sm:mx-4">
            ⚠️ Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;
