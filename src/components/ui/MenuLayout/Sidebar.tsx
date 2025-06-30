import React from "react";

const categories = [
  { label: "Burgers", id: "burgers" },
  { label: "Wraps", id: "wraps" },
  { label: "Chicken Pieces", id: "chicken-pieces" },
  { label: "Meat & Rice Platters", id: "meat-rice-platters" },
  { label: "Space Meals", id: "space-meals" },
  { label: "Sides", id: "sides" },
  { label: "Drinks & Desserts", id: "drinks-desserts" },
];

const Sidebar = () => (
  <div className="hidden md:flex flex-col sticky top-0 h-screen p-6 w-56 overflow-y-auto 
                  bg-gradient-to-b from-gray-900 via-black to-gray-900 
                  rounded-l-lg border-r border-gray-700 shadow-inner">
    <h1 className="text-3xl font-extrabold mb-2 tracking-wide text-yellow-400">Menu</h1>
    <div className="h-1 bg-yellow-400 mb-8 rounded-full" />

    <ul className="space-y-3 text-base">
      {categories.map((cat) => (
        <li key={cat.id}>
          <button
            onClick={() => {
              const el = document.getElementById(cat.id);
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="block w-full text-left text-gray-300 hover:text-yellow-400 transition-colors 
                       py-2 px-2 rounded hover:bg-gray-800"
          >
            {cat.label}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;