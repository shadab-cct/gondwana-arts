import React from "react";
import Blogpic1 from "../../assets/blog1.webp"
import Blogpic2 from "../../assets/blog2.webp"
import Blogpic3 from "../../assets/blog3.webp"

const BlogCard = ({ image }) => {
  return (
    <div className="bg-white w-[320px] hover:scale-105 transition duration-300 shadow-md hover:shadow-lg">
      {/* Image Section */}
      <div className="relative ">
        <img src={image} alt="blog" className="w-full h-[220px] object-cover " />

        {/* Overlay Label */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 text-sm font-medium">
          Blog Topic
        </div>
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <p className="text-gray-600 text-sm leading-relaxed">
          We help art lovers, collectors, corporates, and interior designers
          discover meaningful art with cultural depth, artistic integrity, and
          long-term value.
        </p>

        {/* Button */}
        <button className="mt-4 border border-black px-5 py-2 rounded-full text-sm hover:bg-black hover:text-white transition ">
          Continue Reading
        </button>
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <div className=" flex justify-center gap-8 py-10 bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:20px_20px]">
      <BlogCard image={Blogpic1} />
      <BlogCard image={Blogpic2} />
      <BlogCard image={Blogpic3} />
    </div>
  );
};

export default BlogSection;