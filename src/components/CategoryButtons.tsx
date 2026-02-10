import React from "react";

const categories = [
    { key: "trending", label: "Trends Now" },
    { key: "action", label: "Action" },
    { key: "adventure", label: "Adventure" },
    { key: "animation", label: "Animation" },
    { key: "biography", label: "Biography" },
    { key: "crime", label: "Crime" },
    { key: "comedy", label: "Comedy" },
    { key: "documentary", label: "Documentary" },
    { key: "drama", label: "Drama" },
];

interface CategoryButtonsProps {
    selected: string;
    onSelect: (category: string) => void;
}

const CategoryButtons = ({ selected, onSelect }: CategoryButtonsProps) => (
    <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide py-2">
        {categories.map((cat) => (
            <button
                key={cat.key}
                className={`px-5 py-1.5 rounded text-xs font-semibold tracking-wide uppercase transition-all duration-300 whitespace-nowrap
          ${selected === cat.key
                        ? 'bg-sky-600 text-white shadow-lg shadow-sky-900/50 scale-105'
                        : 'bg-[#1a1c22] text-gray-400 hover:bg-[#2a2d35] hover:text-white border border-transparent hover:border-gray-600'
                    }`}
                onClick={() => onSelect(cat.key)}
            >
                {cat.label}
            </button>
        ))}
    </div>
);

export default CategoryButtons;
