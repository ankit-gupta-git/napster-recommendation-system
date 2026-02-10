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

const CategoryButtons = ({ selected, onSelect }) => (
  <div className="flex flex-wrap gap-3 mt-12">
    {categories.map((cat) => (
      <button
        key={cat.key}
        className={`$ {cat.key} px-6 py-2.5 bg-gray-900 text-gray-300 rounded-full font-medium hover:bg-red-600 hover:text-white transition-all duration-300 ease-in-out shadow-sm${selected === cat.key ? ' bg-red-600 text-white' : ''}`}
        onClick={() => onSelect(cat.key)}
      >
        {cat.label}
      </button>
    ))}
  </div>
);

export default CategoryButtons;
