import React from "react";
import Blogpic1 from "../../assets/blog1.webp"
import Blogpic2 from "../../assets/blog2.webp"
import Blogpic3 from "../../assets/blog3.webp"

const BlogCard = ({ image }) => {
  return (
    <div className="bg-white w-full max-w-[320px] hover:scale-105 transition duration-300 shadow-md hover:shadow-lg rounded-xl overflow-hidden">
      
      {/* Image Section */}
      <div className="relative">
        <img 
          src={image} 
          alt="blog" 
          className="w-full h-40 sm:h-48 md:h-52 object-cover" 
        />

        {/* Overlay Label */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black text-white px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium">
          Blog Topic
        </div>
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
          We help art lovers, collectors, corporates, and interior designers
          discover meaningful art with cultural depth.
        </p>

        {/* Button */}
        <button className="mt-4 border border-black px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-black hover:text-white transition">
          Continue Reading
        </button>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <div className="py-10 px-4 md:px-10 lg:px-20 bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:20px_20px]">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 place-items-center">
        <BlogCard image={Blogpic1} />
        <BlogCard image={Blogpic2} />
        <BlogCard image={Blogpic3} />
      </div>

    </div>
  );
};

export default BlogSection;