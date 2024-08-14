import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <div className="h-20 md:flex justify-center items-center w-svw lg:px-14 py-3 hidden">
        <div className="lg:flex-1">
          <img
            src="nexcent-logo.png"
            alt="Nexcent logo"
            className="scale-[0.65] p-4 md:m-0"
          />
        </div>
        <div className="lg:mr-14 md:mr-16 lg:p-2 hidden md:flex">
          <ul className="md:flex items-center justify-center md:gap-5 lg:gap-10 gap-2">
            <li className="font-bold text-xs md:text-base lg:text-base text-gray-700 hover:underline hover:underline-offset-1 hover:text-black cursor-pointer transition">
              Home
            </li>
            <li className="font-bold text-xs md:text-base lg:text-base text-gray-700 hover:underline hover:underline-offset-1 hover:text-black cursor-pointer transition">
              Features
            </li>
            <li className="font-bold text-xs md:text-base lg:text-base text-gray-700 hover:underline hover:underline-offset-1 hover:text-black cursor-pointer transition">
              Community
            </li>
            <li className="font-bold text-xs md:text-base lg:text-base text-gray-700 hover:underline hover:underline-offset-1 hover:text-black cursor-pointer transition">
              Block
            </li>
            <li className="font-bold text-xs md:text-base lg:text-base text-gray-700 hover:underline hover:underline-offset-1 hover:text-black cursor-pointer transition">
              Pricing
            </li>
            <li>
              <button className="bg-green-600 rounded-lg lg:py-4 lg:px-9 md:py-2 md:px-4 text-white hover:bg-green-700 flex items-center justify-center gap-3 transition">
                <span className="lg:text-base hidden lg:flex">
                  Register Now
                </span>
                <span className="lg:hidden text-base">Register</span>
                <span>
                  <FaLongArrowAltRight className="mt-0.5 h-4" />
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-20 justify-center items-center w-svw py-3 md:hidden flex gap-9">
        <div className="mr-7 w-auto -ml-4">
          <img src="nexcent-logo.png" alt="Nexcent logo" className="scale-50" />
        </div>
        <div>
          <div class="dropdown">
            <button class="dropbtn">
              <IoMdArrowDropdown />
            </button>
            <div class="dropdown-content">
              <a href="/">Home</a>
              <a href="/">Features</a>
              <a href="/">Community</a>
              <a href="/">Block</a>
              <a href="/">Pricing</a>
              <a href="/" className="flex bg-green-600 hover:text-white rounded-md  justify-center items-center" id="button">
                Register Now{" "}
                <span className="absolute top-[14.70rem] right-[1rem]">
                  <FaLongArrowAltRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
