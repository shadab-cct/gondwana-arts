import React from 'react'

const Blog = () => {
  return (
        <div className='bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:20px_20px] pt-6' >
        <div className='category-heading flex items-center ml-150 mr-150'>
            {/* Left Line */}
  <div className="flex-grow border-t-4 border-single border-black"></div>

  {/* Text */}
  <div className="flex-row">
    <h2 className=' text-[24px] font-bold text-[#242424] pl-16 '>Latest Blogs</h2>
    <p className=' text-[16px] font-semibold text-[#242424] '>The freshest and most exciting news</p>
  </div>

  {/* Right Line */}
  <div className="flex-grow border-t-4 border-single border-black"></div>
        </div>
    </div>
  )
}

export default Blog