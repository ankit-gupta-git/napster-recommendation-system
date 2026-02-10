import React from "react";

const categories = [
    { key: "trending", label: "Trending" },
    { key: "action", label: "Action" },
    { key: "romance", label: "Romance" },
    { key: "animation", label: "Animation" },
    { key: "marvel", label: "Marvel" },
    { key: "special", label: "Special" },
    { key: "horror", label: "Horror" },
    { key: "english", label: "English" },
    { key: "netflix", label: "Netflix" },
    { key: "disney", label: "Disney+" },
    { key: "comedy", label: "Comedy" },
    { key: "mystery", label: "Mystery" },
];

interface CategoryButtonsProps {
    selected: string;
    onSelect: (category: string) => void;
}

const CategoryButtons = ({ selected, onSelect }: CategoryButtonsProps) => (
    <div className="flex flex-wrap gap-4 mt-12 mb-12 justify-center fade-in-up">
        {categories.map((cat) => (
            <button
                key={cat.key}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 border border-transparent
          ${selected === cat.key
                        ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border-white/5'
                    }`}
                onClick={() => onSelect(cat.key)}
            >
                {cat.label}
            </button>
        ))}
    </div>
);

export default CategoryButtons;
