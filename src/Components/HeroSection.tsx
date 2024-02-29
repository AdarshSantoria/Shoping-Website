import React from 'react';
import Link from "next/link"


function HeroSection() {
  return (
    <div className="relative bg-gray-800 min-h-[40rem] md:h-auto flex items-center justify-center overflow-hidden rounded-md mt-0"> {/* Adjusted margin here */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-32 text-center text-white">
        <h1 className="text-6xl md:text-6xl font-bold mb-4">Welcome to Our Shopping Platform</h1>
        <p className="text-lg md:text-xl mb-8">Discover the best deals on garments, groceries, and electrical products.</p>
        <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">Shop Now</button>
        <div className="mt-4">
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
