"use client";
import React from "react";
import Sidebar from "./MenuLayout/Sidebar";
import MainMenu from "./MenuLayout/MainMenu";

function MenuSection() {
  return (
    <section
      id="menu"
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 py-24 text-center px-4 md:px-6 relative"
    >
      <h2 className="scroll-mt-32 text-4xl md:text-5xl font-extrabold text-white mb-4">
        Our Menu
      </h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto mb-10 rounded-full" />
      <p className="text-lg text-gray-300 mb-14 max-w-2xl mx-auto leading-relaxed">
        Explore our full menu — galaxy burgers, crispy pieces, family boxes, and space-worthy combos.
      </p>

      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto h-screen">
        <Sidebar />
        <MainMenu />
      </div>

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