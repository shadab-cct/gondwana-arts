import React from 'react'

const Products = () => {
  return (
     <div className='bg-white-50 pt-6' >
        <div className='category-heading flex items-center ml-150 mr-150'>
            {/* Left Line */}
  <div className="flex-grow border-t-4 border-single border-black"></div>

  {/* Text */}
  <div className="flex-row">
    <h2 className=' text-[24px] font-bold text-[#242424] pl-8 pr-8'>Trending Products</h2>
    <p className=' text-[16px] font-semibold text-[#242424] pl-12 '>Top views in this week</p>
  </div>

  {/* Right Line */}
  <div className="flex-grow border-t-4 border-single border-black"></div>
        </div>
    </div>
  )
}

export default Products