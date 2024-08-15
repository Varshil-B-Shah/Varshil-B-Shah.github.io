import React from "react";

const Illustration = () => {
  return (
    <div className="mt-2 w-full">
      <div className="w-full lg:h-[600px] md:h-[500px] h-[300px] bg-neutral-200/40">
        <div className="lg:pl-36 lg:pr-2 lg:py-28 md:pl-15 pl-7 py-6 pr-3 md:py-14 md:pr-10 w-full">
          <div className="flex md:h-[400px] h-[250px]">
            <div className="lg:pr-36 lg:pl-11 md:pr-7 pr-3 md:gap-6 gap-0 md:pt-14 pt-2 md:ml-5 ml-2 flex flex-col lg:gap-5 justify-start items-start lg:pt-10">
              <h1 className="lg:text-[4rem] md:text-[2.5rem] text-[1.5rem] font-semibold lg:leading-[70px] md:leading-[50px] text-[#504c4c] flex flex-col font-sans">
                Lessons and insights{" "}
                <span className="text-[#50ac4c]">from 8 years</span>
              </h1>
              <p className="md:text-base text-xs leading-5 font-normal">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="bg-green-600 text-sm md:text-base md:mt-4 mt-2 rounded-md lg:py-4 lg:px-9 md:py-2 py-2 md:px-4 px-2 text-white hover:bg-green-700 flex items-center justify-center transition duration-300">
                Register
              </button>
            </div>
            <div className="justify-center items-center w-[400px]">
                <img src="Illustration.png" alt="Illustration" className="w-full scale-[0.65] md:scale-[0.9] lg:scale-100 h-full"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Illustration;
