import React, { useState } from "react";
import { Menu, ChevronDown, Search, User, LogOut } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [moviesMenuOpen, setMoviesMenuOpen] = useState(false);
  const [seriesMenuOpen, setSeriesMenuOpen] = useState(false);
  const [originalsMenuOpen, setOriginalsMenuOpen] = useState(false);

  return (
    <nav className="flex fixed top-0 left-0 right-0 z-50 items-center justify-between p-4 bg-black shadow-lg backdrop-blur-lg">
      <div className="flex items-center space-x-4">
        <button id="menuButton" className="md:hidden text-white hover:text-red-600 transition-colors duration-200">
          <Menu className="w-6 h-6" />
        </button>
        <a href="#" className="flex items-center space-x-2">
          <div className="text-3xl font-bold text-red-600 tracking-tight">NAPSTER</div>
          <span className="text-xs text-gray-400 hidden sm:inline">| Premium Entertainment</span>
        </a>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {/* Movies Dropdown */}
        <div className="relative group" onMouseEnter={() => setMoviesMenuOpen(true)} onMouseLeave={() => setMoviesMenuOpen(false)}>
          <button className="nav-link text-gray-300 hover:text-white font-medium transition-colors duration-200 flex items-center space-x-1">
            <span>Movies</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <div className={`absolute left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl transition-all duration-200 transform origin-top ${moviesMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="py-2">
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200">New Releases</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200">Popular</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200">Top Rated</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200">Coming Soon</a>
            </div>
          </div>
        </div>
        {/* Series Dropdown */}
        <div className="relative group" onMouseEnter={() => setSeriesMenuOpen(true)} onMouseLeave={() => setSeriesMenuOpen(false)}>
          <button className="nav-link text-gray-300 hover:text-white font-medium transition-colors duration-200 flex items-center space-x-1">
            <span>Series</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <div className={`absolute left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl transition-all duration-200 transform origin-top ${seriesMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="py-2">
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200">Trending</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200">New Episodes</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200">Popular</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200">Top Rated</a>
            </div>
          </div>
        </div>
        {/* Originals Dropdown */}
        <div className="relative group" onMouseEnter={() => setOriginalsMenuOpen(true)} onMouseLeave={() => setOriginalsMenuOpen(false)}>
          <button className="nav-link text-gray-300 hover:text-white font-medium transition-colors duration-200 flex items-center space-x-1">
            <span>Originals</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <div className={`absolute left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl transition-all duration-200 transform origin-top ${originalsMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="py-2">
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200">Exclusive</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200">New Releases</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200">Coming Soon</a>
            </div>
          </div>
        </div>
      </div>
      {/* Search and User */}
      <div className="flex items-center space-x-4">
        <div className="relative hidden sm:block">
          <input type="text" placeholder="Search movies..." className="px-4 py-2 rounded-full bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent w-48 md:w-64 transition-all duration-200" />
          <Search className="w-5 h-5 text-gray-400 absolute right-3 top-2.5" />
        </div>
        <div className="relative group">
          <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200" onClick={() => setUserMenuOpen((open) => !open)}>
            {/* User avatar image or fallback icon */}
            <img src="/images/img1.jpg" alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-gray-700 hover:border-red-600 transition-colors duration-200" onError={(e) => { e.target.style.display = 'none'; }} />
            <FaUserCircle className="w-10 h-10 text-gray-500" style={{ display: 'none' }} />
            <span className="hidden md:inline text-sm font-medium">Ankit Gupta</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <div className={`absolute right-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-xl transition-all duration-200 transform origin-top ${userMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="py-2">
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200 flex items-center"><User className="w-4 h-4 mr-2" />Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200 flex items-center">Settings</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200 flex items-center">My List</a>
              <div className="border-t border-gray-700 my-1"></div>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-colors duration-200 flex items-center"><LogOut className="w-4 h-4 mr-2" />Sign Out</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
