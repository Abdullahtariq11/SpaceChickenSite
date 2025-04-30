"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function MenuSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 500;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="menu"
      className=" bg-gradient-to-b from-gray-900 via-black to-gray-900 py-24 text-center px-6 relative"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Our Menu
      </h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto mb-10 rounded-full" />
      <p className="text-lg text-gray-300 mb-14 max-w-2xl mx-auto leading-relaxed">
        Explore our full menu — galaxy burgers, crispy pieces, family boxes, and
        space-worthy combos.
      </p>

      {/* Arrow Buttons */}
      <button
        onClick={() => handleScroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full hover:bg-yellow-500 hover:text-black transition z-10"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={() => handleScroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white p-3 rounded-full hover:bg-yellow-500 hover:text-black transition z-10"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Image Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 pb-2"
      >
        {["menu-1.png", "menu-2.png", "menu-3.png"].map((img, index) => (
          <div
            key={index}
            className="snap-start flex-shrink-0 w-full max-w-3xl bg-gray-800 p-3 rounded-2xl shadow-xl ring-1 ring-gray-700"
          >
            <Image
              src={`/images/${img}`}
              alt={`Space Chicken Menu Page ${index + 1}`}
              width={1200}
              height={900}
              className="rounded-xl w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
      {/* Download Button */}
      <div className="mt-12">
        <a
          href="/pdfs/pdfmenu.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full shadow-md hover:bg-yellow-600 hover:scale-105 transition-all duration-300"
        >
          Download Menu (PDF)
        </a>
      </div>
    </section>
  );
}

export default MenuSection;
