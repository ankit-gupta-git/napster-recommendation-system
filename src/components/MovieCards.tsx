"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Play, Plus, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const IMGPATH = "https://image.tmdb.org/t/p/w500";

interface Movie {
    id: number;
    poster_path: string | null;
    backdrop_path: string | null;
    original_title: string;
    overview: string;
    release_date?: string;
    vote_average?: number;
}

interface MovieCardsProps {
    movies: Movie[];
    onPlay: (movieTitle: string) => void;
    onDetails: (movie: Movie) => void;
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const MovieCards = ({ movies, onPlay, onDetails }: MovieCardsProps) => {
    console.log("MovieCards rendered with movies:", movies ? movies.length : 0);

    return (
        <motion.div
            key={movies ? movies.length : 'empty'}
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
            {movies && movies.map((res) => (
                <motion.div
                    variants={item}
                    key={res.id}
                    className="group relative bg-[#121212] rounded-md overflow-hidden transition-all duration-300 hover:z-20 md:hover:scale-110 md:hover:shadow-xl md:hover:shadow-black/80"
                >
                    {/* Poster Image */}
                    <div className="relative aspect-[2/3] w-full">
                        {res.poster_path ? (
                            <Image
                                src={IMGPATH + res.poster_path}
                                alt={res.original_title}
                                fill
                                className="object-cover rounded-md"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500 text-xs">No Image</div>
                        )}
                    </div>

                    {/* Hover Info Card (Desktop Only basically) */}
                    <div className="hidden md:block absolute inset-x-0 bottom-0 p-3 bg-[#1a1c22] opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 rounded-b-md shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex gap-2">
                                <button
                                    onClick={() => onPlay(res.original_title)}
                                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-sky-500 transition-colors"
                                >
                                    <Play className="w-4 h-4 text-black fill-current" />
                                </button>
                                <button className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:border-white text-gray-300 hover:border-white transition-colors">
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                            <button
                                onClick={() => onDetails(res)}
                                className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center hover:border-white text-gray-300 hover:border-white transition-colors"
                            >
                                <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>

                        <h4 className="text-white text-xs font-bold truncate mb-1">{res.original_title}</h4>
                        <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium">
                            <span className="text-green-400">{res.vote_average ? `${(res.vote_average * 10).toFixed(0)}% match` : 'New'}</span>
                            <span>{res.release_date?.split("-")[0] || 'N/A'}</span>
                            <span className="border border-gray-600 px-1 rounded-[2px] text-gray-500">HD</span>
                        </div>
                        <div className="mt-2 flex gap-2 text-[10px] text-white">
                            <span className="px-1 border-r border-gray-600 truncate">Sci-Fi</span>
                            <span className="px-1 truncate">Action</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default MovieCards;
