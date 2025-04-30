"use client";
import React from "react";
import Image from "next/image";

const specials = [
  { day: "Monday", img: "Monday.png" },
  { day: "Tuesday", img: "Tuesday.png" },
  { day: "Wednesday", img: "Wednesday.png" },
  { day: "Thursday", img: "Thursday.png" },
  { day: "Friday", img: "Friday.png" },
  { day: "Saturday", img: "Saturday.png" },
];

function BurgerSpecialsSection() {
  return (
    <section id="specials" className="bg-gradient-to-b from-yellow-50 via-orange-50 to-white py-24 text-center px-6">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
        Daily Specials
      </h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto mb-10 rounded-full" />
      <p className="text-lg text-gray-700 mb-14 max-w-2xl mx-auto leading-relaxed">
        Discover a different Space Chicken favorite every day — from galaxy burgers to our Tuesday wrap deal. It’s a stellar special lineup, all week long (except Sunday)!
      </p>

      <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 pb-4">
        {specials.map((item, idx) => (
          <div
            key={idx}
            className="snap-start flex-shrink-0 min-w-[300px] max-w-[300px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ring-1 ring-yellow-200"
          >
            <Image
              src={`/images/${item.img}`}
              alt={`${item.day} Special`}
              width={400}
              height={500}
              className="w-full h-auto object-cover"
            />
            <div className="bg-yellow-100 text-yellow-800 font-semibold text-sm py-2 px-4 text-center">
              {item.day} Special
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BurgerSpecialsSection;