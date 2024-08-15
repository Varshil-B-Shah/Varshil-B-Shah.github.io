import React from "react";
import { GoArrowRight } from "react-icons/go";

const Marketing = () => {
  return (
    <div className="w-full mt-5 md:mt-14">
      <div className="flex items-center justify-center gap-2 flex-col">
        <h2 className="text-[#545454] md:text-4xl text-xl md:w-[550px] w-[300px] font-semibold text-center leading-[20px] md:leading-[45px]">
          Caring is the new marketing
        </h2>
        <p className="text-gray-500 md:text-base text-xs text-center md:w-[600px] w-[350px]">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
      </div>
      <div className="lg:mt-4 py-2 mt-5 md:px-3 lg:px-36 flex justify-center items-center">
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-5 gap-0">
          <div>
            <img
              src="Marketing1.png"
              alt="Marketing 1"
              className="lg:w-[380px] md:w-[300px] md:h-[250px] h-[200px] w-[300px]"
            />
            <div className="lg:w-[350px] md:w-[200px] w-[250px] h-[120px] md:h-[125px] lg:h-auto group relative overflow-hidden cursor-pointer md:-top-[5.3rem] md:left-[0.857rem] -top-[4.5rem] left-[1.5rem] z-10 border-[1px] border-gray-100 bg-[#f6f3f8] rounded-lg shadow-md hover:shadow-xl md:px-4 px-2 lg:pt-3 md:pt-3 py-2 lg:pb-5 md:pb-5 pb-3 mr-1 flex items-center justify-center flex-col lg:gap-2 gap-1 lg:overflow-hidden hover:scale-105 transition-all">
              <h2 className="lg:text-xl md:text-[1rem] text-[0.9rem] font-semibold text-[#848484] text-center lg:w-[300px] md:w-[200px]">
                Creating Streamlined Safeguarding Processes with OneRen
              </h2>
              <p className="text-center text-[#58b45c] flex gap-1 font-semibold lg:text-2xl md:text-[1rem] text-[0.9rem] lg:left-0 lg:right-0 md:right-3 right-1 relative group-hover:translate-x-64 cursor-pointer transition-all duration-500">
                <span className="relative top-[0.35rem] lg:right-48 md:right-[12.55rem] right-52">
                  <GoArrowRight />
                </span>
                Readmore{" "}
                <span className="relative top-[0.35rem]">
                  <GoArrowRight />
                </span>
              </p>
            </div>
          </div>
          <div>
            <img
              src="Marketing2.png"
              alt="Marketing 2"
              className="lg:w-[380px] md:w-[300px] md:h-[250px] h-[200px] w-[300px]"
            />
            <div className="lg:w-[350px] md:h-[125px] w-[250px] h-[120px] lg:h-auto group relative overflow-hidden cursor-pointer md:-top-[5.3rem] md:left-[0.857rem] -top-[4.5rem] left-[1.5rem] md:w-[200px] z-10 border-[1px] border-gray-100 bg-[#f6f3f8] rounded-lg shadow-md hover:shadow-xl md:px-4 px-2 lg:pt-3 md:pt-3 py-2 lg:pb-5 md:pb-5 pb-3 mr-1 flex items-center justify-center flex-col lg:gap-2 gap-1 lg:overflow-hidden hover:scale-105 transition-all">
              <h2 className="lg:text-xl md:text-[0.9rem] text-[0.87rem] font-semibold text-[#848484] text-center lg:w-[300px] md:w-[200px] md:pt-3 lg:pt-0">
                What are your safeguarding responsibilities and how can you
                manage them?
              </h2>
              <p className="text-center text-[#58b45c] flex gap-1 font-semibold lg:text-2xl md:text-[1rem] text-[0.9rem] lg:left-0 lg:right-0 md:right-3 right-1 relative group-hover:translate-x-64 cursor-pointer transition-all duration-500">
                <span className="relative top-[0.35rem] lg:right-48 md:right-[12.55rem] right-52">
                  <GoArrowRight />
                </span>
                Readmore{" "}
                <span className="relative top-[0.35rem]">
                  <GoArrowRight />
                </span>
              </p>
            </div>
          </div>
          <div>
            <img
              src="Marketing3.png"
              alt="Marketing 3"
              className="lg:w-[380px] md:w-[300px] md:h-[250px] h-[200px] w-[300px]"
            />
            <div className="lg:w-[350px] md:h-[125px] w-[250px] h-[120px] lg:h-[157px] group relative overflow-hidden cursor-pointer md:-top-[5.3rem] md:left-[0.857rem] -top-[4.5rem] left-[1.5rem] md:w-[200px] z-10 border-[1px] border-gray-100 bg-[#f6f3f8] rounded-lg shadow-md hover:shadow-xl md:px-4 px-2 lg:pt-0 md:pt-3 py-2 lg:pb-5 md:pb-5 pb-3 mr-1 flex items-center justify-center flex-col lg:gap-2 gap-1 lg:overflow-hidden hover:scale-105 transition-all">
              <h2 className="lg:text-xl md:text-[1rem] text-[0.9rem] font-semibold text-[#848484] text-center lg:w-[270px] md:w-[200px]">
                Revamping the Membership Model with Triathlon Australia
              </h2>
              <p className="text-center text-[#58b45c] flex gap-1 font-semibold lg:text-2xl md:text-[1rem] text-[0.9rem] lg:left-0 lg:right-0 md:right-3 right-1 relative group-hover:translate-x-64 cursor-pointer transition-all duration-500">
                <span className="relative top-[0.35rem] lg:right-48 md:right-[12.55rem] right-52">
                  <GoArrowRight />
                </span>
                Readmore{" "}
                <span className="relative top-[0.35rem]">
                  <GoArrowRight />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
