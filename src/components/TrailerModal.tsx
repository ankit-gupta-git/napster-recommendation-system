import React, { useEffect } from 'react';
import { X, Loader } from 'lucide-react';

interface TrailerModalProps {
    isOpen: boolean;
    videoKey: string | null;
    onClose: () => void;
    isLoading?: boolean;
}

const TrailerModal = ({ isOpen, videoKey, onClose, isLoading = false }: TrailerModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-600/80 text-white rounded-full transition-all duration-200 backdrop-blur-md group"
                >
                    <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>

                {isLoading ? (
                    <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-400 animate-pulse">Searching for trailer...</p>
                    </div>
                ) : videoKey ? (
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0&modestbranding=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <p className="text-gray-400">Trailer not found</p>
                    </div>
                )}
            </div>

            {/* Click outside to close */}
            <div className="absolute inset-0 -z-10" onClick={onClose}></div>
        </div>
    );
};

export default TrailerModal;
