import React from "react";

const Communities = () => {
  return (
    <div className="w-full mt-5 md:mt-10">
      <div className="flex items-center justify-center gap-2 flex-col">
        <h2 className="text-gray-800 md:text-4xl text-xl md:w-[550px] w-[300px] font-semibold text-center leading-[20px] md:leading-[45px]">
          Manage your entire community in a single system
        </h2>
        <p className="text-gray-600 md:text-base text-xs">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="lg:mt-8 mt-5 md:px-3 lg:px-36 flex md:block justify-center md:justify-around items-center">
        <div className="flex justify-around items-center md:my-3 md:py-3 overflow-hidden md:flex-row flex-col md:gap-3 lg:gap-0 gap-4 md:w-auto w-[250px]">
          <div className="lg:w-[290px] md:w-[250px] border-[1px] border-gray-100 rounded-lg shadow-md hover:shadow-xl lg:px-6 md:px-4 px-2 lg:pt-6 md:pt-3 py-2 lg:pb-5 md:pb-5 pb-3 md:mr-2 mr-1 flex items-center justify-center flex-col gap-2 lg:overflow-hidden hover:scale-105 duration-300 transition-all">
            <img src="Icon1.png" alt="Icon 1" className="lg:h-[3rem] lg:w-14 md:scale-100 scale-75" />
            <h2 className="md:mt-2 mt-0 font-bold lg:text-[28px] md:text-[20px] text-[15px] lg:leading-[35px] md:leading-[25px] leading-[20px] text-center text-[#393838]">
              Membership Organisations
            </h2>
            <p className="text-center lg:text-sm md:text-xs text-[0.55rem] text-gray-500">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="lg:w-[290px] md:w-[250px] md:h-[190px] lg:h-auto border-[1px] border-gray-100 rounded-lg shadow-md hover:shadow-xl lg:px-6 md:px-4 px-2 lg:pt-6 md:pt-3 py-2 lg:pb-5 md:pb-5 pb-3 md:mr-2 mr-1 flex items-center justify-center flex-col gap-2 lg:overflow-hidden hover:scale-105 duration-300 transition-all">
            <img src="Icon2.png" alt="Icon 2" className="lg:h-[3rem] lg:w-14 md:scale-100 scale-75" />
            <h2 className="md:mt-2 mt-0 font-bold lg:text-[28px] md:text-[20px] text-[15px] lg:leading-[35px] md:leading-[25px] leading-[20px] text-center text-[#393838]">
              National Associations
            </h2>
            <p className="text-center lg:text-sm md:text-xs text-[0.55rem] text-gray-500">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="lg:w-[290px] md:w-[250px] border-[1px] border-gray-100 rounded-lg shadow-md hover:shadow-xl lg:px-6 md:px-4 px-2 lg:pt-6 md:pt-3 py-2 lg:pb-5 md:pb-5 pb-3 md:mr-2 mr-1 flex items-center justify-center flex-col gap-2 lg:overflow-hidden hover:scale-105 duration-300 transition-all">
            <img src="Icon3.png" alt="Icon 3" className="lg:h-[3rem] lg:w-14 md:scale-100 scale-75" />
            <h2 className="md:mt-2 mt-0 font-bold md:w-[150px] w-[100px] lg:text-[28px] md:text-[20px] text-[15px] lg:leading-[35px] md:leading-[25px] leading-[20px] text-center text-[#393838]">
              Clubs And Groups
            </h2>
            <p className="text-center lg:text-sm md:text-xs text-[0.55rem] text-gray-500">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communities;
