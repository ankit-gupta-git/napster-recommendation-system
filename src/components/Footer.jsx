import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-red-600">NAPSTER</h3>
            <p className="text-gray-400 text-sm">Your ultimate destination for movies and series. Watch the latest content anytime, anywhere.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">Movies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">Series</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">Originals</a></li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">Terms of Use</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors duration-200">Contact Us</a></li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="space-y-2">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent" />
              <button type="submit" className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">Subscribe</button>
            </form>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Napster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
