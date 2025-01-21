import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-8 py-12 text-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          Your privacy is important to us. This Privacy Policy explains the
          types of information we collect, how we use it, and your rights
          regarding your data.
        </p>

        <div className="text-left mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We collect personal information, such as your name, email
            address, and usage data, to improve your experience on our
            website. We do not share your information with third parties
            without your consent.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your information is used to provide, maintain, and improve our
            services. It may also be used to send you promotional content
            and updates regarding our website, but you can opt out at any
            time.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We implement security measures to protect your personal
            information. However, no method of transmission over the
            Internet is 100% secure, and we cannot guarantee absolute
            security.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            You have the right to access, update, or delete your personal
            information. If you wish to exercise any of these rights, please
            contact us at <a href="mailto:aakiba6619@gmail.com" className="text-blue-600 underline">aakiba6619@gmail.com</a>.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and the date at the top of the page
            will be updated accordingly.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy,
            feel free to contact us at <a href="mailto:aakiba6619@gmail.com" className="text-blue-600 underline">aakiba6619@gmail.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
