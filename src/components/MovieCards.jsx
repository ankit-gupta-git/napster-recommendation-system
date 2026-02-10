import React from "react";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const MovieCards = ({ movies }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 movie-section">
    {movies.map((res) => (
      <div
        key={res.id}
        className="movie relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
      >
        <div className="relative">
          <img
            src={IMGPATH + res.poster_path}
            alt={res.original_title}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h4 className="font-bold text-lg text-white">{res.original_title}</h4>
            <p className="text-sm text-gray-200">{res.release_date ? res.release_date.split("-")[0] : ""}</p>
            <button className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors duration-200">
              Play Now
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default MovieCards;
