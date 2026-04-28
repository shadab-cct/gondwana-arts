import React from "react";
import Pic1 from '../../assets/pic1.webp';
import Pic2 from '../../assets/pic2.webp'
import Pic3 from '../../assets/pic3.webp'
import Pic4 from '../../assets/pic4.webp'
import Pic5 from '../../assets/pic5.webp'

const categories = [
  { id: 1, name: "Category 1", image: Pic1 },
  { id: 2, name: "Category 2", image: Pic2 },
  { id: 3, name: "Category 3", image: Pic3 },
  { id: 4, name: "Category 4", image: Pic4 },
  { id: 5, name: "Category 5", image: Pic5 },
];

const CategorySection = () => {
  return (
    <div className="w-full bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:20px_20px] py-10 px-4 md:px-10 lg:px-20">
      
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10 place-items-center">
        
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center">
            
            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-md hover:scale-105 transition duration-300">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="mt-2 md:mt-3 text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center">
              {cat.name}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default CategorySection;