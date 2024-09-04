// components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold mb-2">MyApp</h2>
            <p className="text-sm mb-4">© {new Date().getFullYear()} MyApp. All rights reserved.</p>
          </div>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <a href="/" className="hover:text-blue-300">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-300">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-300">Contact</a>
            </li>
          </ul>
          <div className="text-center md:text-right mt-4 md:mt-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-blue-300">
              <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.930 10.930 0 0 1-3.14 1.01A5.5 5.5 0 0 0 22.48.35a10.911 10.911 0 0 1-3.473 1.326A5.468 5.468 0 0 0 16.26 0c-3.05 0-5.53 2.47-5.53 5.5 0 .43.05.85.12 1.26A15.627 15.627 0 0 1 1.64 3.09a5.475 5.475 0 0 0-.75 2.77c0 1.91.97 3.59 2.44 4.58A5.522 5.522 0 0 1 .96 10v.06c0 2.68 1.90 4.93 4.44 5.45a5.468 5.468 0 0 1-2.48.09c.71 2.24 2.76 3.89 5.21 3.95A10.952 10.952 0 0 1 0 21.54a15.418 15.418 0 0 0 8.29 2.43c9.92 0 15.32-8.20 15.32-15.32 0-.23-.01-.45-.02-.67A10.976 10.976 0 0 0 23 3z" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
              <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.07c0-5.51-4.49-10-10-10S2 6.56 2 12.07c0 5.16 3.89 9.37 8.89 9.88v-6.98H7.68v-2.92h3.21V9.54c0-3.16 1.92-4.93 4.66-4.93 1.33 0 2.47.09 2.8.12v3.23h-1.93c-1.52 0-1.82.73-1.82 1.8v2.36h3.65l-.48 2.92h-3.17v6.98c5-0.51 8.89-4.72 8.89-9.88z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
