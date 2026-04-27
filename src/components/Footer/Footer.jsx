import React from "react";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoLocationOutline, IoMailOutline, IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#2c3320] text-gray-800 pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-white">

        {/* Left Section */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <IoLocationOutline className="text-xl mt-1" />
            <p className="text-sm text-white">
              123, Main Road, Jabalpur, <br />
              M.P., India, 482001
            </p>
          </div>

          <div className="flex items-center gap-3">
            <IoMailOutline />
            <p className="text-sm text-white">Info@gmail.com</p>
          </div>

          <div className="flex items-center gap-3">
            <IoCallOutline />
            <p className="text-sm text-white">+91 6265011977</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2 text-lg">
            <FaFacebookF className="cursor-pointer" />
            <FaWhatsapp className="cursor-pointer text-green-500" />
            <FaInstagram className="cursor-pointer text-pink-500" />
            <FaLinkedinIn className="cursor-pointer text-blue-600" />
            <FaYoutube className="cursor-pointer text-red-500" />
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Categories</h3>
          <ul className="space-y-2 text-sm text-white">
            <li>Privacy policy</li>
            <li>Terms & Condition</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
            <li>Contact Information</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Useful Links</h3>
          <ul className="space-y-2 text-sm text-white">
            <li>About Us</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Useful Links</h3>
          <p className="text-sm mb-4 text-white">
            Subscribe to our newsletter and get access to all the latest collection
          </p>

          <div className="flex border border-black rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter email address"
              className="px-4 py-2 w-full outline-none text-sm bg-transparent"
            />
            <button className="bg-black text-white px-5 text-sm">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-white text-xs  mt-8 py-3 bg-[#2c3320]">
        All Rights Reserved © 2026 - Sonasha Technologies Private Limited
      </div>
    </footer>
  );
};

export default Footer;