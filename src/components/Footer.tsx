import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black/80 backdrop-blur-lg mt-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">NAPSTER</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your ultimate destination for premium entertainment.
                            Dive into a world of curated movies and series, anytime, anywhere.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-500 hover:text-red-500 hover:-translate-y-1 transition-all duration-200">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-red-500 hover:-translate-y-1 transition-all duration-200">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-red-500 hover:-translate-y-1 transition-all duration-200">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Discover</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">Home</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">Movies</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">Series</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">Originals</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Support</h4>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">Help Center</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">Terms of Use</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">Stay Updated</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg shadow-red-900/20"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/5 mt-16 pt-8 text-center">
                    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Napster. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
