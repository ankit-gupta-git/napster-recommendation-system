import React from 'react';
import { X, Play, Plus, ThumbsUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Movie {
    id: number;
    poster_path: string | null;
    backdrop_path: string | null;
    original_title: string;
    overview: string;
    release_date?: string;
    vote_average?: number;
}

interface MovieDetailsModalProps {
    movie: Movie | null;
    isOpen: boolean;
    onClose: () => void;
    onPlay: (movieTitle: string) => void;
}

const IMGPATH = "https://image.tmdb.org/t/p/original";

const MovieDetailsModal = ({ movie, isOpen, onClose, onPlay }: MovieDetailsModalProps) => {
    if (!movie) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 md:inset-auto md:top-[10%] md:left-1/2 md:-translate-x-1/2 md:max-w-4xl w-full md:h-auto h-full bg-[#181818] z-[70] rounded-md shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#181818] flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-video">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${IMGPATH + (movie.backdrop_path || movie.poster_path)})` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                            </div>

                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 drop-shadow-lg">{movie.original_title}</h2>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => { onPlay(movie.original_title); onClose(); }}
                                        className="px-8 py-2 bg-white text-black font-bold rounded flex items-center gap-2 hover:bg-sky-500 hover:text-white transition-colors"
                                    >
                                        <Play className="w-5 h-5 fill-current" /> Play It
                                    </button>
                                    <button className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:border-white hover:text-white transition-colors">
                                        <Plus className="w-5 h-5" />
                                    </button>
                                    <button className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center text-gray-300 hover:border-white hover:text-white transition-colors">
                                        <ThumbsUp className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Content info */}
                        <div className="p-8 md:p-12 grid md:grid-cols-[2fr_1fr] gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-sm font-bold">
                                    <span className="text-green-400">{movie.vote_average ? `${(movie.vote_average * 10).toFixed(0)}% Match` : 'New'}</span>
                                    <span className="text-gray-400">{movie.release_date?.split('-')[0]}</span>
                                    <span className="border border-gray-500 px-1 text-xs rounded text-gray-400">HD</span>
                                </div>
                                <p className="text-white text-base leading-relaxed">
                                    {movie.overview}
                                </p>
                            </div>
                            <div className="space-y-4 text-sm">
                                <div>
                                    <span className="text-gray-500">Genres:</span>
                                    <span className="text-gray-300 ml-2">Action, Sci-Fi, Adventure</span>
                                </div>
                                <div>
                                    <span className="text-gray-500">Original Language:</span>
                                    <span className="text-gray-300 ml-2">English</span>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MovieDetailsModal;
