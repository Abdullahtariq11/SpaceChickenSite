"use client";
import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import menuItems from "../../../data/menuItems.json";
import MenuItemCard from "./MenuItemCard";

const categories = [
  "Burgers",
  "Wraps",
  "Chicken Pieces",
  "Meat & Rice Platters",
  "Space Meals",
  "Sides",
  "Drinks & Desserts",
];

function MainMenu() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col max-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-r-lg border-l border-gray-700 shadow-inner">
      
      {/* Sticky Search Bar */}
      <div className="sticky top-0 z-20 bg-gray-900/90 backdrop-blur p-4 border-b border-gray-700">
        <div className="relative max-w-lg w-full mx-auto">
          <FaMagnifyingGlass className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search menu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 text-white border border-yellow-400 rounded-full pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"
          />
        </div>
      </div>

      {/* Mobile Category Bar */}
      <div className="md:hidden sticky top-[80px] z-10 bg-gray-900/80 backdrop-blur overflow-x-auto border-b border-gray-700">
        <div className="flex space-x-4 p-2 min-w-max">
          {categories.map((cat) => {
            const id = cat.toLowerCase().replace(/ /g, "-").replace(/&/g, "").replace(/-+/g, "-");
            return (
              <button
                key={id}
                onClick={() => {
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", inline: "start" });
                  }
                }}
                className="text-sm text-gray-300 hover:text-yellow-400 transition-colors whitespace-nowrap px-3 py-1 rounded bg-gray-800 hover:bg-gray-700"
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-10">
          {categories.map((category) => {
            const items = filteredItems.filter((item) => item.category === category);
            if (items.length === 0) return null;

            const id = category
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/&/g, "")
              .replace(/-+/g, "-");

            return (
              <section key={category} id={id} className="scroll-mt-24 space-y-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 border-b border-gray-700 pb-2">
                  {category}
                </h2>

                {/* Horizontal scroll on mobile, grid on desktop */}
                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible">
                  {items.map((item) => (
                    <div key={item.id} className="min-w-[250px] flex-shrink-0">
                      <MenuItemCard {...item} />
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainMenu;