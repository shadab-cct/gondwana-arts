import React from 'react'
import BgImage from '../../assets/banner6.png'

const Hero = () => {
  return (
    <div
        className="w-full h-[80vh] bg-cover bg-bottom relative"
        style={{ backgroundImage: `url(${BgImage})` }}
        
      >
        <button className="bg-[#1E2E1B] text-white px-6 py-3 rounded-lg hover:bg-green-900 transition  absolute bottom-50 left-35">
            Explore Collections →
          </button>
      </div>

  )
}

export default Hero