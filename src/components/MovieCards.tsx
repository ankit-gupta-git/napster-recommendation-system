import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const IMGPATH = "https://image.tmdb.org/t/p/w500"; // Changed to w500 for better performance/quality balance

interface Movie {
    id: number;
    poster_path: string | null;
    original_title: string;
    release_date?: string;
}

interface MovieCardsProps {
    movies: Movie[];
    onPlay: (movieTitle: string) => void;
}

const MovieCards = ({ movies, onPlay }: MovieCardsProps) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 movie-section">
        {movies.map((res) => (
            <div
                key={res.id}
                className="movie relative group rounded-xl overflow-hidden shadow-2xl bg-gray-900/40 backdrop-blur-sm border border-white/5 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-red-900/20"
            >
                <div className="relative aspect-[2/3] overflow-hidden">
                    {res.poster_path ? (
                        <Image
                            src={IMGPATH + res.poster_path}
                            alt={res.original_title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                            No Image
                        </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button
                            className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-red-700 hover:scale-110"
                            onClick={() => onPlay(res.original_title)}
                        >
                            <Play className="w-5 h-5 ml-1 fill-current" />
                        </button>
                    </div>
                </div>

                <div className="p-4 absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/90 backdrop-blur-md">
                    <h4 className="font-bold text-white text-sm line-clamp-1 mb-1">{res.original_title}</h4>
                    <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-400">{res.release_date ? res.release_date.split("-")[0] : "N/A"}</p>
                        <span className="text-xs font-medium text-red-500">Movie</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default MovieCards;
