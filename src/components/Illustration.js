import React from "react";

const Illustration = () => {
  return (
    <div className="mt-2">
      <div className="w-full h-[600px] bg-neutral-200/40">
        <div className="pl-36 pr-2 py-28 w-full">
          <div className="flex h-[400px]">
            <div className="pr-36 pl-11 flex flex-col gap-5 justify-start items-start pt-10">
              <h1 className="text-[4rem] font-semibold leading-[70px] text-[#504c4c] flex flex-col gap-0 font-sans">
                Lessons and insights{" "}
                <span className="text-[#50ac4c]">from 8 years</span>
              </h1>
              <p className="text-base leading-5 font-normal">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="bg-green-600 mt-4 rounded-md lg:py-4 lg:px-9 md:py-2 md:px-4 text-white hover:bg-green-700 flex items-center justify-center gap-3 transition">
                Register
              </button>
            </div>
            <div className="justify-center items-center w-[400px]">
                <img src="Illustration.png" alt="Illustration" className="w-[1000px] h-full mb-3"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Illustration;
