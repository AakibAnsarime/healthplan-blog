import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-8 py-8">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-4">
        Thank you for visiting My Health Plan! We value your feedback and are here to assist you with any questions or concerns you may have. Please feel free to reach out to us using the contact information below:
      </p>
      <p className="mt-4">
        <strong>Email</strong>: <a href="mailto:aakiba6619@gmail.com" target="_new" className="text-blue-500 underline">aakiba6619@gmail.com</a>
      </p>
      <p className="mt-4">
        <strong>Mailing Address</strong>: update in future.
      </p>
      <p className="mt-4">
        <strong>Phone Number</strong>: update in future.
      </p>
      <p className="mt-4">
        <strong>Social Media</strong>: Connect with us on social media for updates and more:
      </p>
      <ul className="list-disc pl-5">
        <li>Facebook: update in future.</li>
        <li>Twitter: update in future.</li>
        <li>Instagram: update in future.</li>
      </ul>
      <p className="mt-4">
        We strive to respond to all inquiries within 24-48 hours. Thank you for contacting My Health Plan!
      </p>
    </div>
  );
};

export default ContactUs;
