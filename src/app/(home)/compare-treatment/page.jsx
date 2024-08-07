import Image from "next/image";
import React from "react";
const Add = () => {
  return (
    <svg
      className="w-8 h-8 p-2 text-darkMahron border-2 border-darkMahron rounded-lg mb-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 4v16m8-8H4"
      ></path>
    </svg>
  );
};
const CompareTreatments = () => {
  return (
    <div className="flex flex-col items-center px-3 md:px-8 py-10 ">
      
      <div className="text-center text-darkMahron pb-5">
        <h2 className="text-4xl md:text-6xl font-normal font-raleway">Treatments </h2>
        <p className="m-2 text-sm md:text-lg font-light font-raleway">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
          faucibus.
        </p>
      </div>
      <div className="grid grid-cols-2 md:gap-8 w-full max-w-4xl h-full">
        <div className="flex flex-col items-center pr-2 md:pr-4 border-r-2 border-gray-200 col-span-1 h-full">
          <div className="w-[100%] h-[25%] md:p-4 rounded-lg">
            <Image
              width={300}
              height={300}
              src="/images/home/tranding-3.png"
              alt="Chemical Peels"
              className="w-full h-full object-cover rounded-lg mb-2"
            />
            <h2 className="text-lg md:text-3xl font-medium text-darkMahron font-raleway text-left">
              Chemical Peels
            </h2>
          </div>
          <div className="mt-20 md:mt-14 w-full h-[80%] p-3 border-2 border-darkMahron rounded-lg max-h-[300px] md:max-h-96">
            <h3 className="font-semibold text-darkMahron font-raleway text-lg">Description</h3>
            <p className="text-[10px] md:text-lg font-raleway mt-5 text-darkMahron">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              nibh faucibus. Lorem ipsum dolor sit amet, consectetur elit. Ut ut
              nibh faucibus. Lorem ipsum dolor sit amet, consectetur elit. Ut ut
              nibh faucibus. Lorem ipsum dolor sit amet, consectetur elit. Ut ut
              nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              nibh faucibus. 
            </p>
          </div>
        </div>

        <div className="col-span-1 pl-2  md:pl-4  flex flex-col items-center justify-start rounded-lg">
          <div className="flex flex-col justify-center items-center text-center rounded-lg bg-gray-200 h-[25%] w-full border-2 border-darkMahron">
            <div className="mb-2">
              <Add />
            </div>
            <p className="text-sm md:ext-base font-raleway font-thin text-darkMahron">
              Select Treatment to compare
            </p>
          </div>
        </div>
      </div>

      <button className="mt-8 px-6 py-2 font-raleway bg-darkMahron text-white text-lg font-semibold rounded-full">
        Next
      </button>
      
    </div>
  );
};

export default CompareTreatments;
