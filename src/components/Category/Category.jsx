import React from 'react'

const Category = () => {
  return (
    <div className="bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:20px_20px] py-6 px-4 md:px-10 lg:px-20">
      
      <div className="flex items-center justify-center gap-5 mb-10">
        
        {/* Left Line */}
        <div className="w-10 sm:w-20 md:w-32 border-t-4 border-black"></div>

        {/* Text */}
        <div className="text-center px-2">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-[#242424]">
            Our Categories
          </h2>
          <p className="text-xs md:text-sm lg:text-base font-semibold text-[#242424]">
            Browse from our Art Gallery Categories
          </p>
        </div>

        {/* Right Line */}
        <div className="w-10 sm:w-20 md:w-32 border-t-4 border-black"></div>

      </div>

    </div>
  )
}

export default Category