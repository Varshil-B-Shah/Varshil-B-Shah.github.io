import React from "react";
import { LuDribbble } from "react-icons/lu";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-[#253138] text-[#949494] py-10 sm:py-16 font-titleFont w-svw">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-8 md:gap-4">
        <div className="flex flex-col gap-8 items-center sm:items-start md:ml-2">
          <img
            src="logofooter.svg"
            alt="Nexcent Logo"
            className="lg:object-contain md:scale-90"
          />
          <div className="flex flex-col gap-1 md:pl-3">
            <p className="text-gray-300 text-sm tracking-wide text-center sm:text-left">
              Copyright © 2020 Nexcent ltd.
            </p>
            <p className="text-gray-300 text-sm tracking-wide text-center sm:text-left">
              All rights reserved
            </p>
          </div>
          <div className="flex justify-center sm:justify-start gap-2 text-lg text-gray-400 md:pl-3">
            <FaInstagram className="text-white hover:text-gray-900 duration-300 cursor-pointer bg-gray-600/55 hover:bg-gray-600 rounded-full px-[4px] py-[7px] h-[30px] w-[30px]" />
            <LuDribbble className="text-white hover:text-gray-900 duration-300 cursor-pointer bg-gray-600/55 hover:bg-gray-600 rounded-full px-[4px] py-[7px] h-[30px] w-[30px]" />
            <FaTwitter className="text-white hover:text-gray-900 duration-300 cursor-pointer bg-gray-600/55 hover:bg-gray-600 rounded-full px-[4px] py-[7px] h-[30px] w-[30px]" />
            <FaYoutube className="text-white hover:text-gray-900 duration-300 cursor-pointer bg-gray-600/55 hover:bg-gray-600 rounded-full px-[4px] py-[7px] h-[30px] w-[30px]" />
          </div>
        </div>
        <div className="mt-8 sm:mt-0 lg:ml-48 md:ml-11 md:text-start text-center justify-center">
          <h2 className="text-xl font-semibold text-white mb-6">Company</h2>
          <div className="text-base text-gray-300 flex flex-col gap-2">
            <p className="cursor-pointer hover:text-white duration-300 transition hover:underline hover:underline-offset-2">
              About Us
            </p>
            <p className="cursor-pointer hover:text-white duration-300 transition hover:underline hover:underline-offset-2">
              Blog
            </p>
            <p className="cursor-pointer hover:text-white duration-300 transition hover:underline hover:underline-offset-2">
              Contact Us
            </p>
            <p className="cursor-pointer hover:text-white duration-300 transition hover:underline hover:underline-offset-2">
              Pricing
            </p>
            <p className="cursor-pointer hover:text-white duration-300 transition hover:underline hover:underline-offset-2">
              Testimonials
            </p>
          </div>
        </div>
        <div className="mt-8 sm:mt-0 lg:ml-20 md:ml-5 md:text-start text-center justify-center">
          <h2 className="text-xl font-semibold text-white mb-6">Support</h2>
          <div className="text-base text-gray-300 flex flex-col gap-2">
            <p className="cursor-pointer hover:text-white duration-300 transition hover:underline hover:underline-offset-2">
              Help Center
            </p>
            <p className="cursor-pointer hover:text-white duration-300 transition hover:underline hover:underline-offset-2">
              Terms of service
            </p>
            <p className="cursor-pointer hover:text-white duration-300 transition hover:underline hover:underline-offset-2">
              Legal
            </p>
            <p className="cursor-pointer hover:text-white duration-300 transition hover:underline hover:underline-offset-2">
              Privacy policy
            </p>
            <p className="cursor-pointer hover:text-white duration-300 transition hover:underline hover:underline-offset-2">
              Status
            </p>
          </div>
        </div>
        <div className="mt-8 sm:mt-0 md:text-start text-center justify-center">
          <h2 className="text-xl font-semibold text-white mb-6">
            Stay up to date
          </h2>
          <div className="flex gap-0 items-center justify-center md:mr-7 lg:mr-0">
            <input
              placeholder="Your email address"
              className="p-2 bg-[#585c64] md:ml-5 ml-5 lg:ml-0 lg:mr-10 md:mr-0 rounded-md lg:w-[250px] md:w-[170px] focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-0"
            />
            <p className="text-white relative z-10 right-5 md:top-[0.2rem] lg:right-16 lg:bottom-3 hover:text-neutral-300 transition duration-300 cursor-pointer">
              <FiSend />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
