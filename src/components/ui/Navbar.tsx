"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Order Online", href: "#order-online" },
  { label: "Menu", href: "#menu" },
  { label: "Specials", href: "#specials" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 bg-opacity-95 backdrop-blur-md text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Space Chicken Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-gray-200 hover:text-yellow-400 transition duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-yellow-400"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-gray-800 rounded-b-xl px-4 pt-4 pb-6 shadow-inner flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-gray-200 hover:text-yellow-400 transition"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;