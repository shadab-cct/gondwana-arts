import React from "react";
import Pic1 from '../../assets/pic1.webp';
import Pic2 from '../../assets/pic2.webp'
import Pic3 from '../../assets/pic3.webp'
import Pic4 from '../../assets/pic4.webp'
import Pic5 from '../../assets/pic5.webp'


const categories = [
  {
    id: 1,
    name: "Category 1",
    image: Pic1,
  },
  {
    id: 2,
    name: "Category 2",
    image: Pic2,
  },
  {
    id: 3,
    name: "Category 3",
    image: Pic3,
  },
  {
    id: 4,
    name: "Category 4",
    image: Pic4,
  },
  {
    id: 5,
    name: "Category 5",
    image: Pic5,
  },
];

const CategorySection = () => {
  return (
    <div className="w-full bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:20px_20px] py-10">
      <div className="max-w-10xl mx-auto flex flex-wrap justify-center gap-12">
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center">
            <div className="w-60 h-60 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden shadow-md hover:scale-105  duration-300 transition">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm font-medium text-gray-700">
              {cat.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;