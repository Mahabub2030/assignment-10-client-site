import React from "react";
import facebook from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-[580px]">
          <h2 className="text-center font-bold text-3xl bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent p-2">GloVisa</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:contact@example.com" className="text-blue-400">
              akdjoy29@gmail.com
            </a>
          </p>
          <p>Phone: 01775888111</p>
          <p>Address: Motijheel, Dhaka</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://facebook.com"
              className="hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="" />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="" />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-pink-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="" />
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
