import React from "react";
import Typewriter from "../Typewriter/Typewriter";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Flagicon from "../../assets/flagicon.png";
import Logo from "../../assets/logo.png"
import Search from "../../assets/search.png";
import User from "../../assets/user.png"
import Cart from "../../assets/cart.png"

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className=" flex justify-between items-center top-nav bg-neutral-600 w-full h-10 px-16">
          {/* Top-nav left side content */}
          <div className="topnav-left-content flex items-center gap-10">
            <div className="flex gap-1 items-center text-[white]">
              <a href="">
                <FaPhone />
              </a>
              <p className="text-base ">+6265011977</p>
            </div>
            <div className="flex gap-1 items-center text-[white] ">
              <a href="">
                <IoIosMail />
              </a>
              <p className="text-base">info@gmail.com</p>
            </div>
          </div>
          <div className="topnav-middle-content">
              <Typewriter />
          </div>
          <div className="topnav-right-content flex gap-2 items-center">
            <img className="w-[28px] h-[20px]" src={Flagicon} alt="" />
            <p className="font-bold text-white">INR</p>
            <a href="" className="text-white">
              <IoIosArrowDown />
            </a>
          </div>
        </div>
        {/* This is the bottom part of navbar */}
        <div className="bottom-nav bg-gray-50 w-full h-16 flex items-center justify-between pl-[150px] pr-[200px]">
          {/* This is the bottom-left part of navbar */}
          <div className="bottomnav-left-content flex items-center gap-10">
            <div className="logo-container flex">
              <img src={Logo} alt="" className="w-[60px] h-[64px] p-[2px]" />
            </div>
            <div className="menu-list flex ">
              <ul className="hidden md:flex gap-10 text-[18px] font-semibold">
                <li className="hover:text-gray-400 cursor-pointer ">Home</li>
                <li className="hover:text-gray-400 cursor-pointer">About Us</li>
                <li className="hover:text-gray-400 cursor-pointer">Painting</li>
                <li className="hover:text-gray-400 cursor-pointer">T-Shirt</li>
                <li className="hover:text-gray-400 cursor-pointer">Stories</li>
                <li className="hover:text-gray-400 cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>
          {/* This is the bottom-right part of navbar */}
          <div className="flex items-center gap-2 ">
            <div className=" flex  items-center outline-1 rounded-full w-[200px] h-[35px] mr-5">
              <input
                type="text"
                placeholder="Search for artwork"
                className="w-[160px] h-[40px]  pl-4 outline-hidden text-[#242424]"
              />
              <img src={Search} alt="" className="w-5 h-5" />
            </div>
            <img src={User} alt="" className="w-6 h-6 " />
            <img src={Cart} alt="" className="w-6 h-6 " />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
