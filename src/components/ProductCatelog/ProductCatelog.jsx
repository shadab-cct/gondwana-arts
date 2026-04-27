import React from "react";
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
    id: 1,
    title: "Art name",
    artist: "Artist name",
    size: '20"X20"',
    price: "Rs. 3000.00",
    image: Pic1,
  },
  {
    id: 2,
    title: "Art name",
    artist: "Artist name",
    size: '20"X20"',
    price: "Rs. 3000.00",
    image: Pic2,
  },
  {
    id: 3,
    title: "Art name",
    artist: "Artist name",
    size: '20"X20"',
    price: "Rs. 3000.00",
    image: Pic3,
  },
  {
    id: 4,
    title: "Art name",
    artist: "Artist name",
    size: '20"X20"',
    price: "Rs. 3000.00",
    image: Pic4,
  },
  {
    id: 5,
    title: "Art name",
    artist: "Artist name",
    size: '20"X20"',
    price: "Rs. 3000.00",
    image: Pic5,
  },
  {
    id: 6,
    title: "Art name",
    artist: "Artist name",
    size: '20"X20"',
    price: "Rs. 3000.00",
    image: Pic6,
  },
  {
    id: 7,
    title: "Art name",
    artist: "Artist name",
    size: '20"X20"',
    price: "Rs. 3000.00",
    image: Pic7,
  },
  {
    id: 8,
    title: "Art name",
    artist: "Artist name",
    size: '20"X20"',
    price: "Rs. 3000.00",
    image: Pic8,
  },
  {
  id: 9,
  title: "Art name",
  artist: "Artist name",
  size: '20"X20"',
  price: "Rs. 3000.00",
  image: Pic9,
},
{
  id: 10,
  title: "Art name",
  artist: "Artist name",
  size: '20"X20"',
  price: "Rs. 3000.00",
  image: Pic10,
},
{
  id: 11,
  title: "Art name",
  artist: "Artist name",
  size: '20"X20"',
  price: "Rs. 3000.00",
  image: Pic11,
},
{
  id: 12,
  title: "Art name",
  artist: "Artist name",
  size: '20"X20"',
  price: "Rs. 3000.00",
  image: Pic12,
},
];

const ProductCatelog = () => {
  return (
    <div className="w-full bg-[#f2f3f2] py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12 ">
        
        {products.map((item) => (
          <div key={item.id} className="hover:scale-[1.02] transition duration-300 bg-white">
            
            {/* Image */}
            <div className="w-full aspect-square bg-white overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="mt-3">
              <p className="text-[15px] font-medium text-black">
                “{item.title}”
              </p>

              <p className="text-[13px] text-gray-700 mt-1">
                {item.artist}
              </p>

              <p className="text-[13px] text-gray-700">
                Size - {item.size}
              </p>

              <p className="text-[13px] text-gray-800 mt-1">
                {item.price}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductCatelog;