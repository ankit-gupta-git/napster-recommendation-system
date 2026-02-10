"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, Search, User, LogOut, Bell, X } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    // Background change on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#0b0c10] shadow-lg shadow-sky-900/10" : "bg-gradient-to-b from-black/80 to-transparent"
                    }`}
            >
                <div className="max-w-[1920px] mx-auto px-4 md:px-12 py-4 flex items-center justify-between">

                    {/* Left: Logo & Links */}
                    <div className="flex items-center gap-12">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="text-3xl font-bold tracking-tighter text-sky-500 group-hover:text-white transition-colors duration-300">
                                NAPSTER
                            </div>
                        </Link>

                        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                            {["Home", "Movies", "TV Shows", "Recently Added", "My List"].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="hover:text-sky-400 transition-colors duration-200"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right: Search, Notifs, User */}
                    <div className="flex items-center gap-6">
                        {/* Search (Desktop) */}
                        <div className="hidden md:flex items-center bg-transparent border border-gray-700 rounded-full px-3 py-1.5 focus-within:border-sky-500 focus-within:bg-black/50 transition-all duration-300">
                            <Search className="w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent border-none text-sm text-white placeholder-gray-500 focus:outline-none w-32 focus:w-64 transition-all duration-300 px-2"
                            />
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                            <button className="hover:text-white transition-colors">
                                <Bell className="w-5 h-5" />
                            </button>

                            {/* User Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                                    className="flex items-center gap-2 hover:text-white transition-colors"
                                >
                                    <div className="w-8 h-8 rounded bg-sky-600 flex items-center justify-center overflow-hidden border border-transparent hover:border-white transition-all">
                                        <Image
                                            src="/images/img1.jpg"
                                            alt="User"
                                            width={32}
                                            height={32}
                                            className="object-cover w-full h-full"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                const nextSibling = target.nextSibling as HTMLElement;
                                                if (nextSibling) nextSibling.style.display = 'flex';
                                            }}
                                        />
                                        <FaUserCircle className="w-full h-full text-white hidden" />
                                    </div>
                                    <ChevronDown className={`w-3 h-3 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Dropdown Menu */}
                                <div className={`absolute right-0 mt-3 w-48 bg-[#111] border border-gray-800 rounded shadow-xl py-2 transform origin-top-right transition-all duration-200 ${userMenuOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                                    <div className="px-4 py-2 border-b border-gray-800 mb-2">
                                        <p className="text-white text-sm font-medium">Ankit Gupta</p>
                                    </div>
                                    <Link href="#" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Manage Profiles</Link>
                                    <Link href="#" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Account</Link>
                                    <Link href="#" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">Help Center</Link>
                                    <div className="border-t border-gray-800 my-1"></div>
                                    <Link href="#" className="block px-4 py-2 text-sm text-white hover:underline">Sign out of Napster</Link>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[60] bg-black/95 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                        <span className="text-2xl font-bold text-sky-500">NAPSTER</span>
                        <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                            <X className="w-8 h-8" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-6 text-xl text-gray-300 font-medium">
                        {["Home", "Movies", "TV Shows", "Recently Added", "My List"].map(item => (
                            <Link key={item} href="#" className="hover:text-sky-400">{item}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
