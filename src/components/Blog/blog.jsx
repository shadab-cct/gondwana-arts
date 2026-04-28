import React from 'react'

const Blog = () => {
  return (
    <div className="bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:20px_20px] py-6 px-4 md:px-10 lg:px-20">
      
      <div className="flex items-center gap-4 justify-center">
        
        {/* Left Line */}
        <div className="w-10 sm:w-20 md:w-40 border-t-3 border-black"></div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#242424]">
            Latest Blogs
          </h2>
          <p className="text-xs md:text-sm lg:text-base font-semibold text-[#242424]">
            The freshest and most exciting news
          </p>
        </div>

        {/* Right Line */}
        <div className="w-10 sm:w-20 md:w-40 border-t-3 border-black"></div>

      </div>

    </div>
  )
}

export default Blog