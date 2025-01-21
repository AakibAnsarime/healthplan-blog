import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-8 py-12 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Contact Us</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Thank you for visiting <span className="font-bold text-green-400">My Health Plan</span>! We value your feedback and are here to assist you with any questions or concerns you may have. Please feel free to reach out to us using the contact information below:
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong className="font-semibold">Email</strong>: 
          <a href="mailto:aakiba6619@gmail.com" target="_new" className="text-blue-500 hover:text-blue-700 underline">
            aakiba6619@gmail.com
          </a>
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong className="font-semibold">Mailing Address</strong>: Update in future.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong className="font-semibold">Phone Number</strong>: Update in future.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <strong className="font-semibold">Social Media</strong>: Connect with us on social media for updates and more:
        </p>

        <ul className="list-disc pl-5 mb-6">
          <li className="text-lg text-gray-700">Facebook: Update in future.</li>
          <li className="text-lg text-gray-700">Twitter: Update in future.</li>
          <li className="text-lg text-gray-700">Instagram: Update in future.</li>
        </ul>

        <p className="text-lg text-gray-700 leading-relaxed">
          We strive to respond to all inquiries within 24-48 hours. Thank you for contacting <span className="font-bold text-green-400">My Health Plan</span>!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
