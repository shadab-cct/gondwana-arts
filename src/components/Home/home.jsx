import React from 'react'
import Navbar from '../Navbar/navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import CategorySection from '../CategorySection/CategorySection'
import Products from '../Products/Products'
import ProductCatelog from '../ProductCatelog/ProductCatelog'
import Blog from '../Blog/blog'
import BlogContent from '../BlogContent/BlogSection'
import Footer from '../Footer/Footer'
import Trending from '../Trending/Trending'

const home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Category />
        <CategorySection />
        <Trending />
        <Blog />
        <BlogContent />
        <Footer />
    </div>
  )
}

export default home