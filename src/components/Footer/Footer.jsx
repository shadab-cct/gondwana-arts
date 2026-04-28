import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoLocationOutline, IoMailOutline, IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#2c3320] text-white pt-10">
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Left Section */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <IoLocationOutline className="text-lg mt-1" />
            <p className="text-xs sm:text-sm">
              123, Main Road, Jabalpur, <br />
              M.P., India, 482001
            </p>
          </div>

          <div className="flex items-center gap-3">
            <IoMailOutline className="text-lg" />
            <p className="text-xs sm:text-sm break-all">
              Info@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-3">
            <IoCallOutline className="text-lg" />
            <p className="text-xs sm:text-sm">
              +91 6265011977
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2 text-base sm:text-lg">
            <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
            <FaWhatsapp className="cursor-pointer text-green-500 hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer text-pink-500 hover:scale-110 transition" />
            <FaLinkedinIn className="cursor-pointer text-blue-600 hover:scale-110 transition" />
            <FaYoutube className="cursor-pointer text-red-500 hover:scale-110 transition" />
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-3 text-sm sm:text-base">Categories</h3>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms & Condition</li>
            <li className="hover:underline cursor-pointer">Shipping Policy</li>
            <li className="hover:underline cursor-pointer">Refund Policy</li>
            <li className="hover:underline cursor-pointer">Contact Information</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3 text-sm sm:text-base">Useful Links</h3>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Blogs</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3 text-sm sm:text-base">Newsletter</h3>
          <p className="text-xs sm:text-sm mb-4">
            Subscribe to our newsletter and get access to all the latest collection
          </p>

          <div className="flex flex-col sm:flex-row border border-gray-400 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter email address"
              className="px-4 py-2 w-full outline-none text-xs sm:text-sm bg-transparent"
            />
            <button className="bg-black text-white px-4 py-2 text-xs sm:text-sm hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-[10px] sm:text-xs mt-8 py-3 border-t border-gray-600">
        All Rights Reserved © 2026 - Sonasha Technologies Private Limited
      </div>

    </footer>
  );
};

export default Footer;