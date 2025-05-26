// src/components/Footer.jsx
import React, { useState } from 'react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // call API to subscribe newsletter
    console.log('Subscribe:', newsletterEmail);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Profile Link & Contact */}
        <div>
          <h4 className="font-semibold mb-2">Profile</h4>
          <ul>
            <li>
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <h4 className="font-semibold mt-4 mb-2">Contact</h4>
          <p>Email: you@example.com</p>
          <p>Phone: +1-234-567-8901</p>
        </div>

        {/* Column 2: Get in Touch Form */}
        <div>
          <h4 className="font-semibold mb-2">Get in Touch</h4>
          <form className="flex flex-col space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="px-3 py-2 rounded text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="px-3 py-2 rounded text-black"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="px-3 py-2 rounded text-black"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Send
            </button>
          </form>
        </div>

        {/* Column 3: Newsletter Subscription */}
        <div>
          <h4 className="font-semibold mb-2">Newsletter</h4>
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your Email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="px-3 py-2 rounded text-black"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
