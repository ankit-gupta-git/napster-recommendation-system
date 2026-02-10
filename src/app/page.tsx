"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryButtons from "../components/CategoryButtons";
import MovieCards from "../components/MovieCards";
import TrailerModal from "../components/TrailerModal";
import { Play } from "lucide-react";
import axios from 'axios';

const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const GENREAPI =
  "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=";

const genreIds: Record<string, number> = {
  action: 28,
  romance: 10749,
  animation: 16,
  horror: 27,
  comedy: 35,
  mystery: 9648,
};

const genreNames: Record<string, string> = {
  action: "Action",
  romance: "Romance",
  animation: "Animation",
  horror: "Horror",
  comedy: "Comedy",
  mystery: "Mystery",
  marvel: "Marvel",
  netflix: "Netflix",
  disney: "Disney+",
  special: "Special",
  english: "English",
};

interface Movie {
  id: number;
  poster_path: string | null;
  original_title: string;
  release_date?: string;
}

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("animation");
  const [trendingTitle, setTrendingTitle] = useState("Trending in Animation");
  const [search, setSearch] = useState("");

  // Trailer Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoKey, setVideoKey] = useState<string | null>(null);
  const [isLoadingTrailer, setIsLoadingTrailer] = useState(false);

  // Fetch movies based on category or search
  useEffect(() => {
    let api = APIURL;
    let title = "Trending Now";
    if (search) {
      api = SEARCHAPI + search;
      title = `Search Results for "${search}"`;
    } else if (selectedCategory && selectedCategory !== "trending") {
      if (genreIds[selectedCategory]) {
        api = GENREAPI + genreIds[selectedCategory];
        title = `Trending in ${genreNames[selectedCategory]}`;
      } else {
        // For special categories like Marvel, Netflix, Disney+, etc.
        api = SEARCHAPI + selectedCategory;
        title = `Trending in ${genreNames[selectedCategory]}`;
      }
    }
    setTrendingTitle(title.replace(/\\"/g, '"'));
    fetch(api)
      .then((res) => res.json())
      .then((data) => setMovies(data.results || []));
  }, [selectedCategory, search]);

  const playTrailer = async (movieTitle: string) => {
    setIsModalOpen(true);
    setIsLoadingTrailer(true);
    setVideoKey(null);

    try {
      const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
      if (!apiKey) {
        console.error("YouTube API Key not found");
        setIsLoadingTrailer(false);
        return;
      }

      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: `${movieTitle} official trailer`,
          type: 'video',
          maxResults: 1,
          key: apiKey
        }
      });

      if (response.data.items && response.data.items.length > 0) {
        setVideoKey(response.data.items[0].id.videoId);
      } else {
        console.warn("No trailer found for", movieTitle);
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    } finally {
      setIsLoadingTrailer(false);
    }
  };

  return (
    <main className="min-h-screen w-full relative">
      <Navbar />

      <TrailerModal
        isOpen={isModalOpen}
        videoKey={videoKey}
        onClose={() => setIsModalOpen(false)}
        isLoading={isLoadingTrailer}
      />

      {/* Main Section */}
      <section className="pt-24 pb-12 px-4 md:px-8 max-w-screen-2xl mx-auto space-y-12">

        {/* Featured Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured Item 1 */}
          <div className="w-full lg:w-1/2 h-[500px] rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer" onClick={() => playTrailer("Deadpool & Wolverine")}>
            <div className="absolute inset-0 bg-[url('/images/img3.jpeg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight drop-shadow-lg">Deadpool & <br />Wolverine</h2>
              <p className="text-gray-300 mb-6 line-clamp-2 max-w-md">The ultimate team-up is here. Witness the chaos, the action, and the humor properly this time.</p>
              <button
                className="px-8 py-3.5 bg-red-600 text-white rounded-full font-bold shadow-lg shadow-red-600/30 transform hover:scale-105 transition-all duration-200 hover:bg-red-700 flex items-center space-x-3 w-fit"
                onClick={(e) => { e.stopPropagation(); playTrailer("Deadpool & Wolverine"); }}
              >
                <Play className="w-5 h-5 fill-current" />
                <span>Play Trailer</span>
              </button>
            </div>
          </div>

          {/* Featured Item 2 */}
          <div className="w-full lg:w-1/2 h-[500px] rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer" onClick={() => playTrailer("Fifty Shades of Grey")}>
            <div className="absolute inset-0 bg-[url('/images/img2.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight drop-shadow-lg">Fifty Shades <br />of Grey</h2>
              <p className="text-gray-300 mb-6 line-clamp-2 max-w-md">Experience the global phenomenon. A romance that breaks all the rules.</p>
              <button
                className="px-8 py-3.5 bg-red-600 text-white rounded-full font-bold shadow-lg shadow-red-600/30 transform hover:scale-105 transition-all duration-200 hover:bg-red-700 flex items-center space-x-3 w-fit"
                onClick={(e) => { e.stopPropagation(); playTrailer("Fifty Shades of Grey"); }}
              >
                <Play className="w-5 h-5 fill-current" />
                <span>Play Trailer</span>
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
          <CategoryButtons
            selected={selectedCategory}
            onSelect={(cat) => {
              setSelectedCategory(cat);
              setSearch("");
            }}
          />
        </div>

        {/* Trending Section */}
        <div>
          <div className="flex items-end justify-between mb-8">
            <h3 className="text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{trendingTitle}</h3>
            <div className="h-1 flex-1 mx-6 bg-gray-800 rounded-full hidden md:block">
              <div className="w-1/3 h-full bg-gradient-to-r from-red-600 to-transparent rounded-full"></div>
            </div>
          </div>
          <MovieCards movies={movies} onPlay={playTrailer} />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
