import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import Pic1 from '../../assets/pic1.webp'
import Pic2 from '../../assets/pic2.webp'
import Pic3 from '../../assets/pic3.webp'
import Pic4 from '../../assets/pic4.webp'
import Pic5 from '../../assets/pic5.webp'
import Pic6 from '../../assets/pic6.webp'
import Pic7 from '../../assets/pic7.webp'
import Pic8 from '../../assets/pic8.webp'
import Pic9 from '../../assets/pic9.webp'
import Pic10 from '../../assets/pic10.webp'
import Pic11 from '../../assets/pic11.webp'
import Pic12 from '../../assets/pic12.webp'

const products = [
  {
    title: "Village Life Art",
    artist: "By Local Artist",
    size: "20 x 20",
    price: "₹3000",
    image: Pic1,
  },
  {
    title: "Desi Life Art",
    artist: "By Local Artist",
    size: "20 x 20",
    price: "₹3200",
    image: Pic2,
  },
  {
    title: "Tribal Culture Art",
    artist: "By Gond Artist",
    size: "18 x 18",
    price: "₹2800",
    image: Pic3,
  },
  {
    title: "Nature Harmony",
    artist: "By Local Artist",
    size: "22 x 22",
    price: "₹3500",
    image: Pic4,
  },
  {
    title: "Folk Story Painting",
    artist: "By Rural Artist",
    size: "20 x 24",
    price: "₹4000",
    image: Pic5,
  },
  {
    title: "Traditional Life",
    artist: "By Indian Artist",
    size: "18 x 20",
    price: "₹2700",
    image: Pic6,
  },
  {
    title: "Village Festival",
    artist: "By Local Artist",
    size: "24 x 24",
    price: "₹4200",
    image: Pic7,
  },
  {
    title: "Ethnic Beauty",
    artist: "By Tribal Artist",
    size: "20 x 20",
    price: "₹3100",
    image: Pic8,
  },
  {
    title: "Rural Landscape",
    artist: "By Nature Artist",
    size: "22 x 18",
    price: "₹2900",
    image: Pic9,
  },
  {
    title: "Cultural Roots",
    artist: "By Folk Artist",
    size: "20 x 20",
    price: "₹3300",
    image: Pic10,
  },
  {
    title: "Heritage Art",
    artist: "By Indian Artist",
    size: "24 x 20",
    price: "₹4500",
    image: Pic11,
  },
  {
    title: "Desi Vibes",
    artist: "By Local Artist",
    size: "18 x 18",
    price: "₹2600",
    image: Pic12,
  },
];
const Trending = () => {
  return (
    <div className="bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:20px_20px] py-16 px-6">
      
      {/* Heading */}
      <div className="text-center mb-12 flex items-center ml-150 mr-150">
        <div className="flex-grow border-t-4 border-single border-black"></div>

  {/* Text */}
  <div className="flex-row">
    <h2 className=' text-[24px] font-bold text-[#242424] pl-8 pr-8'>Trending Products</h2>
    <p className=' text-[16px] font-semibold text-[#242424]'>Top views in this week</p>
  </div>

  {/* Right Line */}
  <div className="flex-grow border-t-4 border-single border-black"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:px-40">
        
        {products.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden ">
              <img
                src={item.image}
                alt="art"
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />

              {/* Badge */}
              <span className="absolute top-3 left-3 bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">
                🔥 Top Viewed
              </span>

              {/* Wishlist */}
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <Heart size={16} />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.artist}
              </p>

              <p className="text-gray-400 text-xs mt-1">
                Size: {item.size}
              </p>

              {/* Price + Cart */}
              <div className="flex items-center justify-between mt-4">
                <span className="font-semibold text-orange-600 text-lg">
                  {item.price}
                </span>

                <button className="bg-[#084b0c] text-white p-2 rounded-full hover:bg-green-600 transition">
                  <ShoppingCart size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Trending;