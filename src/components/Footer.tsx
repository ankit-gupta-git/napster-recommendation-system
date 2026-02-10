import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-gray-900 pt-16 pb-8 text-sm text-gray-400">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
                    <div className="space-y-6 max-w-sm">
                        <Link href="/" className="text-2xl font-bold text-sky-600 tracking-tighter">NAPSTER</Link>
                        <p className="leading-relaxed">
                            The ultimate streaming destination. Thousands of movies, TV shows, and originals at your fingertips.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded bg-[#1a1c22] flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
                        <div>
                            <h4 className="text-white font-bold mb-4">Browse</h4>
                            <ul className="space-y-3">
                                {["Home", "Movies", "TV Shows", "New", "Popular"].map(item => (
                                    <li key={item}><Link href="#" className="hover:text-sky-500 transition-colors">{item}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-4">Help</h4>
                            <ul className="space-y-3">
                                {["Account", "Support Center", "Privacy", "Terms", "FAQ"].map(item => (
                                    <li key={item}><Link href="#" className="hover:text-sky-500 transition-colors">{item}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-white font-bold mb-4">Get the App</h4>
                            <div className="flex flex-col gap-3">
                                <button className="bg-[#1a1c22] border border-gray-800 px-4 py-2 rounded flex items-center gap-2 hover:border-gray-600 transition-colors">
                                    <div className="text-xs text-left">
                                        <p className="text-[10px]">Download on the</p>
                                        <p className="font-bold text-white">App Store</p>
                                    </div>
                                </button>
                                <button className="bg-[#1a1c22] border border-gray-800 px-4 py-2 rounded flex items-center gap-2 hover:border-gray-600 transition-colors">
                                    <div className="text-xs text-left">
                                        <p className="text-[10px]">GET IT ON</p>
                                        <p className="font-bold text-white">Google Play</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Napster Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                        <Link href="#" className="hover:text-white">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
