import React, { useState } from "react";
import Typewriter from "../Typewriter/Typewriter";
import { FaPhone, FaBars } from "react-icons/fa6";
import { IoIosMail, IoIosArrowDown, IoMdClose } from "react-icons/io";
import Flagicon from "../../assets/flagicon.png";
import Logo from "../../assets/logo.png";
import Search from "../../assets/search.png";
import User from "../../assets/user.png";
import Cart from "../../assets/cart.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        {/* 🔹 Top Navbar (hide on mobile) */}
        <div className="hidden md:flex justify-between items-center bg-neutral-600 w-full h-10 px-6 lg:px-16 text-white text-sm">
          <div className="flex items-center gap-6">
            <div className="flex gap-1 items-center">
              <FaPhone />
              <p>+6265011977</p>
            </div>
            <div className="flex gap-1 items-center">
              <IoIosMail />
              <p>info@gmail.com</p>
            </div>
          </div>

          <Typewriter />

          <div className="flex gap-2 items-center">
            <img className="w-6 h-4" src={Flagicon} alt="" />
            <p className="font-bold">INR</p>
            <IoIosArrowDown />
          </div>
        </div>

        {/* 🔹 Bottom Navbar */}
        <div className="bg-gray-50 w-full flex items-center justify-between px-4 md:px-10 lg:px-20 h-16">
          
          {/* Left Section */}
          <div className="flex items-center gap-4 md:gap-10">
            <img src={Logo} alt="logo" className="w-12 md:w-[60px]" />

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6 lg:gap-10 text-sm lg:text-[18px] font-semibold">
              <li className="hover:text-gray-400 cursor-pointer">Home</li>
              <li className="hover:text-gray-400 cursor-pointer">About Us</li>
              <li className="hover:text-gray-400 cursor-pointer">Painting</li>
              <li className="hover:text-gray-400 cursor-pointer">T-Shirt</li>
              <li className="hover:text-gray-400 cursor-pointer">Stories</li>
              <li className="hover:text-gray-400 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 md:gap-4">
            
            {/* Search (hide on small screens) */}
            <div className="hidden md:flex items-center border rounded-full px-3 h-9">
              <input
                type="text"
                placeholder="Search"
                className="outline-none text-sm w-28 lg:w-40"
              />
              <img src={Search} alt="" className="w-4 h-4" />
            </div>

            <img src={User} alt="" className="w-5 h-5 md:w-6 md:h-6" />
            <img src={Cart} alt="" className="w-5 h-5 md:w-6 md:h-6" />

            {/* Hamburger (mobile only) */}
            <div className="md:hidden cursor-pointer">
              {menuOpen ? (
                <IoMdClose size={24} onClick={() => setMenuOpen(false)} />
              ) : (
                <FaBars size={20} onClick={() => setMenuOpen(true)} />
              )}
            </div>
          </div>
        </div>

        {/* 🔹 Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white w-full px-6 py-4 shadow-md">
            <ul className="flex flex-col gap-4 text-[16px] font-medium">
              <li>Home</li>
              <li>About Us</li>
              <li>Painting</li>
              <li>T-Shirt</li>
              <li>Stories</li>
              <li>Contact</li>
            </ul>

            {/* Mobile Search */}
            <div className="flex items-center border rounded-full px-3 h-9 mt-4">
              <input
                type="text"
                placeholder="Search"
                className="outline-none text-sm w-full"
              />
              <img src={Search} alt="" className="w-4 h-4" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;