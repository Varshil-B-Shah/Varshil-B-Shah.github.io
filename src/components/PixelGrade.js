import React from "react";

const PixelGrade = () => {
  return (
    <div className="mt-7 w-full pb-5">
      <div className="lg:py-6 lg:px-28 md:px-0">
        <div className="flex lg:pl-[5.25rem] md:gap-0 lg:gap-5 md:flex-row flex-col">
          <div className="flex items-center justify-center h-auto w-auto">
            <div className="md:h-full md:w-full flex items-center justify-center">
              <img
                src="rafiki.png"
                alt="rafiki"
                className="lg:h-[300px] lg:w-[450px] md:h-[250px] md:w-[470px]"
              />
            </div>
          </div>
          <div className="flex flex-col md:gap-5 gap-3 pt-6 md:justify-start md:items-start md:text-start justify-center text-center mt-2">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-[#484545] lg:w-[500px] md:w-[400px] md:leading-[42px] leading-[30px] md:px-0 px-6">
              The unseen of spending three years at Pixelgrade
            </h1>
            <p className="lg:w-[550px] md:w-[400px] md:ml-0 ml-4 lg:text-sm md:text-[0.8rem] text-[0.65rem] text-gray-500 px-20 md:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="bg-[#50ac4c] text-sm md:text-base lg:mt-4 md:mt-3 mt-3 rounded-[0.3rem] lg:py-3 lg:px-7 md:py-2 py-2 md:px-4 px-2 md:mx-0 mx-28 text-white hover:bg-green-700 flex items-center justify-center transition">
                Learn More
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelGrade;
