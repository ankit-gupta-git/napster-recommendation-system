"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, Search, User, LogOut, X } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [moviesMenuOpen, setMoviesMenuOpen] = useState(false);
    const [seriesMenuOpen, setSeriesMenuOpen] = useState(false);
    const [originalsMenuOpen, setOriginalsMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <nav className="flex fixed top-0 left-0 right-0 z-50 items-center justify-between p-4 bg-black/80 shadow-lg backdrop-blur-lg border-b border-white/10">
                <div className="flex items-center space-x-4">
                    <button
                        id="menuButton"
                        className="md:hidden text-white hover:text-red-600 transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 tracking-tight group-hover:scale-105 transition-transform duration-200">NAPSTER</div>
                        <span className="text-xs text-gray-400 hidden sm:inline border-l border-gray-600 pl-2">Premium Entertainment</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {/* Movies Dropdown */}
                    <div className="relative group" onMouseEnter={() => setMoviesMenuOpen(true)} onMouseLeave={() => setMoviesMenuOpen(false)}>
                        <button className="nav-link text-gray-300 hover:text-white font-medium transition-colors duration-200 flex items-center space-x-1 py-2">
                            <span>Movies</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${moviesMenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`absolute left-0 mt-0 w-48 bg-black/95 backdrop-blur-xl border border-gray-800 rounded-lg shadow-2xl transition-all duration-200 transform origin-top ${moviesMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            <div className="py-2">
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600/20 hover:text-red-500 transition-colors duration-200">New Releases</Link>
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600/20 hover:text-red-500 transition-colors duration-200">Popular</Link>
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600/20 hover:text-red-500 transition-colors duration-200">Top Rated</Link>
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600/20 hover:text-red-500 transition-colors duration-200">Coming Soon</Link>
                            </div>
                        </div>
                    </div>

                    {/* Series Dropdown */}
                    <div className="relative group" onMouseEnter={() => setSeriesMenuOpen(true)} onMouseLeave={() => setSeriesMenuOpen(false)}>
                        <button className="nav-link text-gray-300 hover:text-white font-medium transition-colors duration-200 flex items-center space-x-1 py-2">
                            <span>Series</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${seriesMenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`absolute left-0 mt-0 w-48 bg-black/95 backdrop-blur-xl border border-gray-800 rounded-lg shadow-2xl transition-all duration-200 transform origin-top ${seriesMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            <div className="py-2">
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600/20 hover:text-red-500 transition-colors duration-200">Trending</Link>
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600/20 hover:text-red-500 transition-colors duration-200">New Episodes</Link>
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600/20 hover:text-red-500 transition-colors duration-200">Popular</Link>
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600/20 hover:text-red-500 transition-colors duration-200">Top Rated</Link>
                            </div>
                        </div>
                    </div>

                    {/* Originals Dropdown */}
                    <div className="relative group" onMouseEnter={() => setOriginalsMenuOpen(true)} onMouseLeave={() => setOriginalsMenuOpen(false)}>
                        <button className="nav-link text-gray-300 hover:text-white font-medium transition-colors duration-200 flex items-center space-x-1 py-2">
                            <span>Originals</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${originalsMenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`absolute left-0 mt-0 w-48 bg-black/95 backdrop-blur-xl border border-gray-800 rounded-lg shadow-2xl transition-all duration-200 transform origin-top ${originalsMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            <div className="py-2">
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600/20 hover:text-red-500 transition-colors duration-200">Exclusive</Link>
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600/20 hover:text-red-500 transition-colors duration-200">New Releases</Link>
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-red-600/20 hover:text-red-500 transition-colors duration-200">Coming Soon</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search and User */}
                <div className="flex items-center space-x-6">
                    <div className="relative hidden sm:block group">
                        <input
                            type="text"
                            placeholder="Search movies..."
                            className="px-4 py-2 pl-10 rounded-full bg-gray-900/80 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent w-48 md:w-64 transition-all duration-300 group-hover:bg-gray-900 input-glow"
                        />
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3 transition-colors group-hover:text-white" />
                    </div>

                    <div className="relative group">
                        <button
                            className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                            onClick={() => setUserMenuOpen((open) => !open)}
                        >
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent group-hover:border-red-600 transition-all duration-200">
                                    <Image
                                        src="/images/img1.jpg"
                                        alt="User"
                                        width={40}
                                        height={40}
                                        className="object-cover w-full h-full"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const nextSibling = target.nextSibling as HTMLElement;
                                            if (nextSibling) nextSibling.style.display = 'block';
                                        }}
                                    />
                                    <FaUserCircle className="w-full h-full text-gray-500 hidden" />
                                </div>
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full"></div>
                            </div>
                            <span className="hidden md:inline text-sm font-medium">Ankit Gupta</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <div className={`absolute right-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-gray-800 rounded-lg shadow-2xl transition-all duration-200 transform origin-top-right ${userMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            <div className="p-2">
                                <div className="px-4 py-2 border-b border-gray-800 mb-2">
                                    <p className="text-sm text-white font-medium">Ankit Gupta</p>
                                    <p className="text-xs text-gray-400">ankit.gupta@example.com</p>
                                </div>
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors duration-200 flex items-center group">
                                    <User className="w-4 h-4 mr-3 text-gray-400 group-hover:text-red-500 transition-colors" />
                                    Profile
                                </Link>
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors duration-200 flex items-center group">
                                    <svg className="w-4 h-4 mr-3 text-gray-400 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Settings
                                </Link>
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors duration-200 flex items-center group">
                                    <svg className="w-4 h-4 mr-3 text-gray-400 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                    My List
                                </Link>
                                <div className="border-t border-gray-800 my-1"></div>
                                <Link href="#" className="block px-4 py-2 text-sm text-red-500 hover:bg-red-500/10 rounded-md transition-colors duration-200 flex items-center">
                                    <LogOut className="w-4 h-4 mr-3" />
                                    Sign Out
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                id="mobileMenu"
                className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-black/95 backdrop-blur-xl shadow-2xl z-50 p-6 transform transition-transform duration-300 ease-out border-l border-white/10 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center mb-8">
                    <span className="text-xl font-bold text-red-600">Menu</span>
                    <button
                        id="closeMenu"
                        className="text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex flex-col space-y-6">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search movies..."
                            className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all duration-200"
                            ref={searchInputRef}
                        />
                        <Search className="w-5 h-5 text-gray-500 absolute right-3 top-3.5" />
                    </div>

                    <div className="space-y-2">
                        <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-xl transition-colors font-medium">Home</Link>
                        <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-xl transition-colors font-medium">Movies</Link>
                        <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-xl transition-colors font-medium">Series</Link>
                        <Link href="#" className="block px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white rounded-xl transition-colors font-medium">Originals</Link>
                    </div>

                    <div className="border-t border-gray-800 pt-6">
                        <div className="flex items-center space-x-3 px-4 mb-4">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-700 relative">
                                <Image
                                    src="/images/img1.jpg"
                                    alt="User"
                                    width={40}
                                    height={40}
                                    className="object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const nextSibling = target.nextSibling as HTMLElement;
                                        if (nextSibling) nextSibling.style.display = 'block';
                                    }}
                                />
                                <FaUserCircle className="w-full h-full text-gray-500 hidden absolute inset-0" />
                            </div>
                            <div>
                                <p className="text-white font-medium">Ankit Gupta</p>
                                <p className="text-xs text-gray-400">View Profile</p>
                            </div>
                        </div>
                        <Link href="#" className="block px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors font-medium flex items-center">
                            <LogOut className="w-5 h-5 mr-3" />
                            Sign Out
                        </Link>
                    </div>
                </div>
            </div>

            {/* Overlay backdrop for mobile menu */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Navbar;
