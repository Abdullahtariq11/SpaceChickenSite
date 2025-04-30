import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 text-center">
      <div className="border-t border-gray-700 w-full max-w-6xl mx-auto mb-6" />

      <p className="text-lg font-semibold mb-3 tracking-wide text-gray-200">
        Follow Space Chicken
      </p>

      <div className="flex justify-center gap-6 text-2xl mb-6">
        <a
          href="https://www.instagram.com/spacechicken8"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-400 transition-all duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@spacechicken27"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-400 transition-all duration-300"
        >
          <FaTiktok />
        </a>
      </div>

      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Space Chicken. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;