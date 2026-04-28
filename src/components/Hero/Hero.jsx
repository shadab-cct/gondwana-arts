import React from "react";
import BgImage from "../../assets/banner6.png";

const Hero = () => {
  return (
    <div
      className="w-full h-[60vh] md:h-[75vh] lg:h-[80vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Overlay (optional for better text visibility) */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4 md:px-10 lg:px-20">
        
        {/* Button */}
        <button className="bg-[#1E2E1B] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-green-900 transition text-sm md:text-base">
          Explore Collections →
        </button>

      </div>
    </div>
  );
};

export default Hero;