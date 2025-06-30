import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
  <header
  className="relative min-h-screen flex flex-col  items-center justify-center px-6 text-center space-y-8  overflow-hidden"
  style={{
    backgroundImage: "url('/images/menu/Cover Photo.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Black overlay */}
  <div className="absolute mb-0 inset-0 bg-black opacity-55 "></div>

  {/* Content */}
  <div className="relative z-10 text-white">
    <div className="mb-6">
      <Image
        src="/images/logo.png"
        alt="Space Chicken Logo"
        width={160}
        height={160}
        priority
        className="drop-shadow-2xl"
      />
    </div>
    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
      Where Flavor Takes Off
    </h1>
    <p className="text-lg md:text-xl text-gray-200 max-w-2xl px-4 leading-relaxed">
      Bold, crispy, and out-of-this-world flavor — experience cosmic chicken like never before.
    </p>
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mt-4">
      <a
        href="#menu"
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 px-8 rounded-full shadow-md hover:from-yellow-500 hover:to-yellow-600 hover:scale-105 transition-all duration-300 ease-in-out ring-2 ring-yellow-300 ring-offset-2"
      >
        View Menu
      </a>
      <a
        href="#order-online"
        className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-md hover:from-white hover:to-gray-100 hover:scale-105 transition-all duration-300 ease-in-out ring-2 ring-gray-300 ring-offset-2"
      >
        Order Online
      </a>
    </div>
  </div>
</header>
  );
}

export default HeroSection;