import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-8 py-12 text-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          Welcome to our website. By using our services, you agree to comply
          with and be bound by the following terms and conditions of use.
        </p>

        <div className="text-left mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            By accessing and using this website, you accept and agree to be
            bound by the terms and conditions of this agreement. If you do not
            agree, please refrain from using the site.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Intellectual Property Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            All content, logos, graphics, and design on this website are
            protected by copyright and intellectual property laws. You may not
            reproduce, distribute, or modify any part of it without explicit
            written consent.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. User Responsibilities
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Users are responsible for maintaining the confidentiality of their
            account credentials and ensuring all activities performed under
            their account comply with these terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We are not liable for any damages or losses arising from the use or
            inability to use our website. This includes, but is not limited to,
            indirect or consequential damages.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Amendments to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We reserve the right to modify these terms at any time without prior
            notice. Continued use of the website signifies your acceptance of
            the updated terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns about these terms, feel free
            to contact us at <a href="mailto:support@example.com" className="text-blue-600 underline">support@example.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
