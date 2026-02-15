"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Navbar from "./Navbar";
import Footer from "./Footer";
import CategoryButtons from "./CategoryButtons";
import MovieCards from "./MovieCards";
import MovieDetailsModal from "./MovieDetailsModal";
import TrailerModal from "./TrailerModal";
import { Play, Plus, TrendingUp, Sparkles, Info } from "lucide-react";
import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";

const API_KEY = "04c35731a5ee918f014970082a0088b1";
const BASE_URL = "https://api.themoviedb.org/3";
const IMGPATH = "https://image.tmdb.org/t/p/original"; // High res for hero

const genreIds: Record<string, number> = {
    action: 28,
    adventure: 12,
    animation: 16,
    biography: 36, // Using History for Biography
    crime: 80,
    comedy: 35,
    documentary: 99,
    drama: 18,
};

interface Movie {
    id: number;
    poster_path: string | null;
    backdrop_path: string | null;
    original_title: string;
    overview: string;
    release_date?: string;
    vote_average?: number;
}

const HomeClient = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get('search') || "";
    const [movies, setMovies] = useState<Movie[]>([]);
    const [heroMovies, setHeroMovies] = useState<Movie[]>([]);
    const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("trending");
    // removed local search state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Trailer Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoKey, setVideoKey] = useState<string | null>(null);
    const [isLoadingTrailer, setIsLoadingTrailer] = useState(false);

    // Details Modal
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    // Initial Fetch
    useEffect(() => {
        let isMounted = true;
        const fetchMovies = async () => {
            setLoading(true);
            setError(null);
            try {
                let baseUrl = `${BASE_URL}/discover/movie`;
                const params = new URLSearchParams({
                    api_key: API_KEY,
                    language: 'en-US',
                    page: '1',
                    include_adult: 'false',
                    sort_by: 'popularity.desc'
                });

                if (search) {
                    baseUrl = `${BASE_URL}/search/movie`;
                    params.set('query', search);
                    params.delete('sort_by');
                } else if (selectedCategory && selectedCategory !== "trending") {
                    const genreId = genreIds[selectedCategory.toLowerCase()];
                    if (genreId) {
                        params.set('with_genres', genreId.toString());
                    }
                }

                const url = `${baseUrl}?${params.toString()}`;
                console.log("Fetching URL:", url);

                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();

                if (isMounted) {
                    const results = data.results || [];
                    console.log(`Fetched ${results.length} movies for category: ${selectedCategory}`);
                    setMovies(results);

                    // Update Hero logic: If trending or initial load, or if we want to reflect the category in the hero
                    if (!search && results.length > 0) {
                        setHeroMovies(results.slice(0, 5));
                    } else if (search && results.length > 0) {
                        setHeroMovies(results.slice(0, 5));
                    }
                }
            } catch (err: any) {
                if (isMounted) {
                    console.error("Failed to fetch movies:", err);
                    setError(err.message || "Failed to load movies");
                    setMovies([]);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchMovies();

        return () => {
            isMounted = false;
        };
    }, [selectedCategory, search]);

    // Carousel Logic
    useEffect(() => {
        if (heroMovies.length === 0) return;
        const interval = setInterval(() => {
            setCurrentHeroIndex((prev) => (prev + 1) % heroMovies.length);
        }, 8000); // Change every 8 seconds
        return () => clearInterval(interval);
    }, [heroMovies]);

    const playTrailer = async (movieTitle: string) => {
        setIsModalOpen(true);
        setIsLoadingTrailer(true);
        setVideoKey(null);
        try {
            const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
            if (!apiKey) return;
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: { part: 'snippet', q: `${movieTitle} official trailer`, type: 'video', maxResults: 1, key: apiKey }
            });
            if (response.data.items?.length > 0) setVideoKey(response.data.items[0].id.videoId);
        } catch (error) { console.error(error); } finally { setIsLoadingTrailer(false); }
    };

    const currentHero = heroMovies[currentHeroIndex];

    return (
        <main className="min-h-screen w-full bg-[#0b0c10] text-gray-100 font-sans selection:bg-sky-500 selection:text-white">
            <Navbar />
            <TrailerModal isOpen={isModalOpen} videoKey={videoKey} onClose={() => setIsModalOpen(false)} isLoading={isLoadingTrailer} />
            <MovieDetailsModal
                movie={selectedMovie}
                isOpen={isDetailsOpen}
                onClose={() => setIsDetailsOpen(false)}
                onPlay={playTrailer}
            />

            {/* Immersive Hero Carousel - Pointer events auto to ensure clicks work if overlapped */}
            <section className="relative h-[85vh] w-full overflow-hidden">
                <AnimatePresence mode="wait">
                    {currentHero && (
                        <motion.div
                            key={currentHero.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center md:bg-top bg-no-repeat transition-transform duration-[20s] ease-linear transform hover:scale-105"
                                style={{ backgroundImage: `url(${IMGPATH + currentHero.backdrop_path})` }}
                            />
                            {/* Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10]/20 to-transparent"></div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Content Wrapper with high Z-index for buttons */}
                <div className="relative h-full flex items-center max-w-[1920px] mx-auto px-4 md:px-12 pointer-events-none">
                    <div className="max-w-2xl space-y-6 pt-20 z-30 pointer-events-auto">
                        <AnimatePresence mode="wait">
                            {currentHero && (
                                <motion.div
                                    key={`content-${currentHero.id}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <div className="flex items-center gap-2 text-sky-400 font-bold tracking-widest text-xs uppercase mb-2">
                                        <span className="bg-sky-900/30 px-2 py-1 rounded border border-sky-500/30">Trending</span>
                                        <span className="bg-gray-800 px-2 py-1 rounded border border-gray-600 text-white">4K UHD</span>
                                        <span className="text-white bg-red-600/80 px-2 py-1 rounded text-[10px] font-bold">TOP 10</span>
                                    </div>

                                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bebas text-white leading-none drop-shadow-2xl line-clamp-2 tracking-wide">
                                        {currentHero.original_title}
                                    </h1>

                                    <p className="text-base md:text-lg text-gray-300 line-clamp-3 font-light leading-relaxed max-w-xl">
                                        {currentHero.overview}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-4 pt-6">
                                        <button
                                            onClick={() => playTrailer(currentHero.original_title)}
                                            className="px-6 md:px-8 py-3 md:py-3.5 bg-sky-600 hover:bg-sky-700 text-white rounded-md font-bold text-sm md:text-lg flex items-center gap-3 transition-all transform hover:scale-105 shadow-xl shadow-sky-900/40 cursor-pointer"
                                        >
                                            <Play className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                                            WATCH NOW
                                        </button>
                                        <button className="px-6 md:px-8 py-3 md:py-3.5 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-md font-bold text-sm md:text-lg flex items-center gap-3 backdrop-blur-sm transition-all border border-gray-600 hover:border-white">
                                            <Plus className="w-5 h-5 md:w-6 md:h-6" />
                                            ADD LIST
                                        </button>
                                        <button
                                            onClick={() => { setSelectedMovie(currentHero); setIsDetailsOpen(true); }}
                                            className="p-3 md:p-3.5 bg-gray-800/80 hover:bg-gray-700/80 text-white rounded-full backdrop-blur-sm transition-all border border-gray-600 hover:border-white"
                                        >
                                            <Info className="w-5 h-5 md:w-6 md:h-6" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <div className="relative z-20 -mt-20 md:-mt-32 pb-20 space-y-12 max-w-[1920px] mx-auto px-4 md:px-12 bg-gradient-to-t from-[#0b0c10] via-[#0b0c10] to-transparent pt-10">

                {/* Trends Row */}
                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-white">
                            <TrendingUp className="w-6 h-6 text-sky-500" />
                            <h3 className="text-3xl font-bebas tracking-wide capitalize">
                                {selectedCategory === "trending" ? "Trends Now" : selectedCategory}
                            </h3>
                        </div>
                        <div className="flex gap-4 md:gap-6 text-xs font-medium text-gray-400 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            <span className="text-sky-500 cursor-pointer whitespace-nowrap">Popular</span>
                            <span className="cursor-pointer hover:text-white whitespace-nowrap">Premieres</span>
                            <span className="cursor-pointer hover:text-white whitespace-nowrap">Recently Added</span>
                        </div>
                    </div>

                    {/* Category Tabs */}
                    <CategoryButtons
                        selected={selectedCategory}
                        onSelect={(cat) => { setSelectedCategory(cat); }}
                    />

                    {/* Movie Grid/Row */}
                    <div className="min-h-[300px]">
                        {loading ? (
                            <div className="flex items-center justify-center h-40">
                                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-sky-500"></div>
                            </div>
                        ) : error ? (
                            <div className="flex items-center justify-center h-40 text-red-500 font-medium">
                                {error}
                            </div>
                        ) : movies.length === 0 ? (
                            <div className="flex items-center justify-center h-40 text-gray-500 font-medium">
                                No movies found for this category.
                            </div>
                        ) : (
                            <MovieCards
                                movies={movies}
                                onPlay={playTrailer}
                                onDetails={(movie) => { setSelectedMovie(movie); setIsDetailsOpen(true); }}
                            />
                        )}
                    </div>
                </div>

                {/* Recommended Section */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-white border-b border-gray-800 pb-4">
                        <Sparkles className="w-6 h-6 text-sky-500" />
                        <h3 className="text-3xl font-bebas tracking-wide">Recommended For You</h3>
                    </div>
                    <MovieCards
                        movies={movies.slice(5, 17)}
                        onPlay={playTrailer}
                        onDetails={(movie) => { setSelectedMovie(movie); setIsDetailsOpen(true); }}
                    />
                </div>

            </div>

            <Footer />
        </main>
    );
};

export default HomeClient;
